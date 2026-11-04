import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { WebinarRegistrationPanel } from '@/components/webinar/WebinarRegistrationForm'
import { FaqSection } from '@/components/sections/FaqSection'
import { MarketingAttributedAnchor } from '@/components/ui/attributed-href'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { getWebinarRegistrationMode } from '@/lib/demio/config'
import {
  webinarFaq,
  webinarHero,
  webinarLeaveWith,
  webinarMeta,
  webinarNotFor,
  webinarPath,
  webinarPostPath,
  webinarTrust,
  webinarWhoFor,
} from '@/content/webinar'

export const metadata: Metadata = {
  title: webinarMeta.title,
  description: webinarMeta.description,
  alternates: { canonical: webinarPath },
  openGraph: {
    title: webinarMeta.title,
    description: webinarMeta.description,
    url: webinarPath,
  },
  twitter: {
    title: webinarMeta.title,
    description: webinarMeta.description,
  },
}

function BulletBlock({
  heading,
  items,
}: {
  heading: string
  items: readonly string[]
}) {
  return (
    <Reveal>
      <Heading as="h2" size="sub" className="max-w-[20ch]">
        {heading}
      </Heading>
      <ul className="mt-8 border-t border-line">
        {items.map((item) => (
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
  )
}

export default function WebinarPage() {
  return (
    <>
      <Section tone="ink" className="hero-ambient pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="mb-12">
          <Link href="/" className="inline-block transition-opacity hover:opacity-85">
            <Image
              src="/brand/wordmark-on-ink.png"
              alt="FluentForward"
              width={220}
              height={40}
              priority
              className="h-8 w-auto md:h-9"
            />
          </Link>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow tone="dark">{webinarHero.eyebrow}</Eyebrow>
            <Heading as="h1" size="display-sm" className="mt-8 text-paper">
              {webinarHero.title}
            </Heading>
            <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.08em] text-lede-dark">
              {webinarHero.whenLine}
            </p>
            <Lede tone="dark" className="mt-8 max-w-prose">
              {webinarHero.subtitle}
            </Lede>
            <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.72] text-lede-dark">
              {webinarHero.lede}
            </p>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <WebinarRegistrationPanel serverMode={getWebinarRegistrationMode()} />
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" border size="compact">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <BulletBlock heading={webinarWhoFor.heading} items={webinarWhoFor.items} />
          <BulletBlock
            heading={webinarLeaveWith.heading}
            items={webinarLeaveWith.items}
          />
        </div>
      </Section>

      <Section tone="muted" border size="compact">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <BulletBlock heading={webinarNotFor.heading} items={webinarNotFor.items} />
          <BulletBlock heading={webinarTrust.heading} items={webinarTrust.items} />
        </div>
      </Section>

      <FaqSection content={webinarFaq} size="compact" />

      <Section tone="muted" size="compact" border>
        <Reveal className="max-w-prose text-[0.9375rem] leading-[1.72] text-slate">
          {webinarPostPath.before}
          <MarketingAttributedAnchor
            href={webinarPostPath.href}
            className="font-medium text-ink underline decoration-line-strong underline-offset-[5px] hover:text-steel"
          >
            {webinarPostPath.linkLabel}
          </MarketingAttributedAnchor>
          {webinarPostPath.after}
        </Reveal>
      </Section>
    </>
  )
}
