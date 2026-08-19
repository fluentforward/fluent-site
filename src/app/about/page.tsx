import { type Metadata } from 'next'

import { CtaBand } from '@/components/sections/CtaBand'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { PageHero } from '@/components/sections/PageHero'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  background,
  closingCta,
  hero,
  principles,
  story,
} from '@/content/about'

const description =
  'FluentForward is a one-person AI practice run by Matt Todd. Twenty years building and scaling systems, still writing the code, and the same person advises and delivers.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: 'About', description, url: '/about' },
  twitter: { title: 'About', description },
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lede={hero.lede}
      />

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow className="lg:sticky lg:top-28">{story.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80} className="max-w-2xl space-y-6">
            {story.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1.0625rem] leading-relaxed text-slate"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      <DefinitionGrid
        eyebrow={background.eyebrow}
        heading={background.heading}
        items={background.items}
      />

      <DefinitionGrid
        tone="muted"
        eyebrow={principles.eyebrow}
        heading={principles.heading}
        items={principles.items}
      />

      <CtaBand {...closingCta} />
    </>
  )
}
