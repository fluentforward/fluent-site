import { type Metadata } from 'next'

import { HomeThreeStepsSection } from '@/components/sections/home/HomeThreeStepsSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  closingCta,
  faq,
  faqAnswerText,
  hero,
  clientCapacityStepsLink,
  meta,
  reassurance,
  structuredServiceType,
  whenBuild,
} from '@/content/how-it-works'
import { site } from '@/content/site'

const { title, description } = meta

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/how-it-works' },
  openGraph: { title, description, url: '/how-it-works' },
  twitter: { title, description },
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: faqAnswerText(item.answer) },
  })),
}

const serviceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  alternateName: site.name,
  url: `${site.url}/how-it-works`,
  description,
  areaServed: 'GB',
  serviceType: structuredServiceType,
}

export default function HowItWorks() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lede={hero.lede}
      />
      <HomeThreeStepsSection />
      <Section tone="paper" size="compact" border>
        <Reveal className="max-w-prose text-[1.0625rem] leading-[1.72] text-slate">
          {clientCapacityStepsLink.before}
          <ArrowLink href={clientCapacityStepsLink.link.href}>
            {clientCapacityStepsLink.link.label}
          </ArrowLink>
          {clientCapacityStepsLink.after}
        </Reveal>
      </Section>
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
