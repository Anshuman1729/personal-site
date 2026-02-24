'use client'

import { useState, useEffect } from 'react'

const COHORTS = {
  organic: {
    label: '🌱 Organic / Referral',
    sub: 'Word of mouth, organic social',
    rows: [
      { label: 'Acquired',   width: 100, text: '100 customers', pct: '100%' },
      { label: '30d repeat', width: 62,  text: '62 customers',  pct: '62%'  },
      { label: '90d repeat', width: 48,  text: '48 customers',  pct: '48%'  },
    ],
    color: 'var(--blue)',
    tabActive: 'act-blue',
    insight: { bold: 'Organic cohort:', text: ' Strong repeat rates. Projected LTV:nCAC ≈ 4.8x. This is the customer profile worth scaling into.', bg: 'var(--blue-light)', border: 'var(--border)', color: 'var(--text-2)' },
  },
  paid: {
    label: '📢 Paid / Discount',
    sub: 'Q3 scale-up creatives',
    rows: [
      { label: 'Acquired',   width: 100, text: '100 customers', pct: '100%' },
      { label: '30d repeat', width: 21,  text: '21 customers',  pct: '21%'  },
      { label: '90d repeat', width: 11,  text: '11 customers',  pct: '11%'  },
    ],
    color: 'var(--red)',
    tabActive: 'act-red',
    insight: { bold: 'Paid / Discount cohort:', text: ' Collapse after first order. Projected LTV:nCAC ≈ 1.6x. This cohort quietly destroyed the brand\'s margins at scale.', bg: 'var(--red-light)', border: '#fecaca', color: '#7f1d1d' },
  },
}

type CohortKey = keyof typeof COHORTS

export default function CohortVisualiser() {
  const [active, setActive] = useState<CohortKey>('organic')
  const [animated, setAnimated] = useState(false)
  const [widths, setWidths] = useState([0, 0, 0])

  useEffect(() => {
    setAnimated(false)
    setWidths([0, 0, 0])
    const t = setTimeout(() => {
      setAnimated(true)
      setWidths(COHORTS[active].rows.map(r => r.width))
    }, 80)
    return () => clearTimeout(t)
  }, [active])

  const cohort = COHORTS[active]

  return (
    <div style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: 32, margin: '40px 0' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 6 }}>
        Interactive · 90-day repeat rate by cohort
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginBottom: 24, lineHeight: 1.5 }}>
        Toggle between cohorts to see how customer quality diverges over 90 days.
      </div>

      {/* Cohort tabs */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
        {(Object.keys(COHORTS) as CohortKey[]).map(key => {
          const c = COHORTS[key]
          const isActive = active === key
          const borderColor = isActive ? (key === 'organic' ? 'var(--blue)' : 'var(--red)') : 'var(--border)'
          const bg = isActive ? (key === 'organic' ? 'var(--blue-light)' : 'var(--red-light)') : 'var(--bg)'
          return (
            <button key={key} onClick={() => setActive(key)} style={{
              flex: 1, padding: 16, borderRadius: 10, border: `1.5px solid ${borderColor}`,
              background: bg, cursor: 'pointer', textAlign: 'center',
              transition: 'all 0.2s', fontFamily: 'var(--sans)',
            }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{c.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{c.sub}</div>
            </button>
          )
        })}
      </div>

      {/* Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {cohort.rows.map((row, i) => (
          <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 52px', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-2)', fontWeight: 500 }}>{row.label}</div>
            <div style={{ height: 36, background: 'var(--bg-card)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 8,
                width: widths[i] + '%',
                background: cohort.color,
                transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1)',
                display: 'flex', alignItems: 'center', paddingLeft: 12,
                fontSize: '0.75rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap',
              }}>
                {widths[i] > 20 ? row.text : ''}
              </div>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text)' }}>{row.pct}</div>
          </div>
        ))}
      </div>

      {/* Insight */}
      <div style={{
        marginTop: 20, padding: '14px 18px', borderRadius: 8,
        fontSize: '0.85rem', lineHeight: 1.6, border: `1px solid ${cohort.insight.border}`,
        background: cohort.insight.bg, color: cohort.insight.color,
        transition: 'all 0.3s',
      }}>
        <strong>{cohort.insight.bold}</strong>{cohort.insight.text}
      </div>
    </div>
  )
}
