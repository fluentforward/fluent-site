import { type Metadata } from 'next'

import { CtaBand } from '@/components/sections/CtaBand'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  closingCta,
  faq,
  faqAnswerText,
  howItWorksExplainer,
  howItWorksPageMeta,
  reassurance,
  whenBuild,
} from '@/content/how-it-works'
import { site } from '@/content/site'

const { title, description } = howItWorksPageMeta

export const metadata: Metadata = {
  title: { absolute: title },
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  alternateName: site.name,
  url: `${site.url}/how-it-works`,
  description,
  areaServed: 'GB',
  serviceType: 'Profit Engine advisory and implementation for services firms',
}

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        eyebrow={howItWorksExplainer.eyebrow}
        heading={howItWorksExplainer.heading}
        lede={howItWorksExplainer.lede}
      />

      <Section tone="muted" border id="how-it-works-detail" size="compact">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {howItWorksExplainer.blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 60}>
              <article>
                <h2 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                  {block.title}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">{block.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper" border id="when-you-build" size="compact">
        <Reveal className="max-w-2xl">
          <Eyebrow>{whenBuild.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-6">
            {whenBuild.heading}
          </Heading>
          <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">{whenBuild.body}</p>
        </Reveal>
      </Section>

      <Section tone="muted" border id="commercial-terms" size="compact">
        <Reveal className="max-w-3xl">
          <Eyebrow>{reassurance.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-6">
            {reassurance.heading}
          </Heading>
        </Reveal>
        <ul className="mt-12 space-y-6">
          {reassurance.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <li className="border-t border-line pt-6 first:border-t-0 first:pt-0 md:flex md:gap-10">
                <h3 className="max-w-[12rem] shrink-0 font-display text-[1rem] font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-prose text-[0.9375rem] leading-[1.72] text-slate md:mt-0">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FaqSection content={faq} size="compact" />

      <CtaBand
        {...closingCta}
        primary={closingCta.primary}
        secondary={closingCta.secondary}
      />
    </>
  )
}
