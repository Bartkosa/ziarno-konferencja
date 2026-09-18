// ============================================================
//  USTAWIENIA STRONY — jedyny plik, który trzeba edytować
//  przy zmianie stanu zapisów, linków i danych do płatności.
//  Treść (teksty, program, prelegenci, FAQ) jest w content/pl.js i content/en.js
// ============================================================
window.KONF = {
  // Język startowy: "auto" = wg przeglądarki (polska → PL, inne → EN), albo "pl" / "en"
  defaultLang: "auto",
  fallbackLang: "pl",

  // Publiczny adres strony (do linków w kalendarzu, OG)
  siteUrl: "https://nwow.ziarno.edu.pl",

  // --- ZAPISY -------------------------------------------------
  // true = formularz widoczny; false = sekcja "brak miejsc / lista rezerwowa"
  registrationOpen: true,
  // Po tej dacie (włącznie) zapisy zamykają się same (RRRR-MM-DD)
  registrationDeadline: "2027-04-16",
  // Limit miejsc (0 = nie pokazuj)
  seatLimit: 60,

  registration: {
    // "tally" (polecane: formularz + płatność Stripe w jednym) albo "google" (Google Forms)
    provider: "tally",
    // Tally: ID formularza z adresu https://tally.so/r/<ID>  (osobne PL i EN albo ten sam)
    tally: { pl: "TODO_ID_PL", en: "TODO_ID_EN" },
    // Google Forms: adres .../viewform (bez ?embedded=true)
    google: { pl: "https://docs.google.com/forms/d/e/TODO/viewform", en: "https://docs.google.com/forms/d/e/TODO/viewform" },
  },

  // --- KONTAKT --------------------------------------------------
  contactEmail: "nwow@ziarno.edu.pl", // TODO: właściwy adres biura konferencji
  social: {
    facebook: "https://www.facebook.com/przedszkoleziarno",
    instagram: "https://www.instagram.com/przedszkole_ziarno/",
  },

  // --- CENY I PŁATNOŚĆ ------------------------------------------
  // Kwoty w EUR (jak w zaproszeniu). PLN — opcjonalnie, wg stałego kursu (0 = nie pokazuj).
  prices: {
    full: { eur: 100, pln: 0 },        // pełny pakiet, 3 dni
    conference: { eur: 40, pln: 0 },   // tylko konferencja 7.05
    lunch: { eur: 10, pln: 0 },        // obiad do pakietu konferencyjnego
  },
  // Early bird: niższa cena pełnego pakietu do podanej daty (null = brak)
  earlyBird: { until: "2027-01-31", full: { eur: 85, pln: 0 } },
  paymentDeadlineDays: 7,
  bank: {
    recipient: "Dwujęzyczna Szkoła Podstawowa Ziarno",   // TODO: nazwa z umowy/konta
    address: "ul. Modlińska 184a, 03-119 Warszawa",
    ibanPln: "TODO",   // np. PL00 0000 0000 0000 0000 0000 0000
    ibanEur: "TODO",   // konto walutowe EUR (jeśli inne)
    swift: "TODO",
    titleFormat: "NWoW2027_Nazwisko_Imie",
  },
  // Link do płatności online poza formularzem (Stripe Payment Link) — pusty = brak przycisku
  paymentUrl: "",

  // --- WYDARZENIE (kalendarz .ics) --------------------------------
  event: {
    start: "2027-05-06",
    end: "2027-05-08",
    location: "Warszawa — UKSW, Aula Schumana (ul. Wóycickiego 1/3) · Szkoła Ziarno (ul. Modlińska 184a)",
  },

  // --- PLIKI I GRAFIKA ----------------------------------------------
  invitePdf: "files/zaproszenie-nwow-2027.pdf",   // pusty string = brak linku
  termsPage: "regulamin.html",
  heroImage: "images/hero-warszawa.jpg",
  // Zdjęcie z Wikimedia Commons (CC BY-SA 4.0) — wymaga podpisu w stopce. Własne zdjęcie: heroCredit: null
  heroCredit: { text: "Oleslawlama, CC BY-SA 4.0, Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Evening_skyline_Warsaw_skyscrapers_Vistula_River.jpg" },
  logoZiarno: "https://www.ziarno.edu.pl/wp-content/uploads/2023/04/logo-ziarno.png", // TODO: images/logo-ziarno.svg
  logoLibellus: "images/logo-libellus.png",
  ogImage: "images/og.jpg",
};
