# A New Way of Working 2027 — strona konferencji (conference.ziarno.edu.pl)

Statyczna strona one-page (HTML + CSS + JS, bez builda) w kolorach Ziarna (granat + złoto), dwujęzyczna PL/EN.
Zapisy przez Google Forms, płatność przelewem z instrukcją i kodem QR.

## Struktura

| Plik | Co tu jest |
|---|---|
| `js/config.js` | **ustawienia**: stan zapisów, termin, limit miejsc, linki do Google Forms (PL/EN), ceny, dane do przelewu, e-mail biura, logotypy, zdjęcie hero |
| `content/pl.js` | **cała treść po polsku** (hero, dlaczego warto, dla kogo, program, warsztaty, prelegenci, organizatorzy, partnerzy, info praktyczne, cennik, rejestracja, stopka) |
| `content/en.js` | to samo po angielsku |
| `index.html` | szkielet strony (nagłówek, puste sekcje, stopka) |
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

Strona: <http://localhost:5173>. Wersja angielska: <http://localhost:5173/?lang=en>.

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

## Zapisy — Google Forms

1. <https://forms.google.com> → nowy formularz (jeden dwujęzyczny albo dwa: PL i EN).
   Pola: imię, nazwisko, e-mail, telefon, organizacja i stanowisko, kraj,
   **pakiet** (pełny 100 EUR / tylko konferencja 40 EUR / konferencja + lunch 50 EUR),
   **warsztaty – 3 preferencje** (lista z `program.workshops`), **wymagania dietetyczne**,
   udział w zwiedzaniu Starego Miasta (tak/nie), dane do faktury (opcjonalnie),
   zgoda RODO (wymagana), zgoda na wizerunek.
2. Ustawienia → Odpowiedzi: „Zbieraj adresy e-mail” i „Wysyłaj kopię odpowiedzi”.
3. Ustawienia → Prezentacja → **Komunikat potwierdzający**: wklej dane do przelewu i termin (te same co na stronie).
4. Odpowiedzi → ikona Arkuszy → utwórz arkusz; dodaj kolumnę „Zapłacono”.
5. Wyślij → `<>` → skopiuj adres z `src="..."` (bez `?embedded=true`) → `formUrl.pl` / `formUrl.en` w `js/config.js`.

Limit miejsc: Google Forms nie zamyka się sam – użyj dodatku **formLimiter** albo ustaw
`registrationOpen: false` w `config.js`. Po dacie `registrationDeadline` strona sama przełącza
się na stan „zapisy zamknięte / lista rezerwowa”.

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
