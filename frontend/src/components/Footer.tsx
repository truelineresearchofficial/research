import { Link } from 'react-router-dom'
import { Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'
import { BRAND, CONTACT_INFO } from '../lib/content'
import logo from '../assets/logo.png'

const SOCIALS = [
  {
    label: 'LinkedIn',
    Icon: Linkedin,
    href: 'https://www.linkedin.com/company/trueline-research-private-limited/posts/?feedView=all',
  },
  {
    label: 'Instagram',
    Icon: Instagram,
    href: 'https://www.instagram.com/trueline_research?igsh=eXR1bG1ndDJlY3B3',
  },
  {
    label: 'Facebook',
    Icon: Facebook,
    href: 'https://www.facebook.com/share/1D443RvQLC/?mibextid=wwXIfr',
  },
]

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
    <footer className="border-t border-line bg-[#002C71] text-white/70">
      <div className="container-tl pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logo} alt="Trueline Research" className="h-16 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white">
              {BRAND.tagline} Enabling researchers, building Centers of Excellence, and partnering with
              institutions and industry across India.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                Trueline Research, Building No. 7/232-26, Devi Towers, Kalipatti Privu Road, Vaikuntham,
                Sankari, Salem, Tamil Nadu - 637103
              </p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2.5 hover:text-white">
                <Mail className="h-4 w-4 text-brand-300" /> {CONTACT_INFO.email}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLS.map((col) => (
              <div key={col.heading}>
                <h4 className="font-display text-sm font-semibold text-white">{col.heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white transition-colors hover:text-brand-300">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-[13px] text-white">
          <p>© 2026 Trueline Research · All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
