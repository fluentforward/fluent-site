import type { Metadata } from 'next'

import { EXAMPLES } from '@/components/home/sketch'
import { Planner } from '@/components/planner/Planner'

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

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default function AgentPlannerPage({
  searchParams,
}: {
  searchParams: { q?: string | string[] }
}) {
  const query = (first(searchParams.q) || '').trim().slice(0, 2000)
  const initialProblem = CANNED.has(query) ? '' : query

  return <Planner initialProblem={initialProblem} />
}
