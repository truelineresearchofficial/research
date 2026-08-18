import { ArrowRight } from 'lucide-react'

/**
 * A responsive "journey" flow: labelled steps joined by arrows.
 * Stacks vertically (down-arrows) on mobile, wraps into a row (right-arrows)
 * on md+ — reusing the site's card + brand-accent language.
 */
export default function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-3">
      {steps.map((s, i) => (
        <div key={s} className="flex w-full flex-col items-center gap-2 md:w-auto md:flex-row md:gap-3">
          <div className="w-full rounded-2xl border border-line bg-white px-5 py-3 text-center text-[15px] font-medium text-ink shadow-card md:w-auto">
            {s}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-brand-400 md:rotate-0" aria-hidden />
          )}
        </div>
      ))}
    </div>
  )
}
