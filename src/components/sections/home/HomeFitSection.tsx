import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { fit } from '@/content/home'

export function HomeFitSection() {
  return (
    <Section tone="paper" border>
      <Reveal className="max-w-3xl">
        <Heading as="h2">{fit.builtForHeading}</Heading>
        <Lede className="mt-8">{fit.builtFor}</Lede>

        <Heading as="h3" size="sub" className="mt-16">
          {fit.lineHeading}
        </Heading>
        <p className="mt-6 font-display text-[1.0625rem] font-medium tracking-[-0.01em] text-ink">
          {fit.notForHeading}
        </p>
        <ul className="mt-8 space-y-4">
          {fit.notFor.map((item) => (
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
        <p className="mt-12 text-[1.0625rem] leading-[1.72] text-slate">
          {fit.auditLine}
        </p>
      </Reveal>
    </Section>
  )
}
