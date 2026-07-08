import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Wordmark } from './Marks'
import { BRAND, CONTACT_INFO } from '../lib/content'

const COLS = [
  {
    heading: 'Services',
    links: [
      { label: 'Research Enablement', to: '/research-enablement' },
      { label: 'Centers of Excellence', to: '/centers-of-excellence' },
      { label: 'Partnerships & GCC', to: '/partnerships' },
      { label: 'Research-as-a-Service', to: '/partnerships#raas' },
    ],
  },
  {
    heading: 'Trueline Group',
    links: [
      { label: 'Trueline Research', to: '/' },
      { label: 'Trueline Publishers', to: '/about#group' },
      { label: 'StartNet', to: '/about#group' },
      { label: 'Trueline Spectrum', to: '/insights' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Leadership', to: '/about#leadership' },
      { label: 'Ethics & Integrity', to: '/about#ethics' },
      { label: 'Impact', to: '/about#impact' },
      { label: 'Careers', to: '/about#careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'Guides & Toolkits', to: '/insights' },
      { label: 'Webinars & Events', to: '/insights' },
      { label: 'FAQ', to: '/insights' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white/70">
      <div className="container-tl py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark tone="white" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/55">
              {BRAND.tagline} Enabling scholars, building Centers of Excellence, and partnering with
              institutions across India and the Gulf.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/55">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                Trueline Research, Building No. 7/232-26, Devi Towers, Kalipatti Privu Road, Vaikuntham,
                Sankari, Salem, Tamil Nadu - 637103
              </p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2.5 hover:text-white">
                <Mail className="h-4 w-4 text-brand-300" /> {CONTACT_INFO.email}
              </a>
            </div>
            <Link
              to="/contact"
              className="btn-brand mt-6 inline-flex h-10 px-5 text-sm"
            >
              Contact us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLS.map((col) => (
              <div key={col.heading}>
                <h4 className="font-display text-sm font-semibold text-white">{col.heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/55 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Trueline Research · {BRAND.group}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/about#ethics" className="hover:text-white">Privacy Policy</Link>
            <Link to="/about#ethics" className="hover:text-white">Data & Consent Policy</Link>
            <Link to="/about#ethics" className="hover:text-white">Terms</Link>
            <a href="#" className="inline-flex items-center gap-1 hover:text-white">
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
