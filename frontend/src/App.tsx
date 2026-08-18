import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Enablement from './pages/Enablement'
import Startups from './pages/Startups'
import LabIndustry from './pages/LabIndustry'
import Partnerships from './pages/Partnerships'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        // offset for fixed header
        const y = el.getBoundingClientRect().top + window.scrollY - 96
        window.scrollTo({ top: y, behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

// Production origin Google indexes. Canonical URLs must always point here so the
// homepage resolves to "https://www.truelineresearch.in/" — never "/home".
const SITE_URL = 'https://www.truelineresearch.in'

// Keeps <link rel="canonical"> in sync with the current route on every client-side
// navigation. Each path maps to exactly one canonical URL, preventing duplicate
// indexing (e.g. a stale /home ever being treated as a separate page).
function CanonicalManager() {
  const { pathname } = useLocation()
  useEffect(() => {
    // normalise: strip a trailing slash except for the root path
    const clean = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
    const href = clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = href
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <CanonicalManager />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Legacy path: 301 handled by nginx for direct hits; this covers
              client-side navigation so /home never renders the 404 page. */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/research-enablement" element={<Enablement />} />
          {/* CoE page retired — its content now lives on /partnerships. Redirect
              so existing links and bookmarks resolve instead of 404-ing. */}
          <Route path="/centers-of-excellence" element={<Navigate to="/partnerships" replace />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/lab-industry" element={<LabIndustry />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
