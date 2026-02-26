'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Props =
  | { mode: 'row'; slug: string }
  | { mode: 'logout'; slug: string }

export default function AdminArticleActions({ mode, slug }: Props) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm('Delete this article? This cannot be undone.')) return
    const res = await fetch(`/api/admin/articles/${slug}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Delete failed.')
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  if (mode === 'logout') {
    return (
      <button
        onClick={handleLogout}
        style={{
          fontSize: '0.78rem', color: 'var(--text-3)', padding: '7px 14px',
          border: '1px solid var(--border)', borderRadius: 6, fontWeight: 500,
          background: 'transparent', cursor: 'pointer', fontFamily: 'var(--sans)',
        }}
      >
        Log out
      </button>
    )
  }

  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
      <Link
        href={`/admin/articles/${slug}/edit`}
        style={{
          fontSize: '0.78rem', color: 'var(--text-3)', padding: '6px 12px',
          border: '1px solid var(--border)', borderRadius: 6, fontWeight: 500,
        }}
      >
        Edit
      </Link>
      <button
        onClick={handleDelete}
        style={{
          fontSize: '0.78rem', color: 'var(--red)', padding: '6px 12px',
          border: '1px solid var(--border)', borderRadius: 6, fontWeight: 500,
          background: 'transparent', cursor: 'pointer', fontFamily: 'var(--sans)',
        }}
      >
        Delete
      </button>
    </div>
  )
}
