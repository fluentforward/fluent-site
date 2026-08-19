import { type Metadata } from 'next'

import { CtaBand } from '@/components/sections/CtaBand'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import { PhaseDetail } from '@/components/sections/PhaseDetail'
import { StrategyBuildSection } from '@/components/sections/StrategyBuildSection'
import {
  closingCta,
  faq,
  hero,
  phases,
  reassurance,
} from '@/content/how-it-works'

const description =
  'A fixed-fee audit, a fixed-fee pilot, then ongoing AI strategy and unlimited development requests against a written turnaround commitment. Each phase ends in a decision, and there is no hourly billing anywhere.'

export const metadata: Metadata = {
  title: 'How it works',
  description,
  alternates: { canonical: '/how-it-works' },
  openGraph: { title: 'How it works', description, url: '/how-it-works' },
  twitter: { title: 'How it works', description },
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function HowItWorks() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lede={hero.lede}
      />
      {phases.map((phase) => (
        <PhaseDetail key={phase.name} phase={phase} />
      ))}
      <StrategyBuildSection />
      <DefinitionGrid
        tone="muted"
        eyebrow={reassurance.eyebrow}
        heading={reassurance.heading}
        items={reassurance.items}
      />
      <FaqSection />
      <CtaBand {...closingCta} />
    </>
  )
}
