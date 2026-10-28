import { type Metadata } from 'next'

import { PageHero } from '@/components/sections/PageHero'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { auditCta } from '@/content/board'
import {
  implementationMenu,
  waysWeWorkHub,
  waysWeWorkMeta,
  waysWeWorkProcessStrip,
  waysWeWorkRoutes,
  waysWeWorkStructuredServiceType,
} from '@/content/routes'
import { site } from '@/content/site'
import { ArrowLink } from '@/components/ui/ArrowLink'

const { title, description } = waysWeWorkMeta

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/ways-we-work' },
  openGraph: { title, description, url: '/ways-we-work' },
  twitter: { title, description },
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

function AuditCtaBlock() {
  return (
    <div className="mt-10">
      <Button href={auditCta.href}>{auditCta.label}</Button>
      <p className="mt-4 text-sm leading-relaxed text-slate">{auditCta.hint}</p>
    </div>
  )
}

export default function WaysWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        eyebrow={waysWeWorkHub.eyebrow}
        heading={waysWeWorkHub.heading}
        lede={waysWeWorkHub.lede}
      />

      {waysWeWorkRoutes.map((route, routeIndex) => (
        <Section
          key={route.id}
          id={route.id}
          tone={routeIndex % 2 === 0 ? 'paper' : 'muted'}
          border
        >
          <Reveal className="max-w-3xl">
            <Eyebrow>{route.name}</Eyebrow>
            <Heading as="h2" className="mt-8">{route.summary}</Heading>
            <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
              {route.body}
            </p>
            {route.bullets ? (
              <ul className="mt-8 space-y-3">
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
            <AuditCtaBlock />
          </Reveal>
        </Section>
      ))}

      <Section tone="paper" border id="client-capacity-process">
        <Reveal className="max-w-3xl">
          <Eyebrow>{waysWeWorkProcessStrip.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-8">
            {waysWeWorkProcessStrip.heading}
          </Heading>
        </Reveal>
        <ol className="mt-16 space-y-0 border-t border-line">
          {waysWeWorkProcessStrip.steps.map((step, index) => (
            <Reveal key={step} delay={index * 60}>
              <li className="border-b border-line py-8 md:py-10">
                <p className="max-w-prose text-[0.9375rem] leading-[1.72] text-slate">
                  {step}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={120} className="mt-10 max-w-prose">
          <Lede>{waysWeWorkProcessStrip.choiceLine}</Lede>
        </Reveal>
      </Section>

      <Section tone="muted" border id="implementation-menu">
        <Reveal className="max-w-3xl">
          <Eyebrow>{waysWeWorkHub.implementationEyebrow}</Eyebrow>
          <Heading as="h2" className="mt-8">
            {waysWeWorkHub.implementationHeading}
          </Heading>
          <Lede className="mt-8">{waysWeWorkHub.implementationLede}</Lede>
        </Reveal>

        <dl className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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

        <Reveal delay={120} className="mt-12 max-w-3xl">
          <AuditCtaBlock />
        </Reveal>
      </Section>
    </>
  )
}
