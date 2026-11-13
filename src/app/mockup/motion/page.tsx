import type { Metadata } from 'next'
import Link from 'next/link'

import { AgentRun } from '@/components/mockup/agent-run'
import { MockupFooter, MockupHeader } from '@/components/mockup/chrome'
import { HealthPanel } from '@/components/mockup/health-panel'
import { HeroA } from '@/components/mockup/hero-a'
import { HeroB } from '@/components/mockup/hero-b'
import { HeroC } from '@/components/mockup/hero-c'
import { PlanAssembly } from '@/components/mockup/plan'
import { StepsSection, TimelineSection } from '@/components/mockup/timeline'
import { HeroCopy } from '@/components/mockup/ui'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { OWNERSHIP } from '@/lib/motion'

import '@/components/mockup/mockup.css'

const mockupMeta = {
  title: 'Motion mockup',
  description: 'Review mockup of the FluentForward redesign. Not the live site.',
}

export const metadata: Metadata = {
  ...mockupMeta,
  robots: { index: false, follow: false },
  alternates: { canonical: '/mockup/motion' },
  openGraph: mockupMeta,
  twitter: mockupMeta,
}

const asks = [
  'Our people spend days building client and management reports.',
  'Leads and proposals go quiet because no one follows up in time.',
  'Client intake and onboarding is slow and manual.',
  "Leadership can't see what is happening without chasing three systems.",
  "Senior people are stuck doing admin that doesn't need their judgement.",
  'We tried ChatGPT internally and it never turned into anything reliable.',
] as const

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default function MotionMockupPage({
  searchParams,
}: {
  searchParams: { motion?: string | string[]; t?: string | string[] }
}) {
  const still = first(searchParams.motion) === 'still'
  const parsed = Number(first(searchParams.t) ?? '1')
  const t = still && Number.isFinite(parsed) ? Math.min(1, Math.max(0, parsed)) : 1

  return (
    <div className="ffm flex min-h-full flex-1 flex-col bg-ink text-paper">
      <a href="#option-a" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink">
        Skip to hero options
      </a>
      <div className="border-b border-line bg-paper text-ink">
        <Container className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
            Review mockup. Not the live site.
          </p>
          <nav aria-label="Hero options" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#option-a" className="underline underline-offset-4">Option A</a>
            <a href="#option-b" className="underline underline-offset-4">Option B</a>
            <a href="#option-c" className="underline underline-offset-4">Option C</a>
            <a href="#timeline" className="underline underline-offset-4">Timeline</a>
            <a href="#run" className="underline underline-offset-4">Live run</a>
            <a href="#care" className="underline underline-offset-4">Agent Care</a>
            <a href="#planner" className="underline underline-offset-4">Planner</a>
          </nav>
        </Container>
      </div>
      <MockupHeader home="/mockup/motion" />
      <main className="flex-auto">
        <section id="option-a" className="ffm-section ffm-hero-glow py-16 md:py-28">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <HeroCopy heading="h1" tone="dark" noteId="note-a" option="Option A. One box morphs from the problem into the agent." />
              <HeroA still={still} t={t} />
            </div>
          </Container>
        </section>

        <section id="option-b" className="ffm-section bg-paper py-16 text-ink md:py-28">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <HeroCopy heading="p" tone="light" noteId="note-b" option="Option B. The problem stays put. The agent builds beside it." />
              <HeroB still={still} t={t} />
            </div>
          </Container>
        </section>

        <section id="option-c" className="ffm-section ffm-hero-glow py-16 md:py-28">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <HeroCopy heading="p" tone="dark" noteId="note-c" option="Option C. A build docket prints the job, then the status." />
              <HeroC still={still} t={t} />
            </div>
          </Container>
        </section>

        <section id="agents" className="ffm-section bg-paper py-16 text-ink md:py-24">
          <Container>
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
              Examples of what firms ask for
            </p>
            <h2 className="text-section mt-4 max-w-[14ch] text-balance">
              What would you hand to an <span className="text-accent">agent?</span>
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {asks.map((ask) => (
                <li key={ask} className="rounded-[14px] border border-line bg-paper p-6">
                  <p className="text-lg leading-snug tracking-[-0.02em]">{ask}</p>
                  <Link
                    href={`/agent-planner?q=${encodeURIComponent(ask)}`}
                    className="mt-4 inline-flex text-sm font-semibold text-ink underline underline-offset-4"
                  >
                    Plan an agent like this
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <StepsSection />
        <TimelineSection />

        <section id="run" className="ffm-section bg-ink py-16 md:py-28">
          <Container>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-mist">
              <span aria-hidden="true" className="eyebrow-dot" />
              A live moment
            </p>
            <h2 className="text-section mt-4 max-w-[16ch] text-balance">
              An agent, <span className="text-accent">doing the job.</span>
            </h2>
            <p className="text-lede mt-5 max-w-[46ch] text-lede-dark">
              One illustration of a run. A person approves before anything is sent.
            </p>
            <div className="mt-10">
              <AgentRun still={still} t={t} />
            </div>
          </Container>
        </section>

        <section className="ffm-section bg-paper py-16 text-ink md:py-24">
          <Container>
            <h2 className="text-section max-w-[16ch] text-balance">
              Why firms choose <span className="text-accent">this.</span>
            </h2>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {[
                ['Your problem, not our pitch.', 'We build what you ask for, scoped in writing.'],
                ['Fast.', 'Live in 10 working days, not a six-month programme.'],
                ['Done for you.', 'We build, host and maintain it. Your team just uses it.'],
                ['It keeps working.', 'Agent Care catches drift and keeps improving it.'],
                ['Clear cost.', 'Fixed price to build, monthly per agent to run. No day rates.'],
              ].map(([title, body]) => (
                <div key={title} className="grid gap-2 py-5 md:grid-cols-[16rem_1fr] md:gap-8">
                  <dt className="font-semibold tracking-[-0.02em]">{title}</dt>
                  <dd className="text-slate">{body}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section id="planner" className="ffm-section border-t border-line bg-paper py-16 text-ink md:py-24">
          <Container>
            <h2 className="text-section max-w-[16ch] text-balance">
              Describe a problem or process. See your first <span className="text-accent">agent.</span>
            </h2>
            <form action="/agent-planner" method="get" className="mt-8 max-w-3xl">
              <label htmlFor="planner-q" className="font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
                The problem or process
              </label>
              <div className="ffm-input-row mt-3">
                <input
                  id="planner-q"
                  name="q"
                  className="ffm-input ffm-input-light"
                  placeholder="e.g. Two days a month on reports"
                  autoComplete="off"
                  maxLength={500}
                />
                <button type="submit" className="rounded-btn inline-flex min-h-[52px] shrink-0 items-center justify-center whitespace-nowrap bg-accent px-6 font-semibold text-ink">
                  Plan my agent
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist-d">
                Please don&apos;t include personal, client or confidential data. Describe the process, not the people.{' '}
                <Link href="/privacy" className="text-ink underline underline-offset-4">Privacy notice</Link>
              </p>
            </form>
            <div className="mt-12">
              <PlanAssembly />
            </div>
          </Container>
        </section>

        <section className="ffm-section border-t border-line bg-paper py-16 text-ink md:py-24">
          <Container>
            <h2 className="text-section max-w-[16ch] text-balance">
              No diagnosis phase. No decks. A working <span className="text-accent">agent.</span>
            </h2>
            <p className="text-lede mt-5 max-w-[46ch] text-slate">
              You don&apos;t pay us to tell you what is wrong. You tell us what you need, and we build it, run it and keep it improving.
            </p>
          </Container>
        </section>

        <section id="security" className="ffm-section bg-ink py-16 md:py-24">
          <Container>
            <h2 className="text-section max-w-[14ch] text-balance">
              Your data stays <span className="text-accent">yours.</span>
            </h2>
            <p className="text-lede mt-5 max-w-[46ch] text-lede-dark">{OWNERSHIP}</p>
            <p className="mt-4 max-w-[46ch] text-lede-dark">
              Kept separate per client. Exportable when you leave. [CERTIFICATION PLACEHOLDER]
            </p>
            <Link href="/privacy" className="mt-6 inline-flex text-paper underline underline-offset-4">
              How we handle your data →
            </Link>
          </Container>
        </section>

        <section id="care" className="ffm-section bg-paper py-16 text-ink md:py-28">
          <Container>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
              <span aria-hidden="true" className="eyebrow-dot" />
              Agent Care
            </p>
            <h2 className="text-section mt-4 max-w-[14ch] text-balance">
              Live agents need <span className="text-accent">care.</span>
            </h2>
            <p className="text-lede mt-5 max-w-[48ch] text-slate">
              AI agents drift. Models change, your tools update, your firm evolves. Agent Care means every live agent is monitored, tested and improved by us, every month.
            </p>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <ul className="divide-y divide-line border-y border-line">
                {[
                  ['Monitoring', 'We watch every run. If something fails or looks wrong, we know before you do.'],
                  ['Evals', 'We test output against agreed quality checks, continuously.'],
                  ['Drift fixes', 'When quality slips, we fix it.'],
                  ['Small improvements', 'Steady tweaks as your team uses it and asks for more.'],
                  ['Connector and model updates', 'When your tools or the AI models change, we handle it.'],
                ].map(([title, body]) => (
                  <li key={title} className="py-4">
                    <h3 className="font-semibold tracking-[-0.02em]">{title}</h3>
                    <p className="mt-1 text-slate">{body}</p>
                  </li>
                ))}
              </ul>
              <HealthPanel still={still} t={t} />
            </div>
            <p className="mt-8 max-w-[46ch] text-slate">
              Monthly per live agent. No day rates. Terms agreed in writing.
            </p>
            <p className="mt-3 max-w-[46ch] text-slate">{OWNERSHIP}</p>
          </Container>
        </section>

        <section id="proof" className="ffm-section border-t border-line bg-paper py-16 text-ink md:py-24">
          <Container>
            <h2 className="text-section max-w-[14ch] text-balance">
              Proof, not <span className="text-accent">promises.</span>
            </h2>
            <p className="text-lede mt-5 max-w-[42ch] text-slate">
              Anonymised where clients ask. Only results we can stand behind.
            </p>
            <p className="mt-8 max-w-[48ch] rounded-[14px] border border-dashed border-line-strong p-6 font-mono text-sm leading-relaxed text-mist-d">
              [CASE STUDY: anonymised UK trust, AI insights agent, results TBC, needs client consent before any use]
            </p>
          </Container>
        </section>

        <section id="resources" className="ffm-section border-t border-line bg-paper py-16 text-ink md:py-24">
          <Container>
            <h2 className="text-section max-w-[16ch] text-balance">
              A fit, and where we <span className="text-accent">draw the line.</span>
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">A fit</h3>
                <p className="mt-2 max-w-[40ch] text-slate">
                  Owner-led agencies, consultancies, and professional and managed services firms of about 20 to 200 people. UK first. Legal and finance are a strong bias, not a limit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Not a fit</h3>
                <ul className="mt-2 space-y-2 text-slate">
                  <li>SaaS or product-core businesses</li>
                  <li>Teams under about 10</li>
                  <li>Anyone buying a chatbot licence or day-rate developers</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 max-w-[46ch] text-slate">
              Notes on recurring jobs stay at the resources URL. This mockup does not rebuild that page.
            </p>
            <Link href="/strategy-blueprints" className="mt-4 inline-flex font-semibold text-ink underline underline-offset-4">
              Resources
            </Link>
          </Container>
        </section>

        <section id="close" className="ffm-section relative overflow-hidden bg-ink py-20 md:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(50% 40% at 50% 55%, rgba(255,74,28,0.1), transparent 70%)' }}
          />
          <Container className="relative">
            <h2 className="text-section max-w-[14ch] text-balance">
              Got a problem an agent should <span className="text-accent">solve?</span>
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" prefetch={false}>Scope your agent</Button>
              <Button href="/agent-planner" prefetch={false} variant="ghost">
                Try the Agent Planner →
              </Button>
            </div>
            <p className="mt-4 max-w-[36ch] text-sm text-mist">
              If an agent is the wrong answer, we will tell you on the call.
            </p>
          </Container>
        </section>
      </main>
      <MockupFooter />
    </div>
  )
}
