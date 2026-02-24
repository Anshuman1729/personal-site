'use client'

import { useState } from 'react'

const WEEKS = [
  {
    label: 'Wk 1–2',
    pills: [
      { text: 'Spend doubled',    color: 'blue' },
      { text: 'New creatives live', color: 'blue' },
      { text: 'Team is excited',  color: 'gray' },
    ],
    roasWidth: 76,
    roasValue: '3.8x → 4.0x ↑',
    roasColor: 'var(--blue)',
    signal: '↳ Hidden signal: nCAC starting to creep up. No one checks.',
    signalColor: 'var(--text-3)',
  },
  {
    label: 'Wk 3–4',
    pills: [
      { text: 'New CAC up 28%',          color: 'amber' },
      { text: 'Coupon-driven orders spike', color: 'amber' },
      { text: 'Revenue looks great',     color: 'gray' },
    ],
    roasWidth: 82,
    roasValue: '4.1x ↑ (still green)',
    roasColor: 'var(--blue)',
    signal: '↳ Hidden signal: 30-day repeat rate for this cohort: 21%. Organic cohort sits at 62%. Nobody\'s looking.',
    signalColor: 'var(--red)',
  },
  {
    label: 'Wk 5',
    pills: [
      { text: 'Repeat rate drops',   color: 'red' },
      { text: 'LTV cohort diverges', color: 'red' },
      { text: 'CS tickets up 35%',   color: 'amber' },
    ],
    roasWidth: 82,
    roasValue: '4.1x (still green)',
    roasColor: 'var(--blue)',
    signal: '↳ Hidden signal: Projected 12-month LTV has fallen ₹800 per customer. ROAS cannot see any of this.',
    signalColor: 'var(--red)',
  },
  {
    label: 'Wk 6',
    pills: [
      { text: 'Net profit compressed', color: 'red' },
      { text: '₹40L burned',           color: 'red' },
      { text: 'ROAS finally dips',     color: 'red' },
    ],
    roasWidth: 62,
    roasValue: '3.1x ↓ — the alarm rings 6 weeks late',
    roasColor: 'var(--red)',
    signal: '↳ ROAS finally signals the problem. By now ₹40L is gone and the damage is done.',
    signalColor: 'var(--red)',
    signalBold: true,
  },
]

const PILL_STYLES: Record<string, { background: string; color: string }> = {
  blue:  { background: 'var(--blue-light)', color: 'var(--blue)' },
  green: { background: '#dcfce7',           color: '#15803d' },
  red:   { background: '#fee2e2',           color: 'var(--red)' },
  amber: { background: '#fef3c7',           color: '#92400e' },
  gray:  { background: 'var(--bg-card)',    color: 'var(--text-3)' },
}

export default function ROASTimeline() {
  const [active, setActive] = useState(0)
  const week = WEEKS[active]

  return (
    <div style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: 32, margin: '40px 0' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 6 }}>
        Interactive · Kaaya&apos;s 6-week timeline
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginBottom: 24, lineHeight: 1.5 }}>
        Click each week to see what was happening beneath the surface while ROAS showed green.
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 24, background: 'var(--bg-card)', padding: 4, borderRadius: 10, border: '1px solid var(--border)' }}>
        {WEEKS.map((w, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            flex: 1, padding: '9px 8px', border: 'none', borderRadius: 7,
            background: active === i ? 'var(--bg)' : 'transparent',
            fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600,
            color: active === i ? 'var(--text)' : 'var(--text-3)',
            cursor: 'pointer', transition: 'all 0.2s',
            boxShadow: active === i ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
          }}>
            {w.label}
          </button>
        ))}
      </div>

      {/* Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        {week.pills.map((p, i) => (
          <span key={i} style={{
            fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px', borderRadius: 100,
            ...PILL_STYLES[p.color],
          }}>
            {p.text}
          </span>
        ))}
      </div>

      {/* ROAS bar */}
      <div style={{ background: 'var(--bg-card)', borderRadius: 8, padding: '16px 20px', marginBottom: 12 }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 10 }}>
          ROAS
        </div>
        <div style={{ height: 8, background: 'var(--border)', borderRadius: 100, overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: 100, background: week.roasColor, width: week.roasWidth + '%', transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1)' }} />
        </div>
        <div style={{ marginTop: 10, fontSize: '0.9rem', fontWeight: 700, color: week.roasColor }}>
          {week.roasValue}
        </div>
      </div>

      {/* Signal */}
      <div style={{ fontSize: '0.82rem', fontWeight: week.signalBold ? 700 : 500, color: week.signalColor, lineHeight: 1.5 }}>
        {week.signal}
      </div>
    </div>
  )
}
