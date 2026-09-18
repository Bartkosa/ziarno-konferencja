// ============================================================
//  USTAWIENIA STRONY — jedyny plik, który trzeba edytować
//  przy zmianie stanu zapisów, linków i danych do płatności.
//  Treść (teksty, program, prelegenci) jest w content/pl.js i content/en.js
// ============================================================
window.KONF = {
  // Domyślny język, gdy nikt nie wybrał (pl | en)
  defaultLang: "pl",

  // --- ZAPISY -------------------------------------------------
  // true = formularz widoczny; false = sekcja "brak miejsc / lista rezerwowa"
  registrationOpen: true,
  // Po tej dacie (włącznie) zapisy zamykają się same (RRRR-MM-DD)
  registrationDeadline: "2027-04-16",
  // Limit miejsc (0 = nie pokazuj)
  seatLimit: 60,

  // Google Forms — osobny formularz dla PL i EN (może być ten sam link).
  // Google Forms → Wyślij → <> → skopiuj adres z src="..." i wklej BEZ "?embedded=true".
  // Dopóki link zawiera "TODO", strona pokaże informację zamiast formularza.
  formUrl: {
    pl: "https://docs.google.com/forms/d/e/TODO_ID_FORMULARZA_PL/viewform",
    en: "https://docs.google.com/forms/d/e/TODO_ID_FORMULARZA_EN/viewform",
  },

  // --- KONTAKT --------------------------------------------------
  contactEmail: "nwow@ziarno.edu.pl", // TODO: właściwy adres biura konferencji
  social: {
    facebook: "https://www.facebook.com/przedszkoleziarno",
    instagram: "https://www.instagram.com/przedszkole_ziarno/",
  },

  // --- PŁATNOŚĆ (przelew) ---------------------------------------
  // Kwoty w EUR (jak w specyfikacji). PLN — opcjonalnie, wg stałego kursu.
  prices: {
    full: { eur: 100, pln: 0 },        // pełny pakiet, 3 dni
    conference: { eur: 40, pln: 0 },   // tylko konferencja 7.05
    lunch: { eur: 10, pln: 0 },        // opcjonalny lunch do pakietu konferencyjnego
  },
  paymentDeadlineDays: 7,
  bank: {
    recipient: "Dwujęzyczna Szkoła Podstawowa Ziarno",   // TODO: nazwa z umowy/konta
    address: "ul. Modlińska 184a, 03-119 Warszawa",
    ibanPln: "TODO",   // np. PL00 0000 0000 0000 0000 0000 0000
    ibanEur: "TODO",   // konto walutowe EUR (jeśli inne)
    swift: "TODO",
    titleFormat: "NWoW2027_Nazwisko_Imie",
  },

  // --- OPCJONALNIE: płatność online ------------------------------
  // Link Stripe Payment Link / Przelewy24 — gdy pusty, przycisk się nie pokaże
  paymentUrl: "",

  // --- Zaproszenie PDF (link w hero i stopce; pusty string = brak linku) ---
  invitePdf: "files/zaproszenie-nwow-2027.pdf",

  // --- Zdjęcia -----------------------------------------------------
  heroImage: "images/hero-warszawa.jpg",
  // Zdjęcie z Wikimedia Commons na licencji CC BY-SA 4.0 — wymaga podpisu (pokazuje się w stopce).
  // Gdy podmienisz na własne zdjęcie, ustaw heroCredit: null.
  heroCredit: { text: "Oleslawlama, CC BY-SA 4.0, Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Evening_skyline_Warsaw_skyscrapers_Vistula_River.jpg" },
  logoZiarno: "https://www.ziarno.edu.pl/wp-content/uploads/2023/04/logo-ziarno.png", // TODO: images/logo-ziarno.svg
};
