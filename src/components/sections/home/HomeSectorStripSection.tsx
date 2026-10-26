import { Card } from '@/components/ui/Card'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { sectorStrip } from '@/content/home'

export function HomeSectorStripSection() {
  return (
    <Section tone="paper" border>
      <Reveal className="max-w-3xl">
        <Eyebrow>{sectorStrip.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">{sectorStrip.heading}</Heading>
        <Lede className="mt-8">{sectorStrip.lede}</Lede>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {sectorStrip.chips.map((chip, index) => (
          <Reveal key={chip.label} delay={index * 80}>
            <Card className="h-full">
              <p className="font-mono text-label uppercase text-mist">{chip.label}</p>
              <p className="mt-5 text-[1.0625rem] leading-[1.72] text-ink">{chip.line}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
