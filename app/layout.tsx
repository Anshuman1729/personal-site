import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://anshumankhare.com'),
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
    url: 'https://anshumankhare.com',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Anshuman Khare — Performance Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anshumankhare',
    creator: '@anshumankhare',
    images: ['/og-default.png'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anshuman Khare',
  url: 'https://anshumankhare.com',
  jobTitle: 'Performance Marketer',
  worksFor: { '@type': 'Organization', name: 'Meesho' },
  sameAs: [
    'https://linkedin.com/in/anshuman-khare',
    'https://twitter.com/anshumankhare',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
