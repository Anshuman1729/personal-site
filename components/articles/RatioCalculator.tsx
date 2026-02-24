'use client'

import { useState } from 'react'

export default function RatioCalculator() {
  const [ltv, setLtv] = useState(3000)
  const [cac, setCac] = useState(1000)

  const ratio = ltv / cac
  const r     = ratio.toFixed(1)

  const verdict =
    ratio >= 3 ? { text: '✓ Healthy — safe to scale',       bg: '#dcfce7', color: 'var(--green)', border: '#86efac', numColor: 'var(--green)', dispBg: 'var(--green-light)' } :
    ratio >= 2 ? { text: '⚠ Borderline — fix before scaling', bg: '#fef3c7', color: '#92400e',     border: '#fcd34d', numColor: 'var(--amber)', dispBg: '#fffbeb' } :
                 { text: '✗ Danger — buying revenue at a loss', bg: '#fee2e2', color: 'var(--red)', border: '#fca5a5', numColor: 'var(--red)',   dispBg: 'var(--red-light)' }

  return (
    <div style={{ background: 'var(--bg-off)', border: '1px solid var(--border)', borderRadius: 12, padding: 32, margin: '40px 0' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 6 }}>
        Interactive · LTV : nCAC calculator
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginBottom: 24, lineHeight: 1.5 }}>
        Drag the sliders to see your ratio and the verdict it triggers.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
        {[
          { label: '12-month LTV (₹)', value: ltv, min: 500, max: 8000, step: 100, set: setLtv },
          { label: 'Net CAC (₹)',       value: cac, min: 200, max: 5000, step: 50,  set: setCac },
        ].map(({ label, value, min, max, step, set }) => (
          <div key={label}>
            <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 10 }}>
              {label}
            </label>
            <input type="range" min={min} max={max} value={value} step={step}
              onChange={e => set(+e.target.value)}
              style={{ width: '100%', accentColor: 'var(--blue)', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', marginTop: 6, display: 'inline-block', letterSpacing: '-0.02em' }}>
              ₹{value.toLocaleString('en-IN')}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        background: verdict.dispBg, borderRadius: 12, padding: 28, textAlign: 'center',
        border: `2px solid ${verdict.border}`, transition: 'all 0.3s',
      }}>
        <div style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6, color: verdict.numColor, transition: 'color 0.3s' }}>
          {r}x
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-4)', marginBottom: 14 }}>LTV : nCAC ratio</div>
        <span style={{ fontSize: '0.88rem', fontWeight: 700, padding: '8px 20px', borderRadius: 100, background: verdict.bg, color: verdict.color, display: 'inline-block', transition: 'all 0.3s' }}>
          {verdict.text}
        </span>
      </div>
    </div>
  )
}
