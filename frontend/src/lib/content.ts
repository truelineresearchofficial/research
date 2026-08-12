// ──────────────────────────────────────────────────────────────────────────
// Trueline Research — single source of truth for site copy & data.
// Integrity-safe language only: "enablement", "mentoring", "methodology
// support", "capability building". Never "we write your thesis",
// "guaranteed publication", or "ghostwriting".
// ──────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'Trueline Research',
  tagline: 'The research-enablement engine for life sciences.',
  promise: 'From scholar to lab to industry.',
  hq: 'Vaikuntham · Salem, Tamil Nadu',
  group: 'Part of the Trueline Group',
}

export type NavLeaf = { label: string; to: string; note?: string; external?: boolean }
export type NavColumn = { heading: string; audience?: string; items: NavLeaf[] }
export type NavItem = {
  label: string
  to: string
  columns?: NavColumn[]
  feature?: { title: string; body: string; to: string; cta: string }
}

export const NAV: NavItem[] = [
  {
    label: 'About',
    to: '/about',
    columns: [
      {
        heading: 'The company',
        items: [
          { label: 'Founder Message', to: '/about#founder-message', note: 'A message from the Founder of Trueline Research.' },
          { label: 'Who we are', to: '/about#who', note: 'Story, mission & philosophy' },
          { label: 'Our approach', to: '/about#approach', note: 'Enablement, not ghostwriting' },
          { label: 'Leadership & advisory', to: '/about#leadership', note: 'Biomedical & AI leaders' },
        ],
      },
      {
        heading: 'The Trueline Group',
        items: [
          { label: 'Ethics & Integrity Charter', to: '/about#ethics', note: 'Our non-negotiables' },
          { label: 'Careers', to: '/about#careers', note: 'Build the engine with us' },
        ],
      },
    ],
    feature: {
      title: 'One engine, three entities',
      body: 'Research does the work, Publishers credentializes it, StartNet commercializes it — a flywheel competitors can’t match.',
      to: '/about#group',
      cta: 'See the flywheel',
    },
  },
  {
    label: 'Research Enablement',
    to: '/research-enablement',
    columns: [
      {
        heading: 'For scholars & faculty',
        audience: 'The capability engine',
        items: [
          { label: 'PhD & thesis mentoring', to: '/research-enablement#phd', note: 'Methodology · structure · defense' },
          { label: 'Biostatistics & data analysis', to: '/research-enablement#biostats' },
          { label: 'Bioinformatics & computational biology', to: '/research-enablement#bioinformatics' },
          { label: 'Systematic reviews & meta-analyses', to: '/research-enablement#reviews' },
        ],
      },
      {
        heading: 'Grants & publication',
        items: [
          { label: 'Grant & funding support', to: '/research-enablement#grants', note: 'ICMR · DBT/BIRAC · DST · SERB' },
          { label: 'Research methodology training', to: '/research-enablement#training', note: 'Cohorts & workshops' },
          { label: 'Manuscript & publication readiness', to: '/research-enablement#manuscript' },
          { label: 'Overview', to: '/research-enablement#overview' },
        ],
      },
    ],
    feature: {
      title: 'Book a consultation',
      body: 'A 30-minute working session that maps your research question to a credible, publishable path.',
      to: '/contact#scholar',
      cta: 'Talk to a mentor',
    },
  },
  {
    label: 'Centers of Excellence',
    to: '/centers-of-excellence',
    columns: [
      {
        heading: 'For colleges & departments',
        audience: 'The moat-builder',
        items: [
          { label: 'The CoE model', to: '/centers-of-excellence#model', note: 'A research lab inside your campus' },
          { label: 'AI & Bioinformatics CoE', to: '/centers-of-excellence#ai', note: 'Asset-light · launch first' },
          { label: 'Biomedical & Life-Sciences CoE', to: '/centers-of-excellence#bio' },
          { label: 'What colleges get', to: '/centers-of-excellence#returns' },
        ],
      },
      {
        heading: 'Setup & funding',
        items: [
          { label: 'How funding works', to: '/centers-of-excellence#funding', note: 'IDEA Lab · FIST · PM-USHA · BioE3' },
          { label: 'Setup & timeline', to: '/centers-of-excellence#timeline' },
          { label: 'Case studies & showcase', to: '/centers-of-excellence#cases' },
        ],
      },
    ],
    feature: {
      title: 'Request a CoE proposal',
      body: 'A short qualifying form returns a tailored proposal that maps available grants to your setup cost.',
      to: '/contact#college',
      cta: 'Request a proposal',
    },
  },
  {
    label: 'Partnerships & GCC',
    to: '/partnerships',
    columns: [
      {
        heading: 'For institutions & industry',
        audience: 'The scale play',
        items: [
          { label: 'Institutions & universities', to: '/partnerships#gcc', note: 'Research capability · CoEs · joint IP' },
          { label: 'Industry–academia collaboration', to: '/partnerships#gulf', note: 'Joint research · technology · IP' },
          { label: 'Industry & CROs', to: '/partnerships#industry', note: 'Pharma · biotech · medtech' },
        ],
      },
      {
        heading: 'Productized offerings',
        items: [
          { label: 'Research-as-a-Service', to: '/partnerships#raas', note: 'Curation · annotation · lit-analytics' },
          { label: 'Talent pipeline', to: '/partnerships#talent', note: 'CoE-trained graduates' },
          { label: 'Government & policy programs', to: '/partnerships#policy', note: 'BioE3 · RDI Fund · TN policy' },
        ],
      },
    ],
    feature: {
      title: 'Start a partnership',
      body: 'Research and innovation partnerships that connect institutions, researchers, industry and startups — built on a consented, multi-college research network across India.',
      to: '/contact#institution',
      cta: 'Open a conversation',
    },
  },
  {
    label: 'Insights',
    to: '/insights',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]

export const UTILITY_LINKS: NavLeaf[] = [
  { label: 'For Scholars', to: '/research-enablement' },
  { label: 'For Colleges', to: '/centers-of-excellence' },
  { label: 'For Institutions', to: '/partnerships' },
]

export const GROUP_LINKS: NavLeaf[] = [
  { label: 'Trueline Research', to: 'https://truelineresearch.in/', note: 'Do the research', external: true },
  { label: 'Trueline Publishers', to: 'https://www.truelinepublisher.in/', note: 'Publish & credentialize', external: true },
  { label: 'StartNet Ventures', to: 'https://startnetx.in/', note: 'Commercialize & partner', external: true },
  { label: 'Trueline Spectrum', to: '/insights', note: 'The science magazine' },
]

// ── Home: the three audience doors ────────────────────────────────────────
export const DOORS = [
  {
    id: 'college',
    kicker: "I'm a College",
    title: 'Build a research lab inside your campus.',
    body: 'A co-branded Center of Excellence — funded through national grant schemes — that turns your campus into a multidisciplinary Research Lab for talent, joint intellectual property and Idea to Product.',
    to: '/centers-of-excellence',
    cta: 'Request a CoE proposal',
  },
  {
    id: 'institution',
    kicker: "I'm an Institution",
    title: 'Build research capability, innovation ecosystems, and multidisciplinary talent at scale.',
    body: 'Research partnerships and a CoE-trained talent pipeline that connect institutions, researchers and industry — turning research capability into innovation, intellectual property and real-world impact.',
    to: '/partnerships',
    cta: 'Start a partnership',
  },
  {
    id: 'scholar',
    kicker: "I'm a Researcher",
    title: 'Do meaningful research, build Intellectual Property, publish credibly, and transform ideas into practical solutions.',
    body: 'Mentoring, research methodology, biostatistics and bioinformatics that build your capability — from a strong research question to publication, research visibility and Idea to Product.',
    to: '/research-enablement',
    cta: 'Book a consultation',
  },
]

// ── The three message pillars ─────────────────────────────────────────────
export const PILLARS = [
  {
    id: 'enable',
    n: '01',
    name: 'Enable',
    title: 'We make researchers and departments capable.',
    body: 'Training, biostatistics, bioinformatics, grant-writing and systematic reviews — the methodology backbone of credible science.',
    to: '/research-enablement',
  },
  {
    id: 'build',
    n: '02',
    name: 'Build',
    title: 'We build Centers of Excellence inside colleges.',
    body: 'An asset-light lab network that turns campuses into engines for talent, data and intellectual property.',
    to: '/centers-of-excellence',
  },
  {
    id: 'partner',
    n: '03',
    name: 'Partner',
    title: 'We partner institutions, industry and startups.',
    body: 'Research partnerships, Research-as-a-Service and a graduate talent pipeline — connecting institutions, researchers and industry to move innovation from lab to intellectual property to product.',
    to: '/partnerships',
  },
]

// ── Proof strip (network framing — not unverified track-record claims) ─────
export const PROOF = [
  { value: '100+', label: 'College network across India', sub: 'The talent, data & distribution base' },
  { value: '3', label: 'Entities, one flywheel', sub: 'Research · Publishers · StartNet' },
  { value: '4', label: 'National grant rails mapped', sub: 'IDEA Lab · FIST · PM-USHA · BioE3' },
  { value: '9', label: 'Stages, one research-to-impact journey', sub: 'Research Lab to real-world impact' },
]

// ── The Trueline Group flywheel ───────────────────────────────────────────
export const GROUP = [
  {
    id: 'research',
    name: 'Trueline Research',
    role: 'Do the research',
    body: 'Research enablement and CRO-lite services for life sciences — mentoring, biostatistics, bioinformatics, and the College CoE network.',
    output: 'Research-services revenue + the data / IP moat',
  },
  {
    id: 'publishers',
    name: 'Trueline Publishers',
    role: 'Publish & credentialize',
    body: 'Integrity-first biomedical scholarly publishing — the flagship journal, Trueline Spectrum magazine, proceedings and editorial services.',
    output: 'Credibility + recurring publishing revenue',
  },
  {
    id: 'startnet',
    name: 'StartNet',
    role: 'Commercialize & partner',
    body: 'The life-sciences startup and innovation ecosystem — incubation, industry and government partnerships, events and investor relations.',
    output: 'Deal flow, partnerships & the venture upside',
  },
]

// ── The Trueline Group Ecosystem (5-entity flywheel) ──────────────────────
export const ECOSYSTEM = [
  {
    id: 'research',
    name: 'Trueline Research',
    short: 'Generates',
    role: 'Research & Innovation',
    body: 'Delivering research consulting, product development support, AI solutions, data analytics, Centre of Excellence programs, and innovation services for academia, startups, and industry.',
    output: 'Accelerating research, innovation, and technology development.',
  },
  {
    id: 'publishers',
    name: 'Trueline Publishers',
    short: 'Credentializes',
    role: 'Academic Publishing House',
    body: 'Providing ethical publishing through peer-reviewed journals, books, conference proceedings, editorial services, DOI support, plagiarism screening, and indexing guidance.',
    output: 'Building academic credibility and global visibility.',
  },
  {
    id: 'spectrum',
    name: 'Trueline Spectrum',
    short: 'Amplifies',
    role: 'Monthly Research Magazine',
    body: 'A monthly digital magazine featuring research, education, technology, startups, industry insights, expert articles, interviews, success stories, and emerging innovations.',
    output: 'Connecting ideas, knowledge, and innovation.',
  },
  {
    id: 'jaeid',
    name: 'JAEID',
    short: 'Publishes',
    role: 'Peer-Reviewed Journal',
    body: 'Publishing high-quality original research, reviews, and case studies across AI, biomedical sciences, life sciences, engineering, technology, and multidisciplinary research through a rigorous peer-review process.',
    output: 'Advancing scientific excellence through ethical publishing.',
  },
  {
    id: 'startnet',
    name: 'StartNet',
    short: 'Innovates',
    role: 'Startup Growth Platform',
    body: 'Supporting startups with incubation, acceleration, mentoring, funding readiness, innovation programs, industry partnerships, networking, and business growth opportunities.',
    output: 'Empowering startups to innovate, scale, and succeed.',
  },
]

// ── Research Enablement services ──────────────────────────────────────────
export const ENABLEMENT_SERVICES = [
  {
    id: 'phd',
    name: 'PhD & Thesis Mentoring',
    problem: 'Scholars stall on framing a defensible question, a rigorous method, and a defense-ready structure.',
    enable: 'Structured 1:1 mentoring across methodology, study design, structure and defense preparation — you build the skill and own the work.',
    forWho: 'Doctoral and post-graduate researchers in the life sciences.',
    format: '1:1 mentoring',
  },
  {
    id: 'biostats',
    name: 'Biostatistics & Data Analysis',
    problem: 'Underpowered designs and the wrong test sink otherwise good studies at review.',
    enable: 'Study-design consults, sample-size justification, analysis plans and reproducible workflows in R, Python and standard tools.',
    forWho: 'Clinical, epidemiological and bench researchers.',
    format: '1:1 + workshop',
  },
  {
    id: 'bioinformatics',
    name: 'Bioinformatics & Computational Biology',
    problem: 'Omics and sequence data outpace the analytical capability on most campuses.',
    enable: 'Hands-on pipelines for genomics, transcriptomics and sequence analysis — capability you keep, not a black box.',
    forWho: 'Molecular biology, genomics and AI-in-biology teams.',
    format: 'Cohort + lab',
  },
  {
    id: 'reviews',
    name: 'Systematic Reviews & Meta-Analyses',
    problem: 'Review protocols drift from PRISMA and fail reproducibility checks.',
    enable: 'Protocol design, search strategy, screening, risk-of-bias assessment and meta-analysis — methodology-first, audit-ready.',
    forWho: 'Faculty and scholars building an evidence base.',
    format: '1:1 + cohort',
  },
  {
    id: 'grants',
    name: 'Grant & Funding Support',
    problem: 'Strong ideas lose funding to weak framing of aims, methods and budgets.',
    enable: 'Proposal architecture, methods and budget justification for ICMR, DBT/BIRAC, DST and SERB calls — you stay the PI.',
    forWho: 'Faculty and early-career investigators.',
    format: 'Workshop + 1:1',
  },
  {
    id: 'training',
    name: 'Research Methodology Training',
    problem: 'Departments lack a shared, rigorous research-methods foundation.',
    enable: 'Cohort programs and workshops on design, ethics, reproducibility and scientific writing, delivered on campus or online.',
    forWho: 'Departments, cohorts and research scholars.',
    format: 'Cohort',
  },
  {
    id: 'manuscript',
    name: 'Manuscript & Publication Readiness',
    problem: 'Sound science gets desk-rejected on structure, reporting and clarity.',
    enable: 'Structure, reporting-standard alignment, language and submission readiness — handed off to Trueline Publishers for the journey to print.',
    forWho: 'Authors preparing to submit.',
    format: '1:1',
    crossLink: { label: 'Trueline Publishers', to: '/about#group' },
  },
]

// ── CoE: how funding works ────────────────────────────────────────────────
export const FUNDING_RAILS = [
  { name: 'AICTE IDEA Lab', what: 'Idea-to-prototype labs for engineering & applied-science institutions.' },
  { name: 'DST-FIST', what: 'Infrastructure funding to strengthen S&T departments.' },
  { name: 'PM-USHA', what: 'Central scheme support to upgrade state higher-education institutions.' },
  { name: 'TN Bio-incubator subsidy', what: 'Up to 50% capital subsidy for bio-incubation facilities in Tamil Nadu.' },
  { name: 'CSR funding', what: 'Corporate social-responsibility partnerships for applied research labs.' },
  { name: 'BIRAC / BioE3', what: 'Biotechnology mission funding under the national BioE3 policy.' },
]

export const COE_RETURNS = [
  { title: 'Revenue', body: 'A research-services line that shares income with the host department.' },
  { title: 'Talent', body: 'Students and faculty trained on real, fundable research projects.' },
  { title: 'Joint IP & papers', body: 'Co-authored publications and co-owned intellectual property.' },
  { title: 'Accreditation lift', body: 'Research output and infrastructure that strengthen NAAC / NBA standing.' },
]

export const COE_TIMELINE = [
  { phase: 'Week 0–2', title: 'Scoping & qualification', body: 'A short proposal request maps your department, ambitions and eligible grant rails.' },
  { phase: 'Week 2–6', title: 'Tailored proposal & funding map', body: 'We return a costed CoE design with the specific schemes that fund it.' },
  { phase: 'Week 6–12', title: 'Setup & co-branding', body: 'Lab design, mentor onboarding, governance and the joint Trueline × college identity.' },
  { phase: 'Ongoing', title: 'Operate & compound', body: 'Projects, training cohorts, joint papers and a growing data asset — reviewed each term.' },
]

// ── Partnerships ──────────────────────────────────────────────────────────
export const PARTNER_TRACKS = [
  {
    id: 'gcc',
    name: 'Institutions & Universities',
    body: 'Deep collaboration with colleges, universities and research institutions to build research capability, establish Research Labs and Centers of Excellence, and pursue joint research, intellectual property and credible publication.',
    points: ['Research capability building', 'Joint Research Labs & CoEs', 'Co-authored publications & IP'],
  },
  {
    id: 'gulf',
    name: 'Industry–Academia Collaboration',
    body: 'Connecting industry with academic research teams to move ideas from lab to product — joint research, technology development, intellectual property and startup creation across life sciences and emerging technologies.',
    points: ['Joint research & technology development', 'Intellectual property & licensing', 'Idea to Product & startup creation'],
  },
  {
    id: 'industry',
    name: 'Industry & CROs',
    body: 'Collaboration with pharma, biotech and medtech on focused research, data work and methodology — bridging academia and industry to accelerate innovation and real-world impact.',
    points: ['Pharma / biotech / medtech', 'Methodology & data analysis', 'Academia–industry collaboration'],
  },
]

export const RAAS = [
  { name: 'Data curation', body: 'Structured, consented, research-grade datasets from the college network.' },
  { name: 'Annotation', body: 'Expert biomedical annotation for AI and analytics pipelines.' },
  { name: 'Literature analytics', body: 'Systematic evidence synthesis and competitive landscape work.' },
  { name: 'Research operations', body: 'Managed study operations and reproducible analytical workflows.' },
]

// ── Ethics charter ────────────────────────────────────────────────────────
export const ETHICS = [
  'We enable capability — we never ghostwrite theses or sell authorship.',
  'We make no publication guarantees; integrity outranks any outcome.',
  'We operate on explicit, consent-first data use with IRB / ethics alignment.',
  'We align to COPE-style publishing ethics across the Trueline Group.',
  'We disclose AI assistance transparently and keep the researcher the author.',
]

// ── Insights ──────────────────────────────────────────────────────────────
export const INSIGHT_CLUSTERS = [
  { name: 'Research Enablement', count: 'Methodology · biostatistics · intellectual property', to: '/research-enablement' },
  { name: 'Centers of Excellence', count: 'Funding · setup · the campus Research Lab model', to: '/centers-of-excellence' },
  { name: 'Partnerships & Collaboration', count: 'Institutional & industry–academia collaboration', to: '/partnerships' },
]

export const ARTICLES = [
  {
    tag: 'Biostatistics',
    title: 'Sample size, before you collect a single data point',
    excerpt: 'Why power analysis is the cheapest insurance in your entire study — and how to justify it to a reviewer.',
    read: '6 min read',
  },
  {
    tag: 'Centers of Excellence',
    title: 'How a Tamil Nadu college funds a bioinformatics lab without touching its own budget',
    excerpt: 'Mapping IDEA Lab, DST-FIST and the 50% bio-incubator subsidy to a real CoE setup cost.',
    read: '9 min read',
  },
  {
    tag: 'AI in Research',
    title: 'The consented data moat: research-as-a-service the right way',
    excerpt: 'How a multi-college network becomes a defensible, ethics-first research asset for institutional and industry partners.',
    read: '7 min read',
  },
]

// ── Contact forms ─────────────────────────────────────────────────────────
// `keys` map each visible field (by position) to the backend payload key.
// They MUST stay aligned with the Pydantic schema in backend/app/schemas.
export const CONTACT_FORMS = [
  {
    id: 'scholar',
    audience: 'Scholars & Faculty',
    title: 'Book a Research Consultation',
    body: 'Get expert guidance to advance your research and innovation.',
    cta: 'Book a consultation',
    fields: ['Name', 'Email', 'Phone', 'Institution', 'Research Area', 'Subject', 'Message'],
    keys: ['name', 'email', 'phone', 'institution', 'researchArea', 'subject', 'message'],
    placeholders: [
      'Enter your full name',
      'Enter your email address',
      'Enter your phone number',
      'Enter your institution name',
      'Example: AI, Healthcare, Biotechnology',
      'Enter your research subject',
      'Briefly describe your research requirement',
    ],
  },
  {
    id: 'college',
    audience: 'Colleges & Departments',
    title: 'Request a Research Collaboration',
    body: 'Partner with us to strengthen research and academic excellence.',
    cta: 'Request a proposal',
    fields: ['Name', 'Institution', 'Role', 'Department', 'Email', 'Phone', 'Message'],
    keys: ['name', 'institution', 'role', 'department', 'email', 'phone', 'message'],
    placeholders: [
      'Enter your full name',
      'Enter institution name',
      'Example: Professor, HOD, Dean',
      'Enter department name',
      'Enter your email address',
      'Enter your phone number',
      'Describe your Center of Excellence requirement',
    ],
  },
  {
    id: 'institution',
    audience: 'Institutions & Industry',
    title: 'Start a Strategic Partnership',
    body: 'Collaborate with us to drive research, innovation, and institutional partnerships.',
    cta: 'Start a partnership',
    fields: ['Name', 'Organisation', 'Role', 'Email', 'Phone', 'State', 'Message'],
    keys: ['name', 'organisation', 'role', 'email', 'phone', 'state', 'message'],
    placeholders: [
      'Enter your full name',
      'Enter organisation name',
      'Example: Director, Manager',
      'Enter your email address',
      'Enter your phone number',
      'Enter your state',
      'Describe your partnership requirement',
    ],
  },
]

export const OFFICES = [
  {
    city: 'Editorial office — Salem (HQ)',
    detail:
      'Building No. 7/232-26, Devi Towers, Kalipatti Privu Road, Vaikuntham, Sankari, Salem, Tamil Nadu - 637103',
  },
  {
    city: 'Branch Office — Salem',
    detail:
      'Co-Working Space, 2nd Floor, Sona Incubation Foundation, Sona College of Technology, Salem – 636005, Tamil Nadu, India',
  },
  {
    city: 'Branch Office — Ernakulam',
    detail:
      'Building No: 37/882, Opp. Municipal Town Hall, Thirunilath Housing Colony, South Kalamassery, Ernakulam – 682039, Kerala, India (Landmark: Cake Hut Shop)',
  },
  { city: 'Partnerships desk', detail: 'Institutional & industry partnerships' },
]

// Structured office data for the "Our Offices" section on the Contact page.
// Google Maps URLs are stored here and rendered dynamically.

export const OFFICE_LOCATIONS = [
  {
    hq: true,
    title: "Head Office — Salem, Tamil Nadu ",
    subtitle: "",
    address:
      "Building No. 7/232-26, Devi Towers, Kalipatti Pirivu Road, Vaikuntham, Sankari, Salem, Tamil Nadu – 637103, India",
    mapUrl: "https://maps.app.goo.gl/Ati4aSyuC7cuHZYm9",
  },
  {
    hq: false,
    title: "Branch Office — Salem, Tamil Nadu",
    subtitle: "Trueline Research Group",
    address:
      "Co-Working Space, 2nd Floor, Sona Incubation Foundation, Sona College of Technology, Salem, Tamil Nadu – 636005, India",
    mapUrl: "https://maps.app.goo.gl/44mdDMfmWJ1AkHNi9?g_st=awb",
  },
  {
    hq: false,
    title: "Branch Office — Ernakulam, Kerala",
    subtitle: "Trueline Research Group",
    address:
      "Building No. 37/882, Opp. Municipal Town Hall, Thirunithura Housing Colony, South Kalamassery, Ernakulam, Kerala – 682039, India",
    mapUrl: "https://maps.app.goo.gl/hufdZdswJoj3JW297?g_st=awb",
  },
];

export const CONTACT_INFO = {
  email: 'info@truelineresearch.in',
  phones: [
    { label: 'TN', number: '+91 95788 73584' },
    { label: 'KL', number: '+91 80564 17009' },
  ],
  website: 'www.truelineresearch.in',
  hours: 'Monday – Saturday | 9:30 AM – 6:30 PM',
}
