import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, FlaskConical, CheckCircle2 } from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { FUNDING_RAILS, COE_RETURNS, COE_TIMELINE } from '../lib/content'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'

export default function CoE() {
  return (
    <>
      <PageHero
        audience="For colleges & departments"
        eyebrow="Centers of Excellence"
        title={<>A research lab inside your campus.</>}
        intro="A co-branded Center of Excellence — funded through national grant schemes — that turns your department into an engine for revenue, talent and joint intellectual property."
        cta={{ label: 'Request a CoE proposal', to: '/contact#college' }}
        image={IMG.campusClassic}
      />

      {/* The model */}
      <section id="model" className="py-24 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="The CoE model"
            title={<>What a Trueline Center of Excellence is.</>}
            intro="Not a consultancy retainer. A standing, co-branded research capability — staffed by mentors, funded by grants, and owned jointly with your institution."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div id="ai" className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-brand-200 bg-brand-50/40">
                <Figure img={IMG.dna} ratio="wide" rounded="rounded-none" scrim="soft" />
                <div className="flex flex-1 flex-col p-8">
                <span className="self-start rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">Launch first · asset-light</span>
                <Cpu className="mt-5 h-8 w-8 text-brand-600" />
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">AI & Bioinformatics CoE</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  Capability over capex. A computational lab for genomics, AI-in-biology and data
                  analytics that needs talent and compute — not a wet-lab build-out. The fastest path
                  to a live, fundable CoE.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Minimal capital outlay', 'Fast to stand up', 'Plugs into Research-as-a-Service'].map((x) => (
                    <li key={x} className="flex items-center gap-2 text-sm text-ink">
                      <CheckCircle2 className="h-4 w-4 text-brand-500" /> {x}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div id="bio" className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-line bg-white">
                <Figure img={IMG.labBench} ratio="wide" rounded="rounded-none" scrim="soft" />
                <div className="flex flex-1 flex-col p-8">
                <span className="self-start rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-ink-soft">Stage two</span>
                <FlaskConical className="mt-5 h-8 w-8 text-ink" />
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">Biomedical & Life-Sciences CoE</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  A deeper wet-and-dry lab capability for biomedical research, built on the operating
                  rhythm proven by the AI CoE and funded through infrastructure schemes.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Infrastructure-grant funded', 'Wet + dry lab capability', 'Joint publication pipeline'].map((x) => (
                    <li key={x} className="flex items-center gap-2 text-sm text-ink">
                      <CheckCircle2 className="h-4 w-4 text-brand-500" /> {x}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* How funding works */}
      <section id="funding" className="bg-ink py-24 text-white scroll-mt-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="text-brand-300">How funding works</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,3rem)] text-white text-balance">
              We remove the only real objection: <span className="text-brand-300">“we can’t afford a lab.”</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              A Trueline CoE is designed to be funded. We map the specific national and state schemes
              that cover your setup cost — concretely, in your proposal.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FUNDING_RAILS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{f.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.what}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Returns */}
      <section id="returns" className="py-24 scroll-mt-24">
        <Container>
          <SectionHead eyebrow="What colleges get" title={<>Four returns on one decision.</>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COE_RETURNS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-line bg-canvas p-7">
                  <span className="font-display text-4xl font-light text-brand-200">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{r.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section id="timeline" className="bg-canvas py-24 scroll-mt-24">
        <Container>
          <SectionHead eyebrow="Setup & timeline" title={<>From request to operating lab.</>} />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {COE_TIMELINE.map((t, i) => (
              <Reveal key={t.phase} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-line bg-white p-7">
                  <div className="absolute right-6 top-6 font-display text-3xl font-light text-line-2">{i + 1}</div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{t.phase}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Cases placeholder */}
      <section id="cases" className="py-24 scroll-mt-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-line bg-white p-10 shadow-card md:flex-row md:items-center">
            <div className="max-w-xl">
              <Eyebrow>Case studies & showcase</Eyebrow>
              <h2 className="display mt-4 text-[clamp(1.6rem,3.5vw,2.4rem)]">See a CoE take shape.</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                We’re documenting the first cohort of Trueline Centers of Excellence — funding maps,
                setup timelines and first joint papers. Request a proposal to see comparable examples.
              </p>
            </div>
            <Link to="/contact#college" className="btn-brand h-12 shrink-0 px-7 text-[15px]">
              Request a proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="For colleges & departments"
        title="Get a CoE proposal built for your campus."
        body="A short qualifying form returns a tailored design with the grant rails that fund it."
        primary={{ label: 'Request a CoE proposal', to: '/contact#college' }}
        secondary={{ label: 'How partnerships scale it', to: '/partnerships' }}
      />
    </>
  )
}
