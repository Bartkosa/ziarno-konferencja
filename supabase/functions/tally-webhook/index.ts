// Supabase Edge Function: odbiera webhook z Tally po każdym zgłoszeniu,
// zakłada/aktualizuje uczestnika i wysyła mail powitalny z linkiem do panelu.
//
// Wdrożenie:  supabase functions deploy tally-webhook --no-verify-jwt
// Sekrety:    supabase secrets set TALLY_SIGNING_SECRET=... RESEND_API_KEY=... SITE_URL=https://conference.ziarno.edu.pl MAIL_FROM="NWoW 2027 <nwow@ziarno.edu.pl>"
// W Tally:    Integrations → Webhooks (w KAŻDYM formularzu: PL i EN) → URL funkcji, Signing secret = TALLY_SIGNING_SECRET
//
// Mail powitalny: Resend (RESEND_API_KEY) — pełna treść PL/EN z linkiem logowania.
// Bez RESEND_API_KEY: zapasowo wysyłany jest zwykły magic link przez Supabase Auth (szablon "Magic Link",
// SMTP z ustawień Auth) — uczestnik i tak dostaje działający link do panelu.
//
// Mapowanie pól: po ETYKIETACH pytań w Tally (LABELS poniżej) — dopasuj do swojego formularza.

import { createClient } from "npm:@supabase/supabase-js@2";

const LABELS: Record<string, string[]> = {
  first_name: ["Imię", "First name"],
  last_name: ["Nazwisko", "Last name"],
  email: ["E-mail", "Email"],
  phone: ["Telefon", "Phone"],
  org: ["Organizacja", "Organisation", "Organization", "Szkoła"],
  role: ["Stanowisko", "Role"],
  country: ["Kraj", "Country"],
  package: ["Pakiet", "Package"],
  diet: ["Dieta", "Wymagania dietetyczne", "Dietary requirements"],
  networking: ["Lista uczestników", "Participants list", "Networking"],
  school_visits: ["Wizyty studyjne", "School visits"],
  invoice: ["Faktura", "Invoice"],
  lang: ["Język", "Language"],
  photo: ["Wizerunek", "Photo consent"],
};
const PACKAGE_MAP: [RegExp, string][] = [[/pe[łl]n|full/i, "full"], [/obiad|lunch/i, "conference_lunch"], [/konferencj|conference/i, "conference"]];

async function verify(body: string, sig: string | null, secret: string) {
  if (!secret || !sig) return false; // bez skonfigurowanego sekretu webhook odrzuca wszystko
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body));
  const expected = btoa(String.fromCharCode(...new Uint8Array(mac)));
  return expected === sig;
}

function field(fields: any[], key: string): any {
  const names = LABELS[key] || [];
  const f = fields.find((x) => names.some((n) => String(x.label || "").toLowerCase().startsWith(n.toLowerCase())));
  if (!f) return undefined;
  const v = f.value;
  if (Array.isArray(v) && f.options) return f.options.filter((o: any) => v.includes(o.id)).map((o: any) => o.text).join(", ");
  if (f.options && typeof v === "string") { const o = f.options.find((o: any) => o.id === v); return o ? o.text : v; }
  return v;
}
const text = (v: any) => String(v ?? "").trim();
const yes = (v: any) => /tak|yes|true/i.test(text(v));
// checkbox z jedną opcją (np. "Chcę być widoczny…"): zaznaczone = wartość niepusta i nie "nie/no/false"
const checked = (v: any) => { const s = text(v); return s !== "" && !/^(nie|no|false)$/i.test(s); };

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("ok");
  const raw = await req.text();
  const secret = Deno.env.get("TALLY_SIGNING_SECRET") || "";
  if (!secret) return new Response("webhook not configured (TALLY_SIGNING_SECRET)", { status: 503 });
  if (!(await verify(raw, req.headers.get("tally-signature"), secret))) return new Response("bad signature", { status: 401 });
  const payload = JSON.parse(raw);
  const d = payload.data || {};
  const fields = d.fields || [];

  const email = text(field(fields, "email")).toLowerCase();
  if (!email) return new Response("no email", { status: 400 });
  const pkgText = text(field(fields, "package"));
  const pkg = (PACKAGE_MAP.find(([re]) => re.test(pkgText)) || [null, "full"])[1];
  const langText = text(field(fields, "lang"));
  const lang = /en|angiel/i.test(langText) ? "en" : /pl|pol/i.test(langText) ? "pl" : /\(EN\)|english/i.test(text(d.formName)) ? "en" : "pl";
  // płatność Stripe w Tally (jeśli formularz ma blok Payment): pole typu PAYMENT ze statusem paid → paid = true
  const stripePaid = !!fields.find((f: any) => f.type === "PAYMENT" && /paid|succeeded/i.test(JSON.stringify(f.value || "")));

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  // ponowne zgłoszenie z tego samego e-maila: nie kasujemy opłaty ani opcji wybranych już w panelu
  const { data: existing } = await sb.from("participants").select("id, paid, options").ilike("email", email).maybeSingle();
  const row: Record<string, unknown> = {
    email, first_name: text(field(fields, "first_name")), last_name: text(field(fields, "last_name")),
    phone: text(field(fields, "phone")), org: text(field(fields, "org")), role: text(field(fields, "role")), country: text(field(fields, "country")).slice(0, 60),
    package: pkg, diet: text(field(fields, "diet")), networking_consent: checked(field(fields, "networking")), lang,
    options: { ...(existing?.options || {}), school_visits: yes(field(fields, "school_visits")) },
    photo_consent: checked(field(fields, "photo")),
    invoice_requested: checked(field(fields, "invoice")),
    tally_submission_id: d.submissionId || d.responseId || null,
  };
  if (stripePaid) { row.paid = true; row.paid_at = new Date().toISOString(); }
  const paid = stripePaid || !!existing?.paid;
  const { error } = await sb.from("participants").upsert(row, { onConflict: "email" });
  if (error) return new Response("db: " + error.message, { status: 500 });

  const site = Deno.env.get("SITE_URL") || "https://conference.ziarno.edu.pl";
  const portal = `${site}/moje/${lang === "en" ? "?lang=en" : ""}`;
  const pl = lang === "pl";
  const firstName = text(row.first_name);

  const resend = Deno.env.get("RESEND_API_KEY");
  if (resend) {
    // link logowania do panelu (jednorazowy; po wygaśnięciu uczestnik loguje się e-mailem na /moje)
    const { data: link, error: lerr } = await sb.auth.admin.generateLink({ type: "magiclink", email, options: { redirectTo: `${site}/moje/` } });
    const url = lerr ? portal : link.properties.action_link;
    const btn = `style="display:inline-block;background:#f9b33b;color:#1b2f52;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700"`;
    const html = pl
      ? `<p>Dzień dobry${firstName ? " " + firstName : ""}!</p>
<p>Dziękujemy za zgłoszenie na <strong>A New Way of Working 2027</strong> (Warszawa, 6–8 maja 2027).</p>
<p>W panelu uczestnika wybierzesz warsztaty, potwierdzisz program dodatkowy, podasz dietę i zobaczysz listę uczestników.</p>
<p><a href="${url}" ${btn}>Otwórz panel uczestnika</a></p>
<p style="color:#555;font-size:14px">Ten link loguje bez hasła i jest jednorazowy. Gdy wygaśnie, wejdź na <a href="${portal}">${site}/moje</a> i podaj ten adres e-mail — wyślemy nowy.</p>
<p>${paid ? "Płatność otrzymaliśmy — miejsce jest potwierdzone." : `Miejsce potwierdzimy po zaksięgowaniu wpłaty. Dane do przelewu: <a href="${site}/#practical-info">${site}/#practical-info</a>`}</p>
<p>Do zobaczenia w Warszawie!<br>Zespół Szkoły Ziarno</p>`
      : `<p>Hello${firstName ? " " + firstName : ""}!</p>
<p>Thank you for registering for <strong>A New Way of Working 2027</strong> (Warsaw, 6–8 May 2027).</p>
<p>In your participant portal you choose workshops, confirm the extra program, tell us about your diet and see the participants list.</p>
<p><a href="${url}" ${btn}>Open the participant portal</a></p>
<p style="color:#555;font-size:14px">This link signs you in without a password and works once. When it expires, go to <a href="${portal}">${site}/moje</a> and enter this e-mail address — we'll send a new one.</p>
<p>${paid ? "We've received your payment — your seat is confirmed." : `Your seat is confirmed once the payment arrives. Bank details: <a href="${site}/#practical-info">${site}/#practical-info</a>`}</p>
<p>See you in Warsaw!<br>Ziarno School team</p>`;
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${resend}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: Deno.env.get("MAIL_FROM") || "NWoW 2027 <nwow@ziarno.edu.pl>", to: [email], subject: pl ? "NWoW 2027 — potwierdzenie zgłoszenia i panel uczestnika" : "NWoW 2027 — registration confirmed, your participant portal", html }),
    });
    if (!r.ok) console.error("resend:", r.status, await r.text());
  } else {
    // zapasowo: magic link z Supabase Auth (szablon Magic Link, SMTP z ustawień Auth; limit maili/h wg ustawień projektu)
    const anon = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!);
    const { error: oerr } = await anon.auth.signInWithOtp({ email, options: { emailRedirectTo: `${site}/moje/` } });
    if (oerr) console.error("otp:", oerr.message);
  }
  return new Response("ok");
});
