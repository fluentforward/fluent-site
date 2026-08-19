import { type Metadata } from 'next'

import { LegalPage } from '@/components/sections/LegalPage'
import { privacy } from '@/content/legal'

const description =
  'What personal information FluentForward Limited collects, why, how long it is kept, and how to ask us to change or delete it.'

export const metadata: Metadata = {
  title: 'Privacy',
  description,
  alternates: { canonical: '/privacy' },
  openGraph: { title: 'Privacy', description, url: '/privacy' },
  twitter: { title: 'Privacy', description },
}

export default function Privacy() {
  return <LegalPage {...privacy} />
}
