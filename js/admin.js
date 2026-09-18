/* Panel organizatora: lista uczestników, obłożenie warsztatów, catering, eksport CSV. */
(function () {
  "use strict";
  var C = window.KONF, api = window.PortalApi, app = document.getElementById("app");
  var lang = "pl", T, A, people = [], sessions = [], tab = "participants", filter = "all", q = "";
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function tpl(s, v) { return String(s).replace(/\{\{(\w+)\}\}/g, function (_, k) { return v[k] != null ? v[k] : ""; }); }

  function setLang(l) {
    lang = l; T = window.PORTAL_CONTENT[l]; A = T.admin; document.documentElement.lang = l; document.title = A.title;
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === l)); });
    document.getElementById("brand").innerHTML = (C.logoZiarno ? '<img src="' + esc(C.logoZiarno) + '" alt="Ziarno">' : "") + '<span class="brand-title">' + esc(A.title) + "</span>";
    var lo = document.getElementById("logout"); lo.textContent = T.nav.logout; lo.hidden = api.mode === "mock";
    render();
  }

  function pkgLabel(k) { return T.packages[k] || k; }
  function optLabels(o) { return Object.keys(o || {}).filter(function (k) { return o[k]; }).map(function (k) { return (T.options.items[k] || { label: k }).label.split(" · ")[1] || k; }); }
  function visible() {
    var qq = q.toLowerCase();
    return people.filter(function (p) {
      if (filter === "paid" && !p.paid) return false; if (filter === "unpaid" && p.paid) return false;
      if (filter === "full" && p.package !== "full") return false; if (filter === "conference" && p.package === "full") return false;
      return !qq || (p.first_name + " " + p.last_name + " " + p.email + " " + p.org + " " + p.country).toLowerCase().indexOf(qq) > -1;
    });
  }

  function render() {
    var counts = { total: people.length, paid: people.filter(function (p) { return p.paid; }).length, full: people.filter(function (p) { return p.package === "full"; }).length, diets: people.filter(function (p) { return p.diet; }).length };
    var stats = '<div class="stats">' + ["total", "paid", "full", "diets"].map(function (k) { return '<div class="stat"><div class="l">' + esc(A.counts[k]) + '</div><div class="v">' + counts[k] + "</div></div>"; }).join("") + "</div>";
    var tabs = '<div class="admin-tabs">' + ["participants", "sessions", "catering"].map(function (t) { return '<button data-tab="' + t + '" class="' + (tab === t ? "active" : "") + '">' + esc(A[t]) + "</button>"; }).join("") + '<button data-export="1">' + esc(A.export) + "</button></div>";
    app.innerHTML = "<h1>" + esc(A.title) + "</h1>" + (api.mode === "mock" ? '<div class="msg warn">Tryb testowy — dane przykładowe w przeglądarce. <a href="#" id="reset">Przywróć dane testowe</a></div>' : "") + stats + tabs + '<div class="panel" id="panel"></div>';
    ({ participants: vParticipants, sessions: vSessions, catering: vCatering })[tab]();
  }

  function vParticipants() {
    var c = A.cols;
    var rows = visible().map(function (p) {
      var picks = p.picks.map(function (id) { var s = sessions.find(function (x) { return x.id === id; }); return s ? "B" + s.block + ": " + s.speaker : id; }).join("<br>");
      return "<tr><td><strong>" + esc(p.last_name + " " + p.first_name) + "</strong><br><span style='color:var(--muted)'>" + esc(p.role || "") + "</span></td><td>" + esc(p.email) + "</td><td>" + esc(p.org || "") + "</td><td>" + esc(p.country || "") + "</td><td>" + esc(pkgLabel(p.package)) + '</td><td><span class="pill-sm ' + (p.paid ? "ok" : "bad") + '">' + esc(p.paid ? T.common.yes : T.common.no) + '</span><br><button class="btn btn-outline" data-paid="' + esc(p.id) + '" data-val="' + (p.paid ? "0" : "1") + '">' + esc(p.paid ? A.markUnpaid : A.markPaid) + "</button></td><td>" + (picks || A.noPicks) + "</td><td>" + esc(p.diet || "") + "</td><td>" + esc(optLabels(p.options).join(", ")) + "</td></tr>";
    }).join("");
    document.getElementById("panel").innerHTML = '<div class="toolbar"><select id="filter">' + Object.keys(A.filters).map(function (k) { return '<option value="' + k + '"' + (filter === k ? " selected" : "") + ">" + esc(A.filters[k]) + "</option>"; }).join("") + '</select><input id="q" placeholder="' + esc(T.networking.search) + '" value="' + esc(q) + '"><span style="color:var(--muted);font-size:13px">' + visible().length + " / " + people.length + '</span></div><div class="tbl-wrap"><table class="tbl"><thead><tr>' + ["name", "email", "org", "country", "package", "paid", "picks", "diet", "options"].map(function (k) { return "<th>" + esc(c[k]) + "</th>"; }).join("") + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
    document.getElementById("filter").addEventListener("change", function (e) { filter = e.target.value; vParticipants(); });
    document.getElementById("q").addEventListener("input", function (e) { q = e.target.value; vParticipants(); document.getElementById("q").focus(); var el = document.getElementById("q"); el.setSelectionRange(el.value.length, el.value.length); });
  }

  function vSessions() {
    var html = [1, 2, 3].map(function (b) {
      var list = sessions.filter(function (s) { return s.block === b; }).map(function (s) {
        var who = people.filter(function (p) { return p.picks.indexOf(s.id) > -1; }).map(function (p) { return esc(p.last_name + " " + p.first_name); });
        return '<div class="s"><div class="t">' + esc(s.title) + '</div><div class="m">' + esc(s.speaker) + " · " + esc(s.lang) + (s.room ? " · " + esc(s.room) : "") + '</div><div class="seats' + (s.taken >= s.capacity ? " low" : "") + '">' + esc(tpl(A.seats, { taken: s.taken, cap: s.capacity })) + '</div><div class="m">' + (who.join(", ") || A.noPicks) + "</div></div>";
      }).join("");
      return '<div class="blk"><h3>' + esc(T.blocks[b]) + '</h3><div class="sess">' + list + "</div></div>";
    }).join("");
    document.getElementById("panel").innerHTML = html;
  }

  function vCatering() {
    var keys = Object.keys(T.options.items);
    var rows = keys.map(function (k) { var n = people.filter(function (p) { return p.options && p.options[k]; }).length; return "<tr><td>" + esc(T.options.items[k].label) + "</td><td><strong>" + n + "</strong></td></tr>"; }).join("");
    var lunch = people.filter(function (p) { return p.package === "conference_lunch"; }).length, full = people.filter(function (p) { return p.package === "full"; }).length;
    var diets = people.filter(function (p) { return p.diet; }).map(function (p) { return "<tr><td>" + esc(p.last_name + " " + p.first_name) + "</td><td>" + esc(p.diet) + "</td></tr>"; }).join("");
    document.getElementById("panel").innerHTML = '<table class="tbl"><thead><tr><th>' + esc(A.catering) + "</th><th>#</th></tr></thead><tbody>" + rows + "<tr><td>Obiad UKSW (piątek): pełny pakiet + pakiet z obiadem</td><td><strong>" + (full + lunch) + '</strong></td></tr></tbody></table><h3 style="margin:26px 0 10px">' + esc(A.cols.diet) + '</h3><table class="tbl"><tbody>' + (diets || "<tr><td>—</td></tr>") + "</tbody></table>";
  }

  function exportCsv() {
    var head = ["last_name", "first_name", "email", "org", "role", "country", "package", "paid", "diet", "networking_consent", "options", "block1", "block2", "block3"];
    var lines = [head.join(";")].concat(people.map(function (p) {
      var bl = [1, 2, 3].map(function (b) { var id = p.picks.find(function (x) { var s = sessions.find(function (y) { return y.id === x; }); return s && s.block === b; }); var s = sessions.find(function (y) { return y.id === id; }); return s ? s.speaker + " — " + s.title : ""; });
      return [p.last_name, p.first_name, p.email, p.org, p.role, p.country, p.package, p.paid ? 1 : 0, p.diet, p.networking_consent ? 1 : 0, optLabels(p.options).join(", ")].concat(bl).map(function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; }).join(";");
    }));
    var blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" }); var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "nwow-2027-uczestnicy.csv"; a.click();
  }

  function load() { return Promise.all([api.admin.list(), api.admin.sessions()]).then(function (r) { people = r[0]; sessions = r[1]; }); }
  app.addEventListener("click", function (e) {
    var t = e.target.closest("[data-tab]"); if (t) { tab = t.getAttribute("data-tab"); render(); return; }
    if (e.target.closest("[data-export]")) { exportCsv(); return; }
    var pd = e.target.closest("[data-paid]"); if (pd) { api.admin.update(pd.getAttribute("data-paid"), { paid: pd.getAttribute("data-val") === "1" }).then(load).then(render); return; }
    if (e.target.id === "reset") { e.preventDefault(); api.reset && api.reset(); load().then(render); }
  });
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
  document.getElementById("logout").addEventListener("click", function () { api.signOut().then(function () { location.reload(); }); });

  function boot() {
    if (api.mode === "mock") return load().then(function () { setLang("pl"); });
    // Supabase: wymaga zalogowania e-mailem z tabeli admins (RLS odrzuci listę dla innych)
    api.sessionFromUrl().then(function (u) { return u || api.currentUser(); }).then(function (u) {
      if (!u) { T = window.PORTAL_CONTENT.pl; app.innerHTML = '<div class="login"><h1>' + esc(T.admin.title) + '</h1><p class="lead">' + esc(T.admin.loginLead) + '</p><form id="f"><input id="email" type="email" required placeholder="e-mail"><button class="btn" type="submit">' + esc(T.login.send) + "</button></form></div>"; document.getElementById("f").addEventListener("submit", function (e) { e.preventDefault(); api.requestLink(document.getElementById("email").value).then(function () { app.innerHTML = '<div class="login"><h1>' + esc(T.login.sentTitle) + "</h1></div>"; }); }); return; }
      return load().then(function () { setLang("pl"); });
    });
  }
  boot();
})();
