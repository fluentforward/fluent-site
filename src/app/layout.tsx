import { type Metadata } from 'next'
import { IBM_Plex_Mono, Inter_Tight } from 'next/font/google'
import clsx from 'clsx'

import { CalBookingInit } from '@/components/consent/CalBookingInit'
import { CookieConsentProvider } from '@/components/consent/CookieConsentProvider'
import { SiteChrome } from '@/components/layout/SiteChrome'
import { site } from '@/content/site'

import '@/styles/tailwind.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
})

const geistMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-geist-mono',
})

const defaultTitle = `${site.name} | ${site.tagline}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s | ${site.name}`,
    default: defaultTitle,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_GB',
    url: site.url,
    title: defaultTitle,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
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
      className={clsx('h-full antialiased', interTight.variable, geistMono.variable)}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-lede-dark">
        <CookieConsentProvider>
          <SiteChrome>{children}</SiteChrome>
          <CalBookingInit />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
