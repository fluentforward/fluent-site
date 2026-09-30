import { type Metadata } from 'next'

import { CtaBand } from '@/components/sections/CtaBand'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { LeverageBoardCloseStrip } from '@/components/sections/LeverageBoardCloseStrip'
import { PageHero } from '@/components/sections/PageHero'
import { ReleaseEngineSection } from '@/components/sections/ReleaseEngineSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  closingCta,
  hero,
  ladder,
  meta,
  notList,
  problem,
  summit,
  whatYouGet,
  whoFor,
} from '@/content/leverage-board'

export const metadata: Metadata = {
  title: { absolute: 'Leverage Board | FluentForward' },
  description: meta.description,
  alternates: { canonical: '/leverage-board' },
  openGraph: {
    title: 'Leverage Board | FluentForward',
    description: meta.description,
    url: '/leverage-board',
  },
  twitter: {
    title: 'Leverage Board | FluentForward',
    description: meta.description,
  },
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
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
  )
}

export default function LeverageBoardPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lede={hero.lede}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-9">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </PageHero>

      <Section tone="muted" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{problem.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {problem.body}
          </p>
        </Reveal>
      </Section>

      <DefinitionGrid
        heading={whatYouGet.heading}
        lede={whatYouGet.intro}
        items={whatYouGet.items}
        tone="paper"
        id="what-you-get"
      />
      <LeverageBoardCloseStrip text={whatYouGet.closeStrip} />

      <Section tone="muted" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{summit.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {summit.body}
          </p>
        </Reveal>
      </Section>

      <ReleaseEngineSection />

      <Section tone="paper" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{whoFor.heading}</Heading>
          <BulletList items={whoFor.items} />
        </Reveal>
      </Section>

      <Section tone="muted" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{ladder.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {ladder.body}
          </p>
          <div className="mt-8">
            <ArrowLink href={ladder.link.href}>{ladder.link.label}</ArrowLink>
          </div>
        </Reveal>
      </Section>

      <Section tone="paper" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{notList.heading}</Heading>
          <BulletList items={notList.items} />
        </Reveal>
      </Section>

      <CtaBand {...closingCta} />
    </>
  )
}
