// ============================================================
//  DANE TESTOWE portalu uczestnika (tryb mock, bez Supabase).
//  Uczestnicy, sesje warsztatowe i przykładowe zapisy.
//  Logowanie testowe: dowolny e-mail z listy poniżej.
// ============================================================
window.TEST_DATA = {
  sessions: [
    // block: 1 = 9:30, 2 = 10:45, 3 = 12:00 · capacity: limit miejsc · lang: język sesji
    { id: "s1-lama-pl",   block: 1, title: "Co sprawia, że tutoring naprawdę działa?", speaker: "Dobrochna Lama", lang: "PL", room: "Sala 1", capacity: 20 },
    { id: "s1-calvo-es",  block: 1, title: "Tożsamość szkoły edukacji spersonalizowanej", speaker: "Lucia Calvo", lang: "ES · tłum. PL", room: "Sala 2", capacity: 20 },
    { id: "s1-kowal-pl",  block: 1, title: "Szkoła, którą buduje się latami — Źródło i Wierchy", speaker: "Stanisław Kowal", lang: "PL", room: "Sala 3", capacity: 20 },
    { id: "s1-todo-en",   block: 1, title: "TODO: Character education in practice", speaker: "TODO prowadzący", lang: "EN", room: "Sala 4", capacity: 20 },

    { id: "s2-lama-en",   block: 2, title: "What makes tutoring actually work?", speaker: "Dobrochna Lama", lang: "EN", room: "Sala 1", capacity: 20 },
    { id: "s2-calvo-es",  block: 2, title: "Identity of a personalized-education school (part 2)", speaker: "Lucia Calvo", lang: "ES · EN interpretation", room: "Sala 2", capacity: 20 },
    { id: "s2-kowal-pl",  block: 2, title: "Współpraca z rodzicami: od informowania do partnerstwa", speaker: "Stanisław Kowal", lang: "PL", room: "Sala 3", capacity: 12 },
    { id: "s2-todo-pl",   block: 2, title: "TODO: Rytuały i święta w kulturze szkoły", speaker: "TODO prowadzący", lang: "PL", room: "Sala 4", capacity: 20 },

    { id: "s3-lama-pl",   block: 3, title: "Rozmowa tutorska — warsztat praktyczny", speaker: "Dobrochna Lama", lang: "PL", room: "Sala 1", capacity: 20 },
    { id: "s3-calvo-es",  block: 3, title: "Formación del carácter: casos prácticos", speaker: "Lucia Calvo", lang: "ES · tłum. PL", room: "Sala 2", capacity: 20 },
    { id: "s3-kowal-en",  block: 3, title: "Founding a school: lessons learned", speaker: "Stanisław Kowal", lang: "EN", room: "Sala 3", capacity: 20 },
    { id: "s3-todo-en",   block: 3, title: "TODO: Digital life as an educational project", speaker: "TODO prowadzący", lang: "EN", room: "Sala 4", capacity: 20 },
  ],

  // package: full | conference | conference_lunch
  participants: [
    { id: "p01", token: "t-anna",   email: "anna.kowalska@example.pl", first_name: "Anna",     last_name: "Kowalska",  org: "Szkoła Podstawowa Strumienie", role: "Dyrektorka", country: "PL", package: "full", paid: true,  diet: "wegetariańska", networking_consent: true,  lang: "pl", options: { school_visits: true,  gocook: true,  mass: true,  tour: true,  garden: true } },
    { id: "p02", token: "t-jan",    email: "jan.nowak@example.pl",     first_name: "Jan",      last_name: "Nowak",     org: "Szkoła Azymut",               role: "Tutor",      country: "PL", package: "full", paid: true,  diet: "",              networking_consent: true,  lang: "pl", options: { school_visits: false, gocook: true,  mass: false, tour: true,  garden: true } },
    { id: "p03", token: "t-maria",  email: "maria.garcia@example.es",  first_name: "María",    last_name: "García",    org: "Colegio Los Olmos",           role: "Head of school", country: "ES", package: "full", paid: true,  diet: "gluten-free",   networking_consent: true,  lang: "en", options: { school_visits: true,  gocook: true,  mass: true,  tour: false, garden: true } },
    { id: "p04", token: "t-peter",  email: "peter.novak@example.sk",   first_name: "Peter",    last_name: "Novák",     org: "Škola Libellus",              role: "Teacher",    country: "SK", package: "full", paid: false, diet: "",              networking_consent: false, lang: "en", options: { school_visits: false, gocook: false, mass: false, tour: false, garden: false } },
    { id: "p05", token: "t-ewa",    email: "ewa.zielinska@example.pl", first_name: "Ewa",      last_name: "Zielińska", org: "Fundacja Sternik",            role: "Koordynatorka", country: "PL", package: "conference_lunch", paid: true, diet: "wegańska", networking_consent: true, lang: "pl", options: { school_visits: false, gocook: false, mass: false, tour: false, garden: false } },
    { id: "p06", token: "t-tomas",  email: "tomas.hajek@example.cz",   first_name: "Tomáš",    last_name: "Hájek",     org: "Škola Ponte",                 role: "Founder",    country: "CZ", package: "full", paid: true,  diet: "",              networking_consent: true,  lang: "en", options: { school_visits: true,  gocook: true,  mass: false, tour: true,  garden: true } },
    { id: "p07", token: "t-kasia",  email: "k.wisniewska@example.pl",  first_name: "Katarzyna",last_name: "Wiśniewska",org: "Szkoła Ziarno",               role: "Nauczycielka", country: "PL", package: "full", paid: true, diet: "",             networking_consent: true,  lang: "pl", options: { school_visits: false, gocook: true,  mass: true,  tour: false, garden: true } },
    { id: "p08", token: "t-lukas",  email: "lukas.meier@example.de",   first_name: "Lukas",    last_name: "Meier",     org: "Freie Schule Berlin",         role: "Teacher",    country: "DE", package: "conference", paid: true, diet: "",         networking_consent: false, lang: "en", options: { school_visits: false, gocook: false, mass: false, tour: false, garden: false } },
    { id: "p09", token: "t-marek",  email: "marek.lis@example.pl",     first_name: "Marek",    last_name: "Lis",       org: "Szkoła Wierchy",              role: "Dyrektor",   country: "PL", package: "full", paid: true,  diet: "bez laktozy",   networking_consent: true,  lang: "pl", options: { school_visits: true,  gocook: true,  mass: true,  tour: true,  garden: true } },
    { id: "p10", token: "t-sofia",  email: "sofia.rossi@example.it",   first_name: "Sofia",    last_name: "Rossi",     org: "Scuola Faes Milano",          role: "Tutor",      country: "IT", package: "full", paid: true,  diet: "",              networking_consent: true,  lang: "en", options: { school_visits: false, gocook: true,  mass: true,  tour: true,  garden: true } },
  ],

  // zapisy na sesje: [participant_id, session_id]
  picks: [
    ["p01", "s1-lama-pl"], ["p01", "s2-kowal-pl"], ["p01", "s3-calvo-es"],
    ["p02", "s1-kowal-pl"], ["p02", "s2-kowal-pl"],
    ["p03", "s1-calvo-es"], ["p03", "s2-calvo-es"], ["p03", "s3-calvo-es"],
    ["p06", "s1-todo-en"], ["p06", "s2-lama-en"], ["p06", "s3-kowal-en"],
    ["p07", "s1-lama-pl"], ["p07", "s2-kowal-pl"], ["p07", "s3-lama-pl"],
    ["p09", "s1-kowal-pl"], ["p09", "s2-kowal-pl"], ["p09", "s3-lama-pl"],
    ["p10", "s1-todo-en"], ["p10", "s2-lama-en"], ["p10", "s3-todo-en"],
    // sztuczne obłożenie, żeby pokazać pełną sesję (s2-kowal-pl ma limit 12)
    ["x01", "s2-kowal-pl"], ["x02", "s2-kowal-pl"], ["x03", "s2-kowal-pl"], ["x04", "s2-kowal-pl"],
    ["x05", "s2-kowal-pl"], ["x06", "s2-kowal-pl"], ["x07", "s2-kowal-pl"], ["x08", "s2-kowal-pl"],
  ],
};
