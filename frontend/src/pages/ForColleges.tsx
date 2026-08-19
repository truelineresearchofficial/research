import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Puzzle,
  TrendingDown,
  Layers,
  Coins,
  EyeOff,
  ShieldQuestion,
  FlaskConical,
  Building2,
  Users,
  GraduationCap,
  Microscope,
  Presentation,
  BookOpen,
  Lightbulb,
  Rocket,
  Award,
  FileText,
  Scale,
  Beaker,
  Landmark,
} from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow, Pill } from '../lib/ui'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import FlowSteps from '../components/FlowSteps'
import { IMG } from '../lib/images'

// 1 — Institutional Challenges
const CHALLENGES = [
  { icon: Puzzle, title: 'Fragmented research culture', body: 'Research happens in silos, without a shared methodology or a department-wide operating rhythm.' },
  { icon: TrendingDown, title: 'Low grant success', body: 'Strong ideas lose funding to weak framing of aims, methods and budgets against national calls.' },
  { icon: Layers, title: 'Limited research infrastructure', body: 'Labs, tools and workflows fall short of what credible, fundable research actually needs.' },
  { icon: EyeOff, title: 'Low research visibility', body: 'Good work stays invisible — few publications, little IP and weak standing in rankings.' },
  { icon: Coins, title: 'Weak IP & commercialization', body: 'Research rarely converts into patents, products or ventures the institution can own.' },
  { icon: ShieldQuestion, title: 'Few student research paths', body: 'Students graduate without real, fundable research experience or innovation exposure.' },
]

// 2 — Research Labs & Centers of Excellence
const COE_ITEMS = [
  { icon: FlaskConical, title: 'Research labs inside campuses', body: 'Co-branded Centers of Excellence that turn your campus into a working Research Lab.' },
  { icon: Users, title: 'Faculty capability development', body: 'Build faculty research capability through mentoring and methodology support.' },
  { icon: GraduationCap, title: 'Student research opportunities', body: 'Give students real, fundable research to work on — and skills that last.' },
  { icon: Layers, title: 'Multidisciplinary collaboration', body: 'Connect departments and disciplines around shared research problems.' },
  { icon: Building2, title: 'Research infrastructure', body: 'Stand up the infrastructure and operating rhythm credible research needs.' },
  { icon: Microscope, title: 'Research methodology', body: 'Rigorous study design, methods and protocols that hold up to scrutiny.' },
]

// 3 — Faculty Development Programs
const FACULTY_ITEMS = [
  { icon: Presentation, title: 'Workshops', body: 'Hands-on workshops on research skills, methods and tools.' },
  { icon: Users, title: 'Faculty Development Programs', body: 'Structured FDPs that raise research capability across departments.' },
  { icon: BookOpen, title: 'Research training', body: 'Training that turns interest into real research competence.' },
  { icon: FileText, title: 'Publication support', body: 'Ethical support from manuscript to credible, visible publication.' },
  { icon: Lightbulb, title: 'Skill development', body: 'Practical skills across the research lifecycle, for faculty and staff.' },
]

// 4 — Student Research & Innovation
const STUDENT_ITEMS = [
  { icon: Beaker, title: 'Real research projects', body: 'Students work on genuine, fundable research — not textbook exercises.' },
  { icon: Lightbulb, title: 'Innovation programs', body: 'Hackathons, innovation challenges and idea-to-prototype tracks.' },
  { icon: GraduationCap, title: 'Research mentorship', body: 'Guided mentoring that builds durable research and analytical skill.' },
  { icon: Rocket, title: 'Entrepreneurship exposure', body: 'A path from student project to startup, product and venture.' },
]

// 5 — Intellectual Property & Commercialization
const IP_ITEMS = [
  { icon: Award, title: 'Patents', body: 'Identify, draft and protect patentable research outcomes.' },
  { icon: FileText, title: 'Copyrights & designs', body: 'Protect creative and design output alongside technical IP.' },
  { icon: Scale, title: 'Trademarks', body: 'Secure the identity around institutional innovations and ventures.' },
  { icon: Rocket, title: 'Technology commercialization', body: 'Move protected IP toward licensing, products and market pathways.' },
]

// 6 — Startup & Entrepreneurship Ecosystem
const STARTUP_ITEMS = [
  { icon: Lightbulb, title: 'Idea to Product', body: 'Structured support from validated idea to working prototype and product.' },
  { icon: Rocket, title: 'Startup creation', body: 'Incubation and startup formation built around campus research and IP.' },
  { icon: Users, title: 'Mentor & investor access', body: 'Connect student and faculty founders to mentors, partners and investors.' },
  { icon: Building2, title: 'Campus incubation', body: 'An on-campus innovation and incubation environment through StartNet.' },
]

// 7 — Funding & Grant Enablement
const GRANT_RAILS = [
  'AICTE IDEA Lab',
  'DST-FIST',
  'PM-USHA',
  'TN Bio-incubator subsidy',
  'CSR funding',
  'BIRAC / BioE3',
]

// 8 — Institutional Impact Metrics
const METRICS = [
  { value: '15,000+', label: 'Students trained', sub: 'Workshops & skill development' },
  { value: '5,000+', label: 'Faculty trained', sub: 'FDPs & research methodology' },
  { value: '250+', label: 'IPRs generated', sub: 'Patents, trademarks & designs' },
  { value: '1,500+', label: 'Research publications', sub: 'Driving science & innovation' },
]

// 9 — Ecosystem journey (KEY MESSAGE)
const ECOSYSTEM_JOURNEY = [
  'Research Lab',
  'Multidisciplinary Collaboration',
  'Innovation',
  'Research Visibility',
  'Intellectual Property',
  'Startup Creation',
  'Idea to Product',
  'Publication',
  'Real-World Impact',
]

export default function ForColleges() {
  return (
    <>
      <PageHero
        audience="I'm a College / Institution"
        eyebrow="For Colleges & Institutions"
        title={<>For Colleges &amp; Institutions.</>}
        intro="Build multidisciplinary research, innovation, and product-development ecosystems inside your campus."
        cta={{ label: 'Build With Us', to: '/contact#institution' }}
        image={IMG.campusBrick}
      >
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-faint">
            We help Colleges and Institutions establish Research Labs, Centers of Excellence,
            Innovation Programs, Faculty Development Initiatives, Intellectual Property Pipelines,
            and Startup Ecosystems that transform ideas into real-world impact.
          </p>
        </Reveal>
      </PageHero>

      {/* 1 — Institutional Challenges */}
      <section id="challenges" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Institutional challenges"
            title={<>The gaps that hold institutional research back.</>}
            intro="Most colleges have the talent and ambition — but not yet the ecosystem. These are the barriers we help institutions cross."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{c.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 2 — Research Labs & Centers of Excellence */}
      <section id="labs-coe" className="bg-canvas py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Research Labs & Centers of Excellence"
            title={<>A research lab inside your campus.</>}
            intro="Co-branded Centers of Excellence — funded through national grant schemes — that build faculty capability, student research and multidisciplinary collaboration on your own campus."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COE_ITEMS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{c.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 3 — Faculty Development Programs */}
      <section id="faculty" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
            <Reveal>
              <Figure img={IMG.mentoring} ratio="photo" rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
            </Reveal>
            <div>
              <Eyebrow>Faculty development programs</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                Capability that stays with your people.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                We build the research capability of faculty directly — workshops, structured FDPs,
                methodology and publication support that raise the quality and credibility of
                institutional research.
              </p>
              <ul className="mt-7 space-y-3">
                {FACULTY_ITEMS.map((r, i) => {
                  const Icon = r.icon
                  return (
                    <Reveal key={r.title} delay={i * 0.05} as="li">
                      <div className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                        <div>
                          <h3 className="text-[15px] font-semibold text-ink">{r.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </ul>
              <Reveal delay={0.1}>
                <Link to="/research-enablement" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Explore research enablement <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 — Student Research & Innovation (dark band) */}
      <section id="students" className="relative overflow-hidden bg-ink py-12 md:py-16 lg:py-20 text-white scroll-mt-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <img src={IMG.library.src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow className="text-brand-300">Student research & innovation</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3rem)] text-white text-balance">
              Students who do real research.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Every Center of Excellence puts students on real, fundable research and innovation —
              building the skills, projects and confidence that carry them toward products, ventures
              and research careers.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STUDENT_ITEMS.map((r, i) => {
              const Icon = r.icon
              return (
                <Reveal key={r.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <Icon className="h-7 w-7 text-brand-300" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-white">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{r.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 5 — Intellectual Property & Commercialization */}
      <section id="ip" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Intellectual property & commercialization"
            title={<>Turn research into owned intellectual property.</>}
            intro="We help institutions identify, protect and commercialize the IP their research produces — patents, copyrights, designs and the pathways to market."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {IP_ITEMS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{c.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 6 — Startup & Entrepreneurship Ecosystem */}
      <section id="startups" className="bg-canvas py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Startup & entrepreneurship ecosystem"
            title={<>From campus research to real ventures.</>}
            intro="A startup ecosystem inside your institution — turning student and faculty research into prototypes, products and companies through StartNet."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STARTUP_ITEMS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{c.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 7 — Funding & Grant Enablement */}
      <section id="funding" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Funding & grant enablement</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                Centers of Excellence, funded through national schemes.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                We map your department and ambitions to the specific grant rails that fund them — then
                shape the proposal so your institution stays eligible, credible and grant-ready.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {GRANT_RAILS.map((g, i) => (
                  <Reveal key={g} delay={i * 0.04}>
                    <Pill className="bg-white text-[13px]">
                      <Landmark className="h-3.5 w-3.5 text-brand-500" /> {g}
                    </Pill>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.1}>
                <Link to="/contact#institution" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Request a funding map <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Figure img={IMG.coins} ratio="photo" rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8 — Institutional Impact Metrics */}
      <section id="impact" className="bg-canvas py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            align="center"
            eyebrow="Institutional impact metrics"
            title={<>Research capability, measured in outcomes.</>}
            intro="The kind of measurable research, innovation and capability outcomes a strong institutional ecosystem produces."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.07}>
                <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-line bg-white px-5 py-8 text-center shadow-card">
                  <div className="font-display text-4xl font-semibold sm:text-5xl">
                    <span className="text-spectrum">{m.value}</span>
                  </div>
                  <p className="mt-4 font-display text-[15px] font-semibold text-ink">{m.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{m.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9 — Ecosystem journey (key message) */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionHead
            align="center"
            eyebrow="Institutional research ecosystem"
            title={<>From Research Lab to real-world impact.</>}
            intro="The throughline a strong institutional ecosystem follows — research capability compounding into visibility, IP, ventures and impact."
          />
          <div className="mt-10 lg:mt-12">
            <FlowSteps steps={ECOSYSTEM_JOURNEY} />
          </div>
        </Container>
      </section>

      <CTABand
        variant="light"
        eyebrow="For colleges & institutions"
        title="Build with us."
        body="Tell us what you want to build — a Center of Excellence, research capability, or an institutional research ecosystem — and we’ll scope the path with you."
        primary={{ label: 'Build With Us', to: '/contact#institution' }}
        secondary={{ label: 'Explore research enablement', to: '/research-enablement' }}
      />
    </>
  )
}
