import { Link } from 'react-router-dom'
import { ArrowRight, Users, GraduationCap, Workflow } from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow, ArrowLink } from '../lib/ui'
import { ENABLEMENT_SERVICES } from '../lib/content'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'

export default function Enablement() {
  return (
    <>
      <PageHero
        audience="For scholars & faculty"
        eyebrow="Research Enablement"
        title={<>Do real research. Publish it credibly.</>}
        intro="Mentoring, biostatistics, bioinformatics and methodology support that builds your capability — process, not deliverables. You stay the researcher; you keep the skill."
        cta={{ label: 'Book a consultation', to: '/contact#scholar' }}
        image={IMG.microplate}
      />

      {/* How enablement works */}
      <section id="overview" className="py-24 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="How enablement works"
            title={<>A repeatable path from question to publication.</>}
            intro="Every engagement follows the same honest arc — we name the problem, build the method with you, and hand the work back stronger than we found it."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Users, t: '1:1 mentoring', b: 'Senior mentors work alongside you on the hard methodological calls.' },
              { icon: GraduationCap, t: 'Cohorts & workshops', b: 'Department-wide training that lifts a whole research culture.' },
              { icon: Workflow, t: 'Reproducible workflows', b: 'Analysis you can defend, repeat, and teach to the next student.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-line bg-canvas p-7">
                  <c.icon className="h-7 w-7 text-brand-500" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{c.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-canvas py-24">
        <Container>
          <SectionHead
            eyebrow="What we enable"
            title={<>Eight capabilities, one standard of rigor.</>}
          />
          <div className="mt-12 space-y-5">
            {ENABLEMENT_SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={Math.min(i * 0.04, 0.2)}>
                <div id={s.id} className="grid scroll-mt-28 gap-6 rounded-3xl border border-line bg-white p-8 lg:grid-cols-12 lg:p-10">
                  <div className="lg:col-span-4">
                    <span className="text-sm font-semibold text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-ink">{s.name}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-canvas px-3 py-1 text-xs font-medium text-ink-soft">{s.format}</span>
                      <span className="rounded-full bg-canvas px-3 py-1 text-xs font-medium text-ink-soft">{s.forWho}</span>
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">The problem</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">How Trueline enables</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink">{s.enable}</p>
                      {s.crossLink && (
                        <ArrowLink to={s.crossLink.to} className="mt-3">
                          Continue with {s.crossLink.label}
                        </ArrowLink>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Grants band */}
      <section id="grants" className="py-24 scroll-mt-24">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-line bg-ink p-10 text-white lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow className="text-brand-300">Grant & funding support</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.8rem)] text-white text-balance">
                  Win funding on the strength of your science.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">
                  We architect proposals, methods and budget justifications for India’s major funding
                  rails — you stay the Principal Investigator, in full.
                </p>
                <Link to="/contact#scholar" className="btn-brand mt-7 h-12 px-7 text-[15px]">
                  Plan a proposal <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['ICMR', 'DBT / BIRAC', 'DST', 'SERB'].map((g) => (
                  <div key={g} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
                    <span className="font-display text-xl font-semibold text-white">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="For scholars & faculty"
        title="Map your research to a publishable path."
        body="A 30-minute working session with a Trueline mentor — bring your question, leave with a method."
        primary={{ label: 'Book a consultation', to: '/contact#scholar' }}
        secondary={{ label: 'Explore Centers of Excellence', to: '/centers-of-excellence' }}
      />
    </>
  )
}
