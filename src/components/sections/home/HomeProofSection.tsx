import { Eyebrow } from '@/components/ui/Eyebrow'
import { AccentPhrase, Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ProofCarousel } from '@/components/sections/ProofCarousel'
import { proofPacksHome, proofSection } from '@/content/proof'

export function HomeProofSection({ size = 'default' }: { size?: 'default' | 'compact' }) {
  return (
    <Section id="proof" tone="paper" border size={size}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
        <Reveal>
          <Heading as="h2" className="max-w-[14ch]">
            Judgement before <AccentPhrase>build.</AccentPhrase>
          </Heading>
        </Reveal>
        <Reveal delay={80}>
          <Lede className="max-w-prose">{proofSection.lede}</Lede>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <ProofCarousel
          packs={proofPacksHome}
          offset={size === 'compact' ? 'compact' : 'default'}
        />
      </Reveal>
    </Section>
  )
}
