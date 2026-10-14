import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { howItWorks } from '@/content/home'

export function HomeThreeStepsSection() {
  return (
    <Section tone="muted" border id="how-it-works">
      <Reveal className="max-w-3xl">
        <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">{howItWorks.heading}</Heading>
      </Reveal>

      <ol className="mt-16 space-y-0 border-t border-line">
        {howItWorks.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 60}>
            <li className="border-b border-line py-10 md:py-12">
              <h3 className="max-w-[32ch] text-balance font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {step.title}
              </h3>
              <p className="mt-4 max-w-prose text-[0.9375rem] leading-[1.72] text-slate">
                {step.body}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120} className="mt-10 max-w-prose">
        <p className="text-[1.0625rem] leading-[1.72] text-ink">{howItWorks.closing}</p>
      </Reveal>
    </Section>
  )
}
