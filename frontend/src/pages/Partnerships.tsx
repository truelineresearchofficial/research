import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Database,
  Tags,
  LineChart,
  Settings2,
  FlaskConical,
  Users,
  GraduationCap,
  Layers,
  Building,
  Microscope,
  ClipboardList,
  FileText,
  Award,
  Presentation,
  BookOpen,
  Lightbulb,
  Rocket,
  CheckCircle2,
} from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { PARTNER_TRACKS, RAAS } from '../lib/content'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import FlowSteps from '../components/FlowSteps'
import { IMG } from '../lib/images'

const RAAS_ICONS = [Database, Tags, LineChart, Settings2]
const TRACK_IMG = [IMG.teamLaptops, IMG.dubaiSkyline, IMG.microscopes]

// A — Centers of Excellence
const COE_ITEMS = [
  { icon: FlaskConical, title: 'Research labs inside campuses', body: 'Co-branded Centers of Excellence that turn your campus into a working Research Lab.' },
  { icon: Users, title: 'Faculty capability development', body: 'Build faculty research capability through mentoring and methodology support.' },
  { icon: GraduationCap, title: 'Student research opportunities', body: 'Give students real, fundable research to work on — and skills that last.' },
  { icon: Layers, title: 'Multidisciplinary collaboration', body: 'Connect departments and disciplines around shared research problems.' },
  { icon: Building, title: 'Research infrastructure', body: 'Stand up the infrastructure and operating rhythm credible research needs.' },
]

// B — Research Enablement
const ENABLE_ITEMS = [
  { icon: Microscope, title: 'Research methodology', body: 'Rigorous study design, methods and protocols that hold up to scrutiny.' },
  { icon: Users, title: 'Mentorship', body: 'One-to-one and cohort mentoring that builds real research capability.' },
  { icon: ClipboardList, title: 'Research project development', body: 'Support to scope, plan and deliver research projects end to end.' },
  { icon: FileText, title: 'Publication support', body: 'Ethical support from manuscript to credible, visible publication.' },
  { icon: Award, title: 'Intellectual Property support', body: 'Identify and protect IP — patents, trademarks, copyrights and designs.' },
]

// C — Faculty & Student Development
const FACULTY_ITEMS = [
  { icon: Presentation, title: 'Workshops', body: 'Hands-on workshops on research skills, methods and tools.' },
  { icon: Users, title: 'Faculty Development Programs', body: 'Structured FDPs that raise research capability across departments.' },
  { icon: BookOpen, title: 'Research training', body: 'Training that turns interest into real research competence.' },
  { icon: Lightbulb, title: 'Skill development', body: 'Practical skills for students and faculty across the research lifecycle.' },
  { icon: Rocket, title: 'Innovation programs', body: 'Programs that move research and ideas toward innovation and impact.' },
]

// D — Institutional Research Ecosystem
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

// E — Institutional Partnerships
const INSTITUTIONAL_PARTNERSHIPS = [
  'Centers of Excellence',
  'Research programs',
  'Innovation initiatives',
  'Industry collaboration',
  'Research development',
  'Institutional capacity building',
]

export default function Partnerships() {
  return (
    <>
      <PageHero
        audience="I'm a College / Institution"
        eyebrow="For Colleges & Institutions"
        title={<>For Colleges &amp; Institutions.</>}
        intro="Build research capability, multidisciplinary collaboration, Centers of Excellence, and innovation pathways that help institutions move from research to meaningful impact."
        cta={{ label: 'Build With Us', to: '/contact#institution' }}
        image={IMG.campusBrick}
      />

      {/* A — Centers of Excellence */}
      <section className="py-24">
        <Container>
          <SectionHead
            eyebrow="Centers of Excellence"
            title={<>A research lab inside your campus.</>}
            intro="Co-branded Centers of Excellence — funded through national grant schemes — that build faculty capability, student research and multidisciplinary collaboration on your own campus."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* B — Research Enablement */}
      <section className="bg-canvas py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <Figure img={IMG.mentoring} ratio="photo" rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
            </Reveal>
            <div>
              <Eyebrow>Research enablement</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                Capability that stays with your people.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                We build the research capability of faculty and students directly — methodology,
                mentorship and support that raise the quality and credibility of institutional research.
              </p>
              <ul className="mt-7 space-y-3">
                {ENABLE_ITEMS.map((r, i) => {
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

      {/* C — Faculty & Student Development */}
      <section className="py-24">
        <Container>
          <SectionHead
            eyebrow="Faculty & student development"
            title={<>Workshops, FDPs and research training.</>}
            intro="Structured programs that develop faculty and students — from workshops and Faculty Development Programs to research training, skill development and innovation."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACULTY_ITEMS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-3xl border border-line bg-canvas p-7">
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

      {/* D — Institutional Research Ecosystem */}
      <section className="bg-canvas py-24">
        <Container>
          <SectionHead
            align="center"
            eyebrow="Institutional research ecosystem"
            title={<>From Research Lab to real-world impact.</>}
            intro="The throughline a strong institutional ecosystem follows — research capability compounding into visibility, IP, ventures and impact."
          />
          <div className="mt-14">
            <FlowSteps steps={ECOSYSTEM_JOURNEY} />
          </div>
        </Container>
      </section>

      {/* E — Institutional Partnerships */}
      <section className="py-24">
        <Container>
          <SectionHead
            eyebrow="Institutional partnerships"
            title={<>Ways we partner with institutions.</>}
            intro="Beyond a single lab, we build long-term institutional partnerships — the tracks, programs and collaborations detailed below."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INSTITUTIONAL_PARTNERSHIPS.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-[15px] font-medium text-ink">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" /> {p}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tracks */}
      <section className="py-24">
        <Container>
          <SectionHead eyebrow="Who we partner with" title={<>Three tracks, one capability base.</>} />
          <div className="mt-12 space-y-5">
            {PARTNER_TRACKS.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.06}>
                <div id={t.id} className="grid scroll-mt-28 items-stretch overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-12">
                  <div className="order-2 p-8 lg:order-1 lg:col-span-7 lg:p-10">
                    <span className="text-sm font-semibold text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 font-display text-2xl font-medium text-ink">{t.name}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{t.body}</p>
                    <ul className="mt-5 grid gap-3">
                      {t.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 rounded-xl bg-canvas px-4 py-3 text-[15px] font-medium text-ink">
                          <span className="h-2 w-2 rounded-full bg-brand-400" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Figure
                    img={TRACK_IMG[i]}
                    ratio="auto"
                    rounded="rounded-none"
                    scrim="soft"
                    className="order-1 min-h-[220px] lg:order-2 lg:col-span-5"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* RaaS */}
      <section id="raas" className="relative overflow-hidden bg-ink py-24 text-white scroll-mt-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
          <img src={IMG.data.src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow className="text-brand-300">Research-as-a-Service</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3rem)] text-white text-balance">
              Productized research operations.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              The capability the CoE network produces, packaged for partners — consent-first, audit-ready,
              and priced for scale.
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

      {/* Talent + policy */}
      <section className="py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div id="talent" className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-line bg-canvas p-9">
                <Eyebrow>Talent pipeline</Eyebrow>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">CoE-trained graduates, ready for research roles.</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  Every Center of Excellence trains students on real, fundable research. That output
                  becomes a vetted talent supply for research institutions, industry and innovation
                  ecosystems across India.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div id="policy" className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-line bg-canvas p-9">
                <Eyebrow>Government & policy programs</Eyebrow>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">Aligned to national research priorities.</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  We position partnerships against the policy tailwinds — the BioE3 policy, the RDI Fund,
                  and the Tamil Nadu Life Sciences Policy — so collaborations qualify for the right
                  support.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['BioE3 Policy', 'RDI Fund', 'TN Life Sciences Policy'].map((p) => (
                    <span key={p} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink-soft">{p}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Industry–academia collaboration band */}
      <section id="gulf" className="bg-canvas py-24 scroll-mt-24">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-10 shadow-card lg:p-14">
            <Figure
              img={IMG.gulfLandmark}
              ratio="wide"
              rounded="rounded-none"
              scrim="soft"
              className="-mx-10 -mt-10 mb-10 lg:-mx-14 lg:-mt-14 lg:mb-12"
            />
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow>Industry–academia collaboration</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                  From research capability to real-world product.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  We connect institutions, researchers and industry so multidisciplinary research
                  moves through innovation, intellectual property and startup creation to Idea to
                  Product — building lasting research capability, not dependency.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { t: 'Joint research', b: 'Co-designed research programs, Research Labs and methodology cohorts.' },
                  { t: 'Intellectual property', b: 'Joint IP, technology development and licensing pathways.' },
                  { t: 'Idea to Product', b: 'Startup creation and commercialization support through StartNet.' },
                ].map((c, i) => (
                  <Reveal key={c.t} delay={i * 0.07}>
                    <div className="rounded-2xl border border-line bg-canvas p-6">
                      <h4 className="font-display text-lg font-semibold text-ink">{c.t}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="For colleges & institutions"
        title="Build with us."
        body="Tell us what you want to build — a Center of Excellence, research capability, or an institutional partnership — and we’ll scope the path with you."
        primary={{ label: 'Build With Us', to: '/contact#institution' }}
        secondary={{ label: 'Explore research enablement', to: '/research-enablement' }}
      />
    </>
  )
}
