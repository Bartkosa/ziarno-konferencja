/* Przełącznik języka: ?lang=en | localStorage | domyślny z config. */
(function () {
  var KEY = "nwow-lang";
  function pick() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && window.CONTENT[q]) return q;
    try { var s = localStorage.getItem(KEY); if (s && window.CONTENT[s]) return s; } catch (e) {}
    if (window.KONF.defaultLang === "auto") {
      var langs = navigator.languages || [navigator.language || ""];
      for (var i = 0; i < langs.length; i++) { var code = String(langs[i]).slice(0, 2).toLowerCase(); if (window.CONTENT[code]) return code; }
      return window.KONF.fallbackLang || "pl";
    }
    return window.KONF.defaultLang || "pl";
  }
  function setLang(lang, keepScroll) {
    var y = window.scrollY;
    window.renderSite(lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    var u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u.pathname + u.search + u.hash);
    if (keepScroll) window.scrollTo(0, y);
  }
  window.renderSite.bindOnce();
  setLang(pick(), false);
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang"), true); });
  });
  // QR biblioteka ładuje się z defer — dorenderuj po załadowaniu
  window.addEventListener("load", function () {
    if (window.QRCode && document.getElementById("qr-code") && !document.querySelector("#qr-code canvas, #qr-code img")) window.renderSite(document.documentElement.lang);
  });
})();
