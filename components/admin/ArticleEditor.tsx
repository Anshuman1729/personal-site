'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const TAGS = ['Performance', 'Acquisition', 'Lifecycle', 'Strategy']

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function insertAround(textarea: HTMLTextAreaElement, before: string, after = before) {
  const { selectionStart: s, selectionEnd: e, value } = textarea
  const selected = value.slice(s, e)
  const replacement = `${before}${selected || 'text'}${after}`
  const next = value.slice(0, s) + replacement + value.slice(e)
  // Return the new value + cursor positions
  return { next, cursorStart: s + before.length, cursorEnd: s + before.length + (selected || 'text').length }
}

function insertLine(textarea: HTMLTextAreaElement, prefix: string) {
  const { selectionStart: s, value } = textarea
  const lineStart = value.lastIndexOf('\n', s - 1) + 1
  const next = value.slice(0, lineStart) + prefix + value.slice(lineStart)
  return { next, cursorStart: lineStart + prefix.length, cursorEnd: lineStart + prefix.length }
}

type Props = {
  existingSlug?: string
  initialTitle?: string
  initialExcerpt?: string
  initialDate?: string
  initialTag?: string
  initialStatus?: string
  initialContent?: string
}

export default function ArticleEditor({
  existingSlug,
  initialTitle    = '',
  initialExcerpt  = '',
  initialDate     = new Date().toISOString().split('T')[0],
  initialTag      = 'Performance',
  initialStatus   = 'draft',
  initialContent  = '',
}: Props) {
  const router = useRouter()
  const isNew = !existingSlug

  const [title,   setTitle]   = useState(initialTitle)
  const [slug,    setSlug]    = useState(existingSlug ?? '')
  const [excerpt, setExcerpt] = useState(initialExcerpt)
  const [date,    setDate]    = useState(initialDate)
  const [tag,     setTag]     = useState(initialTag)
  const [status,  setStatus]  = useState(initialStatus)
  const [content, setContent] = useState(initialContent)
  const [slugManual, setSlugManual] = useState(!!existingSlug)

  const [saving,  setSaving]  = useState(false)
  const [saved,   setSaved]   = useState(false)
  const [error,   setError]   = useState('')

  function handleTitleChange(v: string) {
    setTitle(v)
    if (!slugManual) setSlug(slugify(v))
  }

  async function save(targetStatus: string) {
    setError('')
    setSaving(true)
    setSaved(false)
    try {
      const body = { slug, title, excerpt, date, tag, status: targetStatus, content }
      const url  = isNew ? '/api/admin/articles' : `/api/admin/articles/${existingSlug}`
      const method = isNew ? 'POST' : 'PUT'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Save failed')
        return
      }
      setStatus(targetStatus)
      setSaved(true)
      if (isNew) {
        // Redirect to edit page so future saves are PUT
        router.push(`/admin/articles/${slug}/edit`)
      }
    } catch {
      setError('Network error')
    } finally {
      setSaving(false)
    }
  }

  // Toolbar actions
  const applyFormat = useCallback((action: string) => {
    const ta = document.getElementById('article-body') as HTMLTextAreaElement | null
    if (!ta) return
    let result: { next: string; cursorStart: number; cursorEnd: number }
    switch (action) {
      case 'bold':    result = insertAround(ta, '**'); break
      case 'italic':  result = insertAround(ta, '_'); break
      case 'h2':      result = insertLine(ta, '## '); break
      case 'h3':      result = insertLine(ta, '### '); break
      case 'code':    result = insertAround(ta, '`'); break
      case 'codeblock': result = insertAround(ta, '\n```\n', '\n```\n'); break
      case 'callout': result = insertAround(ta, '\n<Callout>\n', '\n</Callout>\n'); break
      case 'link': {
        const { selectionStart: s, selectionEnd: e, value } = ta
        const sel = value.slice(s, e) || 'link text'
        const next = value.slice(0, s) + `[${sel}](url)` + value.slice(e)
        result = { next, cursorStart: s + sel.length + 3, cursorEnd: s + sel.length + 6 }
        break
      }
      default: return
    }
    setContent(result.next)
    // Restore focus + selection after React re-render
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(result.cursorStart, result.cursorEnd)
    })
  }, [])

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '9px 12px',
    border: '1px solid var(--border)', borderRadius: 6,
    background: 'var(--bg-off)', color: 'var(--text)',
    fontSize: '0.85rem', fontFamily: 'var(--sans)', outline: 'none',
  }
  const labelStyle: React.CSSProperties = {
    fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--text-4)', display: 'block', marginBottom: 6,
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: 'var(--sans)', display: 'flex', flexDirection: 'column' }}>

      {/* Top bar */}
      <div style={{
        borderBottom: '1px solid var(--border)', padding: '16px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10, gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link href="/admin/articles" style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontWeight: 500 }}>
            ← Articles
          </Link>
          <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 600 }}>
            {isNew ? 'New Article' : title || existingSlug}
          </span>
          {!isNew && (
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', padding: '2px 8px', borderRadius: 100,
              color: status === 'published' ? 'var(--green)' : 'var(--amber)',
              background: status === 'published' ? 'var(--green-light)' : 'transparent',
              border: status === 'published' ? 'none' : '1px solid var(--amber)',
            }}>
              {status}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {error && <span style={{ fontSize: '0.78rem', color: 'var(--red)' }}>{error}</span>}
          {saved && !error && <span style={{ fontSize: '0.78rem', color: 'var(--green)' }}>Saved!</span>}
          <button
            onClick={() => save('draft')}
            disabled={saving || !slug || !title}
            style={{
              padding: '8px 16px', fontSize: '0.82rem', fontWeight: 500,
              border: '1.5px solid var(--border)', borderRadius: 7, cursor: 'pointer',
              background: 'transparent', color: 'var(--text)', fontFamily: 'var(--sans)',
              opacity: (saving || !slug || !title) ? 0.5 : 1,
            }}
          >
            {saving && status === 'draft' ? 'Saving…' : 'Save Draft'}
          </button>
          <button
            onClick={() => save('published')}
            disabled={saving || !slug || !title}
            style={{
              padding: '8px 18px', fontSize: '0.82rem', fontWeight: 600,
              border: 'none', borderRadius: 7, cursor: 'pointer',
              background: 'var(--text)', color: 'var(--bg)', fontFamily: 'var(--sans)',
              opacity: (saving || !slug || !title) ? 0.5 : 1,
            }}
          >
            {saving && status === 'published' ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Body: sidebar + editor */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* Sidebar — metadata */}
        <aside style={{
          width: 260, flexShrink: 0, borderRight: '1px solid var(--border)',
          padding: '28px 20px', display: 'flex', flexDirection: 'column', gap: 20,
          overflowY: 'auto',
        }}>
          <div>
            <label style={labelStyle}>Title</label>
            <input
              value={title}
              onChange={e => handleTitleChange(e.target.value)}
              placeholder="Article title"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Slug</label>
            <input
              value={slug}
              onChange={e => { setSlug(e.target.value); setSlugManual(true) }}
              placeholder="url-slug"
              disabled={!isNew}
              style={{ ...inputStyle, opacity: isNew ? 1 : 0.5, cursor: isNew ? 'text' : 'not-allowed' }}
            />
            <div style={{ fontSize: '0.68rem', color: 'var(--text-4)', marginTop: 4 }}>
              /writing/{slug || '…'}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Excerpt</label>
            <textarea
              value={excerpt}
              onChange={e => setExcerpt(e.target.value)}
              placeholder="One-sentence summary"
              rows={3}
              style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.5 }}
            />
          </div>

          <div>
            <label style={labelStyle}>Tag</label>
            <select
              value={tag}
              onChange={e => setTag(e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Date</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Status</label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </aside>

        {/* Editor pane */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Toolbar */}
          <div style={{
            borderBottom: '1px solid var(--border)', padding: '8px 16px',
            display: 'flex', gap: 4, flexWrap: 'wrap',
          }}>
            {[
              { label: 'B', action: 'bold',      title: 'Bold (**text**)' },
              { label: 'I', action: 'italic',     title: 'Italic (_text_)' },
              { label: 'H2', action: 'h2',        title: 'Heading 2' },
              { label: 'H3', action: 'h3',        title: 'Heading 3' },
              { label: '`',  action: 'code',      title: 'Inline code' },
              { label: '```', action: 'codeblock', title: 'Code block' },
              { label: 'Link', action: 'link',    title: 'Link' },
              { label: 'Callout', action: 'callout', title: '<Callout> block' },
            ].map(({ label, action, title }) => (
              <button
                key={action}
                title={title}
                onMouseDown={e => { e.preventDefault(); applyFormat(action) }}
                style={{
                  padding: '4px 10px', fontSize: '0.75rem', fontWeight: 600,
                  border: '1px solid var(--border)', borderRadius: 5,
                  background: 'var(--bg-off)', color: 'var(--text-2)',
                  cursor: 'pointer', fontFamily: 'monospace',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Textarea */}
          <textarea
            id="article-body"
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder={`Write your article in Markdown / MDX…\n\nYou can use headings, **bold**, _italic_, \`code\`, and custom components like <Callout>.`}
            spellCheck
            style={{
              flex: 1, resize: 'none', border: 'none', outline: 'none',
              padding: '28px 36px',
              fontSize: '0.92rem', lineHeight: 1.8,
              fontFamily: '"SFMono-Regular", "Menlo", "Consolas", monospace',
              background: 'var(--bg)', color: 'var(--text)',
              overflowY: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  )
}
