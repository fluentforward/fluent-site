import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { faq } from '@/content/how-it-works'

export function FaqSection() {
  return (
    <Section tone="paper" id="faq">
      <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <Heading as="h2" size="sub" className="mt-5">
              {faq.heading}
            </Heading>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="border-b border-line">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="group border-t border-line"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[1.0625rem] font-medium text-ink">
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-lg leading-none text-mist transition-transform duration-200 group-open:rotate-45 group-hover:text-ink"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-slate">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
