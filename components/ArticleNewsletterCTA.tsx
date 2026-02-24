'use client'

import { useState } from 'react'

export default function ArticleNewsletterCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle')
  const [done, setDone] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('err')
      return
    }
    // Swap for Beehiiv fetch() when ready
    setStatus('ok')
    setDone(true)
    setEmail('')
  }

  return (
    <div style={{
      background: 'var(--bg-off)', border: '1px solid var(--border)',
      borderRadius: 12, padding: '40px 44px', marginTop: 64,
      display: 'grid', gridTemplateColumns: '1fr auto',
      gap: 32, alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10 }}>
          Enjoyed this?
        </div>
        <div style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 8 }}>
          Get the next essay in your inbox.
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>
          One essay a month on performance marketing and growth systems. No fluff.
        </p>
        {status === 'ok' && (
          <div style={{ marginTop: 10, fontSize: '0.82rem', color: '#16a34a' }}>
            You&apos;re on the list — first issue coming soon.
          </div>
        )}
        {status === 'err' && (
          <div style={{ marginTop: 10, fontSize: '0.82rem', color: 'var(--red)' }}>
            Please enter a valid email address.
          </div>
        )}
      </div>
      <form onSubmit={submit} style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <input
          type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com" disabled={done}
          style={{
            background: 'var(--bg)', border: '1.5px solid var(--border)',
            borderRadius: 8, color: 'var(--text)', fontFamily: 'var(--sans)',
            fontSize: '0.88rem', padding: '12px 16px', outline: 'none', width: 220,
          }}
        />
        <button type="submit" disabled={done} style={{
          fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 700,
          padding: '12px 20px', borderRadius: 8,
          background: done ? 'var(--text-4)' : 'var(--blue)',
          color: '#fff', border: 'none',
          cursor: done ? 'default' : 'pointer', whiteSpace: 'nowrap',
        }}>
          {done ? 'Subscribed ✓' : 'Subscribe →'}
        </button>
      </form>
    </div>
  )
}
