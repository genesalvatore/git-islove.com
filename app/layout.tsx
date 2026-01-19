import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git is Love | Memory Preservation & Digital Connection',
  description: 'To love is to preserve. Every commit is an act of love. Every branch is connection. Git doesn\'t forget what you love.',
  keywords: ['git is love', 'memory preservation', 'digital connection', 'preserve memories', 'acts of love', 'eternal memories', 'family memories'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Love',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-islove.com',
    title: 'Git is Love | Memory Preservation & Digital Connection',
    description: 'To love is to preserve. Every commit is an act of love. Every branch is connection. Git doesn\'t forget what you love.',
    siteName: 'Git is Love',
    images: [
      {
        url: '/og-love.png',
        width: 1200,
        height: 630,
        alt: 'Git is Love - Memory Preservation & Digital Connection',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-islove.com',
  },
  metadataBase: new URL('https://git-islove.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
        <script defer data-domain="git-islove.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
