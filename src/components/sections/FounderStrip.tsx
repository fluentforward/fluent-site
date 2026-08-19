import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { founder } from '@/content/home'

export function FounderStrip() {
  return (
    <Section tone="muted" size="compact">
      <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>{founder.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80} className="max-w-2xl">
          <Heading as="h2" size="sub">
            {founder.heading}
          </Heading>
          {founder.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}
          <div className="mt-7">
            <ArrowLink href={founder.link.href}>{founder.link.label}</ArrowLink>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
