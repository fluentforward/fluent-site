import { type Metadata } from 'next'

import { OptionsCompareSection } from '@/components/sections/OptionsCompareSection'
import { OptionsFooterStrip } from '@/components/sections/OptionsFooterStrip'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  choose,
  cta,
  hero,
  howTheyFit,
  meta,
} from '@/content/options'

export const metadata: Metadata = {
  title: { absolute: 'Three options | FluentForward' },
  description: meta.description,
  alternates: { canonical: '/options' },
  openGraph: {
    title: 'Three options | FluentForward',
    description: meta.description,
    url: '/options',
  },
  twitter: {
    title: 'Three options | FluentForward',
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

export default function OptionsPage() {
  return (
    <>
      <Section tone="paper" className="hero-ambient pt-14 pb-12 md:pt-20 md:pb-16">
        <Reveal className="max-w-3xl">
          <Heading as="h1" size="display-sm">
            {hero.heading}
          </Heading>
          <Lede className="mt-6 max-w-prose md:mt-7">{hero.deck}</Lede>
        </Reveal>
      </Section>

      <OptionsCompareSection />

      <Section tone="paper" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{howTheyFit.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {howTheyFit.body}
          </p>
        </Reveal>
      </Section>

      <Section tone="muted" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{choose.heading}</Heading>
          <BulletList items={choose.items} />
        </Reveal>
      </Section>

      <Section tone="ink" size="default">
        <Reveal className="max-w-2xl">
          <Heading as="h2" size="display-sm" tone="dark">
            {cta.heading}
          </Heading>
          <p className="mt-8 text-lede text-mist">{cta.body}</p>
          <p className="mt-10">
            <a
              href={`mailto:${cta.email}`}
              className="text-lede text-mist underline underline-offset-4 transition-colors duration-300 hover:text-paper"
            >
              {cta.email}
            </a>
          </p>
        </Reveal>
      </Section>

      <OptionsFooterStrip />
    </>
  )
}
