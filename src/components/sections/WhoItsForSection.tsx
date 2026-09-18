import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { whoItsFor } from '@/content/home'

function FitList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-card border border-line bg-paper p-8 md:p-9">
      <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[0.9375rem] leading-[1.72] text-slate"
          >
            <span aria-hidden="true" className="shrink-0 text-steel">
              &bull;
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function WhoItsForSection() {
  return (
    <Section tone="paper" border>
      <Reveal className="max-w-2xl">
        <Eyebrow>{whoItsFor.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {whoItsFor.heading}
        </Heading>
        <Lede className="mt-8">{whoItsFor.lede}</Lede>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal delay={80}>
          <FitList title="Right fit" items={whoItsFor.rightFit} />
        </Reveal>
        <Reveal delay={160}>
          <FitList title="Wrong fit" items={whoItsFor.wrongFit} />
        </Reveal>
      </div>
    </Section>
  )
}
