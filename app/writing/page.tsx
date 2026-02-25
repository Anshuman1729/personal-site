import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Essays on performance marketing, growth systems, and unit economics.',
}

export default function WritingPage() {
  const articles = getAllArticles()
  const featured = articles[0] ?? null
  const rest     = articles.slice(1)

  return (
    <>
      <Nav activePage="writing" />

      {/* PAGE HEADER */}
      <header style={{ paddingTop: 140, paddingBottom: 64, borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 14 }}>
            Essays &amp; Notes
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 20 }}>
            Writing
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-3)', maxWidth: 480, lineHeight: 1.65 }}>
            Patterns I&apos;ve noticed in performance data, growth systems, and how good marketers actually think — written down so they&apos;re useful to others.
          </p>
        </div>
      </header>

      {/* FEATURED */}
      {featured && (
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid var(--border)' }}>
          <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--text-4)',
              marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              Featured Essay
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <Link href={`/writing/${featured.slug}`} className="grid-featured-article" style={{
              transition: 'box-shadow 0.3s',
            }}>
              <div style={{ padding: '52px 48px', background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: 'var(--blue)',
                      background: 'var(--blue-light)', padding: '4px 12px', borderRadius: 100,
                    }}>
                      {featured.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-4)' }}>{featured.readingTime}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 20 }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-3)', lineHeight: 1.7, marginBottom: 36 }}>
                    {featured.excerpt}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-4)' }}>
                    {new Date(featured.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                  </span>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-3)' }}>↗</span>
                </div>
              </div>
              {/* Visual panel */}
              <div className="featured-visual-panel" style={{
                background: 'var(--bg-off)', borderLeft: '1px solid var(--border)',
                alignItems: 'center', justifyContent: 'center',
                padding: 52, position: 'relative', overflow: 'hidden', minHeight: 320,
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                  backgroundSize: '40px 40px', opacity: 0.6,
                }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text)' }}>
                    {featured.tag}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ARTICLE LIST */}
      <section style={{ paddingBottom: 100 }}>
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto' }}>
          {articles.length === 0 && (
            <p style={{ paddingTop: 64, color: 'var(--text-3)', fontSize: '0.95rem' }}>
              First essays coming soon.
            </p>
          )}
          {articles.map((article, i) => (
            <Link key={article.slug} href={`/writing/${article.slug}`} className="grid-article-row" style={{
              padding: '32px 0',
              borderBottom: '1px solid var(--border)',
              borderTop: i === 0 ? '1px solid var(--border)' : 'none',
              textDecoration: 'none', color: 'inherit',
              transition: 'padding-left 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <div className="article-index">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--text-4)',
                    background: 'var(--bg-card)', padding: '3px 10px', borderRadius: 100,
                  }}>
                    {article.tag}
                  </span>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.015em', color: 'var(--text)', lineHeight: 1.3 }}>
                  {article.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-3)', lineHeight: 1.6, maxWidth: 600 }}>
                  {article.excerpt}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-4)' }}>
                    {new Date(article.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-4)' }}>· {article.readingTime}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, paddingTop: 3 }}>
                <span style={{ fontSize: '1rem', color: 'var(--text-4)' }}>↗</span>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#16a34a',
                  border: '1px solid rgba(34,197,94,0.3)',
                  background: 'rgba(34,197,94,0.06)',
                  padding: '3px 10px', borderRadius: 100, whiteSpace: 'nowrap',
                }}>
                  Published
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
