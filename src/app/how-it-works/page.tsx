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
  'Phase one is a One-Month Interaction Engine Design Sprint. Phase two is Impact Build: a fixed-fee first release of about eight weeks. Phase three is Strategy and Build: grow the engine you own with senior strategy and ongoing development on a flat monthly fee. No hourly billing. Nothing rolls over automatically.'

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
