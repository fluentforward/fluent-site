import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { problem } from '@/content/home'

export function ProblemSection() {
  return (
    <Section tone="muted">
      <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow className="lg:sticky lg:top-32">{problem.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100} className="max-w-prose">
          <Heading as="h2">{problem.heading}</Heading>
          <div className="mt-10 space-y-7">
            {problem.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1.0625rem] leading-[1.72] text-slate"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-12 border-l-2 border-steel pl-7 text-[1.0625rem] leading-[1.72] text-ink">
            {problem.closing}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
