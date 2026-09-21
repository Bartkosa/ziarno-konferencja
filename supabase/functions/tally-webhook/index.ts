// Supabase Edge Function: odbiera webhook z Tally po każdym zgłoszeniu,
// zakłada/aktualizuje uczestnika i wysyła mail powitalny z linkiem do panelu (Resend).
//
// Wdrożenie:  supabase functions deploy tally-webhook --no-verify-jwt
// Sekrety:    supabase secrets set TALLY_SIGNING_SECRET=... RESEND_API_KEY=... SITE_URL=https://conference.ziarno.edu.pl MAIL_FROM="NWoW 2027 <nwow@ziarno.edu.pl>"
// W Tally:    Integrations → Webhooks → URL funkcji, Signing secret = TALLY_SIGNING_SECRET
//
// Mapowanie pól: po ETYKIETACH pytań w Tally (LABELS poniżej) — dopasuj do swojego formularza.

import { createClient } from "npm:@supabase/supabase-js@2";

const LABELS: Record<string, string[]> = {
  first_name: ["Imię", "First name"],
  last_name: ["Nazwisko", "Last name"],
  email: ["E-mail", "Email"],
  org: ["Organizacja", "Organisation", "Organization", "Szkoła"],
  role: ["Stanowisko", "Role"],
  country: ["Kraj", "Country"],
  package: ["Pakiet", "Package"],
  diet: ["Dieta", "Wymagania dietetyczne", "Dietary requirements"],
  networking: ["Lista uczestników", "Participants list", "Networking"],
  school_visits: ["Wizyty studyjne", "School visits"],
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

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("ok");
  const raw = await req.text();
  const secret = Deno.env.get("TALLY_SIGNING_SECRET") || "";
  if (!secret) return new Response("webhook not configured (TALLY_SIGNING_SECRET)", { status: 503 });
  if (!(await verify(raw, req.headers.get("tally-signature"), secret))) return new Response("bad signature", { status: 401 });
  const payload = JSON.parse(raw);
  const d = payload.data || {};
  const fields = d.fields || [];

  const email = String(field(fields, "email") || "").trim().toLowerCase();
  if (!email) return new Response("no email", { status: 400 });
  const pkgText = String(field(fields, "package") || "");
  const pkg = (PACKAGE_MAP.find(([re]) => re.test(pkgText)) || [null, "full"])[1];
  const yes = (v: any) => /tak|yes|true/i.test(String(v || ""));
  // checkbox z jedną opcją (np. "Chcę być widoczny…"): zaznaczone = wartość niepusta i nie "nie/no"
  const checked = (v: any) => { const s = String(v ?? "").trim(); return s !== "" && !/^(nie|no|false)$/i.test(s); };
  const langText = String(field(fields, "lang") || "");
  const lang = /en|angiel/i.test(langText) ? "en" : /pl|pol/i.test(langText) ? "pl" : (payload.eventType && /en/i.test(String(d.formName || ""))) ? "en" : "pl";

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const row = {
    email, first_name: field(fields, "first_name") || "", last_name: field(fields, "last_name") || "",
    org: field(fields, "org") || "", role: field(fields, "role") || "", country: String(field(fields, "country") || "").slice(0, 2).toUpperCase(),
    package: pkg, diet: field(fields, "diet") || "", networking_consent: checked(field(fields, "networking")), lang,
    options: { school_visits: yes(field(fields, "school_visits")) },
    photo_consent: checked(field(fields, "photo")),
    tally_submission_id: d.submissionId || d.responseId || null,
    // płatność Stripe w Tally: pole "payment" w payloadzie → paid, jeśli status = paid
    paid: !!fields.find((f: any) => f.type === "PAYMENT" && /paid|succeeded/i.test(JSON.stringify(f.value || ""))),
  };
  const { error } = await sb.from("participants").upsert(row, { onConflict: "email" });
  if (error) return new Response("db: " + error.message, { status: 500 });

  // link logowania do panelu
  const site = Deno.env.get("SITE_URL") || "https://conference.ziarno.edu.pl";
  const { data: link, error: lerr } = await sb.auth.admin.generateLink({ type: "magiclink", email, options: { redirectTo: `${site}/moje/` } });
  const url = lerr ? `${site}/moje/` : link.properties.action_link;

  const resend = Deno.env.get("RESEND_API_KEY");
  if (resend) {
    const pl = lang === "pl";
    const html = pl
      ? `<p>Dzień dobry ${row.first_name}!</p><p>Dziękujemy za zgłoszenie na <strong>A New Way of Working 2027</strong> (Warszawa, 6–8 maja 2027).</p><p>Twój panel uczestnika: wybór warsztatów, program dodatkowy, dieta, lista uczestników.</p><p><a href="${url}" style="background:#f9b33b;color:#1b2f52;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700">Otwórz panel uczestnika</a></p><p>${row.paid ? "Płatność otrzymaliśmy — miejsce jest potwierdzone." : "Miejsce potwierdzimy po zaksięgowaniu wpłaty. Dane do przelewu: " + site + "/#practical-info"}</p><p>Do zobaczenia w Warszawie!<br>Zespół Szkoły Ziarno</p>`
      : `<p>Hello ${row.first_name}!</p><p>Thank you for registering for <strong>A New Way of Working 2027</strong> (Warsaw, 6–8 May 2027).</p><p>Your participant portal: workshop choice, extra program, diet, participants list.</p><p><a href="${url}" style="background:#f9b33b;color:#1b2f52;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700">Open the participant portal</a></p><p>${row.paid ? "We've received your payment — your seat is confirmed." : "Your seat is confirmed once the payment arrives. Bank details: " + site + "/#practical-info"}</p><p>See you in Warsaw!<br>Ziarno School team</p>`;
    await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${resend}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: Deno.env.get("MAIL_FROM") || "NWoW 2027 <nwow@ziarno.edu.pl>", to: [email], subject: pl ? "NWoW 2027 — potwierdzenie zgłoszenia i panel uczestnika" : "NWoW 2027 — registration confirmed, your participant portal", html }),
    });
  }
  return new Response("ok");
});
