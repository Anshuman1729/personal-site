import sql from './db'
import readingTime from 'reading-time'
import { getAllArticles, getArticleBySlug as getArticleBySlugFS } from './articles'
import type { ArticleMeta, Article } from './articles'

type DbRow = {
  slug: string
  title: string
  excerpt: string
  date: Date | string
  tag: string
  status: string
  content: string
}

function rowToMeta(row: DbRow): ArticleMeta {
  const rt = readingTime(row.content)
  const dateStr = row.date instanceof Date
    ? row.date.toISOString().split('T')[0]
    : String(row.date).split('T')[0]
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    date: dateStr,
    tag: row.tag,
    readingTime: `${Math.ceil(rt.minutes)} min read`,
    status: row.status as 'published' | 'draft',
  }
}

function rowToArticle(row: DbRow): Article {
  return { ...rowToMeta(row), content: row.content }
}

export async function getPublishedArticles(): Promise<ArticleMeta[]> {
  try {
    if (!process.env.DATABASE_URL) throw new Error('No DATABASE_URL')
    const rows = await sql<DbRow[]>`
      SELECT slug, title, excerpt, date, tag, status, content
      FROM articles
      WHERE status = 'published'
      ORDER BY date DESC
    `
    if (rows.length > 0) return rows.map(rowToMeta)
    return getAllArticles() // fallback to filesystem if DB is empty
  } catch {
    return getAllArticles() // fallback if DB is unavailable
  }
}

export async function getAllArticlesAdmin(): Promise<ArticleMeta[]> {
  const rows = await sql<DbRow[]>`
    SELECT slug, title, excerpt, date, tag, status, content
    FROM articles
    ORDER BY date DESC
  `
  return rows.map(rowToMeta)
}

export async function getArticleBySlugDB(slug: string): Promise<Article | null> {
  try {
    if (!process.env.DATABASE_URL) throw new Error('No DATABASE_URL')
    const rows = await sql<DbRow[]>`
      SELECT slug, title, excerpt, date, tag, status, content
      FROM articles
      WHERE slug = ${slug}
    `
    if (rows.length > 0) return rowToArticle(rows[0])
    return getArticleBySlugFS(slug) // fallback to filesystem
  } catch {
    return getArticleBySlugFS(slug)
  }
}

export async function createArticle(data: {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  status: string
  content: string
}): Promise<void> {
  await sql`
    INSERT INTO articles (slug, title, excerpt, date, tag, status, content)
    VALUES (
      ${data.slug}, ${data.title}, ${data.excerpt},
      ${data.date}::date, ${data.tag}, ${data.status}, ${data.content}
    )
  `
}

export async function updateArticle(slug: string, data: {
  title: string
  excerpt: string
  date: string
  tag: string
  status: string
  content: string
}): Promise<void> {
  await sql`
    UPDATE articles
    SET
      title      = ${data.title},
      excerpt    = ${data.excerpt},
      date       = ${data.date}::date,
      tag        = ${data.tag},
      status     = ${data.status},
      content    = ${data.content},
      updated_at = NOW()
    WHERE slug = ${slug}
  `
}

export async function deleteArticle(slug: string): Promise<void> {
  await sql`DELETE FROM articles WHERE slug = ${slug}`
}
