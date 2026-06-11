import { Link } from 'react-router-dom'
import { ShieldCheck, Target, Compass, BookOpen, Rocket, ArrowRight } from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { ETHICS, GROUP, PROOF, BRAND } from '../lib/content'
import PageHero from '../components/PageHero'
import Flywheel from '../components/Flywheel'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Trueline Research"
        title={<>The category-defining engine for life-sciences research.</>}
        intro="We exist to move serious biomedical research out of the commoditized PhD-help category — and to make South India a place where research gets done, published, and partnered."
        cta={{ label: 'Get Started', to: '/contact' }}
        image={IMG.teamLaptops}
      />

      {/* Who we are */}
      <section id="who" className="py-24 scroll-mt-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.8rem)] text-balance">
                A research-enablement engine, built on a college network.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Trueline Research is the life-sciences and biomedical research-enablement engine of
                  the Trueline Group. We help scholars do credible research, we build Centers of
                  Excellence inside colleges, and we partner with institutions and global capability
                  centres that need talent and research at scale.
                </p>
                <p>
                  Our North Star is simple: turn a 100+ college network across South India into a
                  durable machine for <strong className="text-ink">talent, data and intellectual
                  property</strong> — delivered through three tightly-coupled entities that feed each
                  other.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Target, t: 'Mission', b: 'Make researchers capable and institutions research-ready.' },
                  { icon: Compass, t: 'Focus', b: 'AI-enabled life sciences & biomedical research — nothing scattered.' },
                  { icon: BookOpen, t: 'Method', b: 'Enablement and methodology — never deliverables-for-hire.' },
                  { icon: Rocket, t: 'Ambition', b: 'A recognised regional research & publishing engine.' },
                ].map((c, i) => (
                  <Reveal key={c.t} delay={i * 0.07}>
                    <div className="h-full rounded-2xl border border-line bg-canvas p-6">
                      <c.icon className="h-6 w-6 text-brand-500" />
                      <h3 className="mt-4 font-display text-lg font-semibold">{c.t}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-canvas py-24 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Our approach"
            title={<>Enablement, not ghostwriting.</>}
            intro="This is both a values statement and a commercial asset — it’s what lets institutional and Gulf clients trust us, and what survives investor and partner due diligence."
          />
          <Reveal delay={0.1}>
            <Figure img={IMG.mentoring} ratio="wide" scrim="soft" className="mt-12" />
          </Reveal>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-line bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-ink">What we do</h3>
                <ul className="mt-5 space-y-3">
                  {['Research enablement & mentoring', 'Methodology & biostatistics support', 'Capability building & training', 'Centers of Excellence inside colleges'].map((x) => (
                    <li key={x} className="flex items-center gap-3 text-[15px] text-ink">
                      <ShieldCheck className="h-5 w-5 text-brand-500" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-line bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-ink">What we never do</h3>
                <ul className="mt-5 space-y-3">
                  {['Write your thesis for you', 'Guarantee publication', 'Sell authorship or papers', 'Anything that risks academic integrity'].map((x) => (
                    <li key={x} className="flex items-center gap-3 text-[15px] text-ink-soft">
                      <span className="grid h-5 w-5 place-items-center rounded-full border border-line-2 text-xs">✕</span> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Group / flywheel */}
      <section id="group" className="py-24 scroll-mt-24">
        <Container>
          <SectionHead
            align="center"
            eyebrow="The Trueline Group"
            title={<>Research. Publishers. StartNet.</>}
            intro="Three entities, one flywheel. Each feeds the others a shared core of data, IP and reputation."
          />
          <div className="mt-16">
            <Flywheel />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {GROUP.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-canvas p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{g.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-600">{g.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ethics */}
      <section id="ethics" className="bg-ink py-24 text-white scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow text-brand-300"><span className="h-px w-6 bg-brand-300" /> Ethics & Integrity Charter</span>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.8rem)] text-white text-balance">
                The non-negotiables we build into every page.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                No outcome guarantees. Consent-first data. COPE-aligned publishing ethics. The integrity
                layer isn’t a disclaimer — it’s the product.
              </p>
              <Figure img={IMG.radiology} ratio="photo" duotone rounded="rounded-2xl" className="mt-8 border border-white/10" />
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {ETHICS.map((e, i) => (
                  <Reveal key={i} delay={i * 0.06} as="li">
                    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold">{i + 1}</span>
                      <span className="text-[15px] leading-relaxed text-white/85">{e}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section id="impact" className="py-24 scroll-mt-24">
        <Container>
          <SectionHead
            eyebrow="Impact & numbers"
            title={<>The scorecard.</>}
            intro="We report on what compounds: the college network we enable, the entities that reinforce each other, and the markets we reach."
          />
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {PROOF.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.06} className="bg-white p-8">
                <div className="font-display text-4xl font-semibold text-spectrum sm:text-5xl">{p.value}</div>
                <div className="mt-2 text-[15px] font-medium text-ink">{p.label}</div>
                <div className="mt-1 text-sm text-ink-faint">{p.sub}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink-faint">
            Network and capability figures reflect the Trueline Group footprint and ambition; historical
            track-record metrics are verified before publication.
          </p>
        </Container>
      </section>

      {/* Careers */}
      <section id="careers" className="bg-canvas py-24 scroll-mt-24">
        <Container>
          <div className="grid items-stretch gap-8 overflow-hidden rounded-[2rem] border border-line bg-white shadow-card md:grid-cols-2">
            <div className="flex flex-col items-start justify-center p-10 lg:p-12">
              <Eyebrow>Careers</Eyebrow>
              <h2 className="display mt-4 text-[clamp(1.6rem,3.5vw,2.4rem)]">Build the engine with us.</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                We’re looking for biostatisticians, bioinformaticians, research mentors and partnership
                leads who want to define a category, not chase one. Based at {BRAND.hq}.
              </p>
              <Link to="/contact" className="btn-primary mt-7 h-12 shrink-0 px-7 text-[15px]">
                See open roles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <Figure img={IMG.officeGreen} ratio="auto" rounded="rounded-none" className="min-h-[260px]" />
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  )
}
