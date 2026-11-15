import type { Metadata } from 'next'

import { EXAMPLES } from '@/components/home/sketch'
import { Planner } from '@/components/planner/Planner'
import { parsePlannerProblemParam } from '@/lib/planner/entry-params'

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

const CANNED = new Set<string>(EXAMPLES.map((example) => example.text))

export default function AgentPlannerPage({
  searchParams,
}: {
  searchParams: { q?: string | string[]; problem?: string | string[] }
}) {
  const query = parsePlannerProblemParam(searchParams.q, searchParams.problem)
  const initialProblem = CANNED.has(query) ? '' : query
  const seedFromUrl = Boolean(query)

  return <Planner initialProblem={initialProblem} seedFromUrl={seedFromUrl} />
}
