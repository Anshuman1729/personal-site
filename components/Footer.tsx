import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '36px 0' }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-4)' }}>
          © {new Date().getFullYear()} Anshuman Khare
        </span>
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
          {[
            { href: 'mailto:khare.anshuman47@gmail.com', label: 'Email' },
            { href: 'https://linkedin.com/in/anshuman-khare', label: 'LinkedIn' },
            { href: 'https://twitter.com/anshumankhare', label: 'Twitter' },
            { href: '/writing', label: 'Writing' },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link href={href} style={{
                fontSize: '0.75rem', color: 'var(--text-4)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
