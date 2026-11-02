import { AccentPhrase, Heading } from '@/components/ui/Heading'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ResearchProofStrip } from '@/components/sections/ResearchProofStrip'
import { whyFixesFail } from '@/content/home'

export function HomeWhyFixesFailSection() {
  return (
    <>
      <Section tone="ink" border size="compact" className="relative overflow-hidden">
        <Reveal className="relative max-w-3xl">
          <Eyebrow tone="dark">{whyFixesFail.eyebrow}</Eyebrow>
          <Heading as="h2" tone="dark" className="mt-6">
            AI lives in the engine room.{' '}
            <AccentPhrase>Not on the label.</AccentPhrase>
          </Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-lede-dark">
            {whyFixesFail.intro}
          </p>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-lede-dark">
            {whyFixesFail.body}
          </p>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-lede-dark">
            {whyFixesFail.isolation}
          </p>
        </Reveal>
      </Section>
      <ResearchProofStrip
        content={whyFixesFail.gartner}
        tone="muted"
        border
        headingAs="h3"
        size="compact"
      />
    </>
  )
}
