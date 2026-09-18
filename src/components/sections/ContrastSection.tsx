import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { contrast } from '@/content/home'

export function ContrastSection() {
  return (
    <Section tone="muted">
      <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow className="lg:sticky lg:top-32">{contrast.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100} className="max-w-prose">
          <Heading as="h2">{contrast.heading}</Heading>
          <div className="mt-10 space-y-7">
            {contrast.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1.0625rem] leading-[1.72] text-slate"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
