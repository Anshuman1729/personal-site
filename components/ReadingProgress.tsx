'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handler = () => {
      const d = document.documentElement
      setWidth(d.scrollTop / (d.scrollHeight - d.clientHeight) * 100)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 2, background: 'var(--blue)',
      width: width + '%', zIndex: 300,
      transition: 'width 0.1s linear',
    }} />
  )
}
