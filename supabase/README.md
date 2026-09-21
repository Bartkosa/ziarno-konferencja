# Portal uczestnika — wdrożenie na Supabase

Portal (`/moje`) i panel organizatora (`/admin`) są podłączone do projektu `uvonqpbngdwlxwybbnxu` (`portal.backend: "supabase"`).
Tryb testowy bez bazy: `portal.backend: "mock"` w `js/config.js`.

## Stan wdrożenia i lista kontrolna (21.09.2026)

| Element | Stan | Co zrobić |
|---|---|---|
| Schemat bazy + migracje (`photo_consent`, `phone`, `invoice_requested`) | ✅ wdrożone (`npx supabase db push`) | — |
| Funkcja `tally-webhook` (v5), sygnatura Tally | ✅ wdrożona, odrzuca żądania bez podpisu | — |
| Tally PL `RGO1Xv` → webhook | ✅ testowe zgłoszenie trafiło do bazy | — |
| Tally EN `7RQY4L` → webhook | ❓ nie do sprawdzenia z kodu | W Tally EN: Integrations → Webhooks → ten sam URL i Signing secret |
| Powrót na stronę po wysłaniu (Tally *Redirect on completion*) | ❌ do ustawienia | PL: `https://conference.ziarno.edu.pl/?registered=1#register`, EN: `https://conference.ziarno.edu.pl/?lang=en&registered=1#register` |
| Mail powitalny przez Resend | ❌ brak sekretu `RESEND_API_KEY` | `npx supabase secrets set RESEND_API_KEY=re_...` po weryfikacji domeny `ziarno.edu.pl` w Resend. Do tego czasu webhook wysyła zapasowo zwykły magic link przez Supabase Auth (szablon „Magic Link”, limity SMTP projektu) |
| SMTP dla Supabase Auth (linki logowania z `/moje`) | ❓ | Authentication → SMTP settings → Resend; bez tego wbudowany mailer ma limit kilku maili/h |
| Ważność linku z maila | ⚠️ domyślnie 1 h | Authentication → Providers → Email → *Email OTP expiration* = 86400 (24 h). Wygasły link portal obsługuje: prosi o e-mail i wysyła nowy |
| Redirect URLs | ❓ | Authentication → URL configuration: `https://conference.ziarno.edu.pl/moje/` **i** `https://conference.ziarno.edu.pl/admin/` (panel organizatora loguje teraz prosto do `/admin/`) |
| Dane do przelewu na stronie | ❌ `TODO` w `js/config.js` (`bank.ibanPln` itd.) | Mail powitalny i ekran „Dziękujemy” kierują do Instrukcji płatności — bez IBAN uczestnik nie ma jak zapłacić |

Sekrety i funkcje sprawdzisz poleceniami `npx supabase secrets list` i `npx supabase functions list` (CLI przez `npx`, projekt jest zlinkowany).

## Jak wygląda ścieżka uczestnika

1. **Zapis** — formularz Tally osadzony w sekcji „Rejestracja” (przyciski „Zapisz się” przewijają do formularza; link „w nowej karcie” jest zapasowy).
2. **Po wysłaniu** — strona pokazuje „Dziękujemy za zgłoszenie” z 3 krokami i przyciskami: panel uczestnika, instrukcja płatności, kalendarz.
   Osadzony formularz zgłasza wysłanie zdarzeniem `Tally.FormSubmitted`; wersja otwarta w nowej karcie wraca przez *Redirect on completion* (`?registered=1`).
3. **Webhook** — rekord w `participants` (upsert po e-mailu; ponowne zgłoszenie nie kasuje opłaty ani wyborów z panelu) + mail powitalny z jednorazowym linkiem.
4. **Panel `/moje`** — link z maila loguje bez hasła; sesja zostaje w przeglądarce, więc kolejne wejścia nie wymagają maila.
   Osoba bez sesji (nowe urządzenie, wygasły link) podaje e-mail z formularza i dostaje nowy link. Osoba zalogowana bez zgłoszenia widzi, co zrobić; organizatorka z listy `admins` dostaje przejście do `/admin`.

## 1. Projekt Supabase (0 zł)

## 1. Projekt Supabase (0 zł)

1. <https://supabase.com> → New project (region: EU, np. Frankfurt). Zapisz **Project URL** i **anon key** (Settings → API).
2. SQL Editor → wklej `supabase/schema.sql` → Run. Tworzy tabele, widoki, funkcję `pick_session`, RLS i sesje warsztatowe.
3. Table editor → `admins` → dodaj e-maile organizatorek (mają dostęp do `/admin`).
4. Authentication → Providers → Email: włącz **Magic link**, wyłącz „Confirm email” (użytkownicy nie rejestrują się sami).
   Authentication → URL configuration → Site URL `https://conference.ziarno.edu.pl`, Redirect URLs: `https://conference.ziarno.edu.pl/moje/`, `https://conference.ziarno.edu.pl/admin/`.
5. **SMTP**: darmowy plan Supabase wysyła tylko kilka maili na godzinę. Authentication → SMTP settings → podłącz Resend
   (host `smtp.resend.com`, user `resend`, hasło = API key, nadawca `nwow@ziarno.edu.pl` po weryfikacji domeny w Resend).

## 2. Webhook z Tally (zgłoszenie → konto → mail powitalny)

```bash
npm i -g supabase
supabase login
supabase link --project-ref <ref>
supabase secrets set TALLY_SIGNING_SECRET=<z Tally> RESEND_API_KEY=<z Resend> SITE_URL=https://conference.ziarno.edu.pl MAIL_FROM="NWoW 2027 <nwow@ziarno.edu.pl>"
supabase functions deploy tally-webhook --no-verify-jwt
```

W Tally: **każdy** formularz (PL i EN) → Integrations → Webhooks → URL `https://<ref>.supabase.co/functions/v1/tally-webhook`, ten sam Signing secret.
Etykiety pytań muszą pasować do `LABELS` w `supabase/functions/tally-webhook/index.ts` (Imię, Nazwisko, E-mail, Telefon, Organizacja, Stanowisko, Kraj, Pakiet, Dieta, Lista uczestników, Wizyty studyjne, Faktura, Wizerunek, Język — i ich angielskie odpowiedniki).
Blok płatności Stripe w Tally ustawia `paid = true` automatycznie; przelewy oznacza się ręcznie w `/admin`. Kraj zapisuje się tak, jak wpisał uczestnik (tekst, nie kod).

## 3. Przełączenie strony

W `js/config.js`:

```js
portal: { backend: "supabase", supabase: { url: "https://<ref>.supabase.co", anonKey: "<anon key>", redirectTo: "https://conference.ziarno.edu.pl/moje/" }, ... }
```

`git push` — gotowe (biblioteka supabase-js ładuje się zawsze, dane testowe są ignorowane w trybie supabase).

## Jak to działa

- Uczestnik zapisuje się w Tally → webhook zakłada rekord w `participants` i wysyła mail z linkiem do `/moje`.
- Logowanie: magic link (Supabase Auth). Dostęp tylko do własnego rekordu (RLS); pakietu i płatności uczestnik nie zmieni (trigger).
- Wybór warsztatów: `pick_session()` blokuje wiersz sesji, sprawdza limit i podmienia wybór w danym bloku — bez wyścigów.
- `/admin`: lista, obłożenie, catering, CSV; widoczne tylko dla e-maili z `admins`.
- Anon key jest publiczny z założenia; bezpieczeństwo zapewnia RLS w bazie.
