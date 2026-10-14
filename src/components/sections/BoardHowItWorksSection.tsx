import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { howBoardWorks } from '@/content/board'

export function BoardHowItWorksSection({
  tone = 'muted',
  showMembership = true,
}: {
  tone?: 'paper' | 'muted'
  showMembership?: boolean
}) {
  return (
    <Section tone={tone} border id="how-the-board-works">
      <Reveal className="max-w-3xl">
        <Eyebrow>{howBoardWorks.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {howBoardWorks.heading}
        </Heading>
        <Lede className="mt-8">{howBoardWorks.lede}</Lede>
      </Reveal>

      <ol className="mt-16 space-y-0 border-t border-line">
        {howBoardWorks.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 60}>
            <li className="grid gap-4 border-b border-line py-10 md:grid-cols-[4rem_1fr] md:gap-10 md:py-12">
              <span className="font-mono text-sm tracking-wide text-mist">{step.index}</span>
              <div>
                <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-prose text-[0.9375rem] leading-[1.72] text-slate">
                  {step.body}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      {showMembership ? (
        <Reveal delay={120} className="mt-16 max-w-3xl">
          <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
            {howBoardWorks.membership.heading}
          </h3>
          <ul className="mt-6 space-y-4">
            {howBoardWorks.membership.items.map((item) => (
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
        </Reveal>
      ) : null}
    </Section>
  )
}
