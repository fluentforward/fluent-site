import { type Metadata } from 'next'
import { IBM_Plex_Mono, Instrument_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import { CalEmbedScript } from '@/components/ui/CalEmbedScript'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { site } from '@/content/site'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s — ${site.name}`,
    default: `${site.name} — ${site.tagline}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_GB',
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-GB"
      className={clsx(
        'h-full antialiased',
        inter.variable,
        instrumentSans.variable,
        plexMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-slate">
        <SiteHeader />
        <main className="flex-auto">{children}</main>
        <SiteFooter />
        <CalEmbedScript />
      </body>
    </html>
  )
}
