import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen, Calendar, FileText } from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { ARTICLES, INSIGHT_CLUSTERS } from '../lib/content'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'

const INSIGHT_IMG = [IMG.data, IMG.coins, IMG.neuron]

const RESOURCES = [
  { icon: BookOpen, t: 'Guides & Toolkits', b: 'Research methodology, proposal writing, publication, and IP resources.', tag: 'Gated' },
  { icon: Calendar, t: 'Workshops & Events', b: 'Research workshops, FDPs, conferences, innovation programs, and training events.', tag: 'Live' },
  { icon: FileText, t: 'Publications & Research Outputs', b: 'Research publications, conference proceedings, reports, patents, and innovation outcomes.', tag: 'Open' },
]

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title={<>Research, Innovation, Intellectual Property, Startup Creation, and Idea-to-Product Insights.</>}
        intro="Insights that connect Research, Innovation, Intellectual Property, Startup Creation, Product Development, Research Visibility, and Real-World Impact — for Researchers, Students, Faculty, Institutions, Startups, and Industry."
        image={IMG.dna}
      />

      {/* Clusters */}
      <section className="py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {INSIGHT_CLUSTERS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.07}>
                <Link to={c.to} className="group flex items-center justify-between rounded-2xl border border-line bg-canvas px-6 py-5 transition-colors hover:border-brand-200">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand-700">{c.name}</h3>
                    <p className="mt-0.5 text-sm text-ink-faint">{c.count}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-brand-500" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured articles */}
      <section className="pb-20">
        <Container>
          <SectionHead eyebrow="Latest Insights" title={<>Research, Innovation, Product Development, Intellectual Property, and Institutional Impact.</>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <Figure img={INSIGHT_IMG[i]} ratio="photo" rounded="rounded-none" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                  <div className="flex flex-1 flex-col p-7">
                    <span className="self-start rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-brand-600">{a.tag}</span>
                    <h3 className="mt-5 flex-1 font-display text-lg font-medium leading-snug text-ink group-hover:text-brand-700">{a.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-ink-faint">
                      {a.read}
                      <ArrowUpRight className="h-4 w-4 text-brand-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources */}
      <section className="bg-canvas py-20">
        <Container>
          <SectionHead eyebrow="Research Resources" title={<>Guides, workshops and research outputs.</>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {RESOURCES.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                  <div className="flex items-center justify-between">
                    <r.icon className="h-7 w-7 text-brand-500" />
                    <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[11px] font-semibold text-ink-soft">{r.tag}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{r.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{r.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Research CTA */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-white lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="relative max-w-2xl">
              <Eyebrow className="text-brand-300">Research. Innovation. Impact.</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-white text-balance">
                Discover multidisciplinary research, innovation ecosystems, intellectual property, startup
                creation, and idea-to-product journeys powered by Trueline Research.
              </h2>
              <Link to="/research-enablement" className="btn-brand mt-8 inline-flex h-12 w-fit items-center gap-2 px-7 text-[15px]">
                Explore Research Initiatives <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
