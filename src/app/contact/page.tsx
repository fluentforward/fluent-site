import { type Metadata } from 'next'

import { CalInline } from '@/components/ui/CalInline'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { auditCta } from '@/content/board'
import { site } from '@/content/site'

const description =
  'Book a thirty minute call with Matt Todd to work out whether the Leverage Board fits your firm and where to start. Or take the Growth Without Headcount Audit first.'

export const metadata: Metadata = {
  title: 'Book a call',
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Book a call', description, url: '/contact' },
  twitter: { title: 'Book a call', description },
}

const expectations = [
  'Thirty minutes, and it is a conversation rather than a pitch. No deck.',
  'We talk about where your team\u2019s time actually goes and what you have already tried.',
  'You leave with a straight answer on whether the Leverage Board fits and where to start, including if that answer is no.',
  `Prefer to start online? ${auditCta.label} takes about ten minutes.`,
  'No follow-up sequence, and nothing added to a mailing list.',
]

export default function Contact() {
  return (
    <>
      <Section tone="paper" className="hero-ambient pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Book a call</Eyebrow>
            <Heading as="h1" size="display-sm" className="mt-8">
              Straight conversation, no obligation.
            </Heading>
            <Lede className="mt-8 max-w-prose">
              Pick a time that suits you. If nothing on the calendar works, or
              you would rather write first, email{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline underline-offset-4 transition-colors duration-300 hover:text-steel"
              >
                {site.email}
              </a>{' '}
              or{' '}
              <a
                href={auditCta.href}
                className="text-ink underline underline-offset-4 transition-colors duration-300 hover:text-steel"
              >
                take the Audit
              </a>{' '}
              first.
            </Lede>

            <ul className="mt-12 border-t border-line">
              {expectations.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-line py-5 text-[0.9375rem] leading-[1.72] text-slate"
                >
                  <span aria-hidden="true" className="shrink-0 text-steel">
                    &bull;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <CalInline />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
