import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { afterImpact } from '@/content/how-it-works'

export function AfterImpactSection() {
  return (
    <Section tone="ink" id="after-the-first-release" size="loose">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="dark">{afterImpact.eyebrow}</Eyebrow>
        <Heading as="h2" tone="dark" className="mt-8">
          {afterImpact.heading}
        </Heading>
        <p className="mt-8 text-lede leading-[1.72] text-mist">
          {afterImpact.body}
        </p>
      </Reveal>
    </Section>
  )
}
