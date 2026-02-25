import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import ArticleNewsletterCTA from '@/components/ArticleNewsletterCTA'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'

import ROASTimeline from '@/components/articles/ROASTimeline'
import MetricFilter from '@/components/articles/MetricFilter'
import RatioCalculator from '@/components/articles/RatioCalculator'
import CohortVisualiser from '@/components/articles/CohortVisualiser'
import Callout from '@/components/articles/Callout'
import BeforeAfter from '@/components/articles/BeforeAfter'
import Chart from '@/components/articles/Chart'
import { LearningPhaseChart, CreativePerformanceChart, ResultsComparison, SegmentationBeforeAfter, AuditCalculator } from '@/components/articles/MetaSegmentationCharts'

const MDX_COMPONENTS = {
  ROASTimeline,
  MetricFilter,
  RatioCalculator,
  CohortVisualiser,
  Callout,
  BeforeAfter,
  Chart,
  LearningPhaseChart,
  CreativePerformanceChart,
  ResultsComparison,
  SegmentationBeforeAfter,
  AuditCalculator,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, color: 'var(--text)', margin: '56px 0 20px' }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 18 }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: 'var(--text)', fontWeight: 600 }} {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em style={{ fontStyle: 'italic' }} {...props} />
  ),
  hr: () => (
    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '64px 0' }} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote style={{
      background: 'var(--blue-light)', borderLeft: '3px solid var(--blue)',
      borderRadius: '0 8px 8px 0', padding: '20px 24px', margin: '32px 0',
      fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7,
    }} {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLElement>) => (
    <pre style={{
      background: 'var(--text)', borderRadius: 12, padding: '28px 32px',
      margin: '32px 0', fontSize: '0.82rem', lineHeight: 2.1,
      overflowX: 'auto', fontFamily: "'SF Mono', 'Fira Code', monospace",
      color: '#a5f3fc',
    }} {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code style={{ fontFamily: "'SF Mono', 'Fira Code', monospace", color: '#a5f3fc' }} {...props} />
  ),
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: 'article' },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const formattedDate = new Date(article.date).toLocaleDateString('en-IN', {
    month: 'long', year: 'numeric',
  })

  return (
    <>
      <Nav activePage="writing" />
      <ReadingProgress />

      <div style={{ background: 'var(--bg-off)', borderBottom: '1px solid var(--border)', padding: '14px 0', marginTop: 72 }}>
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>⚠️</span>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: 'var(--text-2)', fontWeight: 600 }}>Hypothetical scenario.</strong>
            {' '}Brand names and specific figures in this essay have been changed. Patterns and frameworks are drawn from real work.
          </p>
        </div>
      </div>

      <header style={{ paddingTop: 64, paddingBottom: 80, borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px', opacity: 0.4,
        }} />
        <div className="wrap" style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/writing" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 32,
          }}>
            ← All Writing
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', background: 'var(--blue-light)', padding: '4px 12px', borderRadius: 100 }}>
              {article.tag}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-4)' }}>{article.readingTime}</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-4)' }}>{formattedDate}</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-4)' }}>By Anshuman Khare</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24 }}>
            {article.title}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-3)', lineHeight: 1.7, maxWidth: 600 }}>
            {article.excerpt}
          </p>
        </div>
      </header>

      <main style={{ padding: '72px 0 100px' }}>
        <div className="article-body">
          <MDXRemote source={article.content} components={MDX_COMPONENTS} />
          <ArticleNewsletterCTA />
        </div>
      </main>

      <Footer />
    </>
  )
}
