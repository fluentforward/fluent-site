import type { Metadata } from 'next'
import Link from 'next/link'

import { Planner } from '@/components/planner/Planner'
import { Eyebrow, FOOTNOTE } from '@/components/home/Mark'
import { Container } from '@/components/ui/Container'
import { buttonClasses } from '@/components/ui/button-classes'

import '@/components/planner/planner.css'

const plannerMeta = {
  title: 'Agent Planner',
  description:
    'Describe a problem or process. In under three minutes, see what a first agent would do, what it connects to, and what stays with your team.',
}

export const metadata: Metadata = {
  ...plannerMeta,
  robots: { index: false, follow: false },
  openGraph: plannerMeta,
  twitter: plannerMeta,
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

const faqs = [
  {
    q: 'What happens to what I type?',
    a: 'We use it to draft your plan. Email addresses, phone numbers and web addresses are removed before it is sent to the model. The full plan is emailed only if you ask for it. Details are in the privacy notice.',
  },
  {
    q: 'Will this tell me the price?',
    a: 'No. A build is a fixed price, and Agent Care is monthly per agent. We confirm both on the call.',
  },
  {
    q: 'Is the time saved a promise?',
    a: 'No. It is an estimate from your own answers, and we confirm on the call whether the agent is buildable in 10 working days.',
  },
]

export default function AgentPlannerPage({
  searchParams,
}: {
  searchParams: { q?: string | string[] }
}) {
  const query = (first(searchParams.q) || '').trim().slice(0, 2000)

  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <Container>
          <Eyebrow>Agent Planner</Eyebrow>
          <h1 className="text-section mt-4 max-w-[16ch] text-balance">
            Describe a problem or process. See your first <span className="text-accent">agent.</span>
          </h1>
          <p className="text-lede mt-5 max-w-[48ch] text-lede-dark">
            Tell us what takes too long, goes wrong or depends on one person. In under three minutes
            you will see what an agent would do, what it connects to, and what stays with your team.
          </p>
          <Planner initialProblem={query} />
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 text-ink md:py-24">
        <Container>
          <p className="ffp-label">Example plan, illustration only</p>
          <h2 className="text-section mt-4 max-w-[18ch] text-balance">
            An example of the plan, not <span className="text-accent">yours.</span>
          </h2>
          <article className="ffp-example mt-8 max-w-3xl">
            <p className="ffp-label">Your first agent</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Monthly client report agent</h3>
            <p className="ffp-label mt-5">The problem you described</p>
            <p className="mt-1 text-slate">
              Two people spend about three days a month building client reports from the finance system,
              the CRM and a spreadsheet.
            </p>
            <p className="ffp-label mt-5">What the agent does</p>
            <ol className="ffp-steps">
              <li>
                <strong>1</strong>
                <span>On the first working day of each month, it pulls last month&apos;s figures from the finance system and CRM.</span>
              </li>
              <li>
                <strong>2</strong>
                <span>It reconciles them against the tracking spreadsheet and flags anything that does not match.</span>
              </li>
              <li>
                <strong>3</strong>
                <span>It drafts each client&apos;s report in your template, with a short plain-English summary.</span>
              </li>
              <li>
                <strong>4</strong>
                <span>It sends the drafts to the account lead to review.</span>
              </li>
              <li>
                <strong>5</strong>
                <span>Once a draft is approved, it sends the report and logs it in the CRM.</span>
              </li>
            </ol>
            <p className="ffp-label mt-5">Connects to</p>
            <p className="text-slate">Finance system, CRM, spreadsheet, email. To be confirmed on the call.</p>
            <p className="ffp-label mt-5">Stays with a human</p>
            <p className="text-slate">
              Checking the figures that do not match, approving every report before it goes out, and any
              client commentary.
            </p>
            <p className="ffp-label mt-5">
              Rough time saved <span className="text-accent">Estimate</span>
            </p>
            <p className="text-slate">
              Estimate only, based on the answers in this example: most of the three days of assembly each
              month, with review time remaining.
            </p>
            <p className="ffp-label mt-5">Live in 10 working days would include</p>
            <p className="text-slate">
              Connections to the three systems, the report template, testing on last month&apos;s real data, a
              human approval step, and go-live under Agent Care.
            </p>
            <p className="mt-4 text-sm text-slate">* {FOOTNOTE}</p>
          </article>
        </Container>
      </section>

      <section className="bg-paper-2 py-16 text-ink md:py-24">
        <Container>
          <h2 className="text-sub max-w-[20ch]">Before you type</h2>
          <div className="mt-8 max-w-3xl">
            {faqs.map((item) => (
              <details key={item.q} className="ffp-faq">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-paper md:py-24">
        <Container>
          <h2 className="text-section max-w-[16ch] text-balance">
            Book a call to scope this <span className="text-accent">agent.</span>
          </h2>
          <p className="mt-4 max-w-[46ch] text-lede-dark">
            We will confirm it is buildable in 10 working days. If an agent is the wrong answer, we will
            say so.
          </p>
          <div className="mt-8">
            <Link href="/contact" className={buttonClasses('primary')}>
              Scope your agent
            </Link>
          </div>
          <p className="mt-4 text-sm text-mist">* {FOOTNOTE}</p>
        </Container>
      </section>
    </>
  )
}
