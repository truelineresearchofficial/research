import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react'
import { Container, Reveal, Eyebrow } from '../lib/ui'
import { CONTACT_FORMS, OFFICES, BRAND, CONTACT_INFO } from '../lib/content'
import { Molecule } from '../components/Marks'
import { submitForm, SubmitError } from '../lib/submit'

export default function Contact() {
  const { hash } = useLocation()
  const [active, setActive] = useState(CONTACT_FORMS[0].id)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [values, setValues] = useState<Record<string, string>>({})
  const [hp, setHp] = useState('')

  useEffect(() => {
    const id = hash.slice(1)
    if (CONTACT_FORMS.some((f) => f.id === id)) setActive(id)
  }, [hash])

  const form = CONTACT_FORMS.find((f) => f.id === active)!

  function reset() {
    setSent(false)
    setSubmitting(false)
    setError(null)
    setValues({})
    setHp('')
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await submitForm({ form_type: 'contact', variant: form.id, website: hp, ...values })
      setSent(true)
    } catch (err) {
      setError(err instanceof SubmitError ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-canvas pt-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -right-20 top-24 hidden w-[460px] opacity-50 sm:block">
        <Molecule className="h-full w-full animate-float" />
      </div>

      <Container className="relative pb-24 pt-8">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Contact / Get Started</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display mt-5 text-[clamp(2.3rem,5vw,3.8rem)] text-balance">
              Three doors. One real conversation.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-xl leading-relaxed text-ink-soft">
              Pick the path that fits you. Each form routes to the right person — no generic inbox.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Selector + form */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2">
              {CONTACT_FORMS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActive(f.id)
                    reset()
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    active === f.id ? 'bg-ink text-white shadow-card' : 'border border-line bg-white text-ink-soft hover:border-ink/30'
                  }`}
                >
                  {f.audience}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-line bg-white p-8 shadow-card lg:p-10">
              {sent ? (
                <Reveal className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-brand-500" />
                  <h2 className="mt-5 font-display text-2xl font-semibold text-ink">Thank you — we’ve got it.</h2>
                  <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                    A member of the Trueline team will reach out within two working days to {form.cta.toLowerCase()}.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-ghost mt-7 h-11 px-6">
                    Send another enquiry
                  </button>
                </Reveal>
              ) : (
                <>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{form.audience}</span>
                  <h2 className="mt-4 font-display text-2xl font-medium text-ink">{form.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{form.body}</p>
                  <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
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
                    {form.fields.map((field, i) => {
                      const key = form.keys[i]
                      const isMessage = key === 'message'
                      return (
                        <div key={key} className={isMessage ? 'sm:col-span-2' : ''}>
                          <label className="text-sm font-medium text-ink">{field}</label>
                          {isMessage ? (
                            <textarea
                              rows={4}
                              required
                              value={values[key] ?? ''}
                              onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
                              className="mt-1.5 w-full rounded-2xl border border-line-2 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-50"
                              placeholder="A sentence or two is plenty."
                            />
                          ) : (
                            <input
                              required
                              type={key === 'email' ? 'email' : 'text'}
                              value={values[key] ?? ''}
                              onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
                              className="mt-1.5 w-full rounded-full border border-line-2 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-50"
                            />
                          )}
                        </div>
                      )
                    })}
                    {error && (
                      <p className="sm:col-span-2 text-sm font-medium text-red-600" role="alert">
                        {error}
                      </p>
                    )}
                    <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-ink-faint">
                        By submitting you agree to our consent-first data policy. We never sell your data.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-brand h-12 px-7 text-[15px] disabled:opacity-60"
                      >
                        {submitting ? 'Sending…' : form.cta} <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Offices */}
          <div className="lg:col-span-4">
            <div className="rounded-[2rem] border border-line bg-ink p-8 text-white">
              <Eyebrow className="text-brand-300">Offices & locations</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">Where we operate</h3>
              <ul className="mt-6 space-y-5">
                {OFFICES.map((o) => (
                  <li key={o.city} className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                    <div>
                      <p className="font-semibold text-white">{o.city}</p>
                      <p className="text-sm text-white/55">{o.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-sm text-white/55">General enquiries</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="mt-1 block font-medium text-brand-300 hover:text-brand-200">
                  {CONTACT_INFO.email}
                </a>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {CONTACT_INFO.phones.map((p) => (
                    <a
                      key={p.label}
                      href={`tel:${p.number.replace(/\s+/g, '')}`}
                      className="text-sm font-medium text-white/70 hover:text-brand-200"
                    >
                      {p.label}: {p.number}
                    </a>
                  ))}
                </div>
                <a
                  href={`https://${CONTACT_INFO.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-sm text-white/55 hover:text-brand-200"
                >
                  {CONTACT_INFO.website}
                </a>
                <p className="mt-3 text-xs text-white/40">{CONTACT_INFO.hours}</p>
                <p className="mt-4 text-xs text-white/40">{BRAND.group}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
