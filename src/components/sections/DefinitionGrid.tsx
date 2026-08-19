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
        <Heading as="h2" className="mt-6">
          {heading}
        </Heading>
        {lede && <Lede className="mt-6">{lede}</Lede>}
      </Reveal>

      <dl className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 70}
            className="bg-paper p-7 md:p-8"
          >
            <dt className="font-display text-[1.0625rem] font-medium text-ink">
              {item.title}
            </dt>
            <dd className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
              {item.body}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
