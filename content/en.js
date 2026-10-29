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
    login: "Sign in",
    loginHint: "Already registered? Sign in to your participant portal",
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
    abstractMore: "Full talk description",
    abstractLess: "Hide description",
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
              { time: "10:15", who: "Lucía Calvo", lang: "EN", title: "TODO talk title", note: "The identity of personalized-education schools and their role in modern society." },
              { time: "11:00", who: "Dobrochna Lama", lang: "PL", title: "A Work Culture That Brings Out the Best in People", note: "Leadership that serves and people first — two of the Quality Standards for Personalized Education in a school’s everyday practice.",
                abstract: [
                  "Does a good school begin in the classroom? Or perhaps a little earlier — in the staff room, in the principal’s office, and at the table where decisions are made?",
                  "The Quality Standards for Personalized Education see the school as a living ecosystem. Everyone in it is connected and depends on one another. That is why the way adults work translates directly into the way children grow. Students learn values not only from lessons, but above all from what they see every day.",
                  "In this talk, we will take a closer look at two standards that form the heart of a school’s organizational culture:",
                  [
                    { lead: "Leadership that serves.", text: "The governing body and school leadership pull in the same direction. They set the strategy together, share it with the whole team, and make decisions only after listening to the school." },
                    { lead: "People come first.", text: "A thoughtful people policy, competence development, and relationships built on trust and respect. Real teamwork matters. Staff are entrusted with areas of responsibility, not just tasks. There is room for honest feedback, clear rules for evaluation and pay, good onboarding for new teachers, and a healthy work–family balance." },
                  ],
                  "I will show how these standards turn great ideas into everyday practice. Thanks to them, an employee is treated as a person, not a resource. Instead of the logic of “maximum results at minimum cost”, we find a strategy in which everyone has the chance to grow.",
                  "Because when teachers grow, students grow too. Join me for a conversation about how to build this kind of work culture in your own organization.",
                ] },
              { time: "11:45", title: "Coffee break and networking" },
              { time: "12:15", who: "Dr Stanisław Kowal", lang: "PL", title: "Mission, Responsibility and Meaning Discovered in a Teacher’s Work", note: "How teachers discover the mission, responsibility and meaning of their work — and how this helps students discover the meaning and value of life.",
                abstract: [
                  "Topics:",
                  ["Becoming a teacher — commitment, competence, understanding", "The personal, existential experience of encounter — upbringing and education as a meeting of persons", "The school’s mission and the teacher’s sense of mission", "A teacher’s responsibility, experienced and recognised in everyday life", "The meaning a teacher discovers, and students discovering the meaning and value of life"],
                ] },
              { time: "13:00", who: "Magda Tecław", lang: "EN", title: "School Culture: The Hidden Curriculum and Lever for Success", note: "What school culture is, how it shapes students, and what leaders can do to shape it.",
                abstract: [
                  "During Friday’s session, we will aim to define the true nature of school culture. We will examine the “hidden curriculum” — the unplanned yet frequent lessons students experience daily — and its impact on their well-being, achievement and personal development as future leaders and community members. We will also explore what fosters a genuine sense of belonging and enjoyment for both pupils and staff.",
                  "Together, we will ask whether, and how much, school culture matters, and which of its elements matter most to students, parents and educators. Drawing on key educational literature, we will examine established typologies of school culture and map them onto our own institutions. Lastly, we will discuss practical strategies for leaders who want to shape and nurture a positive school culture.",
                  "Outline:",
                  ["What is school culture?", "Why does culture matter?", "The three levels of culture", "Typology of school cultures", "The leader’s role — how to shape school culture", "“Culture eats strategy for breakfast” (Peter Drucker) — questions and reflection"],
                  "On Saturday, we will build on these themes through practical, reflective exercises in a small-group workshop.",
                ] },
              { time: "13:45", title: "Closing remarks" },
              { time: "14:00", title: "Festive lunch on the UKSW campus" },
            ],
            note: "Talks in Polish and English, with simultaneous interpretation PL ↔ EN.",
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
            text: "An interactive experience in groups of up to 35 people, guaranteeing direct contact with the speakers. You choose your sessions in the participant portal after registering.",
            items: [
              { time: "9:30", title: "Workshop block 1", note: "Parallel sessions, chosen in the participant portal." },
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
      text: "Each workshop is limited to 35 participants. The final schedule and repetitions will be adjusted to the number of registrations.",
      items: [
        { speaker: "Lucía Calvo", sessions: [{ title: "TODO workshop title", lang: "EN" }, { title: "TODO workshop title", lang: "ES" }] },
        { speaker: "Dobrochna Lama", sessions: [{ title: "Kultura pracy, która wydobywa najlepsze z ludzi — warsztat", lang: "PL" }, { title: "A work culture that brings out the best in people — workshop", lang: "EN" }] },
        { speaker: "Magda Tecław", sessions: [{ title: "Kształtowanie kultury szkoły w praktyce", lang: "PL" }, { title: "Shaping school culture in practice", lang: "EN" }] },
      ],
    },
    footnote: "Coffee breaks and lunches included · languages: Polish and English (talks interpreted), one workshop also in Spanish",
  },

  speakers: {
    eyebrow: "Speakers",
    title: "Practitioners, authors, mentors",
    lead: "People running schools, writing about education, and mentoring students every day — with strong experience and real stories behind their work.",
    readMore: "Read more",
    readLess: "Show less",
    items: [
      { name: "Lucía Calvo", role: "Arenales Education Network · Madrid", short: "Educator and English teacher who combines school leadership with classroom teaching. Advisor to the Arenales Education Network; collaborates with EASSE.", bio: "Born in Madrid, she was educated in a wide variety of settings — public and private, co-educational and single-sex, Spanish and international — in Madrid, Barcelona, Cambridge, Rome and Sydney. She studied Teaching and Educational Sciences at the Complutense University of Madrid and, on a scholarship, completed an MA in linguistics at Macquarie University in Sydney. She has devoted her career to education and English teaching: ten years in the public system, then in private and state-subsidised schools. Throughout, she has combined leading several schools with direct teaching, always staying close to families and students. She is an advisor to the Arenales Education Network and a trustee of the Tacumi Foundation, which promotes the inclusion of students with intellectual disabilities in mainstream schools. She collaborates with EASSE (European Association for Single-Sex Education) and is a member of the Spanish Association of Women Leaders in Education. She also mentors teachers, strengthening their leadership and helping them take further steps towards a more personalised education.", photo: "images/speakers/lucia-calvo.jpg" },
      { name: "Dobrochna Lama", role: "Leadership and organizational development in education", short: "For over 20 years she has worked at the intersection of education, leadership and organizational development — as a teacher, principal, consultant and senior manager.", bio: "Her expertise is building and growing organizations that help people flourish. She has co-founded and developed educational initiatives with lasting social impact: training, leadership development, running schools and supporting educational institutions across Poland. She has developed programs reaching more than 3,000 teachers a year, supported the launch of over 40 schools and kindergartens, managed organizations with more than 200 employees, and been responsible for budgets exceeding PLN 20 million in annual operating revenue. She is especially drawn to ventures built from the ground up and organizations in rapid growth, turning an ambitious vision into effective structures, processes and teams. She has completed international management programs at IESE Business School and Universidad Villanueva. She believes lasting results come where high-quality management meets genuine care for people’s growth and a clearly defined mission.", photo: "images/speakers/dobrochna-lama.jpg" },
      { name: "Dr Stanisław Kowal", role: "Jagiellonian University · Sternik Foundation, Kraków", short: "PhD in pedagogy, assistant professor at the Jagiellonian University, Director of Education at the Sternik-Kraków Foundation and co-founder of schools rooted in personalised education.", bio: "For many years he headed the Teacher Education Centre at the Pedagogical University of Kraków; he now teaches in the Jagiellonian University’s Pedagogical Studies unit. He has written numerous academic publications, mainly in pedeutology (the study of the teaching profession), as well as articles for teachers, educators and parents. He organises and leads academic and popular conferences for teachers and parents. He designed postgraduate teacher-training programmes, including Poland’s first postgraduate programme in personalised education. He has served as an expert to the Polish Ministry of National Education and the Ministry of Science and Higher Education on teacher-training standards. He is an academic tutor and family tutor, and co-founder of the Źródło and Wierchy kindergarten and schools in Kraków. He is married to Maria and is the father of Maria, Julianna, Franciszek, Józef, Ludwik, Wojciech and Andrzej.", photo: "images/speakers/stanislaw-kowal.jpg" },
      { name: "Magda Tecław", role: "Haileybury Malta · school culture", short: "Teacher and educational leader with over 20 years in British independent schools; author of the book Zawód Nauczyciel. Currently teaches at Haileybury Malta.", bio: "Having lived in the UK for over twenty years, she taught in both primary and secondary schools and held a range of leadership roles. She holds a PGCE in Secondary Education (University of East London), an MA in Leadership in Catholic Education (St Mary’s University, London), an MA in Education (University of York), an MA in Comparative Education (University College London) and an MSc in Educational Assessment (University of Oxford). She is the author of Zawód Nauczyciel (“Profession: Teacher”), published in Poland in 2024. She brings this academic background into her daily classroom practice and her support for fellow teachers. She lives in Malta, where she teaches at Haileybury Malta, a British international school. She is a wife and mother of three university students and a teenage daughter, and a keen recreational scuba diver.", photo: "images/speakers/magda-teclaw.jpg" },
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
      { icon: "globe", label: "Languages", text: "Polish and English — simultaneous interpretation of talks PL ↔ EN" },
    ],
    appNote: { title: "Participant portal", text: "After registering you'll get an e-mail with a link to your portal: workshop choice, extra program, diet, participants list. Sign-in without a password — via a one-time link." },
    detailsTitle: "Useful details for participants",
    accordion: [
      { title: "Conference locations", html: "<p><strong>Friday — UKSW, Schuman Hall</strong><br>Wóycickiego 1/3, 01-938 Warsaw (Bielany campus) · <a href='https://www.google.com/maps/search/?api=1&query=UKSW+W%C3%B3ycickiego+1%2F3+Warszawa' target='_blank' rel='noopener'>Open in Google Maps</a></p><p><strong>Friday evening and Saturday — Ziarno School</strong><br>Modlińska 184a, 03-119 Warsaw · <a href='https://www.google.com/maps/search/?api=1&query=Modli%C5%84ska+184a+Warszawa' target='_blank' rel='noopener'>Open in Google Maps</a></p><p><strong>Thursday evening — Let's GoCook</strong><br>Jutrzenki 76, Warsaw · <a href='https://www.google.com/maps/search/?api=1&query=Let%27s+GoCook+Jutrzenki+76+Warszawa' target='_blank' rel='noopener'>Open in Google Maps</a></p><p><strong>Thursday — school visits</strong><br>Strumienie School, 3 Maja 129, Józefów · Azymut School, Staszica 1, Pruszków (TODO: confirm program and transport)</p>" },
      { title: "Getting to Warsaw", html: "<p><strong>By plane:</strong> Warsaw Chopin Airport (WAW) — about 30 min to the centre by SKM/KM train or bus 175; Warsaw Modlin (WMI) — about 45 min by shuttle bus and train.</p><p><strong>By train:</strong> Warszawa Centralna — about 35 min to UKSW (metro M1 to Młociny + bus), about 30 min to Ziarno School (buses towards Białołęka).</p><p><strong>By car:</strong> parking on the UKSW campus (TODO: access rules) and at Ziarno School.</p>" },
      { title: "Accommodation", html: "<p>We recommend staying in the city centre or in Bielany/Żoliborz (easy access to UKSW). TODO: list of 3–4 hotels with links.</p><p>Also check Booking.com or Airbnb.[[ Need help? Write to <a href='mailto:{{email}}'>{{email}}</a>]]</p>" },
      { title: "Local transport", html: "<p>Warsaw has a simple, affordable public transport system (ZTM). Buy tickets in the <strong>Jakdojade</strong> app, at ticket machines, or by tapping a contactless card on board (selected vehicles).</p><p>A 75-minute ticket covers most journeys between our venues. Taxis: Bolt, Uber, FreeNow.</p>" },
      { title: "Communication", html: "<p>Registered participants will be added to a WhatsApp group for practical updates. TODO: group link.</p>" },
      { title: "Payment instructions", payment: true },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    lead: "[[Didn't find your answer? Write to {{email}}]]",
    items: [
      { q: "Can I come only to the Friday conference?", a: "<p>Yes. The 'Conference only' package covers the plenary sessions on 7 May and coffee breaks, with an optional lunch at UKSW. Saturday workshops, Thursday dinner and the garden party are part of the full package.</p>" },
      { q: "What language is the conference in?", a: "<p>Friday talks are given in Polish or English (the language is shown in the programme) with simultaneous interpretation Polish ↔ English. Workshops are held in the language shown next to each session — usually in two versions, Polish and English; one workshop runs in English and Spanish.</p>" },
      { q: "How do I pay and when is my registration valid?", a: "<p>By bank transfer within {{days}} days of registering — bank details are in Practical information and in your welcome e-mail. Your seat is confirmed once the payment arrives; you can see the status in your participant portal.</p>" },
      { q: "Will I get an invoice?", a: "<p>Yes. Tick “I need an invoice” in the form[[ and, after registering, send your organisation's details (name, VAT number, address) to {{email}}]]. We'll send the invoice by e-mail.</p>" },
      { q: "What if I can't come?", a: "<p>Until 31 March 2027 we refund the full fee, until 15 April half of it; after that no refund is possible, but you can always transfer your seat to someone else. Details in the <a href='regulamin.html#en'>terms</a>.</p>" },
      { q: "I need a visa invitation letter — can you issue one?", a: "<p>Yes. After paying, e-mail {{email}} with your passport details and we'll send a personal invitation letter as a PDF.</p>", contact: true },
      { q: "Do you cater for dietary requirements?", a: "<p>Yes — vegetarian, vegan, gluten-free and others. Enter your requirements in the form; they apply to the cooking workshop, lunches and the garden party.</p>" },
      { q: "Where can I park and how do I get there?", a: "<p>UKSW has a campus car park on Wóycickiego street; Ziarno School has visitor parking. Public transport and airport connections are described in Practical information.</p>" },
      { q: "Are the Thursday school visits mandatory?", a: "<p>No, they are optional. Tick your participation in the form — places in the schools are limited.</p>" },
      { q: "How do I choose workshops?", a: "<p>After registering, you sign in to the participant portal and pick one session in each of the three Saturday blocks yourself. Seats per session are limited and you can change your choice until 23 April 2027.</p>" },
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

  portalBox: {
    title: "Already registered? Your participant portal is live.",
    text: "Sign in with the e-mail from your registration form to choose workshops, confirm the extra program, update your diet and meet other participants before the conference.",
    cta: "Open the participant portal",
    hint: "Use the link from your welcome e-mail, or sign in with the e-mail you registered with.",
  },

  register: {
    open: {
      title: "Registration form",
      lead: "Enter your details, choose a package and tell us about dietary requirements — it takes 2 minutes. Confirmation and a link to your participant portal (workshop choice) will follow by e-mail.",
      openForm: "Open the form in a new tab",
      thanksTitle: "Thank you for registering!",
      thanksLead: "We've sent you an e-mail with confirmation and a link to your participant portal. Can't see it? Check spam, or sign in to the portal with the e-mail from the form.",
      thanksSteps: ["Pay the fee by bank transfer within {{days}} days — instructions below.", "In the participant portal choose your workshops and confirm the extra program.", "Add the conference to your calendar — see you in Warsaw!"],
      thanksPortal: "Open the participant portal",
      thanksPay: "Payment instructions",
      thanksCalendar: "Add to calendar",
      thanksAgain: "Register another person",
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
    invoiceText: "If you require an invoice, tick it in the registration form[[ and e-mail {{email}} with your organisation name, VAT/company ID, billing address and e-mail]].",
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
