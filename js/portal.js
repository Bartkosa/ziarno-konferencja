/* Portal uczestnika: logowanie linkiem, przegląd, warsztaty, program dodatkowy, dane, networking. */
(function () {
  "use strict";
  var C = window.KONF, P = C.portal || {}, api = window.PortalApi;
  var LS_LANG = "nwow-lang", lang = "pl", T, S, me = null, sessions = [], picks = [];
  var app = document.getElementById("app");

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function tpl(s, v) { return String(s).replace(/\{\{(\w+)\}\}/g, function (_, k) { return v[k] != null ? v[k] : ""; }); }
  function contactLink() { return '<a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a>"; }
  function fmtDate(iso) { try { return new Date(iso + "T12:00:00").toLocaleDateString(lang === "pl" ? "pl-PL" : "en-GB", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return iso; } }
  function deadlinePassed() { return P.workshopsDeadline && new Date() > new Date(P.workshopsDeadline + "T23:59:59"); }
  var ICON = { overview: '<path d="M3 12 12 4l9 8M5 10v10h14V10"/>', workshops: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>', options: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>', profile: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', networking: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>', info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>' };
  function icon(n) { return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + "</svg>"; }

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang"); if (q && window.PORTAL_CONTENT[q]) return q;
    try { var s = localStorage.getItem(LS_LANG); if (s && window.PORTAL_CONTENT[s]) return s; } catch (e) {}
    if (me && me.lang && window.PORTAL_CONTENT[me.lang]) return me.lang;
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) { var c = String(langs[i]).slice(0, 2).toLowerCase(); if (window.PORTAL_CONTENT[c]) return c; }
    return "pl";
  }
  function setLang(l) {
    lang = l; T = window.PORTAL_CONTENT[l]; S = window.CONTENT[l]; document.documentElement.lang = l; document.title = T.title + " — " + S.hero.title + " 2027";
    try { localStorage.setItem(LS_LANG, l); } catch (e) {}
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === l)); });
    var lo = document.getElementById("logout"); lo.textContent = T.nav.logout; lo.hidden = !me;
    document.getElementById("brand").innerHTML = (C.logoZiarno ? '<img src="' + esc(C.logoZiarno) + '" alt="Ziarno">' : "") + '<span class="brand-title">' + esc(T.title) + "</span>";
    document.getElementById("portal-footer").innerHTML = esc(S.hero.title) + ' 2027 · <a href="../">' + esc(T.common.back.replace("← ", "")) + "</a> · " + contactLink();
    render();
  }

  // ------------------------------------------------------------ views
  function view() { var h = (location.hash || "#overview").slice(1); return T.nav[h] ? h : "overview"; }
  function render() {
    if (!me) return renderLogin();
    var nav = Object.keys(T.nav).filter(function (k) { return k !== "logout"; }).map(function (k) { return '<a href="#' + k + '" class="' + (view() === k ? "active" : "") + '">' + icon(k) + esc(T.nav[k]) + "</a>"; }).join("");
    app.innerHTML = '<div class="dash"><nav class="side" aria-label="Sekcje">' + nav + '</nav><section class="panel" id="panel"></section></div>';
    ({ overview: vOverview, workshops: vWorkshops, options: vOptions, profile: vProfile, networking: vNetworking, info: vInfo })[view()]();
  }
  function panel(html) { document.getElementById("panel").innerHTML = html; }
  function flash(kind, text) { var m = document.getElementById("flash"); if (!m) return; m.className = "msg " + kind; m.textContent = text; m.hidden = false; setTimeout(function () { m.hidden = true; }, 2500); }

  function renderLogin(state) {
    state = state || {};
    var dev = api.mode === "mock" ? '<div class="dev">' + esc(tpl(T.login.devHint, { emails: (window.TEST_DATA ? window.TEST_DATA.participants.slice(0, 3).map(function (p) { return p.email; }).join(", ") : "") })) + (state.devLink ? '<br><a class="btn btn-sm" href="' + esc(state.devLink) + '">' + esc(T.login.devOpen) + "</a>" : "") + "</div>" : "";
    if (state.sent) {
      app.innerHTML = '<div class="login"><h1>' + esc(T.login.sentTitle) + '</h1><p class="lead">' + esc(tpl(T.login.sentLead, { email: state.email })) + "</p>" + dev + "</div>";
      return;
    }
    app.innerHTML = '<div class="login"><h1>' + esc(T.login.title) + '</h1><p class="lead">' + esc(T.login.lead) + '</p>' +
      (state.error ? '<div class="msg err">' + tpl(esc(T.login.notFound), { contact: contactLink() }) + "</div>" : "") +
      '<form id="login-form"><label for="email">' + esc(T.login.email) + '</label><input id="email" type="email" required autocomplete="email" value="' + esc(state.email || "") + '"><button class="btn" type="submit">' + esc(T.login.send) + "</button></form>" +
      '<p class="alt">' + esc(T.login.notRegistered) + ' <a href="../#register">' + esc(T.login.register) + "</a></p>" + dev + "</div>";
    document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault(); var email = document.getElementById("email").value; var btn = e.target.querySelector("button"); btn.textContent = T.login.sending; btn.disabled = true;
      api.requestLink(email).then(function (r) { if (r.ok) renderLogin({ sent: true, email: email, devLink: r.devLink }); else renderLogin({ error: true, email: email }); });
    });
  }

  function vOverview() {
    var pk = T.packages[me.package] || me.package, full = me.package === "full";
    var picked = picks.length, tasks = [
      { k: "pay", done: !!me.paid, href: "#info" },
      full ? { k: "workshops", done: picked >= 3, href: "#workshops" } : null,
      full ? { k: "options", done: Object.keys(me.options || {}).some(function (k) { return me.options[k]; }), href: "#options" } : null,
      { k: "diet", done: me.diet != null && me.diet !== "" || me._dietChecked, href: "#profile" },
      { k: "networking", done: !!me.networking_consent, href: "#profile" },
    ].filter(Boolean);
    panel('<h2>' + esc(tpl(T.overview.hello, { name: me.first_name })) + '</h2><p class="lead">' + esc(T.overview.lead) + "</p>" +
      '<div class="stats"><div class="stat"><div class="l">' + esc(T.overview.packageLabel) + '</div><div class="v">' + esc(pk) + "</div></div>" +
      '<div class="stat"><div class="l">' + esc(T.overview.statusLabel) + '</div><div class="v ' + (me.paid ? "ok" : "bad") + '">' + esc(me.paid ? T.overview.paid : T.overview.unpaid) + "</div></div>" +
      '<div class="stat"><div class="l">' + esc(T.overview.workshopsLabel) + '</div><div class="v">' + esc(!full ? T.overview.workshopsNA : picked ? tpl(T.overview.workshopsPicked, { n: picked }) : T.overview.workshopsNone) + "</div></div></div>" +
      (!me.paid ? '<div class="msg warn">' + esc(T.overview.unpaidHint) + "</div>" : "") +
      "<h3>" + esc(T.overview.todo) + '</h3><ul class="tasks">' + tasks.map(function (t) { return '<li class="' + (t.done ? "done" : "") + '"><span class="chk"></span><span>' + esc(T.overview.tasks[t.k]) + '</span><a href="' + t.href + '">→</a></li>'; }).join("") + "</ul>" +
      (full && P.workshopsDeadline ? '<p class="hint" style="color:var(--muted);font-size:14px;margin-top:14px">' + esc(tpl(T.overview.deadline, { date: fmtDate(P.workshopsDeadline) })) + "</p>" : "") +
      '<div class="row-actions"><a class="btn btn-outline btn-sm" href="../#program">' + esc(T.overview.program) + "</a></div>");
  }

  function vWorkshops() {
    var full = me.package === "full", locked = deadlinePassed();
    var head = "<h2>" + esc(T.workshops.title) + '</h2><p class="lead">' + esc(tpl(T.workshops.lead, { date: fmtDate(P.workshopsDeadline) })) + '</p><div class="msg ok" id="flash" hidden></div>';
    if (!full) return panel(head + '<div class="msg warn">' + tpl(esc(T.workshops.notInPackage), { contact: contactLink() }) + "</div>");
    if (locked) head += '<div class="msg warn">' + tpl(esc(T.workshops.deadlinePassed), { contact: contactLink() }) + "</div>";
    var blocks = [1, 2, 3].map(function (b) {
      var list = sessions.filter(function (s) { return s.block === b; }).map(function (s) {
        var chosen = picks.indexOf(s.id) > -1, left = s.capacity - s.taken, isFull = left <= 0 && !chosen;
        var btn = locked ? "" : chosen ? '<button class="btn btn-outline" data-unpick="' + esc(s.id) + '">' + esc(T.workshops.remove) + "</button>" : isFull ? '<button class="btn is-disabled" disabled>' + esc(T.workshops.full) + "</button>" : '<button class="btn" data-pick="' + esc(s.id) + '">' + esc(T.workshops.choose) + "</button>";
        return '<div class="s' + (chosen ? " chosen" : "") + (isFull ? " full" : "") + '"><div class="t">' + esc(s.title) + '</div><div class="m">' + esc(s.speaker) + ' · <span class="tag">' + esc(s.lang) + "</span>" + (s.room ? " · " + esc(s.room) : "") + '</div><div class="seats' + (left <= 3 ? " low" : "") + '">' + esc(chosen ? T.workshops.chosen : left > 0 ? tpl(T.workshops.seatsLeft, { n: left }) : T.workshops.full) + "</div>" + btn + "</div>";
      }).join("");
      return '<div class="blk"><h3>' + esc(T.blocks[b]) + '</h3><div class="sess">' + list + "</div></div>";
    }).join("");
    panel(head + blocks);
    document.getElementById("panel").addEventListener("click", function (e) {
      var b = e.target.closest("[data-pick],[data-unpick]"); if (!b) return;
      var id = b.getAttribute("data-pick") || b.getAttribute("data-unpick"), fn = b.hasAttribute("data-pick") ? api.pickSession : api.unpickSession;
      b.disabled = true;
      fn(id).then(function (r) { if (!r.ok) { alert(r.error === "full" ? T.workshops.errFull : T.common.error); } return reload(); }).then(function () { vWorkshops(); flash("ok", T.workshops.saved); });
    });
  }

  function vOptions() {
    var full = me.package === "full";
    var head = "<h2>" + esc(T.options.title) + '</h2><p class="lead">' + esc(T.options.lead) + '</p><div class="msg ok" id="flash" hidden></div>';
    if (!full) return panel(head + '<div class="msg warn">' + tpl(esc(T.options.conferenceOnly), { contact: contactLink() }) + "</div>");
    var items = Object.keys(T.options.items).map(function (k) { var it = T.options.items[k]; return '<label class="check"><input type="checkbox" name="' + k + '"' + (me.options && me.options[k] ? " checked" : "") + '><span><strong>' + esc(it.label) + "</strong>" + (it.hint ? '<div class="hint">' + esc(it.hint) + "</div>" : "") + "</span></label>"; }).join("");
    panel(head + '<form class="form" id="opt-form">' + items + '<div><button class="btn" type="submit">' + esc(T.options.save) + "</button></div></form>");
    document.getElementById("opt-form").addEventListener("submit", function (e) {
      e.preventDefault(); var o = {}; e.target.querySelectorAll("input[type=checkbox]").forEach(function (i) { o[i.name] = i.checked; });
      api.updateMe({ options: o }).then(function (p) { me = p; flash("ok", T.options.saved); });
    });
  }

  function vProfile() {
    var f = T.profile;
    panel("<h2>" + esc(f.title) + '</h2><p class="lead">' + esc(f.lead) + '</p><div class="msg ok" id="flash" hidden></div>' +
      '<form class="form" id="prof-form">' +
      "<div><label>" + esc(f.email) + '</label><input type="email" value="' + esc(me.email) + '" disabled></div>' +
      "<div><label>" + esc(f.org) + '</label><input type="text" name="org" value="' + esc(me.org || "") + '"></div>' +
      "<div><label>" + esc(f.role) + '</label><input type="text" name="role" value="' + esc(me.role || "") + '"></div>' +
      "<div><label>" + esc(f.country) + '</label><input type="text" name="country" value="' + esc(me.country || "") + '" maxlength="2" style="max-width:120px"></div>' +
      "<div><label>" + esc(f.diet) + '</label><textarea name="diet">' + esc(me.diet || "") + '</textarea><div class="hint">' + esc(f.dietHint) + "</div></div>" +
      "<div><label>" + esc(f.lang) + '</label><select name="lang"><option value="pl"' + (me.lang === "pl" ? " selected" : "") + '>Polski</option><option value="en"' + (me.lang === "en" ? " selected" : "") + ">English</option></select></div>" +
      '<label class="check"><input type="checkbox" name="networking_consent"' + (me.networking_consent ? " checked" : "") + "><span><strong>" + esc(f.networking) + '</strong><div class="hint">' + esc(f.networkingHint) + "</div></span></label>" +
      '<div><button class="btn" type="submit">' + esc(f.save) + "</button></div></form>");
    document.getElementById("prof-form").addEventListener("submit", function (e) {
      e.preventDefault(); var fd = new FormData(e.target);
      api.updateMe({ org: fd.get("org"), role: fd.get("role"), country: String(fd.get("country") || "").toUpperCase(), diet: fd.get("diet"), lang: fd.get("lang"), networking_consent: fd.get("networking_consent") === "on" }).then(function (p) { me = p; me._dietChecked = true; flash("ok", f.saved); });
    });
  }

  function vNetworking() {
    var n = T.networking;
    panel("<h2>" + esc(n.title) + '</h2><p class="lead">' + esc(n.lead) + "</p>" + (!me.networking_consent ? '<div class="msg warn">' + esc(n.noConsent) + "</div>" : "") + '<input class="search" id="q" placeholder="' + esc(n.search) + '"><p class="hint" id="cnt" style="color:var(--muted);font-size:13px"></p><div class="people" id="people"></div>');
    api.getNetworking().then(function (list) {
      function draw(q) {
        q = (q || "").toLowerCase();
        var rows = list.filter(function (p) { return !q || (p.first_name + " " + p.last_name + " " + p.org + " " + p.country + " " + p.role).toLowerCase().indexOf(q) > -1; });
        var cntEl = document.getElementById("cnt"), peopleEl = document.getElementById("people"); if (!cntEl || !peopleEl) return;
        cntEl.textContent = tpl(n.count, { n: rows.length });
        peopleEl.innerHTML = rows.map(function (p) { return '<div class="person"><div class="avatar">' + esc((p.first_name[0] || "") + (p.last_name[0] || "")) + '</div><div><div class="n">' + esc(p.first_name + " " + p.last_name) + '</div><div class="m">' + esc([p.role, p.org, p.country].filter(Boolean).join(" · ")) + '</div><a href="mailto:' + esc(p.email) + '">' + esc(p.email) + "</a></div></div>"; }).join("");
      }
      draw(""); var qEl = document.getElementById("q"); if (qEl) qEl.addEventListener("input", function (e) { draw(e.target.value); });
    });
  }

  function vInfo() {
    var i = T.info;
    panel("<h2>" + esc(i.title) + '</h2><p class="lead">' + esc(i.lead) + '</p><div class="row-actions" style="margin-top:0"><a class="btn" href="../#practical-info">' + esc(i.open) + '</a><a class="btn btn-outline" href="../#practical-info">' + esc(i.pay) + '</a><a class="btn btn-outline" href="../#faq">' + esc(i.faq) + '</a><a class="btn btn-outline" href="mailto:' + esc(C.contactEmail) + '">' + esc(i.contact) + "</a></div>");
  }

  // ------------------------------------------------------------ boot
  function reload() { return Promise.all([api.getSessions(), api.getMyPicks()]).then(function (r) { sessions = r[0]; picks = r[1]; }); }
  function boot() {
    api.sessionFromUrl().then(function (p) { return p || api.currentUser(); }).then(function (p) {
      me = p; return me ? reload() : null;
    }).then(function () { setLang(pickLang()); }).catch(function (e) { console.error(e); app.innerHTML = '<p class="portal-loading">' + esc((window.PORTAL_CONTENT[lang] || window.PORTAL_CONTENT.pl).common.error) + "</p>"; });
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
  document.getElementById("logout").addEventListener("click", function () { api.signOut().then(function () { me = null; picks = []; location.hash = ""; setLang(lang); }); });
  window.addEventListener("hashchange", render);
  boot();
})();
