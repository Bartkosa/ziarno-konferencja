# Portal uczestnika — wdrożenie na Supabase

Portal (`/moje`) i panel organizatora (`/admin`) działają dziś w trybie **mock** (dane testowe w przeglądarce).
Przełączenie na produkcję to 6 kroków, bez zmian w kodzie strony poza `js/config.js`.

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

W Tally: formularz → Integrations → Webhooks → URL `https://<ref>.functions.supabase.co/tally-webhook`, ustaw Signing secret.
Etykiety pytań muszą pasować do `LABELS` w `supabase/functions/tally-webhook/index.ts` (Imię, Nazwisko, E-mail, Organizacja, Stanowisko, Kraj, Pakiet, Dieta, Lista uczestników, Wizyty studyjne, Język).
Blok płatności Stripe w Tally ustawia `paid = true` automatycznie; przelewy oznacza się ręcznie w `/admin`.

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
