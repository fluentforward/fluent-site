import { type Metadata } from 'next'

import { CtaBand } from '@/components/sections/CtaBand'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { auditCta, reviewCallCta } from '@/content/board'
import {
  closingCta,
  faq,
  faqAnswerText,
  reassurance,
  whenBuild,
} from '@/content/how-it-works'
import {
  implementationMenu,
  waysWeWorkHub,
  waysWeWorkMeta,
  waysWeWorkModeOutcome,
  waysWeWorkProcessStrip,
  waysWeWorkRoutes,
  waysWeWorkStartingPoints,
  waysWeWorkStructuredServiceType,
} from '@/content/routes'
import { site } from '@/content/site'

const { title, description } = waysWeWorkMeta

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/ways-we-work' },
  openGraph: { title, description, url: '/ways-we-work' },
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
  url: `${site.url}/ways-we-work`,
  description,
  areaServed: 'GB',
  serviceType: waysWeWorkStructuredServiceType,
}

export default function WaysWeWorkPage() {
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
        eyebrow={waysWeWorkHub.eyebrow}
        heading={waysWeWorkHub.heading}
        lede={waysWeWorkHub.lede}
      />

      <Section tone="muted" border id="starting-points" size="compact">
        <Reveal className="max-w-3xl">
          <Eyebrow>{waysWeWorkStartingPoints.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-6">
            {waysWeWorkStartingPoints.heading}
          </Heading>
          <Lede className="mt-6">{waysWeWorkStartingPoints.lede}</Lede>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          <Reveal delay={60}>
            <Card className="flex h-full flex-col p-8 md:p-9">
              <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {waysWeWorkStartingPoints.firstAiMove.title}
              </h3>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.72] text-slate">
                {waysWeWorkStartingPoints.firstAiMove.body}
              </p>
              <div className="mt-8">
                <Button href={auditCta.href}>{auditCta.label}</Button>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  {auditCta.hint}
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card className="flex h-full flex-col p-8 md:p-9">
              <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {waysWeWorkStartingPoints.reviewCall.title}
              </h3>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.72] text-slate">
                {waysWeWorkStartingPoints.reviewCall.body}
              </p>
              <div className="mt-8">
                <Button href={reviewCallCta.href} variant="secondary">
                  {reviewCallCta.label}
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {waysWeWorkRoutes.map((route, routeIndex) => (
        <Section
          key={route.id}
          id={route.id}
          tone={routeIndex % 2 === 0 ? 'paper' : 'muted'}
          border
          size="compact"
        >
          <Reveal className="max-w-3xl">
            <Eyebrow>{route.name}</Eyebrow>
            <Heading as="h2" className="mt-6">
              {route.summary}
            </Heading>
            <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">
              {route.body}
            </p>
            <p className="mt-6 text-[0.9375rem] font-medium leading-[1.72] text-ink">
              {waysWeWorkModeOutcome}
            </p>
            {route.bullets ? (
              <ul className="mt-6 space-y-3">
                {route.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.9375rem] leading-[1.72] text-slate"
                  >
                    <span aria-hidden="true" className="shrink-0 text-steel">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {route.link ? (
              <div className="mt-8">
                <ArrowLink href={route.link.href}>{route.link.label}</ArrowLink>
              </div>
            ) : null}
          </Reveal>
        </Section>
      ))}

      <Section tone="paper" border id="client-capacity-process" size="compact">
        <Reveal className="max-w-3xl">
          <Eyebrow>{waysWeWorkProcessStrip.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-6">
            {waysWeWorkProcessStrip.heading}
          </Heading>
        </Reveal>
        <ol className="mt-12 space-y-0 border-t border-line">
          {waysWeWorkProcessStrip.steps.map((step, index) => (
            <Reveal key={step} delay={index * 60}>
              <li className="border-b border-line py-6 md:py-8">
                <p className="max-w-prose text-[0.9375rem] leading-[1.72] text-slate">
                  {step}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={120} className="mt-8 max-w-prose">
          <Lede>{waysWeWorkProcessStrip.choiceLine}</Lede>
        </Reveal>
        <Reveal delay={160} className="mt-6 max-w-prose">
          <p className="text-[1.0625rem] leading-[1.72] text-slate">
            {waysWeWorkProcessStrip.compoundingLine}
          </p>
        </Reveal>
      </Section>

      <Section tone="muted" border id="implementation-menu" size="compact">
        <Reveal className="max-w-3xl">
          <Eyebrow>{waysWeWorkHub.implementationEyebrow}</Eyebrow>
          <Heading as="h2" className="mt-6">
            {waysWeWorkHub.implementationHeading}
          </Heading>
          <Lede className="mt-6">{waysWeWorkHub.implementationLede}</Lede>
        </Reveal>

        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {implementationMenu.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 90}
              className="rounded-card border border-line bg-paper p-8 md:p-9 card-lift shadow-card"
            >
              <dt className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {item.title}
              </dt>
              <dd className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
                {item.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="paper" border size="compact">
        <Reveal className="max-w-2xl">
          <Eyebrow>{whenBuild.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-6">
            {whenBuild.heading}
          </Heading>
          <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">
            {whenBuild.body}
          </p>
        </Reveal>
      </Section>

      <DefinitionGrid
        tone="muted"
        eyebrow={reassurance.eyebrow}
        heading={reassurance.heading}
        items={reassurance.items}
        size="compact"
        dense
      />

      <FaqSection size="compact" />

      <CtaBand
        {...closingCta}
        primary={closingCta.primary}
        secondary={closingCta.secondary}
      />
    </>
  )
}
