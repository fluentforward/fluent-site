import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ResearchProofStrip } from '@/components/sections/ResearchProofStrip'
import { whyFixesFail } from '@/content/home'

export function HomeWhyFixesFailSection() {
  return (
    <>
      <Section tone="paper" border>
        <Reveal className="max-w-3xl">
          <Heading as="h2">{whyFixesFail.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {whyFixesFail.intro}
          </p>
        </Reveal>
      </Section>
      <ResearchProofStrip
        content={whyFixesFail.gartner}
        tone="muted"
        border
        headingAs="h3"
      />
    </>
  )
}
