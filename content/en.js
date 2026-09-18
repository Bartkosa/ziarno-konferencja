// ============================================================
//  SITE CONTENT — ENGLISH
//  Items marked "TODO" need to be filled in.
// ============================================================
window.CONTENT = window.CONTENT || {};
window.CONTENT.en = {
  meta: {
    title: "A New Way of Working 2027 — Education Conference, Warsaw, 6–8 May",
    description: "Three days for education leaders: school visits, a conference at the Schuman Hall of UKSW and workshops at Ziarno School. Trust. Belonging. Purpose.",
  },

  nav: {
    brand: "Conference 2027",
    links: [
      { href: "#why", label: "Why attend" },
      { href: "#program", label: "Program" },
      { href: "#speakers", label: "Speakers" },
      { href: "#partners", label: "Partners" },
      { href: "#practical-info", label: "Practical info" },
      { href: "#faq", label: "FAQ" },
      { href: "#register", label: "Register" },
    ],
    cta: "Register",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  hero: {
    eyebrow: "Warsaw · 6–8 May 2027",
    title: "A New Way of Working",
    motto: "Trust. Belonging. Purpose.",
    lead: "Talks, workshops, and honest conversations for school leaders serious about character education and a personalized approach.",
    primary: "Register",
    secondary: "See the program",
    invite: "Download the invitation (PDF)",
    calendar: "Add to calendar",
    chips: [
      { icon: "calendar", text: "6–8 May 2027" },
      { icon: "pin", text: "Warsaw · UKSW, Ziarno School" },
      { icon: "users", text: "Limited number of seats" },
    ],
  },

  why: {
    eyebrow: "Why come",
    title: "Education is better done together",
    lead: "Three days in Warsaw with educators who share your mission — to form the whole person, not just teach a curriculum.",
    items: [
      { icon: "users", title: "Connect", text: "Join educators from Central and Eastern Europe. We create space for friendships and alliances that last years beyond the conference." },
      { icon: "message", title: "Share", text: "Your experience is invaluable. Exchange real-world tutoring and character formation solutions that work in actual classrooms, not just textbooks." },
      { icon: "bulb", title: "Reflect", text: "Pause and honestly reflect on the challenges of forming the whole person with peers who truly understand your mission." },
    ],
  },

  who: {
    eyebrow: "Who is it for",
    title: "Built for those who build school culture",
    lead: "Whether you lead, teach, or are just getting started — if whole-person formation drives your work, this is your gathering.",
    items: [
      { title: "School leaders", text: "Leading mission-driven schools." },
      { title: "Founders", text: "Creating new educational projects and seeking professional networks." },
      { title: "Teachers and tutors", text: "Practicing personalized accompaniment and mentoring." },
      { title: "Family–school partners", text: "Building unified educational environments between home and school." },
    ],
    cta: "See yourself here? Join us",
  },

  program: {
    eyebrow: "Program",
    title: "A three-day experience",
    lead: "From inspiring observation (school visits), through intellectual reflection (conference), to community action (workshops).",
    hint: "Hover over a session to see details",
    days: [
      {
        label: "Day 1",
        date: "Thursday, 6 May",
        theme: "Experience in the field",
        blocks: [
          {
            time: "optional",
            venue: "Strumienie (Józefów) and Azymut (Pruszków) schools",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Strumienie+Sternik+3+Maja+129+J%C3%B3zef%C3%B3w",
            kicker: "School visits (optional)",
            title: "Tours of Strumienie and Azymut schools",
            text: "Observe organisational culture in practice: lessons, tutoring, the daily rituals of a school.",
            bullets: ["Optional — tick it in the registration form.", "Small groups guided by the schools' staff.", "TODO: times, meeting point and transport from Warsaw."],
          },
          {
            time: "18:00",
            venue: "Let's GoCook, Jutrzenki 76, Warsaw",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Let%27s+GoCook+Jutrzenki+76+Warszawa",
            kicker: "Culinary networking",
            title: "Cooking workshop and shared dinner",
            text: "A relaxed setting for first connections. We cook together under a chef's guidance, then share what we've made.",
            note: "Please indicate dietary requirements in the registration form.",
          },
        ],
      },
      {
        label: "Day 2",
        date: "Friday, 7 May",
        theme: "Intellectual foundations",
        blocks: [
          {
            time: "9:15–14:00",
            venue: "Schuman Hall, UKSW, Wóycickiego 1/3, Warsaw",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=UKSW+W%C3%B3ycickiego+1%2F3+Warszawa",
            kicker: "Main conference",
            title: "When family and school pull in the same direction",
            text: "A series of expert talks in the heart of a university campus. Two pillars of personalized education: character formation and family–school partnership.",
            items: [
              { time: "9:15", title: "Registration and morning coffee", note: "Opening networking." },
              { time: "10:00", who: "TODO speaker", title: "Opening", note: "TODO session description." },
              { time: "10:15", who: "Lucia Calvo", title: "TODO talk title", note: "The identity of personalized-education schools and their role in modern society." },
              { time: "11:00", who: "Dobrochna Lama", title: "TODO talk title", note: "The power of tutoring and accompaniment in schools." },
              { time: "11:45", title: "Coffee break and networking" },
              { time: "12:15", who: "Stanisław Kowal", title: "TODO talk title", note: "Lessons from co-founding the Źródło and Wierchy schools in Kraków." },
              { time: "13:00", who: "TODO speaker", title: "TODO talk title" },
              { time: "13:45", title: "Closing remarks" },
              { time: "14:00", title: "Festive lunch on the UKSW campus" },
            ],
            note: "Simultaneous interpretation PL / EN / ES for all plenary sessions.",
          },
          {
            time: "18:00",
            venue: "Ziarno School gardens, Modlińska 184a, Warsaw",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa",
            kicker: "Garden party",
            title: "Evening reception in the gardens of Ziarno School",
            text: "From academic reflection to community celebration under the open sky.",
            bullets: ["Dinner, music and the kind of conversations that only happen outdoors.", "Dress for the weather — part of the evening is outside."],
          },
        ],
      },
      {
        label: "Day 3",
        date: "Saturday, 8 May",
        theme: "Practitioner's workshop",
        blocks: [
          {
            time: "8:00",
            venue: "Ziarno School, Modlińska 184a",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa",
            kicker: "Morning",
            title: "Holy Mass (optional)",
            text: "For those who wish — at Ziarno School. Coffee and a light breakfast afterwards.",
          },
          {
            time: "9:30–13:00",
            venue: "Ziarno School, Modlińska 184a",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa",
            kicker: "Workshops — practical sessions",
            title: "Three parallel workshop blocks",
            text: "An interactive small-group experience (limited to 20 people) guaranteeing direct contact with the speakers. You choose your sessions in the registration form.",
            items: [
              { time: "9:30", title: "Workshop block 1", note: "Parallel sessions, chosen in the registration form." },
              { time: "10:30", title: "Break" },
              { time: "10:45", title: "Workshop block 2" },
              { time: "11:45", title: "Break" },
              { time: "12:00", title: "Workshop block 3" },
              { time: "13:00", title: "Farewell community lunch" },
            ],
          },
          {
            time: "15:00",
            venue: "Old Town, Warsaw",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Stare+Miasto+Warszawa",
            kicker: "Finale · bonus program",
            title: "Guided tour of Warsaw's Old Town",
            text: "An exclusive guided walk through the UNESCO-listed Old Town.",
            note: "Confirm your participation in the registration form.",
          },
        ],
      },
    ],
    workshops: {
      title: "Workshops — chosen at registration",
      text: "Each workshop is limited to 20 participants. The final schedule and repetitions will be adjusted to the number of registrations.",
      items: [
        { speaker: "Lucia Calvo", sessions: [{ title: "TODO workshop title", lang: "ES · PL interpretation" }] },
        { speaker: "Dobrochna Lama", sessions: [{ title: "Co sprawia, że tutoring naprawdę działa?", lang: "PL" }, { title: "What makes tutoring actually work?", lang: "EN" }] },
        { speaker: "Stanisław Kowal", sessions: [{ title: "TODO workshop title", lang: "PL" }] },
        { speaker: "TODO facilitator", sessions: [{ title: "TODO workshop title", lang: "EN" }] },
      ],
    },
    footnote: "Coffee breaks and lunches included · languages: Polish, English, Spanish (with interpretation)",
  },

  speakers: {
    eyebrow: "Speakers",
    title: "Practitioners, authors, mentors",
    lead: "People running schools, writing about education, and mentoring students every day — with strong experience and real stories behind their work.",
    readMore: "Read more",
    readLess: "Show less",
    items: [
      { name: "Lucia Calvo", role: "Identity of personalized-education schools", short: "Expert on the identity of personalized-education schools and their role in modern society.", bio: "TODO full bio: experience, publications, current role.", photo: "" },
      { name: "Dobrochna Lama", role: "Tutoring and personalization", short: "Experienced practitioner and mentor specialising in school tutoring and personalising the educational process.", bio: "Emphasises the power of accompanying the student. TODO full bio.", photo: "" },
      { name: "Stanisław Kowal", role: "Jagiellonian University · Źródło and Wierchy schools", short: "Lecturer at the Faculty of Pedagogy, Jagiellonian University; co-founder of the Źródło and Wierchy schools in Kraków.", bio: "TODO full bio.", photo: "" },
    ],
  },

  organisers: {
    eyebrow: "Organisers",
    title: "Host and content partner",
    items: [
      { name: "Ziarno School", tag: "Host of the 2027 edition", text: "An educational institution in Warsaw — a preschool and a bilingual primary school — a living example of the values discussed: personalization, family partnership and character education.", url: "https://www.ziarno.edu.pl/", logo: "ziarno" },
      { name: "Škola Libellus", tag: "Initiator of the NWoW series", text: "A school in Bratislava — initiator and strategic content partner of the New Way of Working series. Host of the 2026 edition, with whom we co-create the program and the participants' network.", url: "https://skolalibellus.sk/", logo: "libellus" },
    ],
  },

  partners: {
    eyebrow: "Partners",
    title: "United by a shared vision for education",
    items: [
      { name: "EASSE", url: "https://www.easse.org/", logo: "" },
      { name: "Be-come", url: "https://be-come.org/en/", logo: "" },
      { name: "Family Academy", url: "https://www.ziarno.edu.pl/akademia-rodzinna/", logo: "" },
      { name: "TODO partner", url: "#", logo: "" },
    ],
    media: { title: "Media partners", items: [{ name: "TODO", url: "#", logo: "" }] },
    callout: { title: "Looking for conference partners", text: "Want to support education and raise the visibility of your organisation? We welcome new partners and sponsors.", cta: "Write to us" },
  },

  practical: {
    eyebrow: "Practical information",
    title: "At a glance",
    glance: [
      { icon: "calendar", label: "Dates", text: "6–8 May 2027 (Thursday: school visits, Friday: conference, Saturday: workshops)" },
      { icon: "pin", label: "Venues", text: "UKSW — Schuman Hall (Friday), Ziarno School (garden party and Saturday), Let's GoCook (Thursday)" },
      { icon: "euro", label: "Fee", text: "100 EUR full package · 40 EUR conference only (+10 EUR lunch). Details in the Register section." },
      { icon: "globe", label: "Languages", text: "Polish, English, Spanish — simultaneous interpretation of plenary sessions" },
    ],
    appNote: { title: "Participant app", text: "Registered participants will receive access to materials, workshop selection and the participant list before the conference. Details will follow by e-mail." },
    detailsTitle: "Useful details for participants",
    accordion: [
      { title: "Conference locations", html: "<p><strong>Friday — UKSW, Schuman Hall</strong><br>Wóycickiego 1/3, 01-938 Warsaw (Bielany campus) · <a href='https://www.google.com/maps/search/?api=1&query=UKSW+W%C3%B3ycickiego+1%2F3+Warszawa' target='_blank' rel='noopener'>Open in Google Maps</a></p><p><strong>Friday evening and Saturday — Ziarno School</strong><br>Modlińska 184a, 03-119 Warsaw · <a href='https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa' target='_blank' rel='noopener'>Open in Google Maps</a></p><p><strong>Thursday evening — Let's GoCook</strong><br>Jutrzenki 76, Warsaw · <a href='https://www.google.com/maps/search/?api=1&query=Let%27s+GoCook+Jutrzenki+76+Warszawa' target='_blank' rel='noopener'>Open in Google Maps</a></p><p><strong>Thursday — school visits</strong><br>Strumienie School, 3 Maja 129, Józefów · Azymut School, Staszica 1, Pruszków (TODO: confirm program and transport)</p>" },
      { title: "Getting to Warsaw", html: "<p><strong>By plane:</strong> Warsaw Chopin Airport (WAW) — about 30 min to the centre by SKM/KM train or bus 175; Warsaw Modlin (WMI) — about 45 min by shuttle bus and train.</p><p><strong>By train:</strong> Warszawa Centralna — about 35 min to UKSW (metro M1 to Młociny + bus), about 30 min to Ziarno School (buses towards Białołęka).</p><p><strong>By car:</strong> parking on the UKSW campus (TODO: access rules) and at Ziarno School.</p>" },
      { title: "Accommodation", html: "<p>We recommend staying in the city centre or in Bielany/Żoliborz (easy access to UKSW). TODO: list of 3–4 hotels with links.</p><p>Also check Booking.com or Airbnb. Need help? Write to <a href='mailto:{{email}}'>{{email}}</a></p>" },
      { title: "Local transport", html: "<p>Warsaw has a simple, affordable public transport system (ZTM). Buy tickets in the <strong>Jakdojade</strong> app, at ticket machines, or by tapping a contactless card on board (selected vehicles).</p><p>A 75-minute ticket covers most journeys between our venues. Taxis: Bolt, Uber, FreeNow.</p>" },
      { title: "Communication", html: "<p>Registered participants will be added to a WhatsApp group for practical updates. TODO: group link.</p>" },
      { title: "Payment instructions", payment: true },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    lead: "Didn't find your answer? Write to {{email}}",
    items: [
      { q: "Can I come only to the Friday conference?", a: "<p>Yes. The 'Conference only' package covers the plenary sessions on 7 May and coffee breaks, with an optional lunch at UKSW. Saturday workshops, Thursday dinner and the garden party are part of the full package.</p>" },
      { q: "What language is the conference in?", a: "<p>Friday plenary sessions have simultaneous interpretation Polish / English / Spanish. Workshops are held in the language shown next to each session; several run in two language versions.</p>" },
      { q: "How do I pay and when is my registration valid?", a: "<p>The easiest way is by card in the registration form. You can also pay by bank transfer within {{days}} days of registering — details in Practical information. Your seat is confirmed once the payment arrives.</p>" },
      { q: "Will I get an invoice?", a: "<p>Yes. Tick the option in the form and enter your organisation's details (name, VAT number, address). We'll send the invoice by e-mail.</p>" },
      { q: "What if I can't come?", a: "<p>Until 31 March 2027 we refund the full fee, until 15 April half of it; after that no refund is possible, but you can always transfer your seat to someone else. Details in the <a href='regulamin.html#en'>terms</a>.</p>" },
      { q: "I need a visa invitation letter — can you issue one?", a: "<p>Yes. After paying, e-mail {{email}} with your passport details and we'll send a personal invitation letter as a PDF.</p>" },
      { q: "Do you cater for dietary requirements?", a: "<p>Yes — vegetarian, vegan, gluten-free and others. Enter your requirements in the form; they apply to the cooking workshop, lunches and the garden party.</p>" },
      { q: "Where can I park and how do I get there?", a: "<p>UKSW has a campus car park on Wóycickiego street; Ziarno School has visitor parking. Public transport and airport connections are described in Practical information.</p>" },
      { q: "Are the Thursday school visits mandatory?", a: "<p>No, they are optional. Tick your participation in the form — places in the schools are limited.</p>" },
      { q: "How do I choose workshops?", a: "<p>You'll indicate three preferences in the registration form. We'll confirm the final allocation by e-mail no later than two weeks before the conference.</p>" },
    ],
  },

  pricing: {
    eyebrow: "Fees and registration",
    title: "Choose your package",
    lead: "We clearly recommend the full package — the entire three-day experience, from school visits to workshops.",
    packages: [
      { key: "full", name: "Full package (3 days)", badge: "Recommended", includes: ["All sessions and school visits", "Full catering: GoCook dinner, UKSW lunch, garden party, Saturday lunch", "Small-group workshops", "Old Town guided tour"] },
      { key: "conference", name: "Conference only (7 May)", badge: "", includes: ["Plenary sessions on 7 May", "Coffee breaks", "Lunch at UKSW: +{{lunch}} (optional)"] },
    ],
    perPerson: "per person",
    earlyBird: "Early bird until {{date}}",
    regular: "from {{date}}: {{price}}",
    stepsTitle: "How to register",
    steps: ["Fill in the registration form (below).", "Pay by bank transfer within {{days}} days — see Payment instructions.", "Once your payment is received, you'll get a confirmation e-mail."],
  },

  register: {
    open: {
      title: "Registration form",
      lead: "Enter your details, choose a package and preferred workshops, and tell us about dietary requirements. Confirmation and payment details will follow by e-mail.",
      openForm: "Open the form in a new tab",
      pending: "The registration form will appear here — enter the Tally form ID (or Google Forms address) in js/config.js.",
      terms: "By submitting the form you accept the {{link}}.",
      termsLink: "conference terms and data-processing rules",
      deadline: "Registration closes {{date}}",
      seats: "Limited to {{n}} participants.",
      payOnline: "Pay online",
    },
    closed: {
      badge: "Registration closed",
      title: "Thank you — we're full",
      text: "The response has been overwhelming. All seats are taken.",
      waitlist: "Want to join the waiting list? Write to us:",
    },
  },

  payment: {
    title: "Payment instructions",
    amount: "Amount",
    amountText: "{{full}} (full package) or {{conf}} (conference only, lunch +{{lunch}})",
    deadline: "Payment deadline",
    deadlineText: "{{days}} days after submitting the form",
    recipient: "Recipient",
    account: "Account number (PLN)",
    accountEur: "IBAN (EUR)",
    swift: "BIC/SWIFT",
    titleLabel: "Payment reference (important)",
    titleHint: "e.g. NWoW2027_Smith_John",
    qr: "Pay via QR code (banking app)",
    invoice: "Invoice",
    invoiceText: "If you require an invoice, e-mail {{email}} with your organisation name, VAT/company ID, billing address and e-mail.",
    todo: "TODO: bank details will be provided once confirmed by the organiser.",
  },

  footer: {
    org: "Organised by Ziarno School in cooperation with Škola Libellus",
    address: "Modlińska 184a, 03-119 Warsaw, Poland",
    linksTitle: "Quick links",
    links: [
      { href: "#program", label: "Program" },
      { href: "#practical-info", label: "Practical info" },
      { href: "#register", label: "Register" },
    ],
    contactTitle: "Contact",
    socialTitle: "Follow us",
    copy: "© 2027 Ziarno School. All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms and GDPR",
    photo: "Header photo",
    privacyUrl: "https://www.ziarno.edu.pl/polityka-prywatnosci/",
  },
};
