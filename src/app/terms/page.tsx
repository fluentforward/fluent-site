import { type Metadata } from 'next'

import { LegalPage } from '@/components/sections/LegalPage'
import { terms } from '@/content/legal'

const description =
  'Terms covering the use of the FluentForward website. Engagement work is governed by a separate signed agreement.'

export const metadata: Metadata = {
  title: 'Terms',
  description,
  alternates: { canonical: '/terms' },
  openGraph: { title: 'Terms', description, url: '/terms' },
  twitter: { title: 'Terms', description },
}

export default function Terms() {
  return <LegalPage {...terms} />
}
