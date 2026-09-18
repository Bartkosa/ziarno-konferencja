/* Warstwa danych portalu uczestnika.
   Dwa backendy o tym samym interfejsie:
   - MockApi     — dane testowe w localStorage (bez serwera), do rozwoju i demo
   - SupabaseApi — produkcja; wymaga KONF.portal.supabase.url + anonKey i schematu z supabase/schema.sql
   Interfejs (wszystko zwraca Promise):
     requestLink(email)            -> { ok, devLink? }
     sessionFromUrl()              -> participant | null   (obsługa magic-linku / tokenu)
     currentUser()                 -> participant | null
     signOut()
     getSessions()                 -> [{id, block, title, speaker, lang, room, capacity, taken}]
     getMyPicks()                  -> [sessionId]
     pickSession(sessionId)        -> { ok, error? }  (jedna sesja na blok, limit miejsc)
     unpickSession(sessionId)
     updateMe(patch)               -> participant     (diet, options, networking_consent, org, role, country)
     getNetworking()               -> [{first_name,last_name,org,role,country,email}]
     admin.list()                  -> [participant + picks]
     admin.update(id, patch)
*/
(function () {
  "use strict";
  var P = (window.KONF && window.KONF.portal) || {};
  var LS_DB = "nwow-mock-db", LS_SESSION = "nwow-mock-session";

  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function delay(v) { return new Promise(function (r) { setTimeout(function () { r(v); }, 120); }); }

  // ---------------------------------------------------------------- MOCK
  function MockApi() {
    var self = this;
    function load() {
      try { var raw = localStorage.getItem(LS_DB); if (raw) return JSON.parse(raw); } catch (e) {}
      var d = clone(window.TEST_DATA || { sessions: [], participants: [], picks: [] });
      save(d); return d;
    }
    function save(d) { try { localStorage.setItem(LS_DB, JSON.stringify(d)); } catch (e) {} }
    function db() { return self._db || (self._db = load()); }
    function me() { var id = null; try { id = localStorage.getItem(LS_SESSION); } catch (e) {} return db().participants.find(function (p) { return p.id === id; }) || null; }
    function counts() { var c = {}; db().picks.forEach(function (x) { c[x[1]] = (c[x[1]] || 0) + 1; }); return c; }

    this.mode = "mock";
    this.reset = function () { try { localStorage.removeItem(LS_DB); localStorage.removeItem(LS_SESSION); } catch (e) {} self._db = null; };
    this.requestLink = function (email) {
      var p = db().participants.find(function (x) { return x.email.toLowerCase() === String(email).trim().toLowerCase(); });
      if (!p) return delay({ ok: false, error: "not_found" });
      var url = location.pathname + "?token=" + encodeURIComponent(p.token);
      return delay({ ok: true, devLink: url });
    };
    this.sessionFromUrl = function () {
      var t = new URLSearchParams(location.search).get("token");
      if (!t) return delay(null);
      var p = db().participants.find(function (x) { return x.token === t; });
      if (p) { try { localStorage.setItem(LS_SESSION, p.id); } catch (e) {} }
      history.replaceState(null, "", location.pathname + location.hash);
      return delay(p ? clone(p) : null);
    };
    this.currentUser = function () { var p = me(); return delay(p ? clone(p) : null); };
    this.signOut = function () { try { localStorage.removeItem(LS_SESSION); } catch (e) {} return delay(true); };
    this.getSessions = function () { var c = counts(); return delay(db().sessions.map(function (s) { var o = clone(s); o.taken = c[s.id] || 0; return o; })); };
    this.getMyPicks = function () { var p = me(); if (!p) return delay([]); return delay(db().picks.filter(function (x) { return x[0] === p.id; }).map(function (x) { return x[1]; })); };
    this.pickSession = function (sid) {
      var p = me(); if (!p) return delay({ ok: false, error: "auth" });
      var d = db(), s = d.sessions.find(function (x) { return x.id === sid; }); if (!s) return delay({ ok: false, error: "no_session" });
      if (p.package !== "full") return delay({ ok: false, error: "package" });
      var taken = counts()[sid] || 0; if (taken >= s.capacity) return delay({ ok: false, error: "full" });
      d.picks = d.picks.filter(function (x) { if (x[0] !== p.id) return true; var os = d.sessions.find(function (y) { return y.id === x[1]; }); return !os || os.block !== s.block; });
      d.picks.push([p.id, sid]); save(d); return delay({ ok: true });
    };
    this.unpickSession = function (sid) { var p = me(); if (!p) return delay({ ok: false }); var d = db(); d.picks = d.picks.filter(function (x) { return !(x[0] === p.id && x[1] === sid); }); save(d); return delay({ ok: true }); };
    this.updateMe = function (patch) {
      var p = me(); if (!p) return delay(null);
      ["diet", "networking_consent", "org", "role", "country", "lang"].forEach(function (k) { if (k in patch) p[k] = patch[k]; });
      if (patch.options) p.options = Object.assign({}, p.options, patch.options);
      save(db()); return delay(clone(p));
    };
    this.getNetworking = function () { return delay(db().participants.filter(function (x) { return x.networking_consent; }).map(function (x) { return { first_name: x.first_name, last_name: x.last_name, org: x.org, role: x.role, country: x.country, email: x.email }; })); };
    this.admin = {
      list: function () { var d = db(); return delay(d.participants.map(function (p) { var o = clone(p); o.picks = d.picks.filter(function (x) { return x[0] === p.id; }).map(function (x) { return x[1]; }); return o; })); },
      update: function (id, patch) { var d = db(), p = d.participants.find(function (x) { return x.id === id; }); if (!p) return delay(null); Object.assign(p, patch); save(d); return delay(clone(p)); },
      sessions: function () { return self.getSessions(); },
    };
  }

  // ------------------------------------------------------------ SUPABASE
  // Wymaga <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> i schematu z supabase/schema.sql
  function SupabaseApi(cfg) {
    var self = this, sb = window.supabase.createClient(cfg.url, cfg.anonKey);
    this.mode = "supabase";
    function unwrap(r) { if (r.error) throw r.error; return r.data; }
    this.requestLink = function (email) {
      return sb.auth.signInWithOtp({ email: String(email).trim().toLowerCase(), options: { emailRedirectTo: cfg.redirectTo || location.href.split("?")[0] } })
        .then(function (r) { return r.error ? { ok: false, error: r.error.message } : { ok: true }; });
    };
    this.sessionFromUrl = function () { return sb.auth.getSession().then(function () { return self.currentUser(); }); };
    this.currentUser = function () {
      return sb.auth.getUser().then(function (r) {
        if (!r.data || !r.data.user) return null;
        return sb.from("participants").select("*").eq("email", r.data.user.email).maybeSingle().then(unwrap);
      });
    };
    this.signOut = function () { return sb.auth.signOut().then(function () { return true; }); };
    this.getSessions = function () { return sb.from("session_counts").select("*").order("block").then(unwrap); };
    this.getMyPicks = function () { return sb.from("session_picks").select("session_id").then(function (r) { return unwrap(r).map(function (x) { return x.session_id; }); }); };
    this.pickSession = function (sid) { return sb.rpc("pick_session", { p_session: sid }).then(function (r) { return r.error ? { ok: false, error: r.error.message } : { ok: true }; }); };
    this.unpickSession = function (sid) { return sb.from("session_picks").delete().eq("session_id", sid).then(function (r) { return { ok: !r.error }; }); };
    this.updateMe = function (patch) { return self.currentUser().then(function (me) { return sb.from("participants").update(patch).eq("id", me.id).select().single().then(unwrap); }); };
    this.getNetworking = function () { return sb.from("networking").select("*").order("last_name").then(unwrap); };
    this.admin = {
      list: function () { return sb.from("participants").select("*, session_picks(session_id)").order("last_name").then(function (r) { return unwrap(r).map(function (p) { p.picks = (p.session_picks || []).map(function (x) { return x.session_id; }); delete p.session_picks; return p; }); }); },
      update: function (id, patch) { return sb.from("participants").update(patch).eq("id", id).select().single().then(unwrap); },
      sessions: function () { return self.getSessions(); },
    };
  }

  window.PortalApi = (P.backend === "supabase" && P.supabase && P.supabase.url && window.supabase) ? new SupabaseApi(P.supabase) : new MockApi();
})();
