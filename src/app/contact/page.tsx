import { type Metadata } from 'next'

import { CalInline } from '@/components/ui/CalInline'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { site } from '@/content/site'

const description =
  'Book a thirty minute call with Matt Todd to work out whether an AI opportunity audit would find anything worth acting on in your business.'

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
  'You leave with a straight answer on whether an audit is worth doing, including if that answer is no.',
  'No follow-up sequence, and nothing added to a mailing list.',
]

export default function Contact() {
  return (
    <>
      <Section tone="paper" className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Book a call</Eyebrow>
            <Heading as="h1" size="display-sm" className="mt-6">
              Straight conversation, no obligation.
            </Heading>
            <Lede className="mt-6">
              Pick a time that suits you. If nothing on the calendar works, or
              you would rather write first, email{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline underline-offset-4 transition-colors hover:text-steel"
              >
                {site.email}
              </a>{' '}
              and it will reach me directly.
            </Lede>

            <ul className="mt-10 border-t border-line">
              {expectations.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-slate"
                >
                  <span aria-hidden="true" className="shrink-0 text-steel">
                    &mdash;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <CalInline />
          </Reveal>
        </div>
      </Section>

      <div className="border-t border-line bg-paper-2">
        <Container className="py-12">
          <p className="max-w-2xl text-sm leading-relaxed text-slate">
            The calendar above is provided by Cal.com and loads in an embedded
            frame, which may set cookies of its own. Nothing on this site tracks
            you, and the details you enter go only to us and to Cal.com in order
            to create the booking.
          </p>
        </Container>
      </div>
    </>
  )
}
