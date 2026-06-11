import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Microscope,
  Building2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Quote,
} from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow, ArrowLink } from '../lib/ui'
import { DOORS, PILLARS, PROOF, GROUP, ARTICLES, PARTNER_TRACKS, ETHICS } from '../lib/content'
import Flywheel from '../components/Flywheel'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'
import { HelixLines, Molecule } from '../components/Marks'

const DOOR_ICONS = [Microscope, Building2, Globe2]
const DOOR_IMG = [IMG.microplate, IMG.campusClassic, IMG.officeOpen]
const PARTNER_IMG = [IMG.officeOpen, IMG.dubaiSkyline, IMG.microscopes]
const ARTICLE_IMG = [IMG.data, IMG.coins, IMG.neuron]

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Pillars />
      <CoETeaser />
      <GroupSection />
      <PartnerTeaser />
      <IntegritySection />
      <InsightsTeaser />
      <CTABand
        primary={{ label: 'Get Started', to: '/contact' }}
        secondary={{ label: 'Explore the approach', to: '/about#approach' }}
      />
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-[108px]">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-sky/10 blur-[110px]" />

      <Container className="relative pb-10 pt-14 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>The research-enablement engine for life sciences</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-6 text-[clamp(2.7rem,6.2vw,4.7rem)] text-balance">
                Enabling life-sciences research —{' '}
                <span className="text-spectrum">from scholar to lab to industry.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-xl leading-relaxed text-ink-soft text-pretty">
                We make researchers capable, build Centers of Excellence inside colleges, and partner
                with institutions across India and the Gulf — turning a 100+ college network into
                talent, data, and intellectual property.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-brand h-12 px-7 text-[15px]">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/centers-of-excellence" className="btn-ghost h-12 px-7 text-[15px]">
                  See the CoE model
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-7 flex items-center gap-2 text-sm text-ink-faint">
                <ShieldCheck className="h-4 w-4 text-brand-500" />
                Enablement, never ghostwriting. Integrity-first across the Trueline Group.
              </p>
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

      {/* Live-capability glass card overlapping the image */}
      <motion.div
        className="absolute -bottom-6 -left-6 w-[78%] max-w-xs overflow-hidden rounded-2xl border border-white/15 bg-ink/85 p-5 text-white shadow-card-lg backdrop-blur-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow text-brand-300">Live capability</span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          {[
            { k: 'Enable', v: 92, c: '#2CA897' },
            { k: 'Build', v: 78, c: '#22C3C9' },
            { k: 'Partner', v: 64, c: '#3E9BE8' },
          ].map((row, i) => (
            <div key={row.k}>
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-medium text-white/80">{row.k}</span>
                <span className="text-white/50">{row.v}</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: row.c }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${row.v}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* floating AI chip */}
      <motion.div
        className="absolute -right-4 top-6 flex items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-card-lg backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Sparkles className="h-4.5 w-4.5" />
        </span>
        <div>
          <div className="text-sm font-semibold text-ink">AI-enabled</div>
          <div className="text-xs text-ink-faint">biomedical research</div>
        </div>
      </motion.div>
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
          eyebrow="Three jobs, one engine"
          title={<>Enable. Build. Partner.</>}
          intro="Every part of Trueline maps to one of three pillars — the shape of how a credible life-sciences research engine compounds."
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
              national grant schemes — that turns a campus into an engine for revenue, talent and
              joint intellectual property. It’s the moat competitors in the PhD-help category can’t
              build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/centers-of-excellence" className="btn-brand h-12 px-7 text-[15px]">
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
          eyebrow="The Trueline Group"
          title={<>One engine. Three entities. A flywheel.</>}
          intro="A researcher who enters through Research can publish through Publishers and commercialize through StartNet — the one-stop story competitors can’t match."
        />
        <div className="mt-16">
          <Flywheel />
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
            eyebrow="The scale play"
            title={<>Talent and research, at institutional scale.</>}
            intro="Research-as-a-Service and a CoE-trained talent pipeline for global capability centres, Gulf institutions and industry."
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

// ── Integrity ─────────────────────────────────────────────────────────────
function IntegritySection() {
  return (
    <section className="bg-canvas py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>The integrity layer</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3.1rem)] text-balance">
              Capability, never deliverables-for-hire.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Our repositioning rests on one non-negotiable: we build the researcher’s capability and
              the institution’s capacity. It’s what lets institutional and Gulf partners trust us — and
              what survives investor and partner due diligence.
            </p>
            <Link to="/about#ethics" className="mt-8 inline-flex">
              <span className="btn-ghost h-12 px-7 text-[15px]">Read the Ethics & Integrity Charter</span>
            </Link>
          </div>
          <div className="relative rounded-[2rem] border border-line bg-white p-8 shadow-card">
            <Figure img={IMG.mentoring} ratio="wide" rounded="rounded-2xl" scrim="soft" className="mb-7" />
            <Quote className="absolute right-7 top-7 h-10 w-10 text-white/70" />
            <ul className="space-y-4">
              {ETHICS.map((e, i) => (
                <Reveal key={i} delay={i * 0.06} as="li">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span className="text-[15px] leading-relaxed text-ink">{e}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ── Insights teaser ───────────────────────────────────────────────────────
function InsightsTeaser() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Insights & resources"
            title={<>Field notes from the research engine.</>}
            className="md:max-w-xl"
          />
          <ArrowLink to="/insights" className="shrink-0 pb-2">
            Visit Trueline Spectrum
          </ArrowLink>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <Link
                to="/insights"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <Figure img={ARTICLE_IMG[i]} ratio="photo" rounded="rounded-none" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                <div className="flex flex-1 flex-col p-7">
                <span className="self-start rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-brand-600">
                  {a.tag}
                </span>
                <h3 className="mt-5 flex-1 font-display text-lg font-medium leading-snug text-ink group-hover:text-brand-700">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-ink-faint">
                  {a.read}
                  <ArrowUpRight className="h-4 w-4 text-brand-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
