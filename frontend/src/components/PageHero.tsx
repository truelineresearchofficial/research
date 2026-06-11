import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, Reveal, Eyebrow } from '../lib/ui'
import { Molecule } from './Marks'
import Figure from './Figure'
import type { Img } from '../lib/images'

export default function PageHero({
  eyebrow,
  title,
  intro,
  audience,
  cta,
  image,
  children,
}: {
  eyebrow: string
  title: ReactNode
  intro: ReactNode
  audience?: string
  cta?: { label: string; to: string }
  image?: Img
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas pt-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      {!image && (
        <div className="pointer-events-none absolute -right-16 top-10 hidden w-[420px] opacity-[0.5] sm:block">
          <Molecule className="h-full w-full animate-float" />
        </div>
      )}
      <Container className="relative grid items-center gap-12 pb-16 pt-8 lg:grid-cols-12">
        <div className={image ? 'lg:col-span-7' : 'col-span-12 max-w-3xl'}>
          {audience && (
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {audience}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.04}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-5 text-[clamp(2.4rem,5.4vw,4.1rem)] text-balance">{title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft text-pretty">{intro}</p>
          </Reveal>
          {cta && (
            <Reveal delay={0.16}>
              <Link to={cta.to} className="btn-brand mt-8 h-12 px-7 text-[15px]">
                {cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          )}
          {children}
        </div>
        {image && (
          <Reveal delay={0.18} className="lg:col-span-5">
            <div className="relative">
              <Figure img={image} ratio="photo" eager rounded="rounded-[2rem]" scrim="soft" className="border border-line shadow-card-lg" />
              <div className="pointer-events-none absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-2xl border border-line bg-white/80 backdrop-blur sm:block" />
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
