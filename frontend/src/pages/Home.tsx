import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  FlaskConical,
  Cpu,
  Database,
  Rocket,
} from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow, ArrowLink } from '../lib/ui'
import { DOORS, PILLARS, PROOF, ECOSYSTEM, PARTNER_TRACKS } from '../lib/content'
import Flywheel from '../components/Flywheel'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'
import { HelixLines, Molecule } from '../components/Marks'

const DOOR_ICONS = [Rocket, FlaskConical, Building2]
const DOOR_IMG = [IMG.teamLaptops, IMG.microscopes, IMG.campusClassic]
const PARTNER_IMG = [IMG.officeOpen, IMG.dubaiSkyline, IMG.microscopes]

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Pillars />
      <CoETeaser />
      <GroupSection />
      <PartnerTeaser />
      <AIProducts />
      <CTABand
        eyebrow="Where knowledge becomes impact"
        title="Build the future through research & innovation."
        body="We support researchers, institutions and multidisciplinary teams in transforming knowledge into publications, innovation, intellectual property and practical products."
        primary={{ label: 'Get Started', to: '/contact' }}
        secondary={{ label: 'Explore the approach', to: '/about#approach' }}
      />
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-[68px] lg:pt-[104px]">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-sky/10 blur-[110px]" />

      <Container className="relative pb-10 pt-8 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Multidisciplinary research &amp; product development</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-6 text-[clamp(2.7rem,6.2vw,4.7rem)] text-balance">
                Where Multidisciplinary Research{' '}
                <span className="text-spectrum">becomes meaningful impact.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-xl leading-relaxed text-ink-soft text-pretty">
                We make Researchers capable, build Centers of Excellence inside Colleges, and partner with Institutions across India — turning a Startup network into multidisciplinary Talent, Research, Data, and Intellectual Property with a strong focus on Idea to Product.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-brand h-12 px-7 text-[15px]">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/partnerships" className="btn-ghost h-12 px-7 text-[15px]">
                  See the CoE model
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </Container>

      {/* Three doors */}
      <Container className="relative pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium text-ink-faint">Find your path —</p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {DOORS.map((d, i) => {
            const Icon = DOOR_ICONS[i]
            return (
              <Reveal key={d.id} delay={0.12 + i * 0.07}>
                <Link
                  to={d.to}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <div className="relative">
                    <Figure
                      img={DOOR_IMG[i]}
                      ratio="wide"
                      rounded="rounded-none"
                      scrim="bottom"
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute -bottom-5 left-6 grid h-11 w-11 place-items-center rounded-xl bg-ink text-white shadow-card">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{d.kicker}</p>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink">{d.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{d.body}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-brand-600">
                      {d.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <Reveal delay={0.2} className="relative mx-auto max-w-md lg:mr-0">
      {/* Signature photograph */}
      <Figure
        img={IMG.engineerLab}
        ratio="tall"
        eager
        rounded="rounded-[2rem]"
        scrim="soft"
        className="border border-line shadow-card-lg"
      />
    </Reveal>
  )
}

// ── Proof strip ───────────────────────────────────────────────────────────
function ProofStrip() {
  return (
    <section className="border-y border-line bg-white">
      <Container className="grid grid-cols-2 gap-px lg:grid-cols-4">
        {PROOF.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.06} className="px-2 py-9 sm:px-6">
            <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              <span className="text-spectrum">{p.value}</span>
            </div>
            <div className="mt-2 text-[15px] font-medium text-ink">{p.label}</div>
            <div className="mt-1 text-sm text-ink-faint">{p.sub}</div>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}

// ── Pillars ───────────────────────────────────────────────────────────────
function Pillars() {
  return (
    <section className="py-24">
      <Container>
        <SectionHead
          eyebrow="Multidisciplinary research & innovation"
          title={<>Enable. Build. Partner.</>}
          intro="We bring disciplines, researchers, faculty, students, institutions and industry together — turning multidisciplinary research and cross-disciplinary collaboration into innovation, emerging technology and real-world product development."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Link
                to={p.to}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:border-brand-200 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-light text-line-2 transition-colors group-hover:text-brand-200">
                    {p.n}
                  </span>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {p.name}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-ink">{p.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ── CoE teaser ────────────────────────────────────────────────────────────
function CoETeaser() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <img src={IMG.labBench.src} alt="" className="h-full w-full object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20">
        <Molecule className="ml-auto h-full animate-spin-slow" />
      </div>
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brand-300">
              <span className="h-px w-6 bg-brand-300" /> The differentiator
            </span>
            <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.3rem)] text-white text-balance">
              We build research labs <span className="text-brand-300">inside colleges.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
              A Trueline Center of Excellence is a co-branded, asset-light lab — funded through
              national grant schemes — that connects research infrastructure, faculty development,
              student innovation, emerging technologies and industry collaboration, turning a campus
              into an engine for talent, joint intellectual property and product development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/partnerships" className="btn-brand h-12 px-7 text-[15px]">
                Explore the CoE model <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact#college" className="btn h-12 border border-white/20 px-7 text-[15px] text-white hover:bg-white/10">
                Request a proposal
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: 'Asset-light', b: 'AI & Bioinformatics CoEs launch first — capability over capex.' },
              { t: 'Grant-funded', b: 'IDEA Lab, DST-FIST, PM-USHA and BioE3 mapped to your setup cost.' },
              { t: 'Revenue-sharing', b: 'A research-services line the host department shares in.' },
              { t: 'Joint IP', b: 'Co-authored papers and co-owned intellectual property.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <h4 className="font-display text-lg font-semibold text-white">{c.t}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// ── Trueline Group / flywheel ─────────────────────────────────────────────
function GroupSection() {
  return (
    <section className="bg-canvas py-24" id="flywheel">
      <Container>
        <SectionHead
          align="center"
          eyebrow="The Trueline Group Ecosystem"
          title={<>One ecosystem. Five entities. One flywheel.</>}
          intro="A researcher who enters through Research can publish through Publishers and commercialize through StartNet — the one-stop story competitors can’t match."
        />
        <div className="mt-16">
          <Flywheel
            data={ECOSYSTEM}
            wrap
            core={{ title: 'TRUELINE\nGROUP', subtitle: 'Research • Publishing • Innovation' }}
          />
        </div>
      </Container>
    </section>
  )
}

// ── Partnerships teaser ───────────────────────────────────────────────────
function PartnerTeaser() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Institutional research & innovation"
            title={<>Research and innovation, at institutional scale.</>}
            intro="We collaborate with colleges, universities and industry to strengthen multidisciplinary research, innovation, intellectual property and product development — and turn it into lasting institutional impact."
            className="md:max-w-xl"
          />
          <ArrowLink to="/partnerships" className="shrink-0 pb-2">
            All partnership tracks
          </ArrowLink>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PARTNER_TRACKS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:shadow-card">
                <Figure img={PARTNER_IMG[i]} ratio="wide" rounded="rounded-none" scrim="soft" imgClassName="transition-transform duration-700 hover:scale-105" />
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-xl font-medium text-ink">{t.name}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{t.body}</p>
                  <ul className="mt-5 space-y-2">
                    {t.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ── AI Products & Platform Building ───────────────────────────────────────
const AI_PRODUCTS = [
  {
    icon: FlaskConical,
    title: 'Research-to-Product',
    body: 'Turn research findings and promising ideas into practical product concepts, prototypes, and solutions.',
    to: '/contact',
  },
  {
    icon: Cpu,
    title: 'AI & Intelligent Systems',
    body: 'Build AI-enabled applications, decision-support systems, automation tools, and intelligent digital solutions.',
    to: '/contact',
  },
  {
    icon: Database,
    title: 'Data & Platform Engineering',
    body: 'Transform research and institutional data into secure, scalable platforms, dashboards, and data-driven systems.',
    to: '/contact',
  },
  {
    icon: Rocket,
    title: 'Idea to Product',
    body: 'Move from problem identification and validation through prototyping, development, testing, and productization.',
    to: '/contact',
  },
]

function AIProducts() {
  return (
    <section className="bg-canvas py-24">
      <Container>
        <SectionHead
          eyebrow="From idea to product"
          title={<>AI Products &amp; Platform Building</>}
          intro="From research and ideas to intelligent products and scalable platforms — we bring together multidisciplinary expertise, data, AI, and product thinking to build solutions with real-world impact."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AI_PRODUCTS.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{c.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                  <Link
                    to={c.to}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700"
                  >
                    Explore Solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

