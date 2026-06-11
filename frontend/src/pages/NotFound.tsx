import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '../lib/ui'
import { HelixLines } from '../components/Marks'

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-canvas pt-[68px]">
      <div className="pointer-events-none absolute right-0 top-0 h-full opacity-30">
        <HelixLines className="h-full" />
      </div>
      <Container className="relative text-center">
        <p className="font-display text-[clamp(5rem,18vw,11rem)] font-semibold leading-none text-spectrum">404</p>
        <h1 className="display mt-2 text-3xl">This line doesn’t lead anywhere — yet.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
          The page you’re after has moved or never existed. Let’s get you back to the research.
        </p>
        <Link to="/" className="btn-brand mt-8 h-12 px-7 text-[15px]">
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  )
}
