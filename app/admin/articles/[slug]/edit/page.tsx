import { notFound } from 'next/navigation'
import { getArticleBySlugDB } from '@/lib/db-articles'
import ArticleEditor from '@/components/admin/ArticleEditor'

export const dynamic = 'force-dynamic'

export default async function EditArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticleBySlugDB(slug)
  if (!article) notFound()

  return (
    <ArticleEditor
      existingSlug={article.slug}
      initialTitle={article.title}
      initialExcerpt={article.excerpt}
      initialDate={article.date}
      initialTag={article.tag}
      initialStatus={article.status}
      initialContent={article.content}
    />
  )
}
