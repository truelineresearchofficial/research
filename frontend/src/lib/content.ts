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
    label: 'For Colleges / Institutions',
    to: '/for-colleges-institutions',
    columns: [
      {
        heading: 'Build the ecosystem',
        audience: 'For campuses',
        items: [
          { label: 'Research Labs & Centers of Excellence', to: '/for-colleges-institutions#labs-coe', note: 'Co-branded research labs on campus' },
          { label: 'Faculty Development Programs', to: '/for-colleges-institutions#faculty', note: 'FDPs, workshops & research training' },
          { label: 'Student Research & Innovation', to: '/for-colleges-institutions#students', note: 'Real, fundable student research' },
          { label: 'Institutional Challenges', to: '/for-colleges-institutions#challenges', note: 'What we help you solve' },
        ],
      },
      {
        heading: 'Research to impact',
        items: [
          { label: 'IP & Commercialization', to: '/for-colleges-institutions#ip', note: 'Patents, copyrights & licensing' },
          { label: 'Startup & Entrepreneurship', to: '/for-colleges-institutions#startups', note: 'A campus startup ecosystem' },
          { label: 'Funding & Grant Enablement', to: '/for-colleges-institutions#funding', note: 'AICTE · DST · PM-USHA · BIRAC' },
          { label: 'Institutional Impact Metrics', to: '/for-colleges-institutions#impact', note: 'Measurable research outcomes' },
        ],
      },
    ],
    feature: {
      title: 'Build a Center of Excellence',
      body: 'Turn your campus into a working Research Lab — funded through national grant schemes, co-branded, and built to compound.',
      to: '/contact#institution',
      cta: 'Build with us',
    },
  },
  {
    label: 'Partnerships',
    to: '/partnerships',
    columns: [
      {
        heading: 'Collaboration models',
        audience: 'Academia × industry',
        items: [
          { label: 'Academic Partnerships', to: '/partnerships#academic', note: 'Universities & research institutions' },
          { label: 'Industry Collaboration', to: '/partnerships#industry', note: 'Pharma · biotech · medtech · tech' },
          { label: 'Research Networks', to: '/partnerships#networks', note: 'Multi-institution research networks' },
          { label: 'Joint Research Programs', to: '/partnerships#joint-research', note: 'Co-designed research & IP' },
        ],
      },
      {
        heading: 'Research to venture',
        items: [
          { label: 'Innovation & Product Development', to: '/partnerships#innovation', note: 'Prototype to product' },
          { label: 'IP Partnerships', to: '/partnerships#ip', note: 'Joint IP, licensing & tech transfer' },
          { label: 'Startup & Venture Collaboration', to: '/partnerships#ventures', note: 'Acceleration & spinouts' },
          { label: 'Research Commercialization', to: '/partnerships#commercialization', note: 'Research-as-a-Service' },
        ],
      },
    ],
    feature: {
      title: 'Start a partnership',
      body: 'Multidisciplinary partnerships that connect academia, industry and startups — turning research into intellectual property, products and real-world impact.',
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
  { label: 'For Colleges / Institutions', to: '/for-colleges-institutions' },
  { label: 'Partnerships', to: '/partnerships' },
]

export const GROUP_LINKS: NavLeaf[] = [
  { label: 'Trueline Research', to: 'https://truelineresearch.in/', note: 'Do the research', external: true },
  { label: 'Trueline Publishers', to: 'https://www.truelinepublisher.in/', note: 'Publish & credentialize', external: true },
  { label: 'Trueline Spectrum', to: 'https://truelinespectrum.in/', note: 'The science magazine', external: true },
  { label: 'Jaeid Journal', to: 'https://www.jaeid.com/', note: 'Peer-reviewed journal', external: true },
  { label: 'StartNet Ventures', to: 'https://startnetx.in/', note: 'Commercialize & partner', external: true },
]

// ── Home: the three audience doors ────────────────────────────────────────
export const DOORS = [
  {
    id: 'startup',
    kicker: "I'm a Startup",
    title: 'Turn research and innovation into scalable products, ventures, and real-world solutions.',
    body: 'From validated ideas to prototypes and ventures — we bring research, data, AI and product thinking together to move innovation toward scalable, real-world solutions.',
    to: '/startups',
    cta: 'Research to Venture',
  },
  {
    id: 'lab-industry',
    kicker: "I'm a Lab / Industry",
    title: 'Build research capability, multidisciplinary collaboration, and innovation partnerships that move ideas toward real-world impact.',
    body: 'Applied research, multidisciplinary collaboration and innovation partnerships that connect labs, industry and researchers — turning capability into intellectual property and real-world impact.',
    to: '/lab-industry',
    cta: 'Research & Industry',
  },
  {
    id: 'college-institution',
    kicker: "I'm a College / Institution",
    title: 'Build research capability, multidisciplinary collaboration, and innovation pathways that move ideas toward real-world impact.',
    body: 'Centers of Excellence, research enablement and faculty & student development that build institutional research capability — from Research Lab to intellectual property, publication and real-world impact.',
    to: '/for-colleges-institutions',
    cta: 'Build with us',
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
    to: '/for-colleges-institutions',
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
  { value: '15,000+', label: 'Students Trained through', sub: 'Workshops & Skill Development' },
  { value: '5,000+', label: 'Faculty Trained through', sub: 'Workshops & FDPs' },
  { value: '250+', label: 'IPRs – Patents, Trademarks,', sub: 'Copyrights & Industrial Designs' },
  { value: '1,500+', label: 'Research Publications Driving', sub: 'Science & Innovation' },
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
    body: 'Delivering Research Consulting, Product Development Support, AI solutions, Data Analytics, Centre of Excellence programs, and Innovation services for academia, Startups, and Industry.',
    output: 'Accelerating Research, Innovation, and Technology Development.',
  },
  {
    id: 'publishers',
    name: 'Trueline Publishers',
    short: 'Credentializes',
    role: 'Research Publishing House',
    body: 'Providing Ethical Publishing through Scopus, Web of Science, Indexed, Peer-Reviewed AI Journals, Books, Conference Proceedings, Editorial Services, DOI support, Plagiarism Screening, and Indexing Guidance.',
    output: 'Building Academic Credibility and Global Visibility.',
  },
  {
    id: 'spectrum',
    name: 'Trueline Spectrum',
    short: 'Amplifies',
    role: 'Monthly Research Magazine',
    body: 'A Monthly Digital Magazine Featuring Research, Education, Technology, Startups, Industry Insights, Expert Articles, Iterviews, Sccess stories, and Emerging Innovations.',
    output: 'Connecting Ideas, Knowledge, and Innovation.',
  },
  {
    id: 'jaeid',
    name: 'JAEID',
    short: 'Publishes',
    role: 'Peer-Reviewed AI Journal',
    body: 'Publishing High-quality Original Research, Reviews, and Case Studies across AI, Biomedical Sciences, life Sciences, Engineering, Technology, and Multidisciplinary research through a rigorous Peer-Review Process.',
    output: 'Advancing Scientific Excellence through Ethical Publishing.',
  },
  {
    id: 'startnet',
    name: 'StartNet',
    short: 'Innovates',
    role: 'Startup Growth Platform',
    body: 'Supporting Startups with Incubation, Acceleration, Mentoring, Funding Readiness, Innovation Programs, Industry Partnerships, Networking, and Business Growth Opportunities.',
    output: 'Empowering Startups to Innovate, Scale, and Succeed.',
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
    body: 'Build innovation ecosystems that help students, researchers, faculty, and startups transform ideas into prototypes, intellectual property, products, ventures, and societal impact through multidisciplinary research and collaboration.',
    points: ['Research capability building', 'Joint Research Labs & CoEs', 'Idea to Product'],
  },
  {
    id: 'gulf',
    name: 'Industry–Academia Collaboration',
    body: 'Connecting industry with academic research teams to move ideas from lab to product — joint research, technology development, intellectual property and startup creation across life sciences and emerging technologies.',
    points: ['Joint research & technology development', 'Intellectual property & licensing', 'Idea to Product & startup creation'],
  },
  {
    id: 'industry',
    name: 'Product Development & Innovation',
    body: 'Transform research outcomes into innovative products through multidisciplinary collaboration, validation, prototyping, intellectual property development, and commercialization pathways that create real-world impact.',
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
  'We guide researchers through every stage of the research and innovation journey.',
  'We support multidisciplinary collaboration that transforms ideas into products, technologies, and impactful solutions.',
  'We help institutions build strong research ecosystems, Centers of Excellence, and innovation-driven cultures.',
  'We mentor researchers in publications, intellectual property creation, grants, startup development, and commercialization pathways.',
  'We promote responsible, transparent, and ethical research practices that create meaningful academic, industrial, and societal impact.',
]

// ── Insights ──────────────────────────────────────────────────────────────
export const INSIGHT_CLUSTERS = [
  { name: 'Research Enablement', count: 'Methodology · Research Design · Biostatistics · Intellectual Property', to: '/research-enablement' },
  { name: 'Centers of Excellence', count: 'Research Infrastructure · Innovation Ecosystems · Capacity Building', to: '/for-colleges-institutions' },
  { name: 'Partnerships & Collaboration', count: 'Institutional Partnerships · Industry Collaboration · Research Networks', to: '/partnerships' },
]

export const ARTICLES = [
  {
    tag: 'Research Methodology',
    title: 'Designing High-Impact Research Projects from Concept to Publication',
    excerpt: 'A practical path from research question and study design to biostatistics, methodology and a credible, publishable outcome.',
    read: '6 min read',
  },
  {
    tag: 'Intellectual Property',
    title: 'From Research Outcomes to Patents, Copyrights, and Commercialization',
    excerpt: 'Turning research outcomes into patents, copyrights and industrial designs — and mapping clear pathways to commercialization.',
    read: '8 min read',
  },
  {
    tag: 'AI & Innovation',
    title: 'How AI Accelerates Multidisciplinary Research and Product Development',
    excerpt: 'How AI and multidisciplinary collaboration compress the distance from research to prototype, product and real-world impact.',
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
