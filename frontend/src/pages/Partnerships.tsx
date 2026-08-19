import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Users,
  GraduationCap,
  Network,
  Share2,
  GitMerge,
  Workflow,
  FlaskConical,
  Microscope,
  Cpu,
  Boxes,
  Target,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Award,
  FileText,
  Scale,
  ScrollText,
  Factory,
  Briefcase,
  Puzzle,
  LineChart,
  Database,
  Tags,
  Settings2,
  Coins,
  BookOpen,
} from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { RAAS } from '../lib/content'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'

const RAAS_ICONS = [Database, Tags, LineChart, Settings2]

// 1 — Academic Partnerships
const ACADEMIC_ITEMS = [
  { icon: Building2, title: 'Universities & research institutions', body: 'Long-term collaborations with academic partners around shared research agendas.' },
  { icon: GitMerge, title: 'Joint research & co-supervision', body: 'Co-designed programs, shared PhD supervision and cross-institution projects.' },
  { icon: Users, title: 'Faculty & researcher exchange', body: 'Mobility and exchange that move expertise between partner institutions.' },
  { icon: BookOpen, title: 'Shared methodology & cohorts', body: 'Common training and methodology cohorts that raise research quality together.' },
  { icon: Award, title: 'Co-authored publications & IP', body: 'Jointly credited publications and co-owned intellectual property.' },
]

// 2 — Industry Collaboration
const INDUSTRY_ITEMS = [
  { icon: Factory, title: 'Applied research', body: 'Research aimed squarely at real industry problems and outcomes.' },
  { icon: Briefcase, title: 'Sponsored & contract research', body: 'Funded research programs delivered with academic rigour and industry pace.' },
  { icon: Puzzle, title: 'Industry problem-solving', body: 'Bring research capability to the specific challenges your business faces.' },
  { icon: Cpu, title: 'Technology development', body: 'Move research into working technology, tools and platforms.' },
  { icon: Database, title: 'Data & analytics capability', body: 'Data pipelines, biostatistics and analytics that turn results into insight.' },
  { icon: FlaskConical, title: 'Pharma · biotech · medtech', body: 'Deep-domain collaboration across the life-sciences value chain.' },
]

// 3 — Research Networks
const NETWORK_ITEMS = [
  { icon: Network, title: 'Multi-institution network', body: 'A consented research network connecting colleges, labs and partners.' },
  { icon: Database, title: 'Consented research datasets', body: 'Research-grade, consent-first datasets built for AI and analytics.' },
  { icon: Share2, title: 'Multi-site studies', body: 'Coordinated studies that run credibly across many institutions.' },
  { icon: Workflow, title: 'Cross-disciplinary consortia', body: 'Standing consortia that bring many disciplines onto one problem.' },
]

// 4 — Innovation & Product Development
const INNOVATION = [
  { icon: Target, title: 'Identify the problem', body: 'Start from a clearly defined, high-value problem worth solving.' },
  { icon: Microscope, title: 'Research solutions', body: 'Investigate credible, evidence-based routes to a solution.' },
  { icon: Boxes, title: 'Build prototypes', body: 'Build tangible prototypes that make the solution testable.' },
  { icon: CheckCircle2, title: 'Validate', body: 'Test against real conditions and refine toward reliability.' },
  { icon: Lightbulb, title: 'Move to product', body: 'Turn validated solutions into products with real-world use.' },
]

// 5 — Intellectual Property Partnerships
const IP_ITEMS = [
  { icon: Award, title: 'Joint intellectual property', body: 'Co-created, co-owned IP with clear terms from the outset.' },
  { icon: ScrollText, title: 'Patents & filings', body: 'Identify, draft and file patentable outcomes from joint research.' },
  { icon: Scale, title: 'Licensing pathways', body: 'Structure licensing that rewards both partners fairly.' },
  { icon: GitMerge, title: 'Technology transfer', body: 'Move protected technology from lab to partner to market.' },
]

// 6 — Startup & Venture Collaboration
const VENTURE_ITEMS = [
  { icon: Rocket, title: 'Incubation & acceleration', body: 'Structured support that moves research toward fundable ventures.' },
  { icon: Lightbulb, title: 'Startup creation & spinouts', body: 'Form companies around validated research and intellectual property.' },
  { icon: Users, title: 'Investor & partner access', body: 'Connect founders to mentors, corporates and investors through StartNet.' },
  { icon: Building2, title: 'Commercialization support', body: 'Carry ventures from prototype to market with hands-on support.' },
]

// 7 — Joint Research Programs
const JOINT_ITEMS = [
  { icon: GitMerge, title: 'Co-designed programs', body: 'Research programs scoped and governed by both partners.' },
  { icon: Coins, title: 'Shared funding & grants', body: 'Jointly pursued grants and blended funding for larger ambitions.' },
  { icon: FileText, title: 'Co-authorship & publication', body: 'Shared credit and a clear path to credible publication.' },
  { icon: BookOpen, title: 'Methodology cohorts', body: 'Common methods and training that keep quality consistent across teams.' },
]

// 9 — Partnership Impact
const IMPACT_ITEMS = [
  { icon: Award, title: 'Joint IP & publications', body: 'Co-owned intellectual property and jointly credited research output.' },
  { icon: LineChart, title: 'Research revenue lines', body: 'Sustainable research-services and commercialization income for partners.' },
  { icon: GraduationCap, title: 'Talent pipeline', body: 'A vetted supply of research-ready graduates and early-career scientists.' },
  { icon: Rocket, title: 'Products & ventures', body: 'Validated research carried through to real products and startups.' },
]

export default function Partnerships() {
  return (
    <>
      <PageHero
        audience="Partnerships & Collaboration"
        eyebrow="Partnerships & Collaboration"
        title={<>Partnerships &amp; Collaboration.</>}
        intro="Building multidisciplinary partnerships that transform research into innovation, intellectual property, products, startups, and societal impact."
        cta={{ label: 'Start a Partnership', to: '/contact#institution' }}
        image={IMG.teamLaptops}
      />

      {/* 1 — Academic Partnerships */}
      <section id="academic" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Academic partnerships</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                Research is stronger when institutions build it together.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                We partner with universities and research institutions on shared agendas — joint
                programs, co-supervision and co-owned output that raise the research capability of
                everyone involved.
              </p>
              <ul className="mt-7 space-y-3">
                {ACADEMIC_ITEMS.map((r, i) => {
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
            </div>
            <Reveal delay={0.1}>
              <Figure img={IMG.teamMeeting} ratio="photo" rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 — Industry Collaboration */}
      <section id="industry" className="bg-canvas py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Industry collaboration"
            title={<>Research capability, applied to your problems.</>}
            intro="We connect industry with academic research teams to move ideas from lab to product — across pharma, biotech, medtech and emerging technologies."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_ITEMS.map((c, i) => {
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

      {/* 3 — Research Networks (dark band) */}
      <section id="networks" className="relative overflow-hidden bg-ink py-12 md:py-16 lg:py-20 text-white scroll-mt-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <img src={IMG.data.src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow className="text-brand-300">Research networks</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3rem)] text-white text-balance">
              A network is bigger than any one lab.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              We build consented, multi-institution research networks — shared datasets, multi-site
              studies and standing consortia that let partners take on problems no single institution
              could.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NETWORK_ITEMS.map((r, i) => {
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

      {/* 4 — Innovation & Product Development */}
      <section id="innovation" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Innovation & product development"
            title={<>From a shared problem to a real product.</>}
            intro="A structured route that turns a defined problem into a validated, real-world product — together."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INNOVATION.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-3xl border border-line bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-3xl font-light text-line-2">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-medium leading-snug text-ink">{c.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 5 — Intellectual Property Partnerships */}
      <section id="ip" className="bg-canvas py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Intellectual property partnerships"
            title={<>Shared research, clearly shared IP.</>}
            intro="Joint intellectual property with clear terms — patents, licensing and technology transfer that reward every partner fairly."
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

      {/* 6 — Startup & Venture Collaboration */}
      <section id="ventures" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
            <Reveal>
              <Figure img={IMG.officeOpen} ratio="photo" rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
            </Reveal>
            <div>
              <Eyebrow>Startup & venture collaboration</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                Carry research all the way to a venture.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Through StartNet, we help partners turn validated research and IP into companies —
                incubation, acceleration, and the investor and industry access that ventures need.
              </p>
              <ul className="mt-7 space-y-3">
                {VENTURE_ITEMS.map((r, i) => {
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
                <Link to="/startups" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Explore research-to-venture <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 7 — Joint Research Programs */}
      <section id="joint-research" className="bg-canvas py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Joint research programs"
            title={<>Programs built and governed together.</>}
            intro="Co-designed research programs with shared funding, shared credit and a common methodology — structured to last beyond a single project."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {JOINT_ITEMS.map((c, i) => {
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

      {/* 8 — Research Commercialization (dark band, RaaS) */}
      <section id="commercialization" className="relative overflow-hidden bg-ink py-12 md:py-16 lg:py-20 text-white scroll-mt-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
          <img src={IMG.engineerLab.src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow className="text-brand-300">Research commercialization</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3rem)] text-white text-balance">
              Productized research operations.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              The capability our research network produces, packaged for partners as
              Research-as-a-Service — consent-first, audit-ready, and priced for scale.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RAAS.map((r, i) => {
              const Icon = RAAS_ICONS[i]
              return (
                <Reveal key={r.name} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <Icon className="h-7 w-7 text-brand-300" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-white">{r.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{r.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 9 — Partnership Impact */}
      <section id="impact" className="py-12 md:py-16 lg:py-20 scroll-mt-24">
        <Container>
          <SectionHead
            align="center"
            eyebrow="Partnership impact"
            title={<>What a real partnership produces.</>}
            intro="The outcomes we build partnerships to create — owned IP, revenue, talent and ventures that outlast any single project."
          />
          <div className="mt-10 lg:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_ITEMS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col items-center rounded-3xl border border-line bg-white p-7 text-center shadow-card">
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
    </>
  )
}
