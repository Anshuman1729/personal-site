'use client'

type Side = {
  label: string
  items: string[]
}

type BeforeAfterProps = {
  before: Side
  after: Side
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', margin: '40px 0' }}>
      {[
        { side: before, color: 'var(--red)', bg: '#fff5f5', badge: 'Before' },
        { side: after,  color: 'var(--green)', bg: '#f0fdf4', badge: 'After' },
      ].map(({ side, color, bg, badge }) => (
        <div key={badge} style={{ background: 'var(--bg)', padding: '32px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color, background: bg, padding: '4px 10px', borderRadius: 100 }}>{badge}</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>{side.label}</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {side.items.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.55 }}>
                <span style={{ color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{badge === 'Before' ? '✕' : '✓'}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
