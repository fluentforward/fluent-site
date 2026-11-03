import { type Metadata } from 'next'

import { MarketingAttributedAnchor } from '@/components/ui/attributed-href'
import { CalInline } from '@/components/ui/CalInline'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { scoreCta } from '@/content/board'
import { site } from '@/content/site'

const description =
  'Reserved for webinar attendees. Book your Constraint review call. Thirty minutes to lock the binding Offers, Demand or Delivery lever and agree what happens next.'

export const metadata: Metadata = {
  title: 'Book your Constraint review call',
  description,
  alternates: { canonical: '/review' },
  openGraph: {
    title: 'Book your Constraint review call',
    description,
    url: '/review',
  },
  twitter: { title: 'Book your Constraint review call', description },
}

const expectations = [
  'You already saw the Profit Engine on the webinar. This call applies it to your firm.',
  'Thirty minutes. Conversation, not a deck replay and not a pitch.',
  'We name which of Offers, Demand or Delivery is binding you now and what fixing it would take with the team you have.',
  'You leave with a straight read on fit and the next move, including when the answer is no.',
  'No follow-up sequence, and nothing added to a mailing list.',
]

export default function Review() {
  return (
    <>
      <Section tone="paper" className="hero-ambient pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal delay={120} className="order-1 lg:order-2">
            <CalInline />
          </Reveal>

          <Reveal className="order-2 lg:order-1">
            <Eyebrow>Special access · Webinar</Eyebrow>
            <Heading as="h1" size="display-sm" className="mt-8">
              You&apos;re on the list. Book your Constraint review call.
            </Heading>
            <Lede className="mt-8 max-w-prose">
              You attended. This is your reserved next step. Pick a time in the
              calendar. We use the call to lock the binding lever in Offers,
              Demand or Delivery and agree what happens next for your firm. If
              nothing on the calendar works, email{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline underline-offset-4 transition-colors duration-300 hover:text-steel"
              >
                {site.email}
              </a>
              .
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

            <p className="mt-10 max-w-prose text-sm leading-relaxed text-mist">
              After you book, the{' '}
              <MarketingAttributedAnchor
                href={scoreCta.href}
                className="text-slate underline underline-offset-4 transition-colors duration-300 hover:text-ink"
              >
                Profit Constraint Score
              </MarketingAttributedAnchor>{' '}
              takes about three minutes if you want a head start.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
