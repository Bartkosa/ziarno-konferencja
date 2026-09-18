/* Renderowanie sekcji z content/<lang>.js + config.js. Bez zależności. */
(function () {
  "use strict";
  var C = window.KONF;

  // ---------- pomocnicze ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function tpl(s, vars) {
    return String(s).replace(/\{\{(\w+)\}\}/g, function (_, k) { return vars[k] != null ? vars[k] : ""; });
  }
  function isTodo(v) { return !v || /TODO/i.test(String(v)); }
  function money(p, lang) {
    if (!p) return "";
    var s = p.eur + " EUR";
    if (p.pln) s += " / " + p.pln + " PLN";
    return s;
  }
  function fmtDate(iso, lang) {
    try {
      return new Date(iso + "T12:00:00").toLocaleDateString(lang === "pl" ? "pl-PL" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
    } catch (e) { return iso; }
  }
  var ICONS = {
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    euro: '<path d="M4 10h12M4 14h9M19 6a7 7 0 0 0-11 0 8 8 0 0 0 0 12 7 7 0 0 0 11 0"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    app: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
  };
  function icon(name, cls) { return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.bulb) + "</svg>"; }
  function head(sec, center) {
    return '<div class="section-head' + (center ? " center" : "") + '"><div class="eyebrow">' + esc(sec.eyebrow) + "</div><h2>" + esc(sec.title) + "</h2>" + (sec.lead ? '<p class="lead">' + esc(sec.lead) + "</p>" : "") + "</div>";
  }
  function initials(name) { return name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase(); }

  // ---------- stan rejestracji ----------
  function regState() {
    var open = !!C.registrationOpen;
    if (open && C.registrationDeadline) {
      var d = new Date(C.registrationDeadline + "T23:59:59");
      if (new Date() > d) open = false;
    }
    return open;
  }
  function formUrl(lang) { var e = regEmbed(window.CONTENT[lang] || window.CONTENT.pl, lang); return e ? e.url : ""; }

  function icsHref(T) {
    var e = C.event || {};
    var d = function (iso, plus) { var x = new Date(iso + "T12:00:00"); x.setDate(x.getDate() + (plus || 0)); return x.toISOString().slice(0, 10).replace(/-/g, ""); };
    var lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Ziarno//NWoW 2027//PL", "BEGIN:VEVENT",
      "UID:nwow2027@ziarno.edu.pl", "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z",
      "DTSTART;VALUE=DATE:" + d(e.start), "DTEND;VALUE=DATE:" + d(e.end, 1),
      "SUMMARY:" + T.hero.title + " 2027", "LOCATION:" + (e.location || "").replace(/,/g, "\\,"),
      "DESCRIPTION:" + T.hero.motto + " " + (C.siteUrl || ""), "URL:" + (C.siteUrl || ""), "END:VEVENT", "END:VCALENDAR"];
    return "data:text/calendar;charset=utf-8," + encodeURIComponent(lines.join("\r\n"));
  }

  // ---------- sekcje ----------
  function renderHeader(T, lang) {
    var logoZ = C.logoZiarno ? '<img src="' + esc(C.logoZiarno) + '" alt="Ziarno">' : '<span class="brand-text">Ziarno</span>';
    var logoL = C.logoLibellus ? '<img class="lib" src="' + esc(C.logoLibellus) + '" alt="Škola Libellus">' : "";
    document.getElementById("brand").innerHTML = logoZ + (logoL ? '<span class="brand-x">×</span>' + logoL : "");
    document.getElementById("brand").setAttribute("aria-label", esc(T.nav.brand));
    document.getElementById("nav-links").innerHTML = T.nav.links.map(function (l) { return '<a href="' + esc(l.href) + '">' + esc(l.label) + "</a>"; }).join("");
    document.getElementById("mobile-menu").innerHTML = T.nav.links.map(function (l) { return '<a href="' + esc(l.href) + '">' + esc(l.label) + "</a>"; }).join("") + '<a class="btn" data-form-link href="#register">' + esc(T.nav.cta) + "</a>";
    var burger = document.getElementById("burger");
    burger.setAttribute("aria-label", T.nav.menuOpen);
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
  }

  function renderHero(T) {
    document.getElementById("hero-bg").style.backgroundImage = "url('" + C.heroImage + "')";
    var h = T.hero;
    document.getElementById("hero-content").innerHTML =
      '<div class="eyebrow">' + esc(h.eyebrow) + "</div>" +
      "<h1>" + esc(h.title) + "</h1>" +
      '<p class="motto">' + esc(h.motto) + "</p>" +
      '<p class="lead">' + esc(h.lead) + "</p>" +
      '<div class="hero-actions"><a class="btn" data-form-link href="#register">' + esc(h.primary) + '</a><a class="btn btn-ghost" href="#program">' + esc(h.secondary) + "</a></div>" +
      '<div class="chips">' + h.chips.map(function (c) { return "<span>" + icon(c.icon) + esc(c.text) + "</span>"; }).join("") + "</div>" +
      '<div class="hero-links">' +
      (C.invitePdf && h.invite ? '<a href="' + esc(C.invitePdf) + '" target="_blank" rel="noopener">' + icon("external") + esc(h.invite) + "</a>" : "") +
      (h.calendar ? '<a href="' + icsHref(T) + '" download="nwow-2027.ics">' + icon("calendar") + esc(h.calendar) + "</a>" : "") +
      "</div>";
  }

  function renderWhy(T) {
    document.getElementById("why-content").innerHTML = head(T.why) +
      '<div class="grid grid-3">' + T.why.items.map(function (i) { return '<div class="card">' + icon(i.icon) + "<h3>" + esc(i.title) + "</h3><p>" + esc(i.text) + "</p></div>"; }).join("") + "</div>";
  }

  function renderWho(T) {
    document.getElementById("who-content").innerHTML = head(T.who) +
      '<div class="grid grid-4">' + T.who.items.map(function (i) { return '<div class="card"><h3>' + esc(i.title) + "</h3><p>" + esc(i.text) + "</p></div>"; }).join("") + "</div>" +
      '<a class="link-arrow" data-form-link href="#register">' + esc(T.who.cta) + icon("arrow", "") + "</a>";
  }

  function renderProgram(T) {
    var P = T.program;
    var days = P.days.map(function (d, di) {
      var blocks = d.blocks.map(function (b) {
        var items = "";
        if (b.items && b.items.length) {
          items = '<ol class="timeline">' + b.items.map(function (it) {
            var talk = !!it.who;
            var more = it.note ? '<p class="tl-more">' + esc(it.note) + "</p>" : "";
            return '<li class="tl-item' + (talk ? " talk" : "") + (it.note ? " has-more" : "") + '"><div class="tl-head"><span class="tl-time">' + esc(it.time) + "</span><span>" + (talk ? '<span class="tl-who">' + esc(it.who) + "</span>" : "") + '<span class="tl-title">' + esc(it.title) + "</span></span></div>" + more + "</li>";
          }).join("") + "</ol>";
        }
        var venue = b.venue ? '<a class="pill venue" href="' + esc(b.mapUrl || "#") + '" target="_blank" rel="noopener">' + icon("pin") + esc(b.venue) + "</a>" : "";
        return '<div class="block"><div class="block-meta"><span class="pill">' + icon("clock") + esc(b.time) + "</span>" + venue + "</div>" +
          (b.kicker ? '<div class="kicker">' + esc(b.kicker) + "</div>" : "") +
          "<h4>" + esc(b.title) + "</h4>" + (b.text ? "<p>" + esc(b.text) + "</p>" : "") +
          (b.bullets ? '<ul class="bullets">' + b.bullets.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
          items + (b.note ? '<p class="note">' + esc(b.note) + "</p>" : "") + "</div>";
      }).join("");
      var open = window.innerWidth >= 900 || di === 0 ? " open" : "";
      return '<details class="day"' + open + "><summary><h3>" + esc(d.label) + '</h3><span class="date">' + esc(d.date) + '</span><span class="theme">' + esc(d.theme) + "</span>" + icon("chev", "chev") + '</summary><div class="day-body">' + blocks + "</div></details>";
    }).join("");
    var ws = P.workshops;
    var wsHtml = '<div class="workshops"><h3>' + esc(ws.title) + "</h3><p>" + esc(ws.text) + '</p><div class="ws-grid">' + ws.items.map(function (w) {
      return '<div class="ws"><div class="ws-speaker">' + esc(w.speaker) + "</div>" + w.sessions.map(function (s) { return '<div class="ws-session"><span>' + esc(s.title) + '</span><span class="tag">' + esc(s.lang) + "</span></div>"; }).join("") + "</div>";
    }).join("") + "</div></div>";
    document.getElementById("program-content").innerHTML = head(P) + '<p class="program-hint">' + esc(P.hint) + "</p>" + days + wsHtml + '<p class="footnote">' + esc(P.footnote) + "</p>";
  }

  function renderSpeakers(T) {
    var S = T.speakers;
    var cards = S.items.map(function (s) {
      var av = s.photo ? '<img class="avatar" src="' + esc(s.photo) + '" alt="' + esc(s.name) + '">' : '<div class="avatar" aria-hidden="true">' + esc(initials(s.name)) + "</div>";
      return '<div class="card speaker">' + av + "<h3>" + esc(s.name) + '</h3><div class="role">' + esc(s.role) + "</div><p>" + esc(s.short) + '</p><p class="bio">' + esc(s.bio) + '</p><button type="button" class="more" data-more="' + esc(S.readMore) + '" data-less="' + esc(S.readLess) + '">' + esc(S.readMore) + "</button></div>";
    }).join("");
    var O = T.organisers;
    var orgs = O.items.map(function (o) {
      var logo = o.logo === "ziarno" && C.logoZiarno ? '<img src="' + esc(C.logoZiarno) + '" alt="">' : o.logo === "libellus" && C.logoLibellus ? '<img src="' + esc(C.logoLibellus) + '" alt="">' : esc(o.name.split(" ")[0]);
      return '<div class="card org"><div class="org-logo">' + logo + '</div><div><span class="tag">' + esc(o.tag) + "</span><h3>" + esc(o.name) + "</h3><p>" + esc(o.text) + '</p><p style="margin-top:8px"><a href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.url.replace(/^https?:\/\//, "").replace(/\/$/, "")) + "</a></p></div></div>";
    }).join("");
    document.getElementById("speakers-content").innerHTML = head(S) + '<div class="grid grid-3">' + cards + "</div>" +
      '<div class="section-head" style="margin-top:64px"><div class="eyebrow">' + esc(O.eyebrow) + "</div><h2>" + esc(O.title) + "</h2></div>" + '<div class="org-grid" style="margin-top:0">' + orgs + "</div>";
  }

  function renderPartners(T) {
    var P = T.partners;
    var logo = function (p) { return '<a href="' + esc(p.url) + '" target="_blank" rel="noopener" title="' + esc(p.name) + '">' + (p.logo ? '<img src="' + esc(p.logo) + '" alt="' + esc(p.name) + '">' : '<span class="ph">' + esc(p.name) + "</span>") + "</a>"; };
    var media = P.media && P.media.items.length ? '<h3 class="partners-sub">' + esc(P.media.title) + '</h3><div class="partners media">' + P.media.items.map(logo).join("") + "</div>" : "";
    document.getElementById("partners-content").innerHTML = head(P, true) + '<div class="partners">' + P.items.map(logo).join("") + "</div>" + media +
      '<div class="callout"><div><h3>' + esc(P.callout.title) + "</h3><p>" + esc(P.callout.text) + '</p></div><a class="btn" href="mailto:' + esc(C.contactEmail) + '">' + icon("mail") + esc(P.callout.cta) + "</a></div>";
  }

  function paymentHtml(T, lang) {
    var pm = T.payment, b = C.bank, pr = C.prices;
    var vars = { full: money(pr.full), conf: money(pr.conference), lunch: money(pr.lunch), days: C.paymentDeadlineDays, email: C.contactEmail };
    var rows = [
      [pm.amount, esc(tpl(pm.amountText, vars))],
      [pm.deadline, esc(tpl(pm.deadlineText, vars))],
      [pm.recipient, esc(b.recipient) + '<span class="hint">' + esc(b.address) + "</span>"],
    ];
    if (!isTodo(b.ibanPln)) rows.push([pm.account, "<code>" + esc(b.ibanPln) + "</code>"]);
    if (!isTodo(b.ibanEur)) rows.push([pm.accountEur, "<code>" + esc(b.ibanEur) + "</code>"]);
    if (!isTodo(b.swift)) rows.push([pm.swift, "<code>" + esc(b.swift) + "</code>"]);
    rows.push([pm.titleLabel, "<code>" + esc(b.titleFormat) + '</code><span class="hint">' + esc(pm.titleHint) + "</span>"]);
    var dl = '<dl class="pay">' + rows.map(function (r) { return "<dt>" + esc(r[0]) + "</dt><dd>" + r[1] + "</dd>"; }).join("") + "</dl>";
    var todo = isTodo(b.ibanPln) && isTodo(b.ibanEur) ? '<p class="todo">' + esc(pm.todo) + "</p>" : "";
    var qr = !isTodo(b.ibanPln) ? '<div class="qr"><div id="qr-code"></div><p>' + esc(pm.qr) + "</p></div>" : "";
    var inv = "<p><strong>" + esc(pm.invoice) + ":</strong> " + esc(tpl(pm.invoiceText, vars)).replace(esc(C.contactEmail), '<a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a>") + "</p>";
    return dl + todo + qr + inv;
  }

  function renderPractical(T, lang) {
    var P = T.practical;
    var glance = '<div class="glance">' + P.glance.map(function (g) { return '<div class="card">' + icon(g.icon) + '<div><div class="label">' + esc(g.label) + "</div><p>" + esc(g.text) + "</p></div></div>"; }).join("") + "</div>";
    var app = P.appNote ? '<div class="app-note">' + icon("app") + "<div><h3>" + esc(P.appNote.title) + "</h3><p>" + esc(P.appNote.text) + (C.portal && C.portal.enabled ? ' <a href="' + esc(C.portal.url) + (lang === "en" ? "?lang=en" : "") + '">' + esc(T.portalBox ? T.portalBox.cta : "") + " →</a>" : "") + "</p></div></div>" : "";
    var acc = P.accordion.map(function (a, i) {
      var body = a.payment ? paymentHtml(T, lang) : tpl(a.html, { email: C.contactEmail });
      return '<details class="acc"' + (a.payment ? " open" : "") + "><summary>" + esc(a.title) + icon("chev", "chev") + '</summary><div class="acc-body">' + body + "</div></details>";
    }).join("");
    document.getElementById("practical-content").innerHTML = head(P) + glance + app + '<h3 class="details-title">' + esc(P.detailsTitle) + "</h3>" + acc;
  }

  function renderFaq(T) {
    var F = T.faq; if (!F) return;
    var vars = { email: C.contactEmail, days: C.paymentDeadlineDays };
    var items = F.items.map(function (it) {
      return '<details class="acc"><summary>' + esc(it.q) + icon("chev", "chev") + '</summary><div class="acc-body">' + tpl(it.a, { email: '<a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a>", days: C.paymentDeadlineDays }) + "</div></details>";
    }).join("");
    var lead = esc(tpl(F.lead, vars)).replace(esc(C.contactEmail), '<a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a>");
    document.getElementById("faq-content").innerHTML = '<div class="section-head"><div class="eyebrow">' + esc(F.eyebrow) + "</div><h2>" + esc(F.title) + '</h2><p class="lead">' + lead + "</p></div>" + '<div class="faq-grid">' + items + "</div>";
  }

  function regEmbed(T, lang) {
    var R = C.registration || {};
    if (R.provider === "tally") {
      var id = R.tally && (R.tally[lang] || R.tally.pl);
      if (isTodo(id)) return null;
      return { url: "https://tally.so/r/" + id, tally: true,
        html: '<iframe data-tally-src="https://tally.so/embed/' + esc(id) + '?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0" title="' + esc(T.register.open.title) + '"></iframe>' };
    }
    var u = R.google && (R.google[lang] || R.google.pl);
    if (isTodo(u)) return null;
    return { url: u, html: '<iframe title="' + esc(T.register.open.title) + '" src="' + esc(u + (u.indexOf("?") > -1 ? "&" : "?") + "embedded=true") + '" loading="lazy"></iframe>' };
  }

  function earlyBirdActive() {
    var eb = C.earlyBird; if (!eb || !eb.until) return false;
    return new Date() <= new Date(eb.until + "T23:59:59");
  }

  function renderRegister(T, lang) {
    var PR = T.pricing, R = T.register, pr = C.prices;
    var vars = { lunch: money(pr.lunch), days: C.paymentDeadlineDays, date: fmtDate(C.registrationDeadline, lang), n: C.seatLimit };
    var pkgs = PR.packages.map(function (p) {
      var price = pr[p.key] || { eur: 0 };
      var eb = p.key === "full" && earlyBirdActive() ? C.earlyBird : null;
      var shown = eb ? eb.full : price;
      var ebHtml = eb ? '<div class="was"><s>' + price.eur + " EUR</s> · " + esc(tpl(PR.regular, { date: fmtDate(eb.until, lang), price: price.eur + " EUR" })) + '</div><span class="eb">' + esc(tpl(PR.earlyBird, { date: fmtDate(eb.until, lang) })) + "</span>" : "";
      return '<div class="pkg' + (p.badge ? " featured" : "") + '">' + (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
        '<div class="name">' + esc(p.name) + '</div><div class="amount">' + shown.eur + " EUR<small>" + esc(PR.perPerson) + "</small></div>" + (shown.pln ? '<div class="pln">≈ ' + shown.pln + " PLN</div>" : "") + ebHtml +
        "<ul>" + p.includes.map(function (x) { return "<li>" + esc(tpl(x, vars)) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
    var steps = '<h3 class="steps-title">' + esc(PR.stepsTitle) + '</h3><ol class="steps">' + PR.steps.map(function (s) { return "<li>" + esc(tpl(s, vars)) + "</li>"; }).join("") + "</ol>";
    var box;
    if (regState()) {
      var emb = regEmbed(T, lang), url = emb ? emb.url : "";
      var meta = '<div class="register-meta">' + (C.registrationDeadline ? "<span>" + esc(tpl(R.open.deadline, vars)).replace(esc(vars.date), "<strong>" + esc(vars.date) + "</strong>") + "</span>" : "") + (C.seatLimit ? "<span>" + esc(tpl(R.open.seats, vars)) + "</span>" : "") + "</div>";
      var form = emb ? '<div class="form-embed' + (emb.tally ? " tally" : "") + '">' + emb.html + "</div>" : '<p class="todo">' + esc(R.open.pending) + "</p>";
      var termsNote = C.termsPage && R.open.terms ? '<p class="terms-note">' + esc(R.open.terms).replace("{{link}}", '<a href="' + esc(C.termsPage) + (lang === "en" ? "#en" : "") + '" target="_blank">' + esc(R.open.termsLink) + "</a>") + "</p>" : "";
      var actions = '<div class="form-actions">' + (url ? '<a class="btn btn-outline btn-sm" href="' + esc(url) + '" target="_blank" rel="noopener">' + icon("external") + esc(R.open.openForm) + "</a>" : "") + (C.paymentUrl ? '<a class="btn btn-sm" href="' + esc(C.paymentUrl) + '" target="_blank" rel="noopener">' + esc(R.open.payOnline) + "</a>" : "") + "</div>";
      box = '<div class="register-box" id="form"><h3>' + esc(R.open.title) + '</h3><p class="lead">' + esc(R.open.lead) + "</p>" + meta + form + actions + termsNote + "</div>";
    } else {
      box = '<div class="closed-box" style="margin-top:56px"><span class="badge">' + esc(R.closed.badge) + "</span><h3>" + esc(R.closed.title) + "</h3><p>" + esc(R.closed.text) + "</p><p>" + esc(R.closed.waitlist) + ' <a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a></p></div>";
    }
    var portalBox = C.portal && C.portal.enabled && T.portalBox ? '<div class="portal-box"><div class="pb-icon">' + icon("app") + '</div><div><h3>' + esc(T.portalBox.title) + "</h3><p>" + esc(T.portalBox.text) + '</p><a class="btn" href="' + esc(C.portal.url) + (lang === "en" ? "?lang=en" : "") + '">' + esc(T.portalBox.cta) + " →</a><p class=\"pb-hint\">" + esc(T.portalBox.hint) + "</p></div></div>" : "";
    document.getElementById("register-content").innerHTML = head(PR, true) + '<div class="packages">' + pkgs + "</div>" + steps + box + portalBox;
  }

  function renderFooter(T) {
    var F = T.footer, s = C.social || {};
    var fb = '<svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z"/></svg>';
    var ig = '<svg viewBox="0 0 24 24"><path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21 8.1c-.1-1.5-.4-2.8-1.5-3.9S17.1 2.8 15.6 2.7C14 2.6 9.9 2.6 8.4 2.7 6.9 2.8 5.6 3.1 4.5 4.2S3 6.6 2.9 8.1c-.1 1.5-.1 6.2 0 7.7.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 6.2.1 7.7 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-6.2 0-7.7zm-2 9.4a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3A3 3 0 0 1 6.7 5C7.9 4.5 10.7 4.6 12 4.6s4.1-.1 5.3.4A3 3 0 0 1 19 6.7c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.5z"/></svg>';
    var logoZ = C.logoZiarno ? '<img src="' + esc(C.logoZiarno) + '" alt="Ziarno">' : "";
    var logoL = C.logoLibellus ? '<span class="brand-x">×</span><img src="' + esc(C.logoLibellus) + '" alt="Škola Libellus">' : "";
    document.getElementById("footer").innerHTML =
      '<div class="wrap"><div><div class="f-brand">' + logoZ + logoL + '</div><div class="f-title">' + esc(T.hero.title) + " 2027</div><p>" + esc(F.org) + "<br>" + esc(F.address) + "</p></div>" +
      "<div><h3>" + esc(F.linksTitle) + "</h3><ul>" + F.links.map(function (l) { return '<li><a href="' + esc(l.href) + '">' + esc(l.label) + "</a></li>"; }).join("") + (C.invitePdf && T.hero.invite ? '<li><a href="' + esc(C.invitePdf) + '" target="_blank" rel="noopener">' + esc(T.hero.invite) + "</a></li>" : "") + "</ul></div>" +
      "<div><h3>" + esc(F.contactTitle) + '</h3><ul><li><a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + '</a></li><li><a href="https://www.ziarno.edu.pl/" target="_blank" rel="noopener">ziarno.edu.pl</a></li><li><a href="https://skolalibellus.sk/" target="_blank" rel="noopener">skolalibellus.sk</a></li></ul></div>' +
      "<div><h3>" + esc(F.socialTitle) + '</h3><div class="social-row">' + (s.facebook ? '<a href="' + esc(s.facebook) + '" target="_blank" rel="noopener" aria-label="Facebook">' + fb + "</a>" : "") + (s.instagram ? '<a href="' + esc(s.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram">' + ig + "</a>" : "") + "</div></div></div>" +
      '<div class="bottom-bar">' + esc(F.copy) + ' · <a href="' + esc(F.privacyUrl) + '">' + esc(F.privacy) + "</a>" + (C.termsPage && F.terms ? ' · <a href="' + esc(C.termsPage) + '">' + esc(F.terms) + "</a>" : "") +
      (C.heroCredit ? '<br><span class="credit">' + esc(F.photo) + ': <a href="' + esc(C.heroCredit.url) + '" target="_blank" rel="noopener">' + esc(C.heroCredit.text) + "</a></span>" : "") + "</div>";
  }

  // ---------- po renderze: linki formularza, interakcje, QR ----------
  function afterRender(T, lang) {
    var open = regState(), url = formUrl(lang);
    document.querySelectorAll("[data-form-link]").forEach(function (a) {
      if (!a.textContent.trim() || a.classList.contains("nav-cta") || a.closest(".mobile-cta")) a.textContent = T.nav.cta;
      a.classList.toggle("is-disabled", !open);
      a.setAttribute("href", open ? (url || "#form") : "#register");
      if (open && url) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); } else { a.removeAttribute("target"); }
      if (!open) a.textContent = T.register.closed.badge;
    });
    // Tally: doładuj skrypt osadzania (raz) i odśwież iframy
    if (document.querySelector("iframe[data-tally-src]")) {
      if (window.Tally) { window.Tally.loadEmbeds(); }
      else if (!document.getElementById("tally-js")) { var sc = document.createElement("script"); sc.id = "tally-js"; sc.src = "https://tally.so/widgets/embed.js"; sc.onload = function () { if (window.Tally) window.Tally.loadEmbeds(); }; document.body.appendChild(sc); }
    }
    // QR przelewu (polski standard: |PL|NRB|kwota w groszach|odbiorca|tytuł|||)
    var qrEl = document.getElementById("qr-code");
    if (qrEl && window.QRCode) {
      var nrb = String(C.bank.ibanPln).replace(/\s|PL/gi, "");
      var amount = C.prices.full.pln ? String(Math.round(C.prices.full.pln * 100)).padStart(6, "0") : "000000";
      var text = "|PL|" + nrb + "|" + amount + "|" + C.bank.recipient.slice(0, 20) + "|" + C.bank.titleFormat + "|||";
      new window.QRCode(qrEl, { text: text, width: 140, height: 140, correctLevel: window.QRCode.CorrectLevel.L });
    }
  }

  function bindOnce() {
    document.addEventListener("click", function (e) {
      var more = e.target.closest(".speaker .more");
      if (more) {
        var card = more.closest(".speaker"), o = card.classList.toggle("open");
        more.textContent = o ? more.getAttribute("data-less") : more.getAttribute("data-more");
        return;
      }
      var tl = e.target.closest(".tl-item.has-more .tl-head");
      if (tl) { tl.parentElement.classList.toggle("open"); return; }
      if (e.target.closest("#mobile-menu a")) { toggleMenu(false); }
    });
    var burger = document.getElementById("burger");
    burger.addEventListener("click", function () { toggleMenu(); });
    function toggleMenu(force) {
      var m = document.getElementById("mobile-menu");
      var open = force != null ? force : !m.classList.contains("open");
      m.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    }
  }

  window.renderSite = function (lang) {
    var T = window.CONTENT[lang] || window.CONTENT.pl;
    document.documentElement.lang = lang;
    document.title = T.meta.title;
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", T.meta.description);
    renderHeader(T, lang); renderHero(T); renderWhy(T); renderWho(T); renderProgram(T); renderSpeakers(T); renderPartners(T); renderPractical(T, lang); renderFaq(T); renderRegister(T, lang); renderFooter(T);
    afterRender(T, lang);
  };
  window.renderSite.bindOnce = bindOnce;
})();
