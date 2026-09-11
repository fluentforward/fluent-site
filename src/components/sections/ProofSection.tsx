import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { proofPacks, proofSection } from '@/content/proof'

import { ProofCarousel } from './ProofCarousel'

export function ProofSection() {
  return (
    <Section id="proof" tone="muted" border>
      <Reveal className="max-w-2xl">
        <Eyebrow>{proofSection.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {proofSection.heading}
        </Heading>
        <Lede className="mt-8">{proofSection.lede}</Lede>
      </Reveal>

      <Reveal delay={100}>
        <ProofCarousel packs={proofPacks} />
      </Reveal>
    </Section>
  )
}
