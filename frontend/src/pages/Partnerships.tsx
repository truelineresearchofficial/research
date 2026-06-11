import { ArrowRight, Database, Tags, LineChart, Settings2 } from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { PARTNER_TRACKS, RAAS } from '../lib/content'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'

const RAAS_ICONS = [Database, Tags, LineChart, Settings2]
const TRACK_IMG = [IMG.teamLaptops, IMG.dubaiSkyline, IMG.microscopes]

export default function Partnerships() {
  return (
    <>
      <PageHero
        audience="For institutions, GCCs & industry"
        eyebrow="Partnerships & GCC"
        title={<>Talent and research, at institutional scale.</>}
        intro="An India-cost, English-language biomedical research partner — built on a consented, multi-college data network and a pipeline of CoE-trained graduates."
        cta={{ label: 'Start a partnership', to: '/contact#institution' }}
        image={IMG.officeOpen}
      />

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
                  becomes a vetted talent supply for the global capability centres clustering across
                  South India.
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

      {/* Gulf framing band */}
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
                <Eyebrow>For Gulf institutions</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-balance">
                  A research-enablement partner for Vision 2030.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  Gulf universities and health institutions get research-enablement and publishing export
                  framed for national strategy — an India-cost, English-language biomedical partner that
                  builds local capability, not dependency.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { t: 'Capability building', b: 'Train local researchers and departments to standard.' },
                  { t: 'Publishing export', b: 'Editorial and journal pathways through Trueline Publishers.' },
                  { t: 'Joint programs', b: 'Co-designed CoEs and methodology cohorts on the ground.' },
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
        eyebrow="For institutions & GCC"
        title="Open a partnership conversation."
        body="Tell us what you need to build — talent, research operations, or a Gulf collaboration — and we’ll scope a pilot."
        primary={{ label: 'Start a partnership', to: '/contact#institution' }}
        secondary={{ label: 'See the CoE network', to: '/centers-of-excellence' }}
      />
    </>
  )
}
