import Link from 'next/link'

import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  blueprintsHomeSection,
  strategyBlueprints,
} from '@/content/blueprints'

export function StrategyBlueprintsSection() {
  return (
    <Section id="strategy-blueprints" tone="paper" border>
      <Reveal className="max-w-2xl">
        <Eyebrow>{blueprintsHomeSection.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {blueprintsHomeSection.heading}
        </Heading>
        <Lede className="mt-8">{blueprintsHomeSection.lede}</Lede>
      </Reveal>

      <ul className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
        {strategyBlueprints.map((blueprint, index) => (
          <Reveal
            as="li"
            key={blueprint.slug}
            delay={index * 80}
            className="bg-paper p-8 md:p-9"
          >
            <Link
              href={blueprint.href}
              target="_blank"
              rel="noopener"
              className="group block"
            >
              <ul className="flex flex-wrap gap-x-3 gap-y-2">
                {blueprint.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-label uppercase text-mist"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <h3 className="mt-5 font-display text-[1.125rem] leading-snug tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-steel">
                {blueprint.title}
              </h3>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120} className="mt-12">
        <ArrowLink href={blueprintsHomeSection.link.href}>
          {blueprintsHomeSection.link.label}
        </ArrowLink>
      </Reveal>
    </Section>
  )
}
