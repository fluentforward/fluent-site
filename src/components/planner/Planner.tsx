'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { buttonClasses } from '@/components/ui/button-classes'
import { getOutboundMarketingAttributionParams } from '@/lib/marketing-attribution'
import { trackPlannerEvent, trackPlannerLead } from '@/lib/vendors/track-planner'
import { FEASIBILITY_LINE, PRICE_LINE, type FullPlan, type PartialPlan } from '@/lib/planner/types'

type View =
  | { kind: 'loading' }
  | { kind: 'compose'; problem: string; warning?: string }
  | { kind: 'working'; problem: string; label: string }
  | { kind: 'question'; problem: string; question: string; step: number; answer: string; warning?: string }
  | { kind: 'assembling'; problem: string; partial: PartialPlan }
  | {
      kind: 'partial'
      problem: string
      publicId: string
      partial: PartialPlan
      name: string
      email: string
      error?: string
      sending?: boolean
    }
  | { kind: 'sent'; publicId: string; full: FullPlan; email: string; name: string; emailed: boolean }
  | { kind: 'refusal'; message: string }
  | { kind: 'rate'; message: string }
  | { kind: 'error'; message: string }

const PLACEHOLDER =
  'e.g. Every month two people spend three days building client reports from Xero, our CRM and a spreadsheet.'

export function Planner({ initialProblem }: { initialProblem: string }) {
  const [view, setView] = useState<View>({ kind: 'loading' })
  const [status, setStatus] = useState('Loading the planner')

  useEffect(() => {
    let cancelled = false
    fetch('/api/agent-planner/session')
      .then((response) => response.json())
      .then((body: unknown) => {
        if (cancelled) return
        const next = viewFromBody(body, initialProblem)
        setView(next)
        setStatus(statusFor(next))
      })
      .catch(() => {
        if (cancelled) return
        setView({ kind: 'compose', problem: initialProblem })
        setStatus('')
      })
    return () => {
      cancelled = true
    }
  }, [initialProblem])

  async function start(problem: string) {
    setView({ kind: 'working', problem, label: 'Reading that.' })
    setStatus('Reading that.')
    const ok = await post(
      '/api/agent-planner/sessions',
      { problem, attribution: getOutboundMarketingAttributionParams() },
      problem,
    )
    if (ok) trackPlannerEvent('planner_start')
  }

  async function answer(current: Extract<View, { kind: 'question' }>) {
    setView({ kind: 'working', problem: current.problem, label: 'One moment.' })
    setStatus('One moment.')
    const ok = await post('/api/agent-planner/answers', { answer: current.answer }, current.problem)
    if (ok) trackPlannerEvent('planner_follow_up')
  }

  async function claim(current: Extract<View, { kind: 'partial' }>) {
    setView({ ...current, sending: true, error: undefined })
    setStatus('Sending the full plan.')
    const response = await fetch('/api/agent-planner/claim', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: current.name, email: current.email }),
    })
    const body = (await response.json().catch(() => ({}))) as Record<string, unknown>
    if (!response.ok || body.state === 'error' || body.state === 'rate_limited') {
      setView({
        ...current,
        sending: false,
        error: typeof body.message === 'string' ? body.message : 'Enter your name and a work email.',
      })
      setStatus('The plan was not sent.')
      return
    }
    if (body.state === 'sent' && isFull(body.full)) {
      setView({
        kind: 'sent',
        publicId: String(body.publicId || current.publicId),
        full: body.full,
        email: String(body.email || current.email),
        name: String(body.name || current.name),
        emailed: body.emailed === true,
      })
      setStatus('The full plan is ready, and a copy is on its way by email.')
      trackPlannerLead()
      return
    }
    setView({ ...current, sending: false, error: 'The plan was not sent. Please try again.' })
  }

  async function post(url: string, payload: unknown, problem: string): Promise<boolean> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const type = response.headers.get('content-type') || ''
    if (type.includes('ndjson') && response.body) {
      await readStream(response, problem)
      return response.ok
    }
    const body = (await response.json().catch(() => ({}))) as Record<string, unknown>
    if (response.status === 429 || body.state === 'rate_limited') {
      const message = typeof body.message === 'string' ? body.message : 'Please wait a little while and try again.'
      setView({ kind: 'rate', message })
      setStatus(message)
      return false
    }
    if (!response.ok || body.state === 'error') {
      const message = typeof body.message === 'string' ? body.message : 'Something went wrong. Please try again.'
      setView({ kind: 'error', message })
      setStatus(message)
      return false
    }
    const next = viewFromBody(body, problem)
    setView(next)
    setStatus(statusFor(next))
    if (next.kind === 'partial') trackPlannerEvent('planner_partial_shown')
    return next.kind !== 'error' && next.kind !== 'rate'
  }

  async function readStream(response: Response, problem: string) {
    const reader = response.body?.getReader()
    if (!reader) {
      setView({ kind: 'error', message: 'The plan did not come together. Please try again.' })
      return
    }
    const decoder = new TextDecoder()
    let buffer = ''
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''
      for (const line of lines) {
        if (!line.trim()) continue
        let event: Record<string, unknown>
        try {
          event = JSON.parse(line) as Record<string, unknown>
        } catch {
          continue
        }
        if (event.type === 'partial') {
          const partial = asPartial(event)
          setView({ kind: 'assembling', problem, partial })
          setStatus('Assembling your first agent.')
        } else if (event.type === 'done') {
          const partial = asPartial(event.partial)
          const publicId = String(event.publicId || '')
          setView({ kind: 'partial', problem, publicId, partial, name: '', email: '' })
          setStatus('A partial plan is ready. The full plan is emailed.')
          trackPlannerEvent('planner_partial_shown')
        } else if (event.type === 'refusal') {
          const message = String(event.message || 'We cannot plan that from here.')
          setView({ kind: 'refusal', message })
          setStatus(message)
        } else if (event.type === 'error') {
          const message = String(event.message || 'The plan did not come together. Please try again.')
          setView({ kind: 'error', message })
          setStatus(message)
        }
      }
    }
  }

  async function startAgain() {
    await fetch('/api/agent-planner/reset', { method: 'POST' })
    setView({ kind: 'compose', problem: '' })
    setStatus('')
  }

  return (
    <div className="mt-8 max-w-3xl">
      <p className="sr-only" role="status">
        {status}
      </p>
      {view.kind === 'loading' ? <p className="text-lede-dark">Loading the planner.</p> : null}

      {view.kind === 'compose' ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            const problem = view.problem.trim()
            if (problem.length < 20) {
              setView({ ...view, warning: 'Describe the process in a sentence or two.' })
              return
            }
            void start(problem)
          }}
        >
          <label htmlFor="planner-problem" className="ffp-label text-mist">
            The problem or process
          </label>
          <div className="ffp-field mt-3 bg-paper">
            <textarea
              id="planner-problem"
              name="problem"
              required
              minLength={20}
              maxLength={2000}
              rows={4}
              value={view.problem}
              placeholder={PLACEHOLDER}
              aria-describedby="planner-privacy"
              onChange={(event) => setView({ kind: 'compose', problem: event.target.value, warning: undefined })}
            />
          </div>
          {view.warning ? <p className="ffp-warning ffp-on-dark">{view.warning}</p> : null}
          <div className="ffp-actions">
            <button type="submit" className={buttonClasses('primary')}>
              Plan my agent
            </button>
          </div>
          <Privacy />
        </form>
      ) : null}

      {view.kind === 'working' ? (
        <div className="ffp-card" aria-busy="true">
          <p className="ffp-label">Agent Planner</p>
          <p className="ffp-status">{view.label}</p>
        </div>
      ) : null}

      {view.kind === 'question' ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (!view.answer.trim()) return
            void answer(view)
          }}
        >
          <p className="ffp-label text-mist">Question {view.step} of up to 3</p>
          <p className="mt-3 max-w-[40ch] text-xl leading-snug text-paper">{view.question}</p>
          <div className="ffp-field mt-4 bg-paper">
            <label htmlFor="planner-answer" className="sr-only">
              Your answer
            </label>
            <textarea
              id="planner-answer"
              name="answer"
              required
              maxLength={800}
              rows={3}
              value={view.answer}
              onChange={(event) => setView({ ...view, answer: event.target.value, warning: undefined })}
            />
          </div>
          {view.warning ? <p className="ffp-warning ffp-on-dark">{view.warning}</p> : null}
          <div className="ffp-actions">
            <button type="submit" className={buttonClasses('primary')}>
              Continue
            </button>
            <button type="button" className={buttonClasses('ghost')} onClick={() => void startAgain()}>
              Start again
            </button>
          </div>
          <Privacy />
        </form>
      ) : null}

      {view.kind === 'assembling' || view.kind === 'partial' ? (
        <div className="ffp-card ffp-plan">
          <PlanPartial partial={view.partial} live={view.kind === 'assembling'} />
          {view.kind === 'partial' ? (
            <form
              className="mt-6 border-t border-line pt-5"
              onSubmit={(event) => {
                event.preventDefault()
                void claim(view)
              }}
            >
              <p className="ffp-label">Email me the full plan</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="ffp-field mt-0">
                  <label htmlFor="planner-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="planner-name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={80}
                    placeholder="Your name"
                    value={view.name}
                    onChange={(event) => setView({ ...view, name: event.target.value, error: undefined })}
                  />
                </div>
                <div className="ffp-field mt-0">
                  <label htmlFor="planner-email" className="sr-only">
                    Work email
                  </label>
                  <input
                    id="planner-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={200}
                    placeholder="Work email"
                    value={view.email}
                    onChange={(event) => setView({ ...view, email: event.target.value, error: undefined })}
                  />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                We will email the plan, then a short follow-up unless you book a call. Unsubscribe any time.
              </p>
              {view.error ? <p className="ffp-warning">{view.error}</p> : null}
              <div className="ffp-actions">
                <button type="submit" className={buttonClasses('primary')} disabled={view.sending}>
                  {view.sending ? 'Sending' : 'Email me the full plan'}
                </button>
              </div>
            </form>
          ) : (
            <p className="ffp-status">Assembling the first steps.</p>
          )}
        </div>
      ) : null}

      {view.kind === 'sent' ? (
        <div className="ffp-card ffp-plan">
          <p className="ffp-label">Full plan</p>
          <h2>{view.full.title}</h2>
          <p className="mt-3 text-slate">{view.full.problem}</p>
          <ol className="ffp-steps">
            {view.full.steps.map((step) => (
              <li key={step.n}>
                <strong>{step.n}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
          <p className="ffp-label mt-4">Connects to</p>
          <p className="text-slate">{view.full.tools.join(', ')}. To be confirmed on the call.</p>
          <p className="ffp-label mt-4">Stays with a human</p>
          <ul className="ffp-steps">
            {view.full.human.map((item) => (
              <li key={item}>
                <strong />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="ffp-label mt-4">
            Rough time saved <span className="text-accent">Estimate</span>
          </p>
          <p className="text-slate">{view.full.timeSaved}</p>
          <p className="ffp-label mt-4">Live in 10 working days would include</p>
          <p className="text-slate">{view.full.tenDayIncludes}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate">{PRICE_LINE}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate">{FEASIBILITY_LINE}</p>
          <p className="mt-3 text-sm text-slate">
            {view.emailed
              ? `A copy is on its way to ${view.email}.`
              : `The full plan is here. A copy is being sent to ${view.email}.`}
          </p>
          <div className="ffp-actions">
            <Link
              href={`/contact?plan=${encodeURIComponent(view.publicId)}`}
              className={buttonClasses('primary')}
              onClick={() => {
                void fetch('/api/agent-planner/cta', { method: 'POST', keepalive: true })
                trackPlannerEvent('planner_cta_clicked')
              }}
            >
              Book a call to scope this agent
            </Link>
          </div>
        </div>
      ) : null}

      {view.kind === 'refusal' || view.kind === 'rate' || view.kind === 'error' ? (
        <div className="ffp-card">
          <p className="text-slate">{view.message}</p>
          <div className="ffp-actions">
            <button type="button" className={buttonClasses('ink')} onClick={() => void startAgain()}>
              Describe a process
            </button>
            <Link href="/contact" className={buttonClasses('secondary')}>
              Scope your agent
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function PlanPartial({ partial, live }: { partial: PartialPlan; live: boolean }) {
  return (
    <div aria-busy={live}>
      <p className="ffp-label">Your first agent</p>
      <h2>{partial.title || (live ? 'Assembling' : 'First agent')}</h2>
      {partial.problem ? <p className="mt-3 text-slate">{partial.problem}</p> : null}
      <ol className="ffp-steps">
        {partial.steps.map((step) => (
          <li key={`${step.n}-${step.text}`}>
            <strong>{step.n}</strong>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Privacy() {
  return (
    <p id="planner-privacy" className="ffp-note">
      Please do not include personal, client or confidential data. Describe the process, not the people.{' '}
      <Link href="/privacy">Privacy notice</Link>
    </p>
  )
}

function viewFromBody(body: unknown, fallbackProblem: string): View {
  const record = body && typeof body === 'object' ? (body as Record<string, unknown>) : {}
  const problem = typeof record.problem === 'string' ? record.problem : fallbackProblem
  if (record.state === 'sensitive') {
    return {
      kind: 'compose',
      problem,
      warning: typeof record.message === 'string' ? record.message : undefined,
    }
  }
  if (record.state === 'question' && typeof record.question === 'string') {
    return {
      kind: 'question',
      problem,
      question: record.question,
      step: typeof record.step === 'number' ? record.step : 1,
      answer: '',
      warning: typeof record.warning === 'string' ? record.warning : undefined,
    }
  }
  if (record.state === 'partial' && typeof record.publicId === 'string') {
    return {
      kind: 'partial',
      problem,
      publicId: record.publicId,
      partial: asPartial(record.partial),
      name: '',
      email: '',
    }
  }
  if (record.state === 'sent' && typeof record.publicId === 'string' && isFull(record.full)) {
    return {
      kind: 'sent',
      publicId: record.publicId,
      full: record.full,
      email: typeof record.email === 'string' ? record.email : '',
      name: typeof record.name === 'string' ? record.name : '',
      emailed: record.emailed === true,
    }
  }
  if (record.state === 'refusal' && typeof record.message === 'string') {
    return { kind: 'refusal', message: record.message }
  }
  if (record.state === 'rate_limited' && typeof record.message === 'string') {
    return { kind: 'rate', message: record.message }
  }
  if (record.state === 'error' && typeof record.message === 'string') {
    return { kind: 'error', message: record.message }
  }
  return { kind: 'compose', problem: fallbackProblem }
}

function asPartial(value: unknown): PartialPlan {
  const record = value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
  const steps = Array.isArray(record.steps) ? record.steps : []
  return {
    title: typeof record.title === 'string' ? record.title : '',
    problem: typeof record.problem === 'string' ? record.problem : '',
    steps: steps
      .map((step, index) => {
        const item = step && typeof step === 'object' ? (step as Record<string, unknown>) : {}
        return {
          n: index + 1,
          text: typeof item.text === 'string' ? item.text : '',
        }
      })
      .filter((step) => step.text),
  }
}

function isFull(value: unknown): value is FullPlan {
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return typeof record.title === 'string' && Array.isArray(record.steps) && Array.isArray(record.tools)
}

function statusFor(view: View): string {
  if (view.kind === 'question') return `Question ${view.step}. ${view.question}`
  if (view.kind === 'partial') return 'A partial plan is ready.'
  if (view.kind === 'sent') return 'The full plan is ready.'
  if (view.kind === 'refusal' || view.kind === 'rate' || view.kind === 'error') return view.message
  if (view.kind === 'compose' && view.warning) return view.warning
  return ''
}
