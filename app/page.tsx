import { getAllArticles } from '@/lib/articles'
import HomepageContent from '@/components/HomepageContent'

export default function Page() {
  const articles = getAllArticles()
  return <HomepageContent articles={articles} />
}
