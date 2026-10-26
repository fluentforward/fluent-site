import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ProofCarousel } from '@/components/sections/ProofCarousel'
import { proofPacksHome, proofSection } from '@/content/proof'

export function HomeProofSection() {
  return (
    <Section id="proof" tone="paper" border>
      <Reveal className="max-w-3xl">
        <Eyebrow>{proofSection.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">{proofSection.heading}</Heading>
        <Lede className="mt-8">{proofSection.lede}</Lede>
      </Reveal>

      <Reveal delay={100}>
        <ProofCarousel packs={proofPacksHome} />
      </Reveal>
    </Section>
  )
}
