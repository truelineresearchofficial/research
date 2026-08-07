import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { ShieldCheck, Target, Compass, BookOpen, Rocket, ArrowRight, Linkedin, Instagram, Facebook, MessageCircle, Phone } from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { ETHICS, GROUP, PROOF, BRAND } from '../lib/content'
import PageHero from '../components/PageHero'
import Flywheel from '../components/Flywheel'
import CTABand from '../components/CTABand'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'
import ceoImage from '../assets/images/ceo.jpg'

const IMPACT_STATS = [
  { value: 150, title: ['Institutions & Universities', 'Enabled for Excellence & Collaboration'] },
  { value: 100, title: ['Startups Mentored through', 'Incubation & Acceleration'] },
  { value: 250, title: ['IPRs – Patents, Trademarks,', 'Copyrights & Industrial Designs'] },
  { value: 20, title: ['Industry Partners Empowered with', 'AI, LLM, CRM & Digital Solutions'] },
  { value: 200, title: ['Academic Books', 'Published Worldwide'] },
  { value: 15000, title: ['Students Trained through', 'Workshops & Skill Development'] },
  { value: 5000, title: ['Faculty Trained through', 'Workshops & FDPs'] },
  { value: 1500, title: ['Research Publications Driving', 'Science & Innovation'] },
  { value: 60, title: ['Scientific Progress Through', 'Conferences & Publications'] },
]

/** Counts up from 0 to `value` once, when scrolled into view. Respects reduced-motion. */
function CountUp({ value, duration = 1800 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setDisplay(value)
      return
    }
    const el = ref.current
    if (!el) return

    let raf = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
          setDisplay(Math.round(eased * value))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration, reduce])

  return <span ref={ref}>{display.toLocaleString('en-US')}</span>
}

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

      {/* CEO Message */}
      <section id="ceo-message" className="bg-canvas py-24 scroll-mt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
              <img
                src="https://drive.google.com/thumbnail?id=1SDQpMWYEwvXVfH9nH9vG8bNafOrTKUc7&sz=w1000"
                alt="Dr. V. Nagaraj, Chief Executive Officer of Trueline Publishers"
                className="w-full h-[450px] object-cover object-[center_20%] rounded-3xl shadow-lg"
              />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.8rem)] text-balance">
                CEO Message
              </h2>
              <p className="mt-5 font-display text-lg font-semibold text-ink">Dr. V. NAGARAJ</p>
              <div className="prose-tl space-y-4 mt-4 max-w-2xl">
                <p>
                  At Trueline Research, we are committed to advancing research, innovation, and technology through our AI Multidisciplinary Research Labs Centers of Excellence (CoE), and R&D ecosystem. With 13+ years of excellence, we have supported 1,500+ research publications, 250+ patents, 200+ books, and 150+ academic collaborations, empowering researchers, academic institutions, startups, and industries to achieve global impact.
                </p>
                <p>
                  We transform Ideas into Products by providing end-to-end support in research publications, research funding, patents, trademarks, copyrights (IPR), technology commercialization, startup incubation, innovation consulting, and industry-driven R&D. We also encourage participation in hackathons, innovation challenges, and entrepreneurship programs, enabling researchers and innovators to develop future-ready technologies and sustainable solutions.
                </p>
                <p>
                  Through International University Collaborations and Academia–Industry Partnerships, we continue to build a globally connected innovation ecosystem that promotes knowledge creation, protects intellectual property, accelerates commercialization, and delivers impactful solutions for society.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/nagaraj-varatharaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-card"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/nagaraj_varatharaj?igsh=NXR2N2JybDlicDR2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-card"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/nagaraj.varatharaj.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-card"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/message/7NHZKTMAKDIWJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-card"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919578873584"
                  aria-label="Call 95788 73584"
                  title="95788 73584"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-card"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Impact — statistic cards */}
      <section id="our-impact" className="py-24 scroll-mt-24">
        <Container>
          <SectionHead
            align="center"
            eyebrow="Our Impact"
            title={<>We Are Proud Of...</>}
            intro="Driving research, innovation, academic excellence, and industry collaboration through measurable achievements."
          />
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {IMPACT_STATS.map((s, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 0.07}
                className="flex w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(20%-1rem)]"
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl border border-line bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                  <div className="font-display text-4xl font-semibold sm:text-5xl">
                    <span className="text-spectrum">
                      <CountUp value={s.value} />+
                    </span>
                  </div>
                  <p className="mt-4 whitespace-nowrap font-display text-[10px] font-semibold leading-relaxed text-ink">
                    {s.title[0]}
                    <br />
                    {s.title[1]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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
