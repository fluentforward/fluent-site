import { type Metadata } from 'next'

import { CookieNoticePage } from '@/components/sections/CookieNoticePage'
import { cookieInventory, cookiesPage } from '@/content/cookies'

const description =
  'Cookies, browser storage and third-party scripts used on fluentforward.com, and how to manage your choices.'

export const metadata: Metadata = {
  title: 'Cookie notice',
  description,
  alternates: { canonical: '/cookies' },
  openGraph: { title: 'Cookie notice', description, url: '/cookies' },
  twitter: { title: 'Cookie notice', description },
}

export default function Cookies() {
  return (
    <CookieNoticePage
      title={cookiesPage.title}
      lastUpdated={cookiesPage.lastUpdated}
      intro={cookiesPage.intro}
      inventory={cookieInventory}
    />
  )
}
