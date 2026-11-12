import type { Metadata } from 'next'

import { MockupFooter } from '@/components/mockup/chrome'
import { HomeHeader, MobileCta } from '@/components/mockup-home/Header'
import { HeroConsole } from '@/components/mockup-home/HeroConsole'
import { Eyebrow, FOOTNOTE } from '@/components/mockup-home/Mark'
import { Asks } from '@/components/mockup-home/Asks'
import { CareSection } from '@/components/mockup-home/CareScene'
import { PlannerSection } from '@/components/mockup-home/PlannerScene'
import { Close, ProofAndFit, Security, Terms } from '@/components/mockup-home/Sections'
import { TenDays } from '@/components/mockup-home/TenDays'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

import '@/components/mockup-home/home.css'

const meta = {
  title: 'Home mockup',
  description: 'Review mockup of the FluentForward home page. Not the live site.',
}

export const metadata: Metadata = {
  ...meta,
  robots: { index: false, follow: false },
  alternates: { canonical: '/mockup/home' },
  openGraph: meta,
  twitter: meta,
}

function Hero() {
  return (
    <section className="ffh-hero" aria-labelledby="hero-title">
      <Container className="ffh-hero-inner">
        <div className="ffh-hero-top">
          <div>
            <Eyebrow>AI agents for UK services firms</Eyebrow>
            <h1 id="hero-title" className="ffh-h1 mt-[clamp(0.85rem,2.2vh,1.5rem)] text-balance">
              <span className="xl:block">Tell us the problem.</span>{' '}
              <span className="xl:block">We’ll build the agent</span>{' '}
              <span className="xl:block">
                that <span className="text-accent">fixes it.</span>
              </span>
            </h1>
          </div>
          <div id="hero-ctas" className="xl:pb-[0.35em]">
            <p className="ffh-hero-sub">
              Live in 10 working days<span aria-hidden="true">*</span>
              <span className="sr-only"> (see note)</span>, hosted and looked after by us, improving
              every month.
            </p>
            <div className="mt-[clamp(1rem,2.6vh,1.75rem)] flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" prefetch={false}>
                Scope your agent
              </Button>
              <Button href="/agent-planner" prefetch={false} variant="ghost">
                Try the Agent Planner →
              </Button>
            </div>
            <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-mist">
              Describe a problem. See your first agent in under three minutes.
            </p>
            <p className="ffh-footnote mt-2.5 max-w-[50ch] text-mist">* {FOOTNOTE}</p>
          </div>
        </div>
        <div className="ffh-hero-console">
          <HeroConsole />
        </div>
      </Container>
    </section>
  )
}

export default function HomeMockupPage() {
  return (
    <div className="ffh flex min-h-full flex-1 flex-col bg-ink text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <HomeHeader />
      <main id="main" className="flex-auto">
        <Hero />
        <Asks />
        <TenDays />
        <CareSection />
        <Terms />
        <PlannerSection />
        <Security />
        <ProofAndFit />
        <Close />
      </main>
      <MockupFooter />
      <MobileCta />
    </div>
  )
}
