import Link from 'next/link'
import { getAllArticlesAdmin } from '@/lib/db-articles'
import AdminArticleActions from '@/components/admin/AdminArticleActions'

export const dynamic = 'force-dynamic'

export default async function AdminArticlesPage() {
  const articles = await getAllArticlesAdmin()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: 'var(--sans)' }}>
      {/* Header */}
      <div style={{
        borderBottom: '1px solid var(--border)', padding: '20px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link href="/" style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontWeight: 500 }}>
            ← Site
          </Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>Articles</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link
            href="/admin/articles/migrate"
            style={{
              fontSize: '0.78rem', color: 'var(--text-3)', padding: '7px 14px',
              border: '1px solid var(--border)', borderRadius: 6, fontWeight: 500,
            }}
          >
            Migrate MDX
          </Link>
          <Link
            href="/admin/articles/new"
            style={{
              fontSize: '0.82rem', fontWeight: 600, color: 'var(--bg)',
              background: 'var(--text)', padding: '8px 18px', borderRadius: 8,
            }}
          >
            New Article
          </Link>
          <AdminArticleActions mode="logout" slug="" />
        </div>
      </div>

      {/* Table */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 40px' }}>
        {articles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-3)' }}>
            <p style={{ marginBottom: 16 }}>No articles yet.</p>
            <Link href="/admin/articles/new" style={{ color: 'var(--blue)', fontWeight: 500 }}>
              Write your first article →
            </Link>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Title', 'Tag', 'Status', 'Date', ''].map(h => (
                  <th key={h} style={{
                    textAlign: 'left', padding: '0 0 12px',
                    fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--text-4)',
                    paddingRight: h === '' ? 0 : 24,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {articles.map(a => (
                <tr key={a.slug} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 24px 16px 0', maxWidth: 340 }}>
                    <Link
                      href={`/admin/articles/${a.slug}/edit`}
                      style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.4 }}
                    >
                      {a.title}
                    </Link>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-4)', marginTop: 2 }}>
                      {a.slug}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px 16px 0' }}>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'var(--blue)',
                      background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 100,
                    }}>
                      {a.tag}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px 16px 0' }}>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: a.status === 'published' ? 'var(--green)' : 'var(--amber)',
                    }}>
                      {a.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px 16px 0', fontSize: '0.8rem', color: 'var(--text-3)', whiteSpace: 'nowrap' }}>
                    {new Date(a.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '16px 0', textAlign: 'right' }}>
                    <AdminArticleActions mode="row" slug={a.slug} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
