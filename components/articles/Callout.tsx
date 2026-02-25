'use client'

import React from 'react'

type CalloutProps = {
  variant?: 'default' | 'warning'
  children: React.ReactNode
}

export default function Callout({ variant = 'default', children }: CalloutProps) {
  const isWarning = variant === 'warning'
  return (
    <div style={{
      background: isWarning ? '#fffbeb' : 'var(--blue-light)',
      borderLeft: `3px solid ${isWarning ? '#f59e0b' : 'var(--blue)'}`,
      borderRadius: '0 8px 8px 0',
      padding: '20px 24px',
      margin: '32px 0',
      fontSize: '0.95rem',
      color: isWarning ? '#92400e' : 'var(--text-2)',
      lineHeight: 1.7,
    }}>
      {children}
    </div>
  )
}
