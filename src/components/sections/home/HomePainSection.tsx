import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { pain } from '@/content/home'

export function HomePainSection() {
  return (
    <Section tone="muted" border>
      <Reveal className="max-w-3xl">
        <Heading as="h2">{pain.heading}</Heading>
        <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">{pain.body}</p>
      </Reveal>
    </Section>
  )
}
