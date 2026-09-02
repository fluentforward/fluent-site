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

export const metadata: Metadata = {
  title: 'Practice',
  description: hero.lede,
  alternates: { canonical: '/about' },
  openGraph: { title: 'Practice', description: hero.lede, url: '/about' },
  twitter: { title: 'Practice', description: hero.lede },
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lede={hero.lede}
      />

      <Section tone="muted" border>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow className="lg:sticky lg:top-28">{story.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <div className="space-y-6 border-l border-line pl-8 md:pl-10">
              {story.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[1.0625rem] leading-relaxed text-slate"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <DefinitionGrid
        eyebrow={background.eyebrow}
        heading={background.heading}
        items={background.items}
        id="background"
      />

      <DefinitionGrid
        tone="muted"
        eyebrow={principles.eyebrow}
        heading={principles.heading}
        items={principles.items}
        id="principles"
      />

      <CtaBand {...closingCta} />
    </>
  )
}
