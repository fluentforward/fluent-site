import { type Metadata } from 'next'

import { CaseStudyList } from '@/components/sections/CaseStudyList'
import { CtaBand } from '@/components/sections/CtaBand'
import { PageHero } from '@/components/sections/PageHero'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { caseStudies, closingCta, emptyState, hero } from '@/content/results'

const description =
  'Engagement outcomes from FluentForward, published as they complete: the process we mapped, the change we made, and what it produced.'

export const metadata: Metadata = {
  title: 'Results',
  description,
  alternates: { canonical: '/results' },
  openGraph: { title: 'Results', description, url: '/results' },
  twitter: { title: 'Results', description },
}

export default function Results() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lede={hero.lede}
      />

      {caseStudies.length > 0 ? (
        <CaseStudyList caseStudies={caseStudies} />
      ) : (
        <Section tone="muted">
          <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <Reveal>
              <Heading as="h2" size="sub" className="lg:sticky lg:top-28">
                {emptyState.heading}
              </Heading>
            </Reveal>
            <Reveal delay={80} className="max-w-2xl">
              <div className="space-y-6">
                {emptyState.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[1.0625rem] leading-relaxed text-slate"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 rounded-card border border-line bg-paper p-7 md:p-8">
                <p className="font-mono text-label text-mist uppercase">
                  {emptyState.interim.heading}
                </p>
                <p className="mt-3 leading-relaxed text-ink">
                  {emptyState.interim.body}
                </p>
                <div className="mt-6">
                  <ArrowLink href="/about">Read the background</ArrowLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      <CtaBand {...closingCta} />
    </>
  )
}
