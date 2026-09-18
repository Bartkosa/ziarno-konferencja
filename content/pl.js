// ============================================================
//  TREŚĆ STRONY — POLSKI
//  Miejsca do uzupełnienia oznaczone "TODO".
//  Pola z "html" mogą zawierać proste znaczniki (<p>, <a>, <strong>, <ul>).
// ============================================================
window.CONTENT = window.CONTENT || {};
window.CONTENT.pl = {
  meta: {
    title: "A New Way of Working 2027 — konferencja, Warszawa 6–8 maja",
    description: "Trzy dni dla liderów edukacji: wizyty studyjne, konferencja w Auli Schumana UKSW i warsztaty w Szkole Ziarno. Zaufanie. Przynależność. Cel.",
  },

  nav: {
    brand: "Konferencja 2027",
    links: [
      { href: "#why", label: "Dlaczego warto" },
      { href: "#program", label: "Program" },
      { href: "#speakers", label: "Prelegenci" },
      { href: "#partners", label: "Partnerzy" },
      { href: "#practical-info", label: "Informacje praktyczne" },
      { href: "#faq", label: "FAQ" },
      { href: "#register", label: "Rejestracja" },
    ],
    cta: "Zapisz się",
    menuOpen: "Otwórz menu",
    menuClose: "Zamknij menu",
  },

  hero: {
    eyebrow: "Warszawa · 6–8 maja 2027",
    title: "A New Way of Working",
    motto: "Zaufanie. Przynależność. Cel.",
    lead: "Wykłady, warsztaty i szczere rozmowy dla liderów szkół, którym zależy na wychowaniu charakteru i edukacji spersonalizowanej.",
    primary: "Zapisz się",
    secondary: "Zobacz program",
    invite: "Pobierz zaproszenie (PDF)",
    calendar: "Dodaj do kalendarza",
    chips: [
      { icon: "calendar", text: "6–8 maja 2027" },
      { icon: "pin", text: "Warszawa · UKSW, Szkoła Ziarno" },
      { icon: "users", text: "Liczba miejsc ograniczona" },
    ],
  },

  why: {
    eyebrow: "Dlaczego warto",
    title: "Edukacja jest lepsza, gdy robimy ją razem",
    lead: "Trzy dni w Warszawie z edukatorami, którzy dzielą Twoją misję: formować całego człowieka, nie tylko realizować podstawę programową.",
    items: [
      { icon: "users", title: "Buduj relacje", text: "Dołącz do edukatorów z Europy Środkowo-Wschodniej. Tworzymy przestrzeń dla przyjaźni i sojuszy, które trwają lata po zakończeniu konferencji." },
      { icon: "message", title: "Dziel się praktyką", text: "Twoje doświadczenie jest bezcenne. Wymieńmy się rozwiązaniami w zakresie tutoringu i kształtowania charakteru, które sprawdziły się w realnych klasach, nie tylko w podręcznikach." },
      { icon: "bulb", title: "Czas na refleksję", text: "Zatrzymaj się, by wraz z osobami rozumiejącymi Twoją misję uczciwie zastanowić się nad wyzwaniami formowania całego człowieka." },
    ],
  },

  who: {
    eyebrow: "Dla kogo",
    title: "Dla tych, którzy budują kulturę szkoły",
    lead: "Niezależnie od tego, czy prowadzisz szkołę, uczysz, czy dopiero zaczynasz — jeśli formowanie całego człowieka jest sercem Twojej pracy, to spotkanie jest dla Ciebie.",
    items: [
      { title: "Liderzy szkół", text: "Zarządzający placówkami opartymi na wartościach." },
      { title: "Założyciele", text: "Twórcy nowych projektów edukacyjnych szukający merytorycznego wsparcia." },
      { title: "Nauczyciele i tutorzy", text: "Osoby praktykujące spersonalizowane towarzyszenie uczniowi." },
      { title: "Relacje rodzina–szkoła", text: "Budowniczy spójnych środowisk wychowawczych." },
    ],
    cta: "Widzisz tu siebie? Dołącz do nas",
  },

  program: {
    eyebrow: "Program",
    title: "Trzydniowe doświadczenie",
    lead: "Od inspirującej obserwacji (wizyty studyjne), przez intelektualną refleksję (konferencja), po wspólnotowe działanie (warsztaty).",
    hint: "Najedź na sesję, aby zobaczyć szczegóły",
    days: [
      {
        label: "Dzień 1",
        date: "czwartek, 6 maja",
        theme: "Doświadczenie w terenie",
        blocks: [
          {
            time: "dla chętnych",
            venue: "Szkoły Strumienie (Józefów) i Azymut (Pruszków)",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Strumienie+Sternik+3+Maja+129+J%C3%B3zef%C3%B3w",
            kicker: "Wizyty studyjne (opcjonalnie)",
            title: "Zwiedzanie szkół Strumienie i Azymut",
            text: "Obserwacja kultury organizacyjnej w praktyce: lekcje, tutoring, codzienne rytuały szkoły.",
            bullets: ["Udział dla chętnych — zaznacz w formularzu zapisów.", "Grupy w małym składzie, oprowadzanie przez kadrę szkoły.", "TODO: godziny, punkt zbiórki i transport z Warszawy."],
          },
          {
            time: "18:00",
            venue: "Let's GoCook, ul. Jutrzenki 76, Warszawa",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Let%27s+GoCook+Jutrzenki+76+Warszawa",
            kicker: "Networking kulinarny",
            title: "Warsztaty kulinarne i wspólna kolacja",
            text: "Luźna atmosfera sprzyjająca budowaniu pierwszych więzi. Gotujemy razem pod okiem szefa kuchni, a potem wspólnie jemy to, co przygotowaliśmy.",
            note: "Prosimy o wskazanie wymagań dietetycznych w formularzu zapisów.",
          },
        ],
      },
      {
        label: "Dzień 2",
        date: "piątek, 7 maja",
        theme: "Fundamenty intelektualne",
        blocks: [
          {
            time: "9:15–14:00",
            venue: "Aula Schumana, UKSW, ul. Wóycickiego 1/3, Warszawa",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=UKSW+W%C3%B3ycickiego+1%2F3+Warszawa",
            kicker: "Konferencja główna",
            title: "Gdy szkoła i rodzina ciągną w jedną stronę",
            text: "Seria prelekcji ekspertów w sercu akademickiego kampusu. Dwa filary edukacji spersonalizowanej: kształtowanie charakteru i partnerstwo szkoły z rodziną.",
            items: [
              { time: "9:15", title: "Rejestracja i poranna kawa", note: "Networking otwarcia." },
              { time: "10:00", who: "TODO prelegent", title: "Otwarcie konferencji", note: "TODO opis sesji." },
              { time: "10:15", who: "Lucia Calvo", title: "TODO tytuł wystąpienia", note: "Tożsamość szkół edukacji spersonalizowanej i ich rola w nowoczesnym społeczeństwie." },
              { time: "11:00", who: "Dobrochna Lama", title: "TODO tytuł wystąpienia", note: "Siła tutoringu i towarzyszenia uczniowi w szkole." },
              { time: "11:45", title: "Przerwa kawowa i networking" },
              { time: "12:15", who: "Stanisław Kowal", title: "TODO tytuł wystąpienia", note: "Doświadczenie współtworzenia szkół Źródło i Wierchy w Krakowie." },
              { time: "13:00", who: "TODO prelegent", title: "TODO tytuł wystąpienia" },
              { time: "13:45", title: "Podsumowanie i zakończenie obrad" },
              { time: "14:00", title: "Uroczysty lunch na terenie UKSW" },
            ],
            note: "Tłumaczenie symultaniczne PL / EN / ES dla wszystkich sesji plenarnych.",
          },
          {
            time: "18:00",
            venue: "Ogrody Szkoły Ziarno, ul. Modlińska 184a, Warszawa",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa",
            kicker: "Garden Party",
            title: "Wieczorne przyjęcie w ogrodach Szkoły Ziarno",
            text: "Przejście od akademickiej refleksji do wspólnotowej celebracji pod gołym niebem.",
            bullets: ["Kolacja, muzyka i rozmowy, które zdarzają się tylko pod otwartym niebem.", "Ubierz się stosownie do pogody — część wieczoru na zewnątrz."],
          },
        ],
      },
      {
        label: "Dzień 3",
        date: "sobota, 8 maja",
        theme: "Warsztat praktyka",
        blocks: [
          {
            time: "8:00",
            venue: "Szkoła Ziarno, ul. Modlińska 184a",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa",
            kicker: "Poranek",
            title: "Msza Święta (opcjonalnie)",
            text: "Dla chętnych — w Szkole Ziarno. Potem kawa i lekkie śniadanie.",
          },
          {
            time: "9:30–13:00",
            venue: "Szkoła Ziarno, ul. Modlińska 184a",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa",
            kicker: "Warsztaty — sesje praktyczne",
            title: "Trzy równoległe bloki warsztatowe",
            text: "Interaktywne doświadczenie w małych grupach (limit 20 osób), gwarantujące bezpośredni kontakt z prelegentami. Sesje wybierasz w formularzu zapisów.",
            items: [
              { time: "9:30", title: "Blok warsztatowy 1", note: "Sesje równoległe, wybór w formularzu zapisów." },
              { time: "10:30", title: "Przerwa" },
              { time: "10:45", title: "Blok warsztatowy 2" },
              { time: "11:45", title: "Przerwa" },
              { time: "12:00", title: "Blok warsztatowy 3" },
              { time: "13:00", title: "Pożegnalny lunch wspólnotowy" },
            ],
          },
          {
            time: "15:00",
            venue: "Stare Miasto, Warszawa",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Stare+Miasto+Warszawa",
            kicker: "Finał · program dodatkowy",
            title: "Zwiedzanie warszawskiego Starego Miasta z przewodnikiem",
            text: "Ekskluzywny spacer z przewodnikiem po Starym Mieście wpisanym na listę UNESCO.",
            note: "Udział potwierdź w formularzu zapisów.",
          },
        ],
      },
    ],
    workshops: {
      title: "Warsztaty — wybierasz przy zapisie",
      text: "Każdy warsztat jest ograniczony do 20 uczestników. Ostateczny układ i powtórzenia sesji dostosujemy do liczby zgłoszeń.",
      items: [
        { speaker: "Lucia Calvo", sessions: [{ title: "TODO tytuł warsztatu", lang: "ES · tłum. PL" }] },
        { speaker: "Dobrochna Lama", sessions: [{ title: "Co sprawia, że tutoring naprawdę działa?", lang: "PL" }, { title: "What makes tutoring actually work?", lang: "EN" }] },
        { speaker: "Stanisław Kowal", sessions: [{ title: "TODO tytuł warsztatu", lang: "PL" }] },
        { speaker: "TODO prowadzący", sessions: [{ title: "TODO tytuł warsztatu", lang: "EN" }] },
      ],
    },
    footnote: "Przerwy kawowe i lunche w cenie · języki: polski, angielski, hiszpański (z tłumaczeniem)",
  },

  speakers: {
    eyebrow: "Prelegenci",
    title: "Praktycy, autorzy, mentorzy",
    lead: "Ludzie, którzy prowadzą szkoły, piszą o edukacji i na co dzień towarzyszą uczniom — z doświadczeniem i prawdziwymi historiami za swoją pracą.",
    readMore: "Czytaj więcej",
    readLess: "Zwiń",
    items: [
      { name: "Lucia Calvo", role: "Tożsamość szkół edukacji spersonalizowanej", short: "Ekspertka w zakresie tożsamości szkół edukacji spersonalizowanej i ich roli w nowoczesnym społeczeństwie.", bio: "TODO pełne bio: doświadczenie, publikacje, obecna rola.", photo: "" },
      { name: "Dobrochna Lama", role: "Tutoring i personalizacja", short: "Doświadczona praktyczka i mentorka. Specjalizuje się w tutoringu szkolnym i personalizacji procesu edukacyjnego.", bio: "Kładzie nacisk na siłę towarzyszenia uczniowi. TODO pełne bio.", photo: "" },
      { name: "Stanisław Kowal", role: "Uniwersytet Jagielloński · szkoły Źródło i Wierchy", short: "Wykładowca UJ na Wydziale Pedagogiki, współzałożyciel szkół Źródło i Wierchy w Krakowie.", bio: "TODO pełne bio.", photo: "" },
    ],
  },

  organisers: {
    eyebrow: "Organizatorzy",
    title: "Gospodarz i partner merytoryczny",
    items: [
      { name: "Szkoła Ziarno", tag: "Gospodarz edycji 2027", text: "Placówka edukacyjna w Warszawie — przedszkole i dwujęzyczna szkoła podstawowa — będąca żywym przykładem wdrażania omawianych wartości: personalizacji, partnerstwa z rodziną i wychowania charakteru.", url: "https://www.ziarno.edu.pl/", logo: "ziarno" },
      { name: "Škola Libellus", tag: "Inicjator cyklu NWoW", text: "Szkoła z Bratysławy — inicjator i strategiczny partner merytoryczny cyklu New Way of Working. Gospodarz edycji 2026, z którą współtworzymy program i sieć uczestników.", url: "https://skolalibellus.sk/", logo: "libellus" },
    ],
  },

  partners: {
    eyebrow: "Partnerzy",
    title: "Połączeni wspólną wizją edukacji",
    items: [
      { name: "EASSE", url: "https://www.easse.org/", logo: "" },
      { name: "Be-come", url: "https://be-come.org/en/", logo: "" },
      { name: "Akademia Rodzinna", url: "https://www.ziarno.edu.pl/akademia-rodzinna/", logo: "" },
      { name: "TODO partner", url: "#", logo: "" },
    ],
    media: { title: "Partnerzy medialni", items: [{ name: "TODO", url: "#", logo: "" }] },
    callout: { title: "Szukamy partnerów", text: "Chcesz wesprzeć edukację i zwiększyć widoczność swojej organizacji? Zapraszamy nowych partnerów i sponsorów.", cta: "Napisz do nas" },
  },

  practical: {
    eyebrow: "Informacje praktyczne",
    title: "W skrócie",
    glance: [
      { icon: "calendar", label: "Daty", text: "6–8 maja 2027 (czwartek: wizyty studyjne, piątek: konferencja, sobota: warsztaty)" },
      { icon: "pin", label: "Miejsca", text: "UKSW — Aula Schumana (piątek), Szkoła Ziarno (Garden Party i sobota), Let's GoCook (czwartek)" },
      { icon: "euro", label: "Opłata", text: "100 EUR pełny pakiet · 40 EUR tylko konferencja (+10 EUR lunch). Szczegóły w sekcji Rejestracja." },
      { icon: "globe", label: "Języki", text: "Polski, angielski, hiszpański — tłumaczenie symultaniczne sesji plenarnych" },
    ],
    appNote: { title: "Aplikacja uczestnika", text: "Osoby zarejestrowane otrzymają przed konferencją dostęp do materiałów, wyboru warsztatów i listy uczestników. Szczegóły prześlemy e-mailem." },
    detailsTitle: "Przydatne informacje dla uczestników",
    accordion: [
      { title: "Lokalizacje", html: "<p><strong>Piątek — UKSW, Aula Schumana</strong><br>ul. Wóycickiego 1/3, 01-938 Warszawa (kampus Bielany) · <a href='https://www.google.com/maps/search/?api=1&query=UKSW+W%C3%B3ycickiego+1%2F3+Warszawa' target='_blank' rel='noopener'>Otwórz w Google Maps</a></p><p><strong>Piątek wieczór i sobota — Szkoła Ziarno</strong><br>ul. Modlińska 184a, 03-119 Warszawa · <a href='https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa' target='_blank' rel='noopener'>Otwórz w Google Maps</a></p><p><strong>Czwartek wieczór — Let's GoCook</strong><br>ul. Jutrzenki 76, Warszawa · <a href='https://www.google.com/maps/search/?api=1&query=Let%27s+GoCook+Jutrzenki+76+Warszawa' target='_blank' rel='noopener'>Otwórz w Google Maps</a></p><p><strong>Czwartek — wizyty studyjne</strong><br>Szkoła Strumienie, ul. 3 Maja 129, Józefów · Szkoła Azymut, ul. Staszica 1, Pruszków (TODO: potwierdzić program i transport)</p>" },
      { title: "Dojazd", html: "<p><strong>Samolot:</strong> Lotnisko Chopina (WAW) — ok. 30 min do centrum pociągiem SKM/KM lub autobusem 175; Lotnisko Modlin (WMI) — ok. 45 min autobusem i pociągiem.</p><p><strong>Pociąg:</strong> Warszawa Centralna — do UKSW ok. 35 min (metro M1 do stacji Młociny + autobus), do Szkoły Ziarno ok. 30 min (autobusy w kierunku Białołęki).</p><p><strong>Samochód:</strong> parking na kampusie UKSW (TODO: zasady wjazdu) oraz przy Szkole Ziarno.</p>" },
      { title: "Noclegi", html: "<p>Polecamy noclegi w centrum lub na Bielanach/Żoliborzu (dogodny dojazd na UKSW). TODO: lista 3–4 hoteli z linkami.</p><p>Sprawdź też Booking.com lub Airbnb. Potrzebujesz pomocy? Napisz: <a href='mailto:{{email}}'>{{email}}</a></p>" },
      { title: "Transport miejski", html: "<p>Warszawa ma prostą i tanią komunikację (ZTM). Bilety kupisz w aplikacji <strong>Jakdojade</strong> lub <strong>mObywatel/ZTM</strong>, w biletomatach oraz zbliżeniowo kartą w autobusach i tramwajach (część pojazdów).</p><p>Bilet 75-minutowy wystarcza na większość przejazdów między naszymi lokalizacjami. Taksówki: Bolt, Uber, FreeNow.</p>" },
      { title: "Komunikacja", html: "<p>Zarejestrowani uczestnicy zostaną dodani do grupy WhatsApp z bieżącymi informacjami. TODO: link do grupy.</p>" },
      { title: "Instrukcja płatności", payment: true },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania",
    lead: "Nie znalazłeś odpowiedzi? Napisz: {{email}}",
    items: [
      { q: "Czy mogę przyjechać tylko na piątkową konferencję?", a: "<p>Tak. Pakiet „Tylko konferencja” obejmuje sesje plenarne 7 maja i przerwy kawowe, opcjonalnie obiad na UKSW. Warsztaty sobotnie, kolacja czwartkowa i Garden Party są w pakiecie pełnym.</p>" },
      { q: "W jakim języku odbywa się konferencja?", a: "<p>Sesje plenarne w piątek mają tłumaczenie symultaniczne polski / angielski / hiszpański. Warsztaty prowadzone są w języku podanym przy każdej sesji, część w dwóch wersjach językowych.</p>" },
      { q: "Jak zapłacić i kiedy zgłoszenie jest ważne?", a: "<p>Najprościej kartą lub BLIK-iem w formularzu zapisów. Można też przelewem w ciągu {{days}} dni od zgłoszenia — dane w sekcji Informacje praktyczne. Miejsce jest potwierdzone po zaksięgowaniu wpłaty.</p>" },
      { q: "Czy otrzymam fakturę?", a: "<p>Tak. Zaznacz to w formularzu i podaj dane organizacji (nazwa, NIP lub numer VAT, adres). Fakturę wyślemy e-mailem.</p>" },
      { q: "Co jeśli nie będę mógł przyjechać?", a: "<p>Do 31 marca 2027 zwracamy całą wpłatę, do 15 kwietnia połowę, później zwrot nie przysługuje, ale zawsze możesz przekazać miejsce innej osobie. Szczegóły w <a href='regulamin.html'>regulaminie</a>.</p>" },
      { q: "Potrzebuję zaproszenia do wizy — czy je wystawicie?", a: "<p>Tak. Po opłaceniu udziału napisz na {{email}} z danymi paszportowymi, a wyślemy imienne zaproszenie w PDF.</p>" },
      { q: "Czy uwzględniacie diety?", a: "<p>Tak — wegetariańską, wegańską, bezglutenową i inne. Wpisz wymagania w formularzu; dotyczy to warsztatów kulinarnych, obiadów i Garden Party.</p>" },
      { q: "Gdzie zaparkować i jak dojechać?", a: "<p>UKSW ma parking na kampusie przy ul. Wóycickiego, przy Szkole Ziarno jest parking dla gości. Dojazd komunikacją i z lotnisk opisujemy w sekcji Informacje praktyczne.</p>" },
      { q: "Czy wizyty studyjne w czwartek są obowiązkowe?", a: "<p>Nie, są dla chętnych. Zaznacz udział w formularzu — liczba miejsc w szkołach jest ograniczona.</p>" },
      { q: "Jak wybiorę warsztaty?", a: "<p>W formularzu zapisów wskażesz trzy preferencje. Ostateczny przydział potwierdzimy e-mailem najpóźniej dwa tygodnie przed konferencją.</p>" },
    ],
  },

  pricing: {
    eyebrow: "Koszty i rejestracja",
    title: "Wybierz pakiet",
    lead: "Wyraźnie rekomendujemy pełny pakiet — to całe trzydniowe doświadczenie, od wizyt studyjnych po warsztaty.",
    packages: [
      { key: "full", name: "Pełny pakiet (3 dni)", badge: "Rekomendowany", includes: ["Wszystkie sesje i wizyty studyjne", "Pełne wyżywienie: kolacja GoCook, lunch UKSW, Garden Party, lunch sobotni", "Warsztaty w małych grupach", "Zwiedzanie Starego Miasta"] },
      { key: "conference", name: "Tylko konferencja (7 maja)", badge: "", includes: ["Udział w sesjach plenarnych 7 maja", "Przerwy kawowe", "Obiad na UKSW: +{{lunch}} (opcjonalnie)"] },
    ],
    perPerson: "za osobę",
    earlyBird: "Early bird do {{date}}",
    regular: "od {{date}}: {{price}}",
    stepsTitle: "Jak się zapisać",
    steps: ["Wypełnij formularz zapisów (poniżej).", "Opłać udział przelewem w ciągu {{days}} dni — dane w Instrukcji płatności.", "Po zaksięgowaniu wpłaty otrzymasz e-mail z potwierdzeniem miejsca."],
  },

  register: {
    open: {
      title: "Formularz zapisów",
      lead: "Podaj dane, wybierz pakiet i preferowane warsztaty oraz wskaż wymagania dietetyczne. Potwierdzenie i dane do płatności otrzymasz e-mailem.",
      openForm: "Otwórz formularz w nowej karcie",
      pending: "Formularz zapisów pojawi się tutaj — wpisz ID formularza Tally (lub adres Google Forms) w pliku js/config.js.",
      terms: "Wysyłając formularz, akceptujesz {{link}}.",
      termsLink: "regulamin konferencji i zasady przetwarzania danych",
      deadline: "Zapisy trwają do {{date}}",
      seats: "Liczba miejsc ograniczona do {{n}}.",
      payOnline: "Zapłać online",
    },
    closed: {
      badge: "Zapisy zamknięte",
      title: "Dziękujemy — brak miejsc",
      text: "Zainteresowanie konferencją przerosło nasze oczekiwania. Wszystkie miejsca są zajęte.",
      waitlist: "Chcesz trafić na listę rezerwową? Napisz do nas:",
    },
  },

  payment: {
    title: "Instrukcja płatności",
    amount: "Kwota",
    amountText: "{{full}} (pełny pakiet) lub {{conf}} (tylko konferencja, lunch +{{lunch}})",
    deadline: "Termin płatności",
    deadlineText: "{{days}} dni od wysłania formularza",
    recipient: "Odbiorca",
    account: "Numer konta (PLN)",
    accountEur: "IBAN (EUR)",
    swift: "BIC/SWIFT",
    titleLabel: "Tytuł przelewu (ważne)",
    titleHint: "np. NWoW2027_Kowalska_Anna",
    qr: "Zapłać kodem QR (aplikacja bankowa)",
    invoice: "Faktura",
    invoiceText: "Jeśli potrzebujesz faktury, napisz na {{email}} podając nazwę organizacji, NIP, adres i e-mail do wysyłki.",
    todo: "TODO: numer konta zostanie podany po potwierdzeniu przez organizatora.",
  },

  footer: {
    org: "Organizatorzy: Szkoła Ziarno we współpracy ze Škola Libellus",
    address: "ul. Modlińska 184a, 03-119 Warszawa",
    linksTitle: "Na skróty",
    links: [
      { href: "#program", label: "Program" },
      { href: "#practical-info", label: "Informacje praktyczne" },
      { href: "#register", label: "Rejestracja" },
    ],
    contactTitle: "Kontakt",
    socialTitle: "Śledź nas",
    copy: "© 2027 Szkoła Ziarno. Wszelkie prawa zastrzeżone.",
    privacy: "Polityka prywatności",
    terms: "Regulamin i RODO",
    photo: "Zdjęcie w nagłówku",
    privacyUrl: "https://www.ziarno.edu.pl/polityka-prywatnosci/",
  },
};
