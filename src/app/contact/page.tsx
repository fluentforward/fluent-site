import { type Metadata } from 'next'
import Link from 'next/link'

import { BookingCalendar, BroughtProblem } from '@/components/contact/BookingCalendar'
import { Eyebrow, FOOTNOTE } from '@/components/home/Mark'
import { Container } from '@/components/ui/Container'
import { cal } from '@/content/cal'
import { site } from '@/content/site'
import { getPlanSummary } from '@/lib/planner/store'

import '@/components/contact/contact.css'

const title = 'Scope your agent'
const description =
  'Book a short call to scope your first AI agent. Tell us the problem; we tell you what the agent would do, what it connects to and what stays with a person.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: '/contact' },
  twitter: { title, description },
}

const onTheCall = [
  'We tell you what the agent would do, what it connects to and what stays with a person.',
  'We tell you whether 10 working days* is realistic for it.',
  'If an agent is the wrong answer, we say so.',
]

function first(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value || '').trim()
}

export default async function Contact({
  searchParams,
}: {
  searchParams: { plan?: string | string[]; q?: string | string[] }
}) {
  const planId = first(searchParams.plan)
  const summary = planId ? await getPlanSummary(planId) : null
  const brought = summary?.problem || first(searchParams.q) || ''
  const notes = summary
    ? `Plan ${summary.publicId}: ${summary.title}. ${summary.problem}`.slice(0, 500)
    : brought.trim().slice(0, 500)

  return (
    <section className="ffc" aria-labelledby="contact-title">
      <Container className="ffc-inner">
        <div className="ffc-grid">
          <div className="ffc-head">
            <Eyebrow>A short scoping call</Eyebrow>
            <h1 id="contact-title" className="ffc-h1">
              Scope your <span className="text-accent">agent.</span>
            </h1>
            <p className="ffc-lede">
              Tell us the problem or process you want an agent to take on. Pick a time that suits
              you.
            </p>
            <BroughtProblem title={summary?.title} problem={summary?.problem || brought} />
          </div>

          <div className="ffc-cal-col">
            <BookingCalendar notes={notes || undefined} planId={summary?.publicId} />
            <p className="ffc-cal-help">
              Calendar not loading?{' '}
              <a
                href={notes ? `${cal.bookingUrl}?notes=${encodeURIComponent(notes)}` : cal.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </div>

          <div className="ffc-details">
            <p className="ffh-mono text-mist">On the call</p>
            <ol className="ffc-steps">
              {onTheCall.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <div className="ffc-alt">
              <p>
                Rather write first? Email the problem to{' '}
                <a href={`mailto:${site.email}?subject=${encodeURIComponent('Scoping an agent')}`}>
                  {site.email}
                </a>
                .
              </p>
              <p>
                Not sure what to ask for?{' '}
                <Link href="/agent-planner" prefetch={false}>
                  Try the Agent Planner
                </Link>{' '}
                and bring the plan to the call.
              </p>
            </div>

            <p className="ffh-footnote ffc-footnote">* {FOOTNOTE}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
