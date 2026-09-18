# A New Way of Working 2027 — strona konferencji (conference.ziarno.edu.pl)

Statyczna strona one-page (HTML + CSS + JS, bez builda) w kolorach Ziarna (granat + złoto), dwujęzyczna PL/EN.
Zapisy przez Google Forms, płatność przelewem z instrukcją i kodem QR.

## Struktura

| Plik | Co tu jest |
|---|---|
| `js/config.js` | **ustawienia**: język startowy, stan zapisów, termin, limit miejsc, Tally/Google Forms, ceny i early bird, dane do przelewu, e-mail biura, logotypy, zdjęcie hero, dane do .ics |
| `content/pl.js` | **cała treść po polsku** (hero, dlaczego warto, dla kogo, program, warsztaty, prelegenci, organizatorzy, partnerzy, info praktyczne, cennik, rejestracja, stopka) |
| `content/en.js` | to samo po angielsku |
| `index.html` | szkielet strony (nagłówek, puste sekcje, stopka) |
| `regulamin.html` | regulamin konferencji + klauzula RODO (PL/EN) — projekt do weryfikacji |
| `moje/`, `js/portal.js` | **portal uczestnika**: logowanie linkiem z maila, wybór warsztatów z limitem miejsc, program dodatkowy, dieta, lista uczestników |
| `admin/`, `js/admin.js` | panel organizatora: lista zgłoszeń, obłożenie warsztatów, catering, eksport CSV |
| `js/api.js` | warstwa danych portalu: tryb `mock` (dane testowe z `data/test-data.js` w przeglądarce) lub `supabase` (produkcja) |
| `content/portal.js` | teksty portalu i panelu PL/EN |
| `supabase/` | schemat bazy, webhook Tally → konto + mail powitalny, instrukcja wdrożenia |
| `tools/og.html` | źródło obrazka do udostępniania; render: headless Chrome 1200×630 → `images/og.jpg` |
| `js/render.js` | buduje sekcje z treści; oś czasu/akordeon programu, rozwijane bio, cennik, stany rejestracji, QR przelewu |
| `js/i18n.js` | przełącznik PL/EN (`?lang=en`, pamięta wybór) |
| `css/style.css` | style; kolory i fonty w `:root` |
| `images/` | `hero-placeholder.svg` (podmień na zdjęcie Warszawy), miejsce na logotypy i zdjęcia prelegentów |
| `CNAME`, `.nojekyll` | GitHub Pages |
| `dev-server.js` | podgląd lokalny |

## Podgląd lokalny

```bash
node dev-server.js
```

Strona: <http://localhost:5180>. Wersja angielska: <http://localhost:5180/?lang=en>.

## Co uzupełnić przed publikacją

Wyszukaj `TODO` w `js/config.js`, `content/pl.js`, `content/en.js`:

1. **Program piątku** – tytuły wystąpień i godziny (`program.days[1].blocks[0].items`).
2. **Wizyty studyjne** – godziny, punkt zbiórki, transport (`program.days[0]`).
3. **Warsztaty** – tytuły i prowadzący (`program.workshops.items`) – te same nazwy wpisz w Google Form.
4. **Prelegenci** – pełne bio i zdjęcia (`speakers.items[].bio`, `photo: "images/speakers/nazwisko.jpg"`).
5. **Partnerzy** – logotypy (`partners.items[].logo: "images/partners/nazwa.svg"`).
6. **Noclegi, grupa WhatsApp** (`practical.accordion`).
7. **Dane do przelewu** – numer konta PLN/EUR, SWIFT, nazwa odbiorcy (`config.bank`); dopóki jest `TODO`, strona pokazuje komunikat zamiast numeru i nie generuje QR.
8. **E-mail biura konferencji** (`config.contactEmail`), **limit miejsc**, **termin zapisów**.
9. **Grafika** – `images/hero-warszawa.jpg` (min. 1920×1080, wpisz ścieżkę w `config.heroImage`), `images/og.jpg` (1200×630, do udostępniania), logotyp SVG Ziarna (`config.logoZiarno`).

Fonty: nagłówki Playfair Display, tekst Inter (zgodnie ze specyfikacją). Żeby wrócić do fontów
ziarno.edu.pl, zmień `--serif` i `--sans` w `css/style.css` oraz link do Google Fonts w `index.html`.

## Zapisy — Tally (formularz + płatność Stripe w jednym)

1. Załóż konto na <https://tally.so> (darmowe) i podłącz Stripe (Settings → Integrations → Stripe; konto Stripe na szkołę).
2. Utwórz formularz PL (i osobny EN albo jeden dwujęzyczny). Pola: imię, nazwisko, e-mail, telefon,
   organizacja i stanowisko, kraj, **pakiet** (pole wyboru: pełny / tylko konferencja / konferencja + obiad),
   **wizyty studyjne w czwartek** (tak/nie), **warsztaty – 3 preferencje** (lista z `program.workshops`),
   **wymagania dietetyczne**, faktura (tak/nie → logika warunkowa pokazuje pola: nazwa, NIP/VAT, adres),
   **zgoda na regulamin i RODO** (wymagana, link do `regulamin.html`), zgoda na wizerunek (opcjonalna),
   blok **Payment** (Stripe) z kwotą zależną od pakietu i early bird.
3. Settings → Notifications: e-mail do biura przy każdym zgłoszeniu; Integrations → Google Sheets: eksport odpowiedzi.
4. Skopiuj ID formularza z adresu `https://tally.so/r/<ID>` → `registration.tally.pl` / `.en` w `js/config.js`
   (`registration.provider: "tally"`).

Google Forms nadal działa jako zapasowa opcja: `registration.provider: "google"` i adresy w `registration.google`.

Limit miejsc: w Tally ustaw „Close form after N submissions” (Settings → Access), a na stronie
`registrationOpen: false`, gdy chcesz pokazać stan „lista rezerwowa”. Po dacie `registrationDeadline`
strona przełącza się sama.

## Portal uczestnika (/moje) i panel organizatora (/admin)

Działa jak u Libellusa: po zapisie uczestnik dostaje mail z linkiem, loguje się bez hasła i sam wybiera
warsztaty (jedna sesja na blok, limit miejsc pilnowany przez bazę), potwierdza program dodatkowy, podaje dietę
i widzi listę uczestników, którzy wyrazili zgodę. Organizatorki mają `/admin` z listami i eksportem.

Portal jest podłączony do Supabase (`portal.backend: "supabase"` w `js/config.js`, projekt `uvonqpbngdwlxwybbnxu`).
Tryb testowy bez bazy: `portal.backend: "mock"` (dane z `data/test-data.js` w localStorage, link logowania na ekranie).
Wdrożenie krok po kroku, webhook Tally i SMTP: `supabase/README.md`.

## Regulamin i RODO

`regulamin.html` zawiera projekt regulaminu (PL + EN) z zasadami zwrotów (100% do 31.03, 50% do 15.04)
oraz klauzulę informacyjną RODO. Pola w [nawiasach] uzupełnia organizator; **dokument wymaga przeglądu
prawnego przed publikacją**. Link jest w stopce i pod formularzem zapisów.

## Płatność

- Domyślnie: **przelew** – dane w akordeonie „Instrukcja płatności” + kod QR (polski standard
  przelewowy, czytany przez aplikacje bankowe; wymaga numeru konta PLN i kwoty w PLN w `config.prices.full.pln`).
- Opcjonalnie: **płatność online** – wklej link Stripe Payment Link / Przelewy24 do `config.paymentUrl`,
  pojawi się przycisk „Zapłać online” pod formularzem. Stripe obsługuje BLIK, karty i EUR bez umowy z operatorem.
- Waluta: ceny są w EUR (jak w specyfikacji). Jeśli podasz `prices.*.pln`, strona pokaże też kwoty w PLN.

## Publikacja na conference.ziarno.edu.pl (GitHub Pages)

Repozytorium: <https://github.com/Bartkosa/ziarno-konferencja> (Pages włączone: gałąź `master`, katalog `/`,
domena własna `conference.ziarno.edu.pl` ustawiona).

1. **DNS (panel nazwa.pl, domena ziarno.edu.pl)** — dodaj rekord:
   `CNAME  conference  →  bartkosa.github.io`
2. Po propagacji DNS (zwykle do 1 h): GitHub → Settings → Pages → zaznacz **Enforce HTTPS**
   (certyfikat wystawia się automatycznie).
3. Każda kolejna zmiana: `git commit` + `git push` → strona aktualizuje się w ~1 min.

Sprawdzenie DNS: `nslookup conference.ziarno.edu.pl` powinno zwrócić alias na `bartkosa.github.io`.

Alternatywy: Cloudflare Pages / Netlify („New site from Git”, bez komendy build, katalog `/`),
albo katalog `public_html/konferencja/` obok WordPressa (wtedy adres `ziarno.edu.pl/konferencja/`).

Na ziarno.edu.pl dodaj w menu pozycję „Konferencja” z linkiem do subdomeny.
