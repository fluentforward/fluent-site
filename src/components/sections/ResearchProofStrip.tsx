import { ArrowLink } from '@/components/ui/ArrowLink'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

export type ResearchProofContent = {
  heading: string
  body: string
  attribution: string
  cta?: { label: string; href: string; newTab?: boolean }
}

export function ResearchProofStrip({
  content,
  tone = 'paper',
  border = true,
  headingAs = 'h2',
}: {
  content: ResearchProofContent
  tone?: 'paper' | 'muted'
  border?: boolean
  headingAs?: 'h2' | 'h3'
}) {
  return (
    <Section tone={tone} border={border}>
      <Reveal className="max-w-2xl">
        <Heading as={headingAs}>{content.heading}</Heading>
        <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
          {content.body}
        </p>
        <p className="mt-6 text-xs leading-relaxed text-mist">
          {content.attribution}
        </p>
        {content.cta ? (
          <div className="mt-8">
            <ArrowLink href={content.cta.href} newTab={content.cta.newTab}>
              {content.cta.label}
            </ArrowLink>
          </div>
        ) : null}
      </Reveal>
    </Section>
  )
}
