import { NextRequest, NextResponse } from 'next/server'
import { getAllArticlesAdmin, createArticle } from '@/lib/db-articles'

export async function GET() {
  try {
    const articles = await getAllArticlesAdmin()
    return NextResponse.json(articles)
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { slug, title, excerpt, date, tag, status, content } = body

    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'slug, title, and content are required' }, { status: 400 })
    }

    await createArticle({ slug, title, excerpt: excerpt ?? '', date: date ?? new Date().toISOString().split('T')[0], tag: tag ?? 'Performance', status: status ?? 'draft', content })
    return NextResponse.json({ ok: true })
  } catch (e) {
    const msg = String(e)
    if (msg.includes('duplicate') || msg.includes('unique')) {
      return NextResponse.json({ error: 'An article with this slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
