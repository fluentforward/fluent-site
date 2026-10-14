import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { auditCta } from '@/content/board'
import { outcomes } from '@/content/home'

export function HomeOutcomesSection() {
  return (
    <Section tone="muted" border>
      <Reveal className="max-w-2xl">
        <Heading as="h2">{outcomes.heading}</Heading>
        <ul className="mt-12 space-y-5">
          {outcomes.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-l-2 border-steel pl-6 text-[1.0625rem] leading-[1.72] text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Button href={auditCta.href}>{auditCta.label}</Button>
          <p className="mt-4 text-sm leading-relaxed text-slate">{auditCta.hint}</p>
        </div>
      </Reveal>
    </Section>
  )
}
