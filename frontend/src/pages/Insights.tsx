import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, BookOpen, Calendar, FileText } from 'lucide-react'
import { Container, Reveal, SectionHead, Eyebrow } from '../lib/ui'
import { ARTICLES, INSIGHT_CLUSTERS } from '../lib/content'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import { IMG } from '../lib/images'
import { submitForm, SubmitError } from '../lib/submit'

const INSIGHT_IMG = [IMG.data, IMG.coins, IMG.neuron]

const RESOURCES = [
  { icon: BookOpen, t: 'Guides & Toolkits', b: 'Downloadable methodology and grant toolkits.', tag: 'Gated' },
  { icon: Calendar, t: 'Webinars & Events', b: 'Cohort sessions and the StartNet Bio Summit.', tag: 'Live' },
  { icon: FileText, t: 'Publications & Journal', b: 'The Trueline Publishers journal & proceedings.', tag: 'Open' },
]

export default function Insights() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hp, setHp] = useState('')

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await submitForm({ form_type: 'newsletter', website: hp, email })
      setDone(true)
    } catch (err) {
      setError(err instanceof SubmitError ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title={<>Trueline Spectrum — field notes from the research engine.</>}
        intro="The science-communication and credibility layer of the Trueline Group: methods, AI-in-research, CoE stories, and the data-moat thinking behind the strategy."
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
          <SectionHead eyebrow="Latest articles" title={<>Reading from the lab.</>} />
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
          <SectionHead eyebrow="Resources" title={<>Tools, events and the journal.</>} />
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

      {/* Newsletter */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-white lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow className="text-brand-300">Trueline Spectrum</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-white text-balance">
                  Get the monthly research brief.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">
                  Methods, funding deadlines, CoE stories and AI-in-research — for scholars, departments
                  and partners across South India and the Gulf.
                </p>
              </div>
              <div>
                {done ? (
                  <div className="rounded-2xl border border-brand-400/40 bg-brand-500/10 p-8 text-center">
                    <Mail className="mx-auto h-8 w-8 text-brand-300" />
                    <p className="mt-3 font-display text-lg font-semibold text-white">You’re subscribed.</p>
                    <p className="mt-1 text-sm text-white/60">Watch your inbox for the next edition.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                  >
                    {/* honeypot — off-screen; bots fill it and are silently dropped */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    />
                    <label className="text-sm font-medium text-white/70">Work email</label>
                    <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@institution.edu"
                        className="w-full rounded-full border border-white/15 bg-ink-2 px-5 py-3 text-sm text-white placeholder:text-white/35 focus:border-brand-400 focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-brand h-12 shrink-0 px-6 text-[15px] disabled:opacity-60"
                      >
                        {submitting ? 'Sending…' : 'Subscribe'}
                      </button>
                    </div>
                    {error && (
                      <p className="mt-3 text-sm font-medium text-red-300" role="alert">
                        {error}
                      </p>
                    )}
                    <p className="mt-3 text-xs text-white/40">Consent-first. Unsubscribe anytime. No selling of data — ever.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
