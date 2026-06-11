import { useState } from 'react'
import type { Img } from '../lib/images'

type Ratio = 'square' | 'video' | 'photo' | 'portrait' | 'wide' | 'tall' | 'auto'

const RATIO: Record<Ratio, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  photo: 'aspect-[4/3]',
  portrait: 'aspect-[4/5]',
  wide: 'aspect-[16/7]',
  tall: 'aspect-[3/4]',
  auto: '',
}

/**
 * Graded image. One treatment system so every photo on the site reads as a
 * single art-directed shoot:
 *  - subtle teal wash + micro contrast for brand cohesion
 *  - optional `duotone` (teal/ink) for older or busier source frames
 *  - optional `scrim` for text overlaid on the image
 *  - fade-up on load over a tinted placeholder (no layout shift)
 */
export default function Figure({
  img,
  ratio = 'photo',
  className = '',
  imgClassName = '',
  rounded = 'rounded-3xl',
  duotone = false,
  scrim = 'none',
  eager = false,
  overlay,
  position = 'object-center',
}: {
  img: Img
  ratio?: Ratio
  className?: string
  imgClassName?: string
  rounded?: string
  duotone?: boolean
  scrim?: 'none' | 'bottom' | 'left' | 'full' | 'soft'
  eager?: boolean
  overlay?: React.ReactNode
  position?: string
}) {
  const [loaded, setLoaded] = useState(false)

  const scrims: Record<string, string> = {
    none: '',
    bottom: 'bg-gradient-to-t from-ink/80 via-ink/20 to-transparent',
    left: 'bg-gradient-to-r from-ink/80 via-ink/25 to-transparent',
    full: 'bg-ink/45',
    soft: 'bg-gradient-to-tr from-ink/30 via-transparent to-transparent',
  }

  return (
    <div className={`relative overflow-hidden ${rounded} bg-mist ${RATIO[ratio]} ${className}`}>
      <img
        src={img.src}
        alt={img.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover ${position} transition-[opacity,transform] duration-[900ms] ease-out ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'
        } ${duotone ? 'grayscale contrast-[1.05] brightness-[1.02] mix-blend-luminosity' : 'saturate-[1.03] contrast-[1.02]'} ${imgClassName}`}
      />

      {/* duotone teal/ink wash */}
      {duotone && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-brand-700 mix-blend-color" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/70 via-brand-700/30 to-aqua/20 mix-blend-multiply" />
        </>
      )}

      {/* unified subtle teal grade */}
      {!duotone && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-900/15 via-transparent to-aqua/5" />
      )}

      {/* scrim for overlaid text */}
      {scrim !== 'none' && <div className={`pointer-events-none absolute inset-0 ${scrims[scrim]}`} />}

      {overlay && <div className="absolute inset-0">{overlay}</div>}
    </div>
  )
}
