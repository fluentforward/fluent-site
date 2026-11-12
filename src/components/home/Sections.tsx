import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

import { Eyebrow, FOOTNOTE, OWNERSHIP } from './Mark'
import { Strike } from './Strike'

/* ───────────── Terms ───────────── */

const TERMS = [
  ['The job', 'Your problem, not our pitch.', 'We build what you ask for, scoped in writing.'],
  ['The time', 'Fast.', 'Live in 10 working days*, not a six-month programme.'],
  ['The effort', 'Done for you.', 'We build, host and maintain it. Your team just uses it.'],
  ['The upkeep', 'It keeps working.', 'Agent Care catches drift and keeps improving it.'],
  ['The cost', 'Clear cost.', 'Fixed price to build, monthly per agent to run. No day rates.'],
] as const

export function Terms() {
  return (
    <section className="ffh-section-pad bg-paper text-ink" aria-labelledby="terms-title">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow tone="light">Why firms choose this</Eyebrow>
            <h2 id="terms-title" className="ffh-h2-long mt-5">
              <span className="ffh-line">
                No <Strike>diagnosis phase</Strike>.
              </span>{' '}
              <span className="ffh-line">
                No <Strike delay={450}>decks</Strike>.
              </span>{' '}
              <span className="ffh-line">
                A working <span className="text-accent">agent.</span>
              </span>
            </h2>
            <p className="text-lede mt-7 max-w-[40ch] text-slate">
              You don&apos;t pay us to tell you what is wrong. You tell us what you need, and we
              build it, run it and keep it improving.
            </p>
          </div>
          <div>
            <dl className="ffh-terms">
              {TERMS.map(([key, title, body]) => (
                <div key={key} className="ffh-term">
                  <dt>
                    <span className="ffh-mono block text-mist-d">{key}</span>
                    <span className="ffh-term-title">{title}</span>
                  </dt>
                  <dd>{body}</dd>
                </div>
              ))}
            </dl>
            <p className="ffh-footnote mt-6 max-w-[52ch] text-mist-d">* {FOOTNOTE}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ───────────── Security ───────────── */

const SPEC = [
  ['Ownership', 'Your data, processes and outputs are yours.'],
  ['Hosting', 'We host and run your agents on our platform so we can monitor and improve them. [HOSTING REGION PLACEHOLDER]'],
  ['Separation', 'Your data is kept separate from every other client.'],
  ['Leaving', 'Your data, processes and outputs are exportable when you leave.'],
  ['Certification', '[CERTIFICATION PLACEHOLDER]'],
] as const

export function Security() {
  return (
    <section id="security" className="ffh-section-pad bg-ink text-paper" aria-labelledby="security-title">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col">
            <Eyebrow>Security and data</Eyebrow>
            <h2 id="security-title" className="text-section mt-5 max-w-[12ch]">
              Your data stays <span className="text-accent">yours.</span>
            </h2>
            <blockquote className="ffh-own mt-10">
              <p>{OWNERSHIP}</p>
            </blockquote>
            <Link
              href="/privacy"
              prefetch={false}
              className="mt-8 inline-flex w-fit items-center gap-2 text-paper underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-white"
            >
              How we handle your data <span aria-hidden="true">→</span>
            </Link>
          </div>
          <dl className="ffh-spec">
            {SPEC.map(([key, value]) => (
              <div key={key}>
                <dt className="ffh-mono">{key}</dt>
                <dd className={value.startsWith('[') ? 'ffh-placeholder' : undefined}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/* ───────────── Proof and fit ───────────── */

export function ProofAndFit() {
  return (
    <section id="proof" className="ffh-section-pad bg-paper text-ink" aria-labelledby="proof-title">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow tone="light">Proof</Eyebrow>
            <h2 id="proof-title" className="text-section mt-5 max-w-[12ch]">
              Proof, not <span className="text-accent">promises.</span>
            </h2>
            <p className="text-lede mt-6 max-w-[40ch] text-slate">
              Anonymised where clients ask. Only results we can stand behind.
            </p>
            <article className="ffh-case mt-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="ffh-mono text-mist-d">UK trust · anonymised</span>
                <span className="ffh-tag ffh-tag-light">Placeholder · needs client consent</span>
              </div>
              <p className="mt-5 text-[1.5rem] font-semibold leading-tight tracking-[-0.025em]">
                An AI insights agent for a UK trust
              </p>
              <dl className="ffh-case-grid">
                <div>
                  <dt>The problem they brought</dt>
                  <dd className="ffh-placeholder">[TBC]</dd>
                </div>
                <div>
                  <dt>The agent</dt>
                  <dd>AI insights agent</dd>
                </div>
                <div>
                  <dt>Time to live</dt>
                  <dd className="ffh-placeholder">[TBC]</dd>
                </div>
                <div>
                  <dt>What changed</dt>
                  <dd className="ffh-placeholder">[RESULT TBC]</dd>
                </div>
              </dl>
              <p className="ffh-case-quote ffh-placeholder">[QUOTE TBC, real and approved only]</p>
            </article>
          </div>

          <div id="fit" className="lg:pt-3">
            <Eyebrow tone="light">Who it is for</Eyebrow>
            <h3 className="text-sub mt-5 max-w-[22ch]">
              Owner-led services firms of about 20 to 200 people. UK first.
            </h3>
            <ul className="ffh-fit mt-6">
              <li>Agencies and consultancies</li>
              <li>Professional and managed services firms</li>
              <li>Legal and finance, including trusts and regulated professional services</li>
            </ul>
            <h3 className="mt-12 text-[1.125rem] font-semibold tracking-[-0.015em]">Where we draw the line</h3>
            <ul className="ffh-fit is-not mt-4">
              <li>SaaS or product-core businesses</li>
              <li>Teams under about 10 people</li>
              <li>Anyone buying a chatbot licence or day-rate developers</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ───────────── Close ───────────── */

export function Close() {
  return (
    <section id="close" className="ffh-close" aria-labelledby="close-title">
      <Container className="relative py-28 md:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
          <div>
            <h2 id="close-title" className="ffh-close-title max-w-[12ch]">
              Got a problem an agent should <span className="text-accent">solve?</span>
            </h2>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" prefetch={false}>
                Scope your agent
              </Button>
              <Button href="/agent-planner" prefetch={false} variant="ghost">
                Try the Agent Planner →
              </Button>
            </div>
            <p className="mt-5 max-w-[40ch] text-mist">
              If an agent is the wrong answer, we will tell you on the call.
            </p>
          </div>
          <div className="ffh-call">
            <p className="ffh-mono pb-1 pt-5 text-mist">On the scoping call</p>
            <ol>
              <li>You tell us the problem or process you want an agent to take on.</li>
              <li>We tell you what the agent would do, what it connects to and what stays with a person.</li>
              <li>We tell you whether 10 working days is realistic.</li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
