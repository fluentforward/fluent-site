import { type Metadata } from 'next'

import { BoardDeveloperSection } from '@/components/sections/BoardDeveloperSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { HomeClosingSection } from '@/components/sections/home/HomeClosingSection'
import { HomeProofSection } from '@/components/sections/home/HomeProofSection'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { PageHero } from '@/components/sections/PageHero'
import { ResearchProofStrip } from '@/components/sections/ResearchProofStrip'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ArrowLink } from '@/components/ui/ArrowLink'
import {
  altRoute,
  faq,
  fitLine,
  gartnerProof,
  governance,
  ifYouBeats,
  hero,
  meta,
  modes,
  oneSystem,
  process,
  servicesImpact,
  shipGateDelivery,
  structuredServiceType,
} from '@/content/client-capacity'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: '/client-capacity' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: '/client-capacity',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  alternateName: site.name,
  url: `${site.url}/client-capacity`,
  description: meta.description,
  areaServed: 'GB',
  serviceType: structuredServiceType,
}

export default function ClientCapacityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero eyebrow={hero.eyebrow} heading={hero.heading} lede={hero.lede} />

      <DefinitionGrid
        eyebrow={ifYouBeats.eyebrow}
        heading={ifYouBeats.heading}
        lede={ifYouBeats.lede}
        items={ifYouBeats.items}
        tone="muted"
        id="offers-demand-delivery"
        size="compact"
        dense
      />

      <Section tone="paper" border size="compact">
        <Reveal className="max-w-2xl">
          <Heading as="h2">{oneSystem.heading}</Heading>
          <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">
            {oneSystem.body}
          </p>
          <Heading as="h2" className="mt-10">
            {servicesImpact.heading}
          </Heading>
          <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">
            {servicesImpact.body}
          </p>
        </Reveal>
      </Section>

      <Section tone="paper" size="compact" border>
        <Reveal className="max-w-prose text-[0.9375rem] leading-[1.72] text-slate">
          {altRoute.before}
          <ArrowLink href={altRoute.href}>{altRoute.linkLabel}</ArrowLink>
          {altRoute.after}
        </Reveal>
      </Section>

      {[modes.partnership, modes.delivery].map((mode, modeIndex) => (
        <Section
          key={mode.id}
          id={mode.id}
          tone={modeIndex % 2 === 0 ? 'muted' : 'paper'}
          border
          size="compact"
        >
          <Reveal className="max-w-3xl">
            <Eyebrow>{mode.name}</Eyebrow>
            <Heading as="h2" className="mt-6">
              {mode.summary}
            </Heading>
            <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">
              {mode.body}
            </p>
            <ul className="mt-6 space-y-3">
              {mode.bullets.map((item) => (
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
          </Reveal>
        </Section>
      ))}

      <Section tone="paper" border id="how-client-capacity-runs" size="compact">
        <Reveal className="max-w-3xl">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-6">
            {process.heading}
          </Heading>
        </Reveal>
        <ol className="mt-12 space-y-0 border-t border-line">
          {process.steps.map((step, index) => (
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
          <Lede>{process.choiceLine}</Lede>
        </Reveal>
        <Reveal delay={160} className="mt-6 max-w-prose">
          <p className="text-[1.0625rem] leading-[1.72] text-slate">
            {process.compoundingLine}
          </p>
        </Reveal>
      </Section>

      <DefinitionGrid
        heading={governance.heading}
        lede={governance.intro}
        items={governance.items}
        tone="muted"
        id="governance"
        size="compact"
        dense
      />

      <Section tone="paper" border size="compact">
        <Reveal className="max-w-2xl">
          <Heading as="h2">{shipGateDelivery.heading}</Heading>
          <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">
            {shipGateDelivery.body}
          </p>
        </Reveal>
      </Section>

      <BoardDeveloperSection />

      <ResearchProofStrip content={gartnerProof} tone="paper" border size="compact" />

      <HomeProofSection size="compact" />

      <FaqSection content={faq} size="compact" />

      <HomeClosingSection fitLine={fitLine} />
    </>
  )
}
