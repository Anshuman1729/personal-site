'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'

export default function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  const tags = ['All', ...Array.from(new Set(articles.map(a => a.tag)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? articles : articles.filter(a => a.tag === active)

  return (
    <>
      {/* Tag filter pills */}
      {tags.length > 2 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '32px 0', borderBottom: '1px solid var(--border)' }}>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              style={{
                fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100,
                border: '1.5px solid',
                borderColor: active === tag ? 'var(--blue)' : 'var(--border)',
                background: active === tag ? 'var(--blue-light)' : 'transparent',
                color: active === tag ? 'var(--blue)' : 'var(--text-3)',
                cursor: 'pointer', fontFamily: 'var(--sans)',
                transition: 'all 0.2s',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Article rows */}
      {filtered.length === 0 && (
        <p style={{ paddingTop: 64, color: 'var(--text-3)', fontSize: '0.95rem' }}>
          No articles in this category yet.
        </p>
      )}
      {filtered.map((article, i) => (
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
    </>
  )
}
