import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MockupFooter, MockupHeader } from '@/components/mockup/chrome'
import { PlanAssembly } from '@/components/mockup/plan'

import '@/components/mockup/mockup.css'

const plannerMeta = {
  title: 'Agent Planner',
  description: 'A stub for the Agent Planner handoff. The tool itself is not built on this page.',
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

export default function AgentPlannerStub({
  searchParams,
}: {
  searchParams: { q?: string | string[] }
}) {
  const query = (first(searchParams.q) || '').trim()

  return (
    <div className="ffm flex min-h-full flex-1 flex-col bg-paper text-ink">
      <MockupHeader home="/mockup/motion" />
      <main className="flex-auto">
        <section className="bg-ink py-16 text-paper md:py-24">
          <Container>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-mist">
              <span aria-hidden="true" className="eyebrow-dot" />
              Agent Planner
            </p>
            <h1 className="text-section mt-4 max-w-[16ch] text-balance">
              Describe a problem or process. See your first <span className="text-accent">agent.</span>
            </h1>
            <p className="text-lede mt-5 max-w-[48ch] text-lede-dark">
              This is a stub page so the mockup can hand off a problem. The planner tool itself
              is still to be connected. Nothing on this page is a finished plan, a price or a
              promise.
            </p>
            {query ? (
              <blockquote className="mt-8 max-w-[46ch] border-l border-accent pl-4 text-lg leading-snug text-paper">
                {query}
              </blockquote>
            ) : (
              <p className="mt-8 max-w-[46ch] text-lede-dark">
                No problem was passed in. You can go back and type one.
              </p>
            )}
            <p className="mt-6 max-w-[48ch] text-sm leading-relaxed text-mist">
              Please don&apos;t include personal, client or confidential data. Describe the
              process, not the people.{' '}
              <Link href="/privacy" className="text-paper underline underline-offset-4">
                Privacy notice
              </Link>
            </p>
            <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-mist">
              When the tool is connected, it will ask two or three follow-ups, show a partial
              plan here, and email the full plan. We will confirm on the call that it is
              buildable in 10 working days.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/mockup/motion">Back to the mockup</Button>
              <Button href="/contact" variant="ghost">
                Scope your agent →
              </Button>
            </div>
          </Container>
        </section>
        <section className="border-t border-line bg-paper py-16 md:py-24">
          <Container>
            <h2 className="text-section max-w-[18ch] text-ink">
              An example of the plan, not <span className="text-accent">yours.</span>
            </h2>
            <div className="mt-8">
              <PlanAssembly />
            </div>
          </Container>
        </section>
      </main>
      <MockupFooter />
    </div>
  )
}
