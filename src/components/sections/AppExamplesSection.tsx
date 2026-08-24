import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { appExamples } from '@/content/home'

export function AppExamplesSection() {
  return (
    <Section tone="paper">
      <Reveal className="max-w-2xl">
        <Heading as="h2">{appExamples.heading}</Heading>
        <Lede className="mt-6">{appExamples.lede}</Lede>
      </Reveal>

      <dl className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
        {appExamples.examples.map((example, index) => (
          <Reveal
            key={example.name}
            delay={index * 70}
            className="bg-paper p-7 md:p-8"
          >
            <dt className="font-display text-[1.0625rem] font-medium text-ink">
              {example.name}
            </dt>
            <dd className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
              {example.description}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
