import {
  Search,
  CheckCircle2,
  Lightbulb,
  Boxes,
  Wrench,
  FlaskConical,
  Layers,
  Users,
  Cpu,
  Rocket,
  FileText,
  Palette,
  Target,
  Building2,
  TrendingUp,
} from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import FlowSteps from '../components/FlowSteps'
import { IMG } from '../lib/images'

// A — From Idea to Product
const IDEA_TO_PRODUCT = [
  { icon: Search, title: 'Problem identification', body: 'Frame a real, well-defined problem worth solving — grounded in evidence, not assumption.' },
  { icon: CheckCircle2, title: 'Idea validation', body: 'Pressure-test the idea against research, users and feasibility before investing in build.' },
  { icon: Lightbulb, title: 'Research-backed product concepts', body: 'Translate findings and domain expertise into credible, differentiated product concepts.' },
  { icon: Boxes, title: 'Prototyping', body: 'Turn concepts into working prototypes that make the solution tangible and testable.' },
  { icon: Wrench, title: 'Product development', body: 'Engineer the prototype into a robust, usable product with the right technical foundations.' },
  { icon: FlaskConical, title: 'Testing and refinement', body: 'Validate with real feedback and iterate — refining the product toward market fit.' },
]

// B — Research & Innovation Support
const INNOVATION_SUPPORT = [
  { title: 'Research translation', body: 'Convert research outputs and evidence into practical, buildable product direction.' },
  { title: 'Multidisciplinary collaboration', body: 'Bring life sciences, engineering, data and design together around one problem.' },
  { title: 'Technical development', body: 'Hands-on engineering support to move from concept to a working solution.' },
  { title: 'Data and AI-enabled solutions', body: 'Apply data pipelines, analytics and AI where they create real product value.' },
  { title: 'Innovation strategy', body: 'Shape a clear path from insight to product, prioritising what to build and when.' },
]

// C — Intellectual Property
const IP = [
  { icon: Search, title: 'Identify potential IP', body: 'Spot protectable ideas, methods and assets early in the build.' },
  { icon: FileText, title: 'Support IP development', body: 'Help structure and document innovations so they can be protected.' },
  { icon: Palette, title: 'Protect what you create', body: 'Patents, trademarks, copyrights and industrial designs — the right form for each asset.' },
  { icon: Rocket, title: 'Research-to-commercialization', body: 'Build pathways that carry protected IP toward market and revenue.' },
]

// D — Venture Development
const VENTURE = [
  { icon: Target, title: 'Product-market validation', body: 'Confirm demand and fit before scaling — with evidence, not guesswork.' },
  { icon: Building2, title: 'Venture building', body: 'Shape the product, model and structure needed to stand up a venture.' },
  { icon: Cpu, title: 'Technology commercialization', body: 'Move research-backed technology into products people can buy and use.' },
  { icon: Users, title: 'Industry connections', body: 'Connect to partners, institutions and networks across the ecosystem.' },
  { icon: TrendingUp, title: 'Growth & partnership opportunities', body: 'Open routes to scale through collaboration and strategic partnerships.' },
]

const APPROACH = ['Research', 'Innovation', 'Validation', 'Prototype', 'Product', 'Venture', 'Real-World Impact']

export default function Startups() {
  return (
    <>
      <PageHero
        audience="I'm a Startup"
        eyebrow="Research to Venture"
        title={<>From research to real-world venture.</>}
        intro="Turn research, innovation, intellectual property, and multidisciplinary expertise into scalable products, ventures, and real-world solutions."
        cta={{ label: 'Build with Trueline Research', to: '/contact' }}
        image={IMG.officeOpen}
      />

      {/* A — From Idea to Product */}
      <section className="py-24">
        <Container>
          <SectionHead
            eyebrow="From idea to product"
            title={<>A disciplined path from problem to product.</>}
            intro="We move ideas through a structured, research-backed sequence — so what you build is validated, protectable and ready for the real world."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {IDEA_TO_PRODUCT.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
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

      {/* B — Research & Innovation Support */}
      <section className="bg-canvas py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <Figure img={IMG.data} ratio="photo" rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
            </Reveal>
            <div>
              <Eyebrow>Research &amp; innovation support</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                The research engine behind the build.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Startups don’t have to solve research and product in isolation. We bring the methodology,
                collaboration and technical depth that turn innovation into a working solution.
              </p>
              <ul className="mt-7 space-y-3">
                {INNOVATION_SUPPORT.map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.05} as="li">
                    <div className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                      <Layers className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink">{r.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* C — Intellectual Property (dark band) */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <img src={IMG.neuron.src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow className="text-brand-300">Intellectual property</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3rem)] text-white text-balance">
              Own the value you create.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Innovation is only defensible when it’s protected. We help identify, develop and protect
              intellectual property, then build pathways from research to commercialization.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IP.map((r, i) => {
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

      {/* D — Venture Development */}
      <section className="py-24">
        <Container>
          <SectionHead
            eyebrow="Venture development"
            title={<>From validated product to growing venture.</>}
            intro="Once the product is real and protected, we help move it toward a venture — validated, commercialized and connected to the wider ecosystem."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VENTURE.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-3xl border border-line bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
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

      {/* E — Our Approach */}
      <section className="bg-canvas py-24">
        <Container>
          <SectionHead
            align="center"
            eyebrow="Our approach"
            title={<>One path, research to impact.</>}
            intro="Every venture we support follows the same throughline — from research to real-world impact."
          />
          <div className="mt-14">
            <FlowSteps steps={APPROACH} />
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="For startups & innovators"
        title="Build with Trueline Research."
        body="Bring us your idea, your research or your early venture — and we’ll help move it from insight to product to real-world impact."
        primary={{ label: 'Build with Trueline Research', to: '/contact' }}
        secondary={{ label: 'Explore research enablement', to: '/research-enablement' }}
      />
    </>
  )
}
