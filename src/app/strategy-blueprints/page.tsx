import { type Metadata } from 'next'

import { BlueprintCard } from '@/components/sections/BlueprintCard'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { blueprintsPage, strategyBlueprints } from '@/content/blueprints'

const description = blueprintsPage.lede

export const metadata: Metadata = {
  title: 'Strategy blueprints',
  description,
  alternates: { canonical: '/strategy-blueprints' },
  openGraph: {
    title: 'Strategy blueprints',
    description,
    url: '/strategy-blueprints',
  },
  twitter: { title: 'Strategy blueprints', description },
}

export default function StrategyBlueprintsPage() {
  return (
    <>
      <PageHero
        eyebrow={blueprintsPage.eyebrow}
        heading={blueprintsPage.heading}
        lede={blueprintsPage.lede}
      />
      <Section tone="muted" border>
        <ul className="grid gap-8 lg:grid-cols-2">
          {strategyBlueprints.map((blueprint, index) => (
            <Reveal as="li" key={blueprint.slug} delay={index * 80}>
              <BlueprintCard blueprint={blueprint} />
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  )
}
