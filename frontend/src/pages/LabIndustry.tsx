import {
  Building,
  Users,
  Microscope,
  Database,
  ClipboardList,
  Factory,
  Puzzle,
  GitMerge,
  Cpu,
  Rocket,
  Lightbulb,
  Boxes,
  CheckCircle2,
  Target,
  FileText,
  Award,
  Presentation,
  Radio,
} from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow, Pill } from '../lib/ui'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import FlowSteps from '../components/FlowSteps'
import { IMG } from '../lib/images'

// A — Research Capability Building
const CAPABILITY = [
  { icon: Building, title: 'Research infrastructure', body: 'Stand up the labs, tools and environments that make credible research possible.' },
  { icon: Users, title: 'Research team development', body: 'Build and mentor the people who run research — from early scientists to leads.' },
  { icon: Microscope, title: 'Research methodology', body: 'Rigorous study design, methods and protocols that hold up to scrutiny.' },
  { icon: Database, title: 'Data & analytical capability', body: 'Data pipelines, biostatistics and analytics that turn results into insight.' },
  { icon: ClipboardList, title: 'Research project support', body: 'Hands-on support to plan, run and deliver research projects end to end.' },
]

// B — Multidisciplinary Collaboration
const DISCIPLINES = [
  'Life Sciences',
  'Biomedical Sciences',
  'Engineering',
  'Technology',
  'Data & AI',
  'Management',
  'Social Sciences',
  'Other relevant disciplines',
]

// C — Industry Research Partnerships
const PARTNERSHIPS = [
  { icon: Factory, title: 'Applied research', body: 'Research aimed squarely at real industry problems and outcomes.' },
  { icon: Puzzle, title: 'Industry problem solving', body: 'Bring research capability to the specific challenges you face.' },
  { icon: GitMerge, title: 'Joint research programs', body: 'Co-designed programs that share expertise, data and results.' },
  { icon: Cpu, title: 'Technology development', body: 'Move research into working technology and tools.' },
  { icon: Rocket, title: 'Research commercialization', body: 'Carry validated research toward products, IP and market.' },
]

// D — Innovation & Product Development
const INNOVATION = [
  { icon: Target, title: 'Identify industry problems', body: 'Start from a clearly defined, high-value problem worth solving.' },
  { icon: Microscope, title: 'Research possible solutions', body: 'Investigate credible, evidence-based routes to a solution.' },
  { icon: Boxes, title: 'Develop prototypes', body: 'Build tangible prototypes to make the solution testable.' },
  { icon: CheckCircle2, title: 'Validate solutions', body: 'Test against real conditions and refine toward reliability.' },
  { icon: Lightbulb, title: 'Move ideas toward products', body: 'Turn validated solutions into products with real-world use.' },
]

// E — Research Visibility
const VISIBILITY = [
  { icon: FileText, title: 'Research publications', body: 'Credible, ethically produced publications that carry your work forward.' },
  { icon: Award, title: 'Intellectual property', body: 'Patents, trademarks, copyrights and designs that protect your research.' },
  { icon: Presentation, title: 'Conferences', body: 'A stage for your research among peers, partners and the wider field.' },
  { icon: Building, title: 'Institutional visibility', body: 'Raise the research profile of your lab, institution or organisation.' },
  { icon: Radio, title: 'Research communication', body: 'Translate findings for the audiences that need to act on them.' },
]

const JOURNEY = [
  'Industry Challenge',
  'Research',
  'Multidisciplinary Collaboration',
  'Innovation',
  'Prototype',
  'Validation',
  'Product / Solution',
  'Real-World Impact',
]

export default function LabIndustry() {
  return (
    <>
      <PageHero
        audience="I'm a Lab / Industry"
        eyebrow="Research & Industry Collaboration"
        title={<>Applied research, built for real-world impact.</>}
        intro="Build research capability, multidisciplinary collaboration, innovation partnerships, and applied research pathways that move ideas toward real-world impact."
        cta={{ label: 'Build a Research Partnership', to: '/contact#institution' }}
        image={IMG.labBench}
      />

      {/* A — Research Capability Building */}
      <section className="py-24">
        <Container>
          <SectionHead
            eyebrow="Research capability building"
            title={<>The foundations of credible research.</>}
            intro="We help labs and organisations build lasting research capability — the infrastructure, people, methods and data that serious research depends on."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITY.map((c, i) => {
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

      {/* B — Multidisciplinary Collaboration */}
      <section className="bg-canvas py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>Multidisciplinary collaboration</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                Hard problems need many disciplines.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Real-world impact rarely comes from one field alone. We connect expertise across
                disciplines so research, technology and industry knowledge work on the same problem.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {DISCIPLINES.map((d, i) => (
                  <Reveal key={d} delay={i * 0.04}>
                    <Pill className="bg-white text-[13px]">{d}</Pill>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.1}>
              <Figure img={IMG.teamMeeting} ratio="photo" rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* C — Industry Research Partnerships (dark band) */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <img src={IMG.microscopes.src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow className="text-brand-300">Industry research partnerships</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3rem)] text-white text-balance">
              Research capability, applied to your problems.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              We partner with labs and industry on applied research — from joint programs to technology
              development and commercialization — building capability, not dependency.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERSHIPS.map((r, i) => {
              const Icon = r.icon
              return (
                <Reveal key={r.title} delay={i * 0.06}>
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

      {/* D — Innovation & Product Development */}
      <section className="py-24">
        <Container>
          <SectionHead
            eyebrow="Innovation & product development"
            title={<>From industry problem to real product.</>}
            intro="A structured route that turns a defined industry problem into a validated, real-world product."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* E — Research Visibility */}
      <section className="bg-canvas py-24">
        <Container>
          <SectionHead
            eyebrow="Research visibility"
            title={<>Make the research seen — and credited.</>}
            intro="Capability matters most when the world can see it. We help carry research into publications, IP, conferences and the conversations that shape a field."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VISIBILITY.map((c, i) => {
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

      {/* F — Collaboration Journey */}
      <section className="py-24">
        <Container>
          <SectionHead
            align="center"
            eyebrow="Collaboration journey"
            title={<>From industry challenge to real-world impact.</>}
            intro="Every collaboration follows the same throughline — problem to research to product to impact."
          />
          <div className="mt-14">
            <FlowSteps steps={JOURNEY} />
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="For labs & industry"
        title="Build a research partnership."
        body="Tell us the problem you want to solve or the capability you want to build — and we’ll scope a collaboration that moves it toward real-world impact."
        primary={{ label: 'Build a Research Partnership', to: '/contact#institution' }}
        secondary={{ label: 'Explore partnerships', to: '/partnerships' }}
      />
    </>
  )
}
