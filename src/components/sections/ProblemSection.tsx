import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { problem } from '@/content/home'

export function ProblemSection() {
  return (
    <Section tone="muted">
      <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <Reveal>
          <Eyebrow className="lg:sticky lg:top-28">{problem.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80} className="max-w-2xl">
          <Heading as="h2">{problem.heading}</Heading>
          <div className="mt-8 space-y-6">
            {problem.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1.0625rem] leading-relaxed text-slate"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-steel pl-6 text-[1.0625rem] leading-relaxed text-ink">
            {problem.closing}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
