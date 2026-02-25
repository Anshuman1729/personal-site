'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav({ activePage }: { activePage?: 'work' | 'thinking' | 'writing' | 'contact' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      <div
        className={scrolled ? 'nav-inner nav-inner--scrolled' : 'nav-inner'}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1080, margin: '0 auto' }}
      >
        <Link href="/" style={{
          fontWeight: 700, fontSize: '1rem',
          color: 'var(--text)', letterSpacing: '-0.02em',
        }}>
          Anshuman Khare
        </Link>

        <ul className="nav-links">
          {[
            { href: '/#experience', label: 'Work',     key: 'work'     },
            { href: '/#principles', label: 'Thinking', key: 'thinking' },
            { href: '/work-with-me', label: 'Work With Me', key: 'work-with-me' },
            { href: '/writing',     label: 'Writing',  key: 'writing'  },
          ].map(({ href, label, key }) => (
            <li key={key}>
              <Link href={href} style={{
                color: activePage === key ? 'var(--text)' : 'var(--text-3)',
                fontWeight: activePage === key ? 600 : 500,
                transition: 'color 0.2s',
              }}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" style={{
              color: 'var(--blue)',
              padding: '8px 18px',
              border: '1.5px solid var(--blue)',
              borderRadius: 100,
              transition: 'background 0.2s, color 0.2s',
              fontSize: '0.8rem', fontWeight: 600,
            }}>
              Let&apos;s Talk
            </Link>
          </li>
        </ul>

        <button
          className={menuOpen ? 'nav-hamburger nav-hamburger--open' : 'nav-hamburger'}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={menuOpen ? 'nav-mobile' : 'nav-mobile nav-mobile--hidden'} aria-hidden={!menuOpen}>
        {[
          { href: '/#experience',  label: 'Work'         },
          { href: '/#principles',  label: 'Thinking'     },
          { href: '/work-with-me', label: 'Work With Me' },
          { href: '/writing',      label: 'Writing'      },
          { href: '/#contact',     label: "Let's Talk"   },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{ color: 'var(--text)', textDecoration: 'none', padding: '8px 0' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
