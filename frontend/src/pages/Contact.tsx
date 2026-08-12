import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle2, MapPin, ArrowRight, MessageCircle, Mail, Phone, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container, Reveal, Eyebrow } from '../lib/ui'
import { CONTACT_FORMS, OFFICE_LOCATIONS } from '../lib/content'
import { Molecule } from '../components/Marks'
import { submitForm, SubmitError, APPS_SCRIPT_URL } from '../lib/submit'

// Map the internal form ids to the formType values the Apps Script expects.
const FORM_TYPE: Record<string, string> = {
  scholar: 'scholars',
  college: 'colleges',
  institution: 'gcc',
}

// Direct-contact cards shown alongside the consultation form.
const CONTACT_CARDS: { icon: LucideIcon; title: string; subtitle: string; href: string; external?: boolean }[] = [
  {
    icon: MessageCircle,
    title: 'WhatsApp us directly',
    subtitle: 'Chat with our research team',
    href: 'https://wa.me/message/7NHZKTMAKDIWJ1',
    external: true,
  },
  {
    icon: Mail,
    title: 'info@truelineresearch.in',
    subtitle: 'Email our research team',
    href: 'mailto:info@truelineresearch.in',
  },
  {
    icon: Phone,
    title: 'Tamil Nadu Office',
    subtitle: '+91 95788 73584',
    href: 'tel:+919578873584',
  },
  {
    icon: Phone,
    title: 'Kerala Office',
    subtitle: '+91 80564 17009',
    href: 'tel:+918056417009',
  },
]

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
      await submitForm(
        { formType: FORM_TYPE[form.id], variant: form.id, website: hp, ...values },
        { endpoint: APPS_SCRIPT_URL, contentType: 'text/plain;charset=utf-8' },
      )
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

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-[42fr_58fr] lg:gap-8">
          {/* Left — reach us directly */}
          <div className="flex h-full flex-col">
            <h2 className="font-display text-2xl font-semibold text-ink">Reach us directly</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Have questions? Connect with our research team through WhatsApp, email, or phone. We usually respond
              within one business day.
            </p>

            <div className="mt-8 flex flex-1 flex-col justify-between gap-4">
              {CONTACT_CARDS.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-semibold text-ink">{c.title}</span>
                    <span className="block text-sm text-ink-soft">{c.subtitle}</span>
                  </span>
                </a>
              ))}

              {/* Business Hours — non-interactive */}
              <div className="flex w-full items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Clock className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[15px] font-semibold text-ink">Business Hours</span>
                  <span className="block text-sm text-ink-soft">Monday – Saturday</span>
                  <span className="block text-sm text-ink-soft">9:00 AM – 6:00 PM</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right — existing consultation form (logic unchanged) */}
          <div>
            <div className="flex flex-wrap gap-2">
              {CONTACT_FORMS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActive(f.id)
                    reset()
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${active === f.id ? 'bg-ink text-white shadow-card' : 'border border-line bg-white text-ink-soft hover:border-ink/30'
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
                      const placeholder = form.placeholders[i]
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
                              placeholder={placeholder}
                            />
                          ) : (
                            <input
                              required
                              type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                              value={values[key] ?? ''}
                              onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
                              className="mt-1.5 w-full rounded-full border border-line-2 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-50"
                              placeholder={placeholder}
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
                        className="btn-brand h-12 w-full px-7 text-[15px] disabled:opacity-60 sm:w-auto"
                      >
                        {submitting ? 'Sending…' : 'Submit'} <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Our Offices */}
        <div className="mt-24 text-center">
          <Reveal>
            <Eyebrow className="justify-center">Our Offices</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 text-[clamp(1.6rem,3.2vw,2.4rem)] text-balance">Our Offices</h2>
          </Reveal>

          {/* Headquarters */}
          <Reveal delay={0.1}>
            <h3 className="mt-14 font-display text-xs font-semibold uppercase tracking-widest text-brand-600">
              Headquarters
            </h3>
          </Reveal>
          <Reveal delay={0.12} className="mt-6 flex justify-center">
            {OFFICE_LOCATIONS.filter((o) => o.hq).map((o) => (
              <OfficeCard key={o.title} office={o} className="w-full max-w-2xl" />
            ))}
          </Reveal>

          {/* Branch Offices */}
          <Reveal delay={0.15}>
            <h3 className="mt-16 font-display text-xs font-semibold uppercase tracking-widest text-brand-600">
              Branch Offices
            </h3>
          </Reveal>
          <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-2">
            {OFFICE_LOCATIONS.filter((o) => !o.hq).map((o, i) => (
              <Reveal key={o.title} delay={0.15 + i * 0.05}>
                <OfficeCard office={o} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function OfficeCard({
  office,
  className = '',
}: {
  office: { title: string; subtitle: string; address: string; mapUrl: string }
  className?: string
}) {
  return (
    <div className={`card flex flex-col items-center p-8 text-center ${className}`}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <MapPin className="h-6 w-6" />
        </span>
        <h4 className="font-display text-lg md:text-xl font-semibold text-ink md:whitespace-nowrap">
          {office.title}
        </h4>
      </div>
      {office.subtitle && <p className="mt-3 text-sm font-semibold text-brand-600">
        {office.subtitle}
      </p>}
      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
        {office.address.replace(/\n/g, ' ')}
      </p>
      <a
        href={office.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-brand mt-6 w-full sm:w-auto text-sm"
      >
        <MapPin className="h-4 w-4" /> View on Google Maps
      </a>
    </div>
  )
}
