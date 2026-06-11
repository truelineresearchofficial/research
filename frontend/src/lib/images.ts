// ──────────────────────────────────────────────────────────────────────────
// Image registry — the single place that maps a semantic role to an asset.
// Swap any `src` for your own photography later and the whole site updates.
// All current assets are royalty-free (Unsplash license) and self-hosted in
// /public/images. `alt` text is written for accessibility + SEO.
// ──────────────────────────────────────────────────────────────────────────

export type Img = { src: string; alt: string }

const base = '/images'

export const IMG = {
  // Research & lab
  engineerLab: { src: `${base}/engineer-lab.jpg`, alt: 'A researcher working at an advanced instrumentation lab bench' },
  labBench: { src: `${base}/lab-bench.jpg`, alt: 'A bright, modern biomedical laboratory bench with a microscope and analysers' },
  microplate: { src: `${base}/microplate.jpg`, alt: 'A pipette dispensing a sample into a microplate array' },
  microscopes: { src: `${base}/microscopes.jpg`, alt: 'A row of research microscopes in a laboratory' },
  flasks: { src: `${base}/lab-flasks.jpg`, alt: 'Hands combining coloured reagents into an Erlenmeyer flask' },
  dna: { src: `${base}/dna-helix.jpg`, alt: 'A rendering of the DNA double helix' },
  neuron: { src: `${base}/neuron.jpg`, alt: 'A visualisation of a neuron and its connections' },
  data: { src: `${base}/data-dashboard.jpg`, alt: 'An analytics dashboard showing research data and charts' },
  brain: { src: `${base}/brain-model.jpg`, alt: 'An anatomical cross-section model of the human brain' },
  radiology: { src: `${base}/radiology.jpg`, alt: 'A clinician reviewing diagnostic imaging scans' },

  // Campus & institutions
  campusClassic: { src: `${base}/campus-classic.jpg`, alt: 'A university building fronted by a green campus lawn' },
  campusBrick: { src: `${base}/campus-brick.jpg`, alt: 'A college campus building with landscaped grounds' },
  library: { src: `${base}/library.jpg`, alt: 'An academic library reading aisle lined with volumes' },

  // Offices, teams, partnerships
  officeOpen: { src: `${base}/office-open.jpg`, alt: 'A large open-plan technology office with teams at work' },
  officeGreen: { src: `${base}/office-green.jpg`, alt: 'A bright, plant-filled modern workspace' },
  teamLaptops: { src: `${base}/team-laptops.jpg`, alt: 'A team collaborating around laptops' },
  teamMeeting: { src: `${base}/team-meeting.jpg`, alt: 'Colleagues in a working meeting around a table' },
  mentoring: { src: `${base}/mentoring.jpg`, alt: 'A senior researcher mentoring a colleague over notes' },

  // Gulf
  dubaiSkyline: { src: `${base}/dubai-skyline.jpg`, alt: 'A Gulf city skyline at dusk' },
  gulfLandmark: { src: `${base}/gulf-landmark.jpg`, alt: 'An iconic Gulf landmark on the waterfront' },

  // Misc
  coins: { src: `${base}/coins.jpg`, alt: 'Coins from a jar, representing research funding' },
} satisfies Record<string, Img>

export type ImgKey = keyof typeof IMG
