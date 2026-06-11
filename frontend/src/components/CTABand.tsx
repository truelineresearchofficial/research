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
}: {
  eyebrow?: string
  title?: string
  body?: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30">
        <HelixLines className="ml-auto h-full" />
      </div>
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-brand-300">
              <span className="h-px w-6 bg-brand-300" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] text-white text-balance">{title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-white/65">{body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to={primary.to} className="btn-brand h-12 px-7 text-[15px]">
                {primary.label} <ArrowRight className="h-4 w-4" />
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="btn h-12 border border-white/20 px-7 text-[15px] text-white hover:bg-white/10"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
