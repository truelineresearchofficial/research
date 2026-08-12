import { useState } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { GROUP } from '../lib/content'

// A circular flywheel: entities orbit a shared core. Hovering a node lifts its
// detail. By default it renders the three-entity Trueline Group (used on the
// About page); pass `data` / `core` / `wrap` to render the five-entity
// Trueline Group Ecosystem on the Home page. The layout, spacing, connecting
// lines, hover / active states and animations stay identical across both.

type Entity = {
  id: string
  name: string
  role: string
  body: string
  output: string
  short?: string
}

type Core = { title: ReactNode; subtitle: string }

// Colour palettes interpolated along the same teal → cyan → blue gradient.
const PALETTES: Record<number, string[]> = {
  3: ['#0E8C7F', '#22C3C9', '#3E9BE8'],
  5: ['#0E8C7F', '#18A6A5', '#22C3C9', '#3E9BE8', '#6E7FE3'],
}

const R = 132
const C = 200

function pos(angle: number) {
  const rad = (angle * Math.PI) / 180
  return { x: C + R * Math.cos(rad), y: C + R * Math.sin(rad) }
}

type FlywheelProps = {
  data?: Entity[]
  core?: Core
  wrap?: boolean
}

export default function Flywheel({ data = GROUP, core, wrap = false }: FlywheelProps) {
  const [active, setActive] = useState(0)

  const count = data.length
  const palette = PALETTES[count] ?? PALETTES[3]
  const NODES = data.map((d, i) => ({
    ...d,
    angle: -90 + (360 / count) * i,
    color: palette[i % palette.length],
  }))

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* Diagram */}
      <div className="relative mx-auto w-full max-w-[420px]">
        <svg viewBox="0 0 400 400" className="w-full">
          <defs>
            <linearGradient id="fwring" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0E8C7F" />
              <stop offset="0.5" stopColor="#22C3C9" />
              <stop offset="1" stopColor="#3E9BE8" />
            </linearGradient>
            <linearGradient id="fwcore" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F4FFFE" />
              <stop offset="0.5" stopColor="#E6F8F7" />
              <stop offset="1" stopColor="#D7F3F1" />
            </linearGradient>
          </defs>

          {/* orbit ring */}
          <motion.circle
            cx={C}
            cy={C}
            r={R}
            fill="none"
            stroke="url(#fwring)"
            strokeWidth="1.5"
            strokeDasharray="3 7"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '200px 200px' }}
          />

          {/* connecting curved arrows between nodes */}
          {NODES.map((n, i) => {
            const a = pos(n.angle)
            const b = pos(NODES[(i + 1) % count].angle)
            return (
              <path
                key={i}
                d={`M${a.x} ${a.y} Q ${C} ${C} ${b.x} ${b.y}`}
                fill="none"
                stroke={n.color}
                strokeWidth="1.6"
                opacity="0.35"
              />
            )
          })}

          {/* core */}
          <circle cx={C} cy={C} r="46" fill={core ? 'url(#fwcore)' : '#0A1A26'} />
          {core ? (
            <foreignObject x={C - 42} y={C - 34} width={84} height={68}>
              <div className="flex h-full w-full flex-col items-center justify-center text-center leading-tight">
                <span
                  className="whitespace-pre-line break-words font-semibold"
                  style={{ fontSize: 11, lineHeight: 1.05, color: '#0F172A' }}
                >
                  {core.title}
                </span>
              </div>
            </foreignObject>
          ) : (
            <>
              <text x={C} y={C - 6} textAnchor="middle" className="fill-white" style={{ fontSize: 12, fontWeight: 600 }}>
                DATA · IP
              </text>
              <text x={C} y={C + 12} textAnchor="middle" className="fill-white/60" style={{ fontSize: 10 }}>
                REPUTATION
              </text>
            </>
          )}

          {/* nodes */}
          {NODES.map((n, i) => {
            const p = pos(n.angle)
            const on = active === i
            return (
              <g
                key={n.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="cursor-pointer"
              >
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={on ? 42 : 38}
                  fill="#fff"
                  stroke={n.color}
                  strokeWidth={on ? 3 : 1.5}
                  animate={{ r: on ? 42 : 38 }}
                />
                <circle cx={p.x} cy={p.y} r="6" fill={n.color} transform={`translate(0 -16)`} />
                {wrap ? (
                  <foreignObject x={p.x - 34} y={p.y - 10} width={68} height={44}>
                    <div className="flex h-full w-full flex-col items-center justify-center text-center leading-tight">
                      <span
                        className="whitespace-normal break-words font-semibold text-ink"
                        style={{ fontSize: 9.5, lineHeight: 1.05 }}
                      >
                        {n.name}
                      </span>
                    </div>
                  </foreignObject>
                ) : (
                  <>
                    <text
                      x={p.x}
                      y={p.y + 4}
                      textAnchor="middle"
                      className="fill-ink"
                      style={{ fontSize: 10.5, fontWeight: 600 }}
                    >
                      {n.name.replace('Trueline ', '')}
                    </text>
                    <text x={p.x} y={p.y + 18} textAnchor="middle" className="fill-ink-faint" style={{ fontSize: 8 }}>
                      {n.role.split(' ')[0]}
                    </text>
                  </>
                )}
              </g>
            )
          })}
        </svg>

        {/* feed-in / scale-out labels */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-ink-soft shadow-card">
          100+ college network ↓
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-ink-soft shadow-card">
          ↑ Innovation · IP · venture scale
        </div>
      </div>

      {/* Detail panel */}
      <div className="space-y-3">
        {NODES.map((n, i) => {
          const on = active === i
          return (
            <button
              key={n.id}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`block w-full rounded-2xl border p-5 text-left transition-all ${
                on ? 'border-brand-300 bg-white shadow-card' : 'border-line bg-canvas hover:border-line-2'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white" style={{ background: n.color }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{n.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: n.color }}>
                    {n.role}
                  </p>
                </div>
              </div>
              <motion.div initial={false} animate={{ height: on ? 'auto' : 0, opacity: on ? 1 : 0 }} className="overflow-hidden">
                <p className="pt-3 text-[15px] leading-relaxed text-ink-soft">{n.body}</p>
                <p className="mt-2 text-sm font-medium text-ink">→ {n.output}</p>
              </motion.div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
