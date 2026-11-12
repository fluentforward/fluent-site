import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

import { HeroConsole } from './HeroConsole'
import { Eyebrow, FOOTNOTE } from './Mark'

export function Hero() {
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
