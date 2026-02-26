import { NextResponse } from 'next/server'
import { getAllArticlesFS, getArticleBySlug } from '@/lib/articles'
import { createArticle } from '@/lib/db-articles'

export const dynamic = 'force-dynamic'

export async function GET() {
  const results: { slug: string; status: string }[] = []

  const articles = getAllArticlesFS()

  for (const meta of articles) {
    const article = getArticleBySlug(meta.slug)
    if (!article) {
      results.push({ slug: meta.slug, status: 'skipped (no content)' })
      continue
    }
    try {
      await createArticle({
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        date: article.date,
        tag: article.tag,
        status: article.status,
        content: article.content,
      })
      results.push({ slug: meta.slug, status: 'inserted' })
    } catch (e) {
      const msg = String(e)
      if (msg.includes('duplicate') || msg.includes('unique')) {
        results.push({ slug: meta.slug, status: 'already exists (skipped)' })
      } else {
        results.push({ slug: meta.slug, status: `error: ${msg}` })
      }
    }
  }

  return NextResponse.json({ migrated: results.length, results })
}
