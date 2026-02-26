import { getAllArticles } from '@/lib/articles'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  const articleUrls = articles.map(a => ({
    url: `https://anshumankhare.com/writing/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [
    { url: 'https://anshumankhare.com',             lastModified: new Date(), changeFrequency: 'weekly'  as const, priority: 1.0 },
    { url: 'https://anshumankhare.com/writing',     lastModified: new Date(), changeFrequency: 'weekly'  as const, priority: 0.9 },
    { url: 'https://anshumankhare.com/work-with-me',lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    ...articleUrls,
  ]
}
