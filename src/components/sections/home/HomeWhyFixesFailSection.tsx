import { Heading } from '@/components/ui/Heading'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ResearchProofStrip } from '@/components/sections/ResearchProofStrip'
import { whyFixesFail } from '@/content/home'

export function HomeWhyFixesFailSection() {
  return (
    <>
      <Section tone="paper" border>
        <Reveal className="max-w-3xl">
          <Eyebrow>{whyFixesFail.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-8">
            {whyFixesFail.heading}
          </Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {whyFixesFail.intro}
          </p>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {whyFixesFail.body}
          </p>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {whyFixesFail.isolation}
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
