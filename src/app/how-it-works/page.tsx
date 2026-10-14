import { type Metadata } from 'next'

import { BoardHowItWorksSection } from '@/components/sections/BoardHowItWorksSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  closingCta,
  faq,
  hero,
  reassurance,
  whenBuild,
} from '@/content/how-it-works'

const description =
  'How the Leverage Board works: the AI Readiness and Governance Audit, free Audit review call, quarter one strategy, quarterly re-score, Annual Summit and compounding membership. Optional build under Board oversight.'

export const metadata: Metadata = {
  title: 'How the Board works',
  description,
  alternates: { canonical: '/how-it-works' },
  openGraph: { title: 'How the Board works', description, url: '/how-it-works' },
  twitter: { title: 'How the Board works', description },
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
      <BoardHowItWorksSection tone="paper" showMembership={false} />
      <Section tone="muted" border>
        <Reveal className="max-w-2xl">
          <Eyebrow>{whenBuild.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-8">{whenBuild.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {whenBuild.body}
          </p>
        </Reveal>
      </Section>
      <DefinitionGrid
        tone="paper"
        eyebrow={reassurance.eyebrow}
        heading={reassurance.heading}
        items={reassurance.items}
      />
      <FaqSection />
      <CtaBand
        {...closingCta}
        primary={closingCta.primary}
        secondary={closingCta.secondary}
      />
    </>
  )
}
