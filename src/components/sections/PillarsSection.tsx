import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { pillars } from '@/content/board'

export function PillarsSection() {
  return (
    <Section tone="paper" border>
      <Reveal className="max-w-2xl">
        <Eyebrow>{pillars.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {pillars.heading}
        </Heading>
        <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
          {pillars.stagesLine}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.names.map((name) => (
            <li
              key={name}
              className="rounded-card border border-line bg-paper p-8 text-center font-display text-[1.25rem] font-medium tracking-[-0.02em] text-ink shadow-card card-lift md:p-9"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
