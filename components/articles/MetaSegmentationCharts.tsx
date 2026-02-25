'use client'

import { useState, useEffect, useRef } from 'react'

// ── Shared: animated bar hook
function useCountUp(target: number, duration = 900, trigger: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setVal(target); clearInterval(timer) }
      else setVal(Math.round(start))
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target, duration])
  return val
}

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return inView
}

// ── Chart 1: Learning phase bar chart
export function LearningPhaseChart() {
  const ref = useRef<HTMLDivElement>(null!)
  const inView = useInView(ref)
  const [tooltip, setTooltip] = useState<{ i: number; x: number; y: number } | null>(null)

  const data = [
    { label: 'Ad set 1',   value: 68, below: false },
    { label: 'Ad set 2',   value: 54, below: false },
    { label: 'Ad set 3',   value: 47, below: true  },
    { label: 'Ad set 4',   value: 38, below: true  },
    { label: 'Ad set 5',   value: 31, below: true  },
    { label: 'Ad set 6',   value: 29, below: true  },
    { label: 'Ad set 7',   value: 22, below: true  },
    { label: 'Ad set 8',   value: 19, below: true  },
    { label: 'Ad set 9',   value: 17, below: true  },
    { label: 'Ad set 10',  value: 14, below: true  },
    { label: 'Sets 11-23', value: 8,  below: true  },
  ]
  const threshold = 50
  const max = 68 * 1.15

  return (
    <div ref={ref} style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 32px', margin: '40px 0', position: 'relative' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 4 }}>
        Weekly purchase events per ad set — Fortis Fuel
      </div>
      <div style={{ fontSize: '0.7rem', color: 'var(--text-4)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Purchase events / week · hover bars for detail</div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: 6, height: 200, paddingBottom: 32 }}>
        {/* threshold line */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 32 + (threshold / max * 168), borderTop: '2px dashed var(--red)', zIndex: 2, pointerEvents: 'none' }}>
          <span style={{ position: 'absolute', right: 0, top: -18, fontSize: '0.62rem', color: 'var(--red)', fontWeight: 700, background: 'var(--bg-off)', padding: '0 6px', whiteSpace: 'nowrap' }}>
            Exit learning threshold (50 events)
          </span>
        </div>
        {data.map((d, i) => {
          const targetH = (d.value / max) * 168
          const h = inView ? targetH : 0
          return (
            <div
              key={i}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', position: 'relative', cursor: 'pointer' }}
              onMouseEnter={e => setTooltip({ i, x: e.currentTarget.getBoundingClientRect().left, y: e.currentTarget.getBoundingClientRect().top })}
              onMouseLeave={() => setTooltip(null)}
            >
              <div style={{ width: '100%', height: h, background: d.below ? '#fee2e2' : '#dcfce7', borderRadius: '4px 4px 0 0', border: `1.5px solid ${d.below ? 'var(--red)' : 'var(--green)'}`, position: 'relative', overflow: 'hidden', transition: 'height 0.8s cubic-bezier(0.16,1,0.3,1)', transitionDelay: `${i * 60}ms` }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: d.below ? 'var(--red)' : 'var(--green)', opacity: 0.2 }} />
                {tooltip?.i === i && (
                  <div style={{ position: 'absolute', bottom: '105%', left: '50%', transform: 'translateX(-50%)', background: 'var(--text)', color: 'var(--bg)', fontSize: '0.72rem', fontWeight: 700, padding: '6px 10px', borderRadius: 6, whiteSpace: 'nowrap', zIndex: 10, pointerEvents: 'none' }}>
                    {d.label}: {d.value} events
                    <div style={{ marginTop: 2, fontSize: '0.62rem', fontWeight: 400, color: d.below ? '#fca5a5' : '#86efac' }}>
                      {d.below ? 'Stuck in learning' : 'Exiting learning'}
                    </div>
                    <div style={{ position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, background: 'var(--text)', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                  </div>
                )}
              </div>
              <div style={{ position: 'absolute', bottom: 0, fontSize: '0.55rem', color: 'var(--text-4)', textAlign: 'center', lineHeight: 1.2, padding: '0 1px' }}>{d.label}</div>
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: 'var(--text-3)' }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--green)', display: 'inline-block' }} />
          Exiting learning (2 of 23)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: 'var(--text-3)' }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--red)', display: 'inline-block' }} />
          Stuck in learning (21 of 23)
        </div>
      </div>
    </div>
  )
}

// ── Chart 2: Creative performance
export function CreativePerformanceChart() {
  const ref = useRef<HTMLDivElement>(null!)
  const inView = useInView(ref)
  const [tooltip, setTooltip] = useState<number | null>(null)

  const data = [
    { label: 'Hook A', sublabel: 'Men 22-30, gym-goers', value: 43 },
    { label: 'Hook B', sublabel: 'Women 25-38, fitness', value: 31 },
    { label: 'Hook C', sublabel: 'Mixed, 28-42',         value: 26 },
  ]
  const max = 43 * 1.2

  return (
    <div ref={ref} style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 32px', margin: '40px 0' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 4 }}>
        Creative performance inside Broad ad set — week 4 post-consolidation
      </div>
      <div style={{ fontSize: '0.7rem', color: 'var(--text-4)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.06em' }}>% of ad set conversions · hover to see audience segment</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, height: 180, paddingBottom: 44 }}>
        {data.map((d, i) => {
          const targetH = (d.value / max) * 136
          const h = inView ? targetH : 0
          return (
            <div
              key={i}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', position: 'relative', cursor: 'pointer' }}
              onMouseEnter={() => setTooltip(i)}
              onMouseLeave={() => setTooltip(null)}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--blue)', marginBottom: 6, transition: 'transform 0.2s', transform: tooltip === i ? 'scale(1.15)' : 'scale(1)' }}>{d.value}%</div>
              <div style={{ width: '100%', height: h, background: tooltip === i ? 'var(--blue)' : 'var(--blue-light)', borderRadius: '6px 6px 0 0', border: '1.5px solid var(--blue)', position: 'relative', overflow: 'hidden', transition: 'height 0.9s cubic-bezier(0.16,1,0.3,1), background 0.2s', transitionDelay: `${i * 100}ms` }}>
                {tooltip === i && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '0.65rem', padding: '6px 10px', borderRadius: 6, textAlign: 'center', lineHeight: 1.4 }}>
                      {d.sublabel}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ position: 'absolute', bottom: 0, textAlign: 'center', lineHeight: 1.4 }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text)' }}>{d.label}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-4)' }}>{d.sublabel}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.5, fontStyle: 'italic' }}>
        Meta self-selected distinct audience pockets for each hook — no separate ad sets needed.
      </div>
    </div>
  )
}

// ── Chart 3: Before/after results comparison with toggle
export function ResultsComparison() {
  const [view, setView] = useState<'before' | 'after'>('before')
  const ref = useRef<HTMLDivElement>(null!)
  const inView = useInView(ref)

  const rows = [
    { metric: 'Active ad sets',     before: 23,   after: 4,    unit: '',   lowerBetter: true  },
    { metric: 'Ad sets in learning', before: 19,  after: 0,    unit: '',   lowerBetter: true  },
    { metric: 'Avg CPM',            before: 312,  after: 198,  unit: '₹',  lowerBetter: true  },
    { metric: 'Weekly purchases',   before: 184,  after: 441,  unit: '',   lowerBetter: false },
    { metric: 'Blended ROAS',       before: 2.9,  after: 3.8,  unit: 'x',  lowerBetter: false },
  ]

  return (
    <div ref={ref} style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 32px', margin: '40px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)' }}>
          Fortis Fuel — 6 weeks after consolidation
        </div>
        <div style={{ display: 'flex', gap: 1, background: 'var(--border)', borderRadius: 8, overflow: 'hidden' }}>
          {(['before', 'after'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} style={{ padding: '8px 18px', fontSize: '0.75rem', fontWeight: 700, border: 'none', cursor: 'pointer', background: view === v ? (v === 'before' ? 'var(--red)' : 'var(--green)') : 'var(--bg)', color: view === v ? '#fff' : 'var(--text-3)', transition: 'all 0.2s', textTransform: 'capitalize' }}>
              {v}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', borderRadius: 8, overflow: 'hidden' }}>
        {rows.map((row, i) => {
          const val = view === 'before' ? row.before : row.after
          const improved = row.lowerBetter ? row.after < row.before : row.after > row.before
          const pct = Math.round(Math.abs((row.after - row.before) / row.before) * 100)
          const barMax = row.lowerBetter ? row.before : row.after
          const barWidth = inView ? (val / barMax) * 100 : 0
          const barColor = view === 'before' ? 'var(--red)' : (improved ? 'var(--green)' : 'var(--red)')

          return (
            <div key={i} style={{ background: 'var(--bg)', padding: '16px 16px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>{row.metric}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: view === 'before' ? 'var(--red)' : 'var(--green)', transition: 'color 0.3s' }}>
                    {row.unit === '₹' ? '₹' : ''}{val}{row.unit !== '₹' ? row.unit : ''}
                  </span>
                  {view === 'after' && (
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '2px 7px', borderRadius: 100, background: improved ? '#dcfce7' : '#fee2e2', color: improved ? 'var(--green)' : 'var(--red)' }}>
                      {improved ? '+' : '-'}{pct}%
                    </span>
                  )}
                </div>
              </div>
              <div style={{ height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: barWidth + '%', background: barColor, borderRadius: 2, transition: 'width 0.7s cubic-bezier(0.16,1,0.3,1), background 0.3s', transitionDelay: `${i * 80}ms` }} />
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-4)', marginTop: 12, textAlign: 'center' }}>Toggle between before and after to see the full impact</div>
    </div>
  )
}

// ── Segmentation before/after toggle
export function SegmentationBeforeAfter() {
  const [view, setView] = useState<'before' | 'after'>('before')

  const before = {
    label: "The segmentation trap",
    items: [
      "23 ad sets, each targeting a narrow slice",
      "Same creative running in most ad sets",
      "Budget fragmented — median ₹800/day per ad set",
      "19 of 23 ad sets stuck in learning phase",
      "CPM ₹312 — 60% above category benchmark",
      "Delivery erratic, scaling impossible",
    ]
  }
  const after = {
    label: "Consolidated structure",
    items: [
      "4 ad sets — broad, LAL, retargeting 7d, retargeting 30d",
      "5–6 creative variants per ad set, differentiated by hook",
      "Budget consolidated — ₹4,500/day per ad set minimum",
      "All 4 ad sets exiting learning within 10 days",
      "CPM ₹198 — within category benchmark",
      "Delivery stable, scaled spend 2.4x in 6 weeks",
    ]
  }

  const active = view === 'before' ? before : after
  const color = view === 'before' ? 'var(--red)' : 'var(--green)'
  const bg = view === 'before' ? '#fee2e2' : '#dcfce7'
  const icon = view === 'before' ? '✕' : '✓'

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', margin: '40px 0' }}>
      <div style={{ display: 'flex', gap: 0, background: 'var(--bg-off)', borderBottom: '1px solid var(--border)' }}>
        {(['before', 'after'] as const).map(v => (
          <button key={v} onClick={() => setView(v)} style={{ flex: 1, padding: '14px', fontSize: '0.78rem', fontWeight: 700, border: 'none', cursor: 'pointer', background: view === v ? (v === 'before' ? 'var(--red)' : 'var(--green)') : 'transparent', color: view === v ? '#fff' : 'var(--text-4)', transition: 'all 0.25s', textTransform: 'capitalize', letterSpacing: '0.04em' }}>
            {v === 'before' ? 'Before — The trap' : 'After — Consolidated'}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg)', padding: '28px 32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color, background: bg, padding: '4px 10px', borderRadius: 100 }}>{view}</span>
          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text)' }}>{active.label}</span>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {active.items.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.6, animation: 'fadeIn 0.3s ease' }}>
              <span style={{ color, fontWeight: 700, flexShrink: 0, marginTop: 2, fontSize: '0.9rem' }}>{icon}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}

// ── Live audit calculator
export function AuditCalculator() {
  const [cpa, setCpa] = useState(650)
  const [adSets, setAdSets] = useState(12)
  const [dailyBudget, setDailyBudget] = useState(10000)

  const minBudgetPerAdSet = Math.round((cpa * 50) / 7)
  const totalNeeded = minBudgetPerAdSet * adSets
  const affordable = Math.floor(dailyBudget / minBudgetPerAdSet)
  const stuck = Math.max(0, adSets - affordable)
  const overBudget = totalNeeded > dailyBudget

  return (
    <div style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 32px', margin: '40px 0' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 4 }}>
        Live Audit Calculator
      </div>
      <div style={{ fontSize: '0.88rem', color: 'var(--text-3)', marginBottom: 28, lineHeight: 1.5 }}>
        Enter your numbers to see how many of your ad sets are stuck in learning.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 28 }}>
        {[
          { label: 'Your avg CPA (₹)', value: cpa, setter: setCpa, min: 100, max: 5000, step: 50 },
          { label: 'Active ad sets',   value: adSets, setter: setAdSets, min: 1, max: 50, step: 1 },
          { label: 'Daily budget (₹)', value: dailyBudget, setter: setDailyBudget, min: 1000, max: 200000, step: 1000 },
        ].map(({ label, value, setter, min, max, step }) => (
          <div key={label}>
            <label style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', display: 'block', marginBottom: 8 }}>{label}</label>
            <input
              type="range" min={min} max={max} step={step} value={value}
              onChange={e => setter(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--blue)', cursor: 'pointer' }}
            />
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', marginTop: 4 }}>
              {label.includes('₹') || label.includes('budget') ? '₹' : ''}{value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)', borderRadius: 8, overflow: 'hidden', marginBottom: 20 }}>
        {[
          { label: 'Min budget per ad set', value: `₹${minBudgetPerAdSet.toLocaleString()}/day`, sub: 'to exit learning in 7 days', warn: false },
          { label: 'Ad sets you can fund',  value: `${affordable} of ${adSets}`, sub: 'at current budget', warn: overBudget },
          { label: 'Stuck in learning',     value: `${stuck} ad sets`, sub: stuck > 0 ? 'burning budget inefficiently' : 'all funded', warn: stuck > 0 },
        ].map(({ label, value, sub, warn }) => (
          <div key={label} style={{ background: warn ? '#fff5f5' : 'var(--bg)', padding: '20px 20px' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: warn ? 'var(--red)' : 'var(--green)', letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-4)', marginTop: 4 }}>{sub}</div>
          </div>
        ))}
      </div>

      {overBudget ? (
        <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 8, padding: '14px 18px', fontSize: '0.85rem', color: '#991b1b', lineHeight: 1.6 }}>
          <strong>You have too many ad sets.</strong> At your current CPA and budget, you can only properly fund <strong>{affordable} ad sets</strong>. The other <strong>{stuck}</strong> will be stuck in learning — wasting spend without converging. Consider consolidating to {affordable} ad sets maximum.
        </div>
      ) : (
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 8, padding: '14px 18px', fontSize: '0.85rem', color: '#166534', lineHeight: 1.6 }}>
          <strong>Your structure looks fundable.</strong> At ₹{minBudgetPerAdSet.toLocaleString()}/day per ad set, your ₹{dailyBudget.toLocaleString()} budget can support all {adSets} ad sets exiting learning. Make sure each has distinct targeting logic and creative.
        </div>
      )}
    </div>
  )
}
