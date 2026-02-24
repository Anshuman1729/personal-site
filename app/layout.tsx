import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Anshuman Khare — Performance Marketing',
    template: '%s — Anshuman Khare',
  },
  description: 'Performance marketer building scalable acquisition systems rooted in unit economics. Currently at Meesho, Bengaluru.',
  authors: [{ name: 'Anshuman Khare' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Anshuman Khare',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
