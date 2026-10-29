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
    login: "Zaloguj się",
    loginHint: "Masz już zgłoszenie? Zaloguj się do panelu uczestnika",
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
    abstractMore: "Pełny opis wystąpienia",
    abstractLess: "Zwiń opis",
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
              { time: "10:15", who: "Lucía Calvo", lang: "EN", title: "TODO tytuł wystąpienia", note: "Tożsamość szkół edukacji spersonalizowanej i ich rola w nowoczesnym społeczeństwie." },
              { time: "11:00", who: "Dobrochna Lama", lang: "PL", title: "Kultura pracy, która wydobywa najlepsze z ludzi", note: "Zarządzanie, które służy, i ludzie na pierwszym miejscu — dwa Standardy Jakości Edukacji Spersonalizowanej w codziennej praktyce szkoły.",
                abstract: [
                  "Czy dobra szkoła zaczyna się w klasie? A może trochę wcześniej — w pokoju nauczycielskim, w gabinecie dyrektora i przy stole, przy którym zapadają decyzje?",
                  "Standardy Jakości Edukacji Spersonalizowanej patrzą na szkołę jak na żywy ekosystem. Wszyscy są w nim ze sobą połączeni i od siebie zależni. Dlatego to, jak pracują dorośli, przekłada się wprost na to, jak rozwijają się dzieci. Uczniowie uczą się wartości nie tylko z lekcji, ale przede wszystkim z tego, co widzą na co dzień.",
                  "Na wystąpieniu przyjrzymy się dwóm standardom, które budują serce kultury organizacyjnej szkoły:",
                  [
                    { lead: "Zarządzanie, które służy.", text: "Organ prowadzący i dyrekcja grają do jednej bramki. Wspólnie ustalają strategię, dzielą się nią z całym zespołem i podejmują decyzje dopiero po wysłuchaniu szkoły." },
                    { lead: "Ludzie na pierwszym miejscu.", text: "Przemyślana polityka personalna, rozwój kompetencji i relacje oparte na zaufaniu i szacunku. Liczy się prawdziwa praca zespołowa. Pracownikom powierza się odpowiedzialność, a nie tylko zadania. Jest miejsce na szczerą informację zwrotną, jasne zasady oceny i wynagradzania, dobre wdrożenie nowych nauczycieli i równowagę między pracą a rodziną." },
                  ],
                  "Pokażę, jak te zapisy zamieniają piękne idee w codzienne praktyki. Dzięki nim pracownik jest traktowany jak osoba, a nie zasób. Zamiast logiki „maksimum efektu przy minimum kosztów” pojawia się strategia, w której każdy ma szansę rosnąć.",
                  "Bo kiedy w szkole rozwijają się nauczyciele, rozwijają się też uczniowie. Zapraszam na rozmowę o tym, jak taką kulturę pracy budować u siebie.",
                ] },
              { time: "11:45", title: "Przerwa kawowa i networking" },
              { time: "12:15", who: "dr Stanisław Kowal", lang: "PL", title: "Misja, odpowiedzialność i sens odkrywane w pracy nauczyciela", note: "Jak nauczyciel odkrywa misję, odpowiedzialność i sens swojej pracy — i jak to pomaga uczniom odkrywać sens i wartość życia.",
                abstract: [
                  "Zagadnienia wystąpienia:",
                  ["Proces stawania się nauczycielem — zaangażowanie, kompetencje, rozumienie", "Znaczenie osobistego, egzystencjalnego doświadczenia spotkania — wychowanie i edukacja jako spotkanie osób", "Misja szkoły a poczucie misji nauczyciela", "Odpowiedzialność nauczyciela doświadczana i rozpoznawana w codzienności", "Sens odkrywany przez nauczyciela a odkrywanie sensu i wartości życia przez uczniów"],
                ] },
              { time: "13:00", who: "Magda Tecław", lang: "EN", title: "Kultura szkoły — ukryty program i dźwignia sukcesu placówki", note: "Czym jest kultura szkoły, jak wpływa na uczniów i co może zrobić lider, by ją kształtować.",
                abstract: [
                  "Podczas piątkowego wystąpienia spróbujemy uchwycić, czym naprawdę jest kultura szkoły. Przyjrzymy się „ukrytemu programowi” — nieplanowanym, a jednak codziennym lekcjom, które odbierają uczniowie — i jego wpływowi na ich dobrostan, osiągnięcia i rozwój jako przyszłych liderów i członków społeczności. Zastanowimy się też, co sprawia, że uczniowie i pracownicy naprawdę czują, że należą do szkoły, i dobrze się w niej czują.",
                  "Wspólnie zapytamy, czy i na ile kultura szkoły ma znaczenie oraz które jej elementy są najważniejsze dla uczniów, rodziców i nauczycieli. Opierając się na literaturze przedmiotu, omówimy typologie kultur szkolnych i odniesiemy je do naszych własnych placówek. Na koniec porozmawiamy o konkretnych strategiach dla liderów, którzy chcą kształtować i pielęgnować pozytywną kulturę szkoły.",
                  "Plan wystąpienia:",
                  ["Czym jest kultura szkoły?", "Dlaczego kultura szkoły jest kluczowa?", "Trzy poziomy kultury szkoły", "Typy kultur szkolnych", "Rola lidera — jak kształtować kulturę szkoły?", "„Kultura zjada strategię na śniadanie” (Peter Drucker) — pytania i autorefleksja"],
                  "W sobotę rozwiniemy te wątki w praktycznych, refleksyjnych ćwiczeniach podczas warsztatu w małej grupie.",
                ] },
              { time: "13:45", title: "Podsumowanie i zakończenie obrad" },
              { time: "14:00", title: "Uroczysty lunch na terenie UKSW" },
            ],
            note: "Wykłady po polsku i angielsku, z tłumaczeniem symultanicznym PL ↔ EN.",
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
            text: "Interaktywne doświadczenie w grupach do 35 osób, gwarantujące bezpośredni kontakt z prelegentami. Sesje wybierasz po zapisie w panelu uczestnika.",
            items: [
              { time: "9:30", title: "Blok warsztatowy 1", note: "Sesje równoległe, wybór w panelu uczestnika." },
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
      text: "Każdy warsztat jest ograniczony do 35 uczestników. Ostateczny układ i powtórzenia sesji dostosujemy do liczby zgłoszeń.",
      items: [
        { speaker: "Lucía Calvo", sessions: [{ title: "TODO tytuł warsztatu", lang: "EN" }, { title: "TODO tytuł warsztatu", lang: "ES" }] },
        { speaker: "Dobrochna Lama", sessions: [{ title: "Kultura pracy, która wydobywa najlepsze z ludzi — warsztat", lang: "PL" }, { title: "A work culture that brings out the best in people — workshop", lang: "EN" }] },
        { speaker: "Magda Tecław", sessions: [{ title: "Kształtowanie kultury szkoły w praktyce", lang: "PL" }, { title: "Shaping school culture in practice", lang: "EN" }] },
      ],
    },
    footnote: "Przerwy kawowe i lunche w cenie · języki: polski i angielski (wykłady z tłumaczeniem), jeden warsztat także po hiszpańsku",
  },

  speakers: {
    eyebrow: "Prelegenci",
    title: "Praktycy, autorzy, mentorzy",
    lead: "Ludzie, którzy prowadzą szkoły, piszą o edukacji i na co dzień towarzyszą uczniom — z doświadczeniem i prawdziwymi historiami za swoją pracą.",
    readMore: "Czytaj więcej",
    readLess: "Zwiń",
    items: [
      { name: "Lucía Calvo", role: "Red Educativa Arenales · Madryt", short: "Pedagożka i anglistka, która łączy kierowanie szkołami z pracą w klasie. Doradczyni sieci szkół Arenales, współpracuje z EASSE.", bio: "Urodziła się w Madrycie, a uczyła się w bardzo różnych szkołach: publicznych i prywatnych, koedukacyjnych i z edukacją zróżnicowaną, hiszpańskich i międzynarodowych — w Madrycie, Barcelonie, Cambridge, Rzymie i Sydney. Ukończyła pedagogikę (Magisterio y Ciencias de la Educación) na Uniwersytecie Complutense w Madrycie, a jako stypendystka — studia MA z lingwistyki na Macquarie University w Sydney. Zawodowo zawsze zajmowała się edukacją i nauczaniem angielskiego: dziesięć lat w szkolnictwie publicznym, potem w szkołach prywatnych i dotowanych przez państwo. Przez lata łączyła kierowanie kilkoma placówkami z uczeniem, zawsze w bliskim kontakcie z rodzinami i uczniami. Jest doradczynią sieci szkół Red Educativa Arenales i członkinią rady Fundacji Tacumi, która wspiera włączanie uczniów z niepełnosprawnością intelektualną do szkół ogólnodostępnych. Współpracuje z EASSE (European Association for Single-Sex Education) i należy do Hiszpańskiego Stowarzyszenia Kobiet Liderek w Edukacji. Zajmuje się formacją nauczycieli: wzmacnia ich przywództwo, poszerza horyzonty zawodowe i pomaga iść dalej w personalizacji edukacji.", photo: "images/speakers/lucia-calvo.jpg" },
      { name: "Dobrochna Lama", role: "Przywództwo i rozwój organizacji edukacyjnych", short: "Od ponad 20 lat łączy edukację, przywództwo i rozwój organizacyjny — jako nauczycielka, dyrektorka, konsultantka i menedżerka organizacji edukacyjnych.", bio: "Specjalizuje się w budowaniu i rozwijaniu organizacji, które pomagają ludziom wzrastać. Współtworzyła projekty edukacyjne o trwałym wpływie społecznym: szkolenia, rozwój liderów, prowadzenie placówek i wsparcie instytucji edukacyjnych w całej Polsce. Rozwijała programy obejmujące ponad 3000 nauczycieli rocznie, wspierała powstanie ponad 40 placówek edukacyjnych, zarządzała organizacjami zatrudniającymi ponad 200 osób i odpowiadała za budżety przekraczające 20 mln zł rocznych przychodów operacyjnych. Najbliższe są jej przedsięwzięcia tworzone od podstaw i organizacje w fazie dynamicznego wzrostu — jej mocną stroną jest przekładanie ambitnej wizji na sprawne struktury, procesy i zespoły. Ukończyła międzynarodowe programy menedżerskie w IESE Business School i Universidad Villanueva. Wierzy, że trwałe rezultaty powstają tam, gdzie wysoka jakość zarządzania spotyka się z troską o rozwój ludzi i jasno określoną misją.", photo: "images/speakers/dobrochna-lama.jpg" },
      { name: "dr Stanisław Kowal", role: "Uniwersytet Jagielloński · Fundacja Sternik-Kraków", short: "Doktor pedagogiki, adiunkt w Studium Pedagogicznym UJ, dyrektor ds. edukacji Fundacji Sternik-Kraków i współzałożyciel szkół pracujących w nurcie edukacji spersonalizowanej.", bio: "Przez wiele lat kierował Centrum Kształcenia Nauczycieli Uniwersytetu Pedagogicznego w Krakowie. Jest autorem wielu publikacji naukowych, przede wszystkim z zakresu pedeutologii (nauki o nauczycielu), a także tekstów popularyzujących wiedzę pedagogiczną w czasopismach dla nauczycieli, wychowawców i rodziców. Organizuje i prowadzi konferencje naukowe oraz popularyzatorskie dla nauczycieli i rodziców. Opracował programy studiów podyplomowych przygotowujących do pracy nauczyciela, w tym pierwsze w Polsce studia podyplomowe z edukacji spersonalizowanej. Ekspert Ministerstwa Edukacji Narodowej oraz Ministerstwa Nauki i Szkolnictwa Wyższego ds. standardu kształcenia nauczycieli. Tutor akademicki i rodzinny. Współzałożyciel przedszkola i szkół Źródło i Wierchy w Krakowie. Mąż Marii, ojciec Marii, Julianny, Franciszka, Józefa, Ludwika, Wojciecha i Andrzeja.", photo: "images/speakers/stanislaw-kowal.jpg" },
      { name: "Magda Tecław", role: "Haileybury Malta · kultura szkoły", short: "Nauczycielka i liderka edukacyjna z ponad 20-letnim doświadczeniem w brytyjskich szkołach prywatnych, autorka książki „Zawód Nauczyciel”. Obecnie uczy w Haileybury Malta.", bio: "Przez ponad dwie dekady mieszkała w Wielkiej Brytanii, gdzie uczyła w szkołach podstawowych i średnich oraz pełniła funkcje kierownicze. Ukończyła PGCE in Secondary Education na University of East London, MA in Leadership in Catholic Education na St Mary’s University w Londynie, MA in Education na University of York, MA in Comparative Education na University College London (UCL) oraz MSc in Educational Assessment na Uniwersytecie Oksfordzkim. Jest autorką książki „Zawód Nauczyciel”, wydanej w Polsce w 2024 roku. Wiedzę akademicką łączy z codzienną pracą w klasie i wspieraniem innych nauczycieli. Mieszka na Malcie i uczy w brytyjskiej szkole międzynarodowej Haileybury Malta. Prywatnie żona i mama trojga studentów oraz nastoletniej córki; w wolnych chwilach nurkuje.", photo: "images/speakers/magda-teclaw.jpg" },
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
      { icon: "globe", label: "Języki", text: "Polski i angielski — tłumaczenie symultaniczne wykładów PL ↔ EN" },
    ],
    appNote: { title: "Panel uczestnika", text: "Po zapisie dostaniesz e-mail z linkiem do panelu: wybór warsztatów, program dodatkowy, dieta, lista uczestników. Logowanie bez hasła — jednorazowym linkiem." },
    detailsTitle: "Przydatne informacje dla uczestników",
    accordion: [
      { title: "Lokalizacje", html: "<p><strong>Piątek — UKSW, Aula Schumana</strong><br>ul. Wóycickiego 1/3, 01-938 Warszawa (kampus Bielany) · <a href='https://www.google.com/maps/search/?api=1&query=UKSW+W%C3%B3ycickiego+1%2F3+Warszawa' target='_blank' rel='noopener'>Otwórz w Google Maps</a></p><p><strong>Piątek wieczór i sobota — Szkoła Ziarno</strong><br>ul. Modlińska 184a, 03-119 Warszawa · <a href='https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa' target='_blank' rel='noopener'>Otwórz w Google Maps</a></p><p><strong>Czwartek wieczór — Let's GoCook</strong><br>ul. Jutrzenki 76, Warszawa · <a href='https://www.google.com/maps/search/?api=1&query=Let%27s+GoCook+Jutrzenki+76+Warszawa' target='_blank' rel='noopener'>Otwórz w Google Maps</a></p><p><strong>Czwartek — wizyty studyjne</strong><br>Szkoła Strumienie, ul. 3 Maja 129, Józefów · Szkoła Azymut, ul. Staszica 1, Pruszków (TODO: potwierdzić program i transport)</p>" },
      { title: "Dojazd", html: "<p><strong>Samolot:</strong> Lotnisko Chopina (WAW) — ok. 30 min do centrum pociągiem SKM/KM lub autobusem 175; Lotnisko Modlin (WMI) — ok. 45 min autobusem i pociągiem.</p><p><strong>Pociąg:</strong> Warszawa Centralna — do UKSW ok. 35 min (metro M1 do stacji Młociny + autobus 114), do Szkoły Ziarno ok. 30 min (autobusy w kierunku Białołęki).</p>" },
      { title: "Transport miejski", html: "<p>Warszawa ma prostą i tanią komunikację (ZTM). Bilety kupisz w aplikacji <strong>Jakdojade</strong> lub <strong>mObywatel/ZTM</strong>, w biletomatach oraz zbliżeniowo kartą w autobusach i tramwajach (część pojazdów).</p><p>Bilet 75-minutowy wystarcza na większość przejazdów między naszymi lokalizacjami. Taksówki: Bolt, Uber, FreeNow.</p>" },
      { title: "Komunikacja", html: "<p>Zarejestrowani uczestnicy zostaną dodani do grupy WhatsApp z bieżącymi informacjami. TODO: link do grupy.</p>" },
      { title: "Instrukcja płatności", payment: true },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania",
    lead: "[[Nie znalazłeś odpowiedzi? Napisz: {{email}}]]",
    items: [
      { q: "Czy mogę przyjechać tylko na piątkową konferencję?", a: "<p>Tak. Pakiet „Tylko konferencja” obejmuje sesje plenarne 7 maja i przerwy kawowe, opcjonalnie obiad na UKSW. Warsztaty sobotnie, kolacja czwartkowa i Garden Party są w pakiecie pełnym.</p>" },
      { q: "W jakim języku odbywa się konferencja?", a: "<p>Piątkowe wykłady są po polsku lub po angielsku (język podajemy w programie) i mają tłumaczenie symultaniczne polski ↔ angielski. Warsztaty prowadzone są w języku podanym przy każdej sesji — zwykle w dwóch wersjach: po polsku i po angielsku; jeden warsztat po angielsku i po hiszpańsku.</p>" },
      { q: "Jak zapłacić i kiedy zgłoszenie jest ważne?", a: "<p>Przelewem w ciągu {{days}} dni od zgłoszenia — dane do przelewu i kod QR znajdziesz w sekcji Informacje praktyczne oraz w mailu powitalnym. Miejsce jest potwierdzone po zaksięgowaniu wpłaty; status widzisz w panelu uczestnika.</p>" },
      { q: "Czy otrzymam fakturę?", a: "<p>Tak. Zaznacz „Potrzebuję faktury” w formularzu[[, a po zgłoszeniu prześlij dane organizacji (nazwa, NIP lub numer VAT, adres) na {{email}}]]. Fakturę wyślemy e-mailem.</p>" },
      { q: "Co jeśli nie będę mógł przyjechać?", a: "<p>Do 31 marca 2027 zwracamy całą wpłatę, do 15 kwietnia połowę, później zwrot nie przysługuje, ale zawsze możesz przekazać miejsce innej osobie. Szczegóły w <a href='regulamin.html'>regulaminie</a>.</p>" },
      { q: "Potrzebuję zaproszenia do wizy — czy je wystawicie?", a: "<p>Tak. Po opłaceniu udziału napisz na {{email}} z danymi paszportowymi, a wyślemy imienne zaproszenie w PDF.</p>", contact: true },
      { q: "Czy uwzględniacie diety?", a: "<p>Tak — wegetariańską, wegańską, bezglutenową i inne. Wpisz wymagania w formularzu; dotyczy to warsztatów kulinarnych, obiadów i Garden Party.</p>" },
      { q: "Jak dojechać?", a: "<p>Dojazd komunikacją miejską i z lotnisk opisujemy w sekcji Informacje praktyczne.</p>" },
      { q: "Czy wizyty studyjne w czwartek są obowiązkowe?", a: "<p>Nie, są dla chętnych. Zaznacz udział w formularzu — liczba miejsc w szkołach jest ograniczona.</p>" },
      { q: "Jak wybiorę warsztaty?", a: "<p>Po zapisie zalogujesz się do panelu uczestnika i sam wybierzesz jedną sesję w każdym z trzech sobotnich bloków. Liczba miejsc w sesji jest ograniczona, a wybór możesz zmieniać do 23 kwietnia 2027.</p>" },
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

  portalBox: {
    title: "Jesteś już zapisany? Twój panel uczestnika działa.",
    text: "Zaloguj się e-mailem z formularza zapisów, żeby wybrać warsztaty, potwierdzić udział w programie dodatkowym, podać dietę i poznać innych uczestników przed konferencją.",
    cta: "Otwórz panel uczestnika",
    hint: "Użyj linku z maila powitalnego albo zaloguj się adresem e-mail podanym przy zapisie.",
  },

  register: {
    open: {
      title: "Formularz zapisów",
      lead: "Podaj dane, wybierz pakiet i wskaż wymagania dietetyczne — zajmie to 2 minuty. Potwierdzenie i link do panelu uczestnika (wybór warsztatów) otrzymasz e-mailem.",
      openForm: "Otwórz formularz w nowej karcie",
      thanksTitle: "Dziękujemy za zgłoszenie!",
      thanksLead: "Wysłaliśmy e-mail z potwierdzeniem i linkiem do panelu uczestnika. Nie widzisz go? Sprawdź spam albo zaloguj się w panelu adresem z formularza.",
      thanksSteps: ["Opłać udział przelewem w ciągu {{days}} dni — instrukcja poniżej.", "W panelu uczestnika wybierz warsztaty i potwierdź program dodatkowy.", "Dodaj konferencję do kalendarza i do zobaczenia w Warszawie!"],
      thanksPortal: "Otwórz panel uczestnika",
      thanksPay: "Instrukcja płatności",
      thanksCalendar: "Dodaj do kalendarza",
      thanksAgain: "Zapisać kolejną osobę",
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
    invoiceText: "Jeśli potrzebujesz faktury, zaznacz to w formularzu zapisów[[ i napisz na {{email}}, podając nazwę organizacji, NIP, adres i e-mail do wysyłki]].",
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
    privacyUrl: "regulamin.html#rodo",
  },
};
