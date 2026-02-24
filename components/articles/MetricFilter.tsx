'use client'

import { useState } from 'react'

const METRICS = [
  { name: 'ROAS',            type: 'lag',  desc: 'Did revenue justify spend? Tells you what already happened — weeks or months after.' },
  { name: 'Revenue',         type: 'lag',  desc: 'How much money came in? A symptom, not a cause. Always reflects past decisions.' },
  { name: 'MoM Growth',      type: 'lag',  desc: 'How fast did we grow vs. last month? Useful for board decks, useless for daily decisions.' },
  { name: 'nCAC',            type: 'lead', desc: 'What does it actually cost to acquire one net-new customer? Signals quality drift within 72h.' },
  { name: 'LTV : nCAC ratio',type: 'lead', desc: 'Are the customers you\'re buying worth more than you\'re paying? The single most important D2C ratio.' },
  { name: '30-day repeat rate', type: 'lead', desc: 'What % of new customers reorder within 30 days? The fastest cohort-quality signal available.' },
]

export default function MetricFilter() {
  const [filter, setFilter] = useState<'all' | 'lag' | 'lead'>('all')

  return (
    <div style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: 32, margin: '40px 0' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 20 }}>
        Interactive · Filter by indicator type
      </div>

      {/* Toggle */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, background: 'var(--bg-card)', padding: 4, borderRadius: 10, border: '1px solid var(--border)' }}>
        {(['all', 'lag', 'lead'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            flex: 1, padding: '9px 12px', border: 'none', borderRadius: 7,
            background: filter === f ? 'var(--bg)' : 'transparent',
            fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600,
            color: filter === f ? 'var(--text)' : 'var(--text-3)',
            cursor: 'pointer', transition: 'all 0.2s',
            boxShadow: filter === f ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
          }}>
            {f === 'all' ? 'All metrics' : f === 'lag' ? 'Lagging only' : 'Leading only'}
          </button>
        ))}
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {METRICS.map(m => {
          const dimmed = filter !== 'all' && m.type !== filter
          return (
            <div key={m.name} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr auto',
              alignItems: 'center', gap: 16, padding: '16px 18px',
              borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg)',
              opacity: dimmed ? 0.15 : 1, transform: dimmed ? 'scale(0.99)' : 'scale(1)',
              transition: 'opacity 0.3s, transform 0.3s',
            }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>{m.name}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', lineHeight: 1.5 }}>{m.desc}</div>
              <span style={{
                fontSize: '0.65rem', fontWeight: 700, padding: '3px 10px',
                borderRadius: 100, whiteSpace: 'nowrap',
                background: m.type === 'lag' ? '#fee2e2' : '#dcfce7',
                color: m.type === 'lag' ? 'var(--red)' : 'var(--green)',
              }}>
                {m.type === 'lag' ? 'Lagging' : 'Leading'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
