import Link from 'next/link'

import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  faq as defaultFaq,
  type FaqAnswer,
} from '@/content/how-it-works'

type FaqContent = {
  eyebrow: string
  heading: string
  items: readonly { question: string; answer: FaqAnswer }[]
}

function FaqAnswerBody({ answer }: { answer: FaqAnswer }) {
  if (typeof answer === 'string') {
    return answer
  }
  return (
    <>
      {answer.before}
      <Link
        href={answer.link.href}
        className="font-medium text-ink underline decoration-line-strong underline-offset-[5px] hover:text-steel"
      >
        {answer.link.label}
      </Link>
      {answer.after}
    </>
  )
}

export function FaqSection({
  content = defaultFaq,
  size = 'default',
}: {
  content?: FaqContent
  size?: 'default' | 'compact'
}) {
  const faq = content
  return (
    <Section tone="paper" id="faq" size={size}>
      <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <Heading as="h2" size="sub" className="mt-6">
              {faq.heading}
            </Heading>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border-b border-line">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="group border-t border-line"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[1.0625rem] font-medium tracking-[-0.01em] text-ink">
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-lg leading-none text-mist transition-[transform,color] duration-300 group-open:rotate-45 group-hover:text-ink"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-prose pb-8 leading-[1.72] text-slate">
                  <FaqAnswerBody answer={item.answer} />
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
