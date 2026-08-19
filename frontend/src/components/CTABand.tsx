import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, Reveal } from '../lib/ui'
import { HelixLines } from './Marks'

export default function CTABand({
  eyebrow = 'Start a conversation',
  title = 'Tell us where you are. We’ll map the path.',
  body = 'Whether you’re a scholar, a college, or an institution — there’s a door for you, and a real person behind it.',
  primary = { label: 'Get Started', to: '/contact' },
  secondary,
  variant = 'dark',
}: {
  eyebrow?: string
  title?: string
  body?: string
  primary?: { label: string; to: string } | null
  secondary?: { label: string; to: string }
  variant?: 'dark' | 'light'
}) {
  const light = variant === 'light'
  return (
    <section
      className={`relative overflow-hidden py-12 md:py-16 lg:py-20 ${light ? 'bg-canvas text-ink' : 'bg-ink text-white'}`}
    >
      <div
        className={`pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl ${
          light ? 'bg-brand-500/10' : 'bg-brand-500/20'
        }`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 h-full w-1/2 ${light ? 'opacity-40' : 'opacity-30'}`}
      >
        <HelixLines className="ml-auto h-full" />
      </div>
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className={`eyebrow ${light ? '' : 'text-brand-300'}`}>
              <span className={`h-px w-6 ${light ? 'bg-brand-600' : 'bg-brand-300'}`} />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={`display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] text-balance ${light ? '' : 'text-white'}`}>{title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-ink-soft' : 'text-white/65'}`}>{body}</p>
          </Reveal>
          {(primary || secondary) && (
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              {primary && (
                <Link to={primary.to} className="btn-brand h-12 px-7 text-[15px]">
                  {primary.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondary && (
                <Link
                  to={secondary.to}
                  className={
                    light
                      ? 'btn h-12 border border-line-2 bg-white px-7 text-[15px] text-ink hover:border-ink/40 hover:bg-canvas'
                      : 'btn h-12 border border-white/20 px-7 text-[15px] text-white hover:bg-white/10'
                  }
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}
