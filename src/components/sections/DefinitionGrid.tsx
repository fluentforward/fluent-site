import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

/** Two-column grid of term/definition cards, separated by hairlines. */
export function DefinitionGrid({
  eyebrow,
  heading,
  lede,
  items,
  tone = 'paper',
  id,
}: {
  eyebrow: string
  heading: string
  lede?: string
  items: { title: string; body: string }[]
  tone?: 'paper' | 'muted'
  id?: string
}) {
  return (
    <Section tone={tone} id={id}>
      <Reveal className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {heading}
        </Heading>
        {lede && <Lede className="mt-8">{lede}</Lede>}
      </Reveal>

      <dl className="mt-20 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 90}
            className="rounded-card border border-line bg-paper p-8 md:p-9 card-lift shadow-card"
          >
            <dt className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
              {item.title}
            </dt>
            <dd className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
              {item.body}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
