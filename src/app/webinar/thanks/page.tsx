import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { MarketingAttributedAnchor } from '@/components/ui/attributed-href'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  webinarMeta,
  webinarSession,
  webinarThanks,
  webinarThanksPath,
} from '@/content/webinar'

export const metadata: Metadata = {
  title: 'You are in | Profit Engine webinar',
  description:
    'Registration confirmed for the FluentForward Profit Engine webinar. Demio sends your calendar invite and join link.',
  alternates: { canonical: webinarThanksPath },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'You are in | Profit Engine webinar',
    description: webinarMeta.description,
    url: webinarThanksPath,
  },
}

export default function WebinarThanksPage({
  searchParams,
}: {
  searchParams: { first?: string }
}) {
  const first = searchParams.first?.trim()
  const greeting = first ? `Thanks, ${first}.` : 'Thanks for registering.'

  return (
    <Section tone="paper" className="hero-ambient pt-20 pb-24 md:pt-32 md:pb-36">
      <div className="mb-12">
        <Link href="/" className="inline-block transition-opacity hover:opacity-85">
          <Image
            src="/brand/wordmark-on-paper.png"
            alt="FluentForward"
            width={220}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>
      </div>

      <Reveal className="max-w-2xl">
        <Eyebrow>{webinarThanks.eyebrow}</Eyebrow>
        <Heading as="h1" size="display-sm" className="mt-8">
          {webinarThanks.title}
        </Heading>
        <Lede className="mt-6">{greeting}</Lede>
        <p className="mt-8 max-w-prose text-[1.0625rem] leading-[1.72] text-slate">
          {webinarThanks.body}
        </p>
        <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
          {webinarThanks.whenLine}
        </p>
        <ul className="mt-10 border-t border-line">
          <li className="flex gap-3 border-b border-line py-5 text-[0.9375rem] leading-[1.72] text-slate">
            <span aria-hidden="true" className="shrink-0 text-steel">
              &bull;
            </span>
            Demio sends your confirmation email and calendar invite. Do not expect a join URL on this page.
          </li>
          <li className="flex gap-3 border-b border-line py-5 text-[0.9375rem] leading-[1.72] text-slate">
            <span aria-hidden="true" className="shrink-0 text-steel">
              &bull;
            </span>
            {webinarThanks.replayNote}
          </li>
        </ul>

        <p className="mt-10 max-w-prose text-sm leading-relaxed text-slate">
          {webinarThanks.reviewSoft.before}
          <MarketingAttributedAnchor
            href={webinarThanks.reviewSoft.href}
            className="text-ink underline underline-offset-4 hover:text-steel"
          >
            {webinarThanks.reviewSoft.linkLabel}
          </MarketingAttributedAnchor>
          {webinarThanks.reviewSoft.after}
        </p>

        <p className="mt-8 text-sm leading-relaxed text-mist">
          Questions? Email{' '}
          <a
            href={`mailto:${webinarThanks.helpEmail}`}
            className="text-slate underline underline-offset-4 hover:text-ink"
          >
            {webinarThanks.helpEmail}
          </a>
          .
        </p>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-mist">
          Session: {webinarSession.homeDateLabel}
        </p>
      </Reveal>
    </Section>
  )
}
