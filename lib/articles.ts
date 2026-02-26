import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

export type ArticleMeta = {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  readingTime: string
  status: 'published' | 'draft'
}

export type Article = ArticleMeta & {
  content: string
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []

  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.mdx'))

  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw  = fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      return {
        slug,
        title:       data.title       ?? 'Untitled',
        excerpt:     data.excerpt     ?? '',
        date:        data.date        ?? '',
        tag:         data.tag         ?? 'Essay',
        readingTime: `${Math.ceil(rt.minutes)} min read`,
        status:      data.status      ?? 'published',
      } as ArticleMeta
    })
    .filter(a => a.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Returns all filesystem articles including drafts (used by migration route)
export function getAllArticlesFS(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw  = fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)
      return {
        slug,
        title:       data.title   ?? 'Untitled',
        excerpt:     data.excerpt ?? '',
        date:        data.date    ?? '',
        tag:         data.tag     ?? 'Essay',
        readingTime: `${Math.ceil(rt.minutes)} min read`,
        status:      data.status  ?? 'published',
      } as ArticleMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title:       data.title    ?? 'Untitled',
    excerpt:     data.excerpt  ?? '',
    date:        data.date     ?? '',
    tag:         data.tag      ?? 'Essay',
    readingTime: `${Math.ceil(rt.minutes)} min read`,
    status:      data.status   ?? 'published',
    content,
  }
}
