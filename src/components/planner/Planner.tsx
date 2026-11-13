'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type KeyboardEvent } from 'react'

import { rememberProblem, ScopeLink } from '@/components/booking/ScopeLink'
import { Chevron } from '@/components/home/Mark'
import { buttonClasses } from '@/components/ui/button-classes'
import { getOutboundMarketingAttributionParams } from '@/lib/marketing-attribution'
import { trackPlannerEvent, trackPlannerLead } from '@/lib/vendors/track-planner'
import { clearPlannerDraft, readPlannerDraft, stashPlannerDraft } from '@/lib/planner/draft'
import { PlanDocument } from '@/components/planner/PlanDocument'
import type { FullPlan } from '@/lib/planner/types'

type View =
  | { kind: 'loading' }
  | { kind: 'compose'; problem: string; warning?: string }
  | { kind: 'working'; problem: string; label: string }
  | { kind: 'question'; problem: string; question: string; answer: string; warning?: string }
  | { kind: 'writing'; problem: string }
  | {
      kind: 'details'
      problem: string
      thanks: string
      agent: string
      benefit: string
      preview: { steps: string; impact: string } | null
      name: string
      email: string
      error?: string
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
  const desktop = useDesktop()
  const problemRef = useRef<HTMLTextAreaElement>(null)
  const answerRef = useRef<HTMLTextAreaElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const preparing = useRef(false)

  useEffect(() => {
    let cancelled = false
    fetch('/api/agent-planner/session')
      .then((response) => response.json())
      .then((body: unknown) => {
        if (cancelled) return
        const next = viewFromBody(body, initialProblem || readPlannerDraft())
        if (next.kind === 'writing') {
          void writePlan(next.problem)
          return
        }
        setView(next)
        setStatus(statusFor(next))
      })
      .catch(() => {
        if (cancelled) return
        setView({ kind: 'compose', problem: initialProblem || readPlannerDraft() })
        setStatus('')
      })
    return () => {
      cancelled = true
    }
  }, [initialProblem])

  useEffect(() => {
    const url = new URL(window.location.href)
    if (!url.searchParams.has('q') && !url.searchParams.has('problem')) return
    const seeded = (url.searchParams.get('q') || url.searchParams.get('problem') || '').trim()
    if (seeded) stashPlannerDraft(seeded)
    url.searchParams.delete('q')
    url.searchParams.delete('problem')
    const query = url.searchParams.toString()
    window.history.replaceState(null, '', `${url.pathname}${query ? `?${query}` : ''}${url.hash}`)
  }, [])

  useEffect(() => {
    if (!desktop) return
    if (view.kind === 'compose') problemRef.current?.focus()
    if (view.kind === 'question') answerRef.current?.focus()
    if (view.kind === 'details') nameRef.current?.focus()
  }, [desktop, view.kind])

  const gateProblem = view.kind === 'details' ? view.problem : ''
  useEffect(() => {
    if (gateProblem) rememberProblem(gateProblem)
  }, [gateProblem])

  async function start(problem: string) {
    clearPlannerDraft()
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
    setView({ kind: 'working', problem: current.problem, label: 'Pulling that together.' })
    setStatus('Pulling that together.')
    const ok = await post('/api/agent-planner/answers', { answer: current.answer }, current.problem)
    if (ok) trackPlannerEvent('planner_follow_up')
  }

  async function writePlan(problem: string) {
    if (preparing.current) return
    preparing.current = true
    setView({ kind: 'working', problem, label: 'Writing the plan.' })
    setStatus('Writing the plan.')
    try {
      const response = await fetch('/api/agent-planner/plan', {
        method: 'POST',
        signal: AbortSignal.timeout(70_000),
      })
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>
      if (response.status === 429 || body.state === 'rate_limited') {
        const message = typeof body.message === 'string' ? body.message : 'Please wait a little while and try again.'
        setView({ kind: 'rate', message })
        setStatus(message)
        return
      }
      if (!response.ok || body.state === 'error' || body.state === 'writing') {
        const message = typeof body.message === 'string' ? body.message : 'The plan did not come together. Please try again.'
        setView({ kind: 'error', message })
        setStatus(message)
        return
      }
      const next = viewFromBody(body, problem)
      setView(next)
      setStatus(statusFor(next))
    } catch {
      setView({ kind: 'error', message: 'The plan did not come together. Please try again.' })
      setStatus('The plan did not come together. Please try again.')
    } finally {
      preparing.current = false
    }
  }

  async function claim(current: Extract<View, { kind: 'details' }>) {
    setView({ kind: 'working', problem: current.problem, label: 'Opening your plan.' })
    setStatus('Opening your plan.')
    const response = await fetch('/api/agent-planner/claim', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: current.name, email: current.email }),
    })
    const type = response.headers.get('content-type') || ''
    if (type.includes('ndjson') && response.body) {
      await readStream(response, current.problem, current)
      return
    }
    const body = (await response.json().catch(() => ({}))) as Record<string, unknown>
    if (body.state === 'refusal' && typeof body.message === 'string') {
      setView({ kind: 'refusal', message: body.message })
      setStatus(body.message)
      return
    }
    if (!response.ok || body.state === 'error' || body.state === 'rate_limited') {
      setView({
        ...current,
        error: typeof body.message === 'string' ? body.message : 'Enter your name and a work email.',
      })
      setStatus('The plan was not sent.')
      return
    }
    if (body.state === 'sent' && isFull(body.full)) {
      showPlan(body, current)
      return
    }
    setView({ ...current, error: 'The plan was not sent. Please try again.' })
  }

  function showPlan(body: Record<string, unknown>, current: { name: string; email: string }) {
    if (!isFull(body.full)) return
    setView({
      kind: 'sent',
      publicId: String(body.publicId || ''),
      full: body.full,
      email: String(body.email || current.email),
      name: String(body.name || current.name),
      emailed: body.emailed === true,
    })
    setStatus('The plan is ready, and a copy is on its way by email.')
    trackPlannerLead()
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
    if (next.kind === 'writing') {
      await writePlan(next.problem)
      return true
    }
    setView(next)
    setStatus(statusFor(next))
    return next.kind !== 'error' && next.kind !== 'rate'
  }

  async function readStream(
    response: Response,
    problem: string,
    details?: Extract<View, { kind: 'details' }>,
  ) {
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
        if (event.type === 'done' && isFull(event.full)) {
          showPlan(event, details ?? { name: '', email: '' })
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
    clearPlannerDraft()
    await fetch('/api/agent-planner/reset', { method: 'POST' })
    setView({ kind: 'compose', problem: '' })
    setStatus('')
  }

  const busy = view.kind === 'loading' || view.kind === 'working'
  const canRestart = view.kind !== 'loading' && view.kind !== 'compose'

  return (
    <div className="ffp-app">
      <a href="#planner-stage" className="ffp-skip">
        Skip to the planner
      </a>
      <header className="ffp-bar">
        <Link href="/" className="ffp-brand" aria-label="FluentForward home">
          <Chevron className="h-[14px] w-[14px]" />
          <span>FluentForward</span>
        </Link>
        <p className="ffp-appname">Agent Planner</p>
        {canRestart ? (
          <button type="button" className="ffp-quiet" onClick={() => void startAgain()}>
            Start again
          </button>
        ) : (
          <span className="ffp-quiet-slot" aria-hidden="true" />
        )}
      </header>

      <main id="planner-stage" className="ffp-stage">
        <p className="sr-only" role="status">
          {status}
        </p>
        <section className="ffp-window" aria-busy={busy}>
          {view.kind === 'loading' ? <p className="ffp-wait">Opening the planner.</p> : null}

          {view.kind === 'compose' ? (
            <form
              className="ffp-compose"
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
              <h1>What should this agent take off your team?</h1>
              <p className="ffp-lede">A sentence or two. The plan takes under three minutes.</p>
              <div className="ffp-field">
                <label htmlFor="planner-problem" className="sr-only">
                  The problem or process
                </label>
                <textarea
                  ref={problemRef}
                  id="planner-problem"
                  name="problem"
                  required
                  minLength={20}
                  maxLength={2000}
                  rows={5}
                  value={view.problem}
                  placeholder={PLACEHOLDER}
                  aria-describedby="planner-privacy"
                  onChange={(event) =>
                    setView({ kind: 'compose', problem: event.target.value, warning: undefined })
                  }
                  onKeyDown={submitOnShortcut}
                />
              </div>
              {view.warning ? <p className="ffp-warning">{view.warning}</p> : null}
              <div className="ffp-actions">
                <button type="submit" className={buttonClasses('primary')} aria-keyshortcuts="Meta+Enter Control+Enter">
                  Plan my agent
                </button>
                <SubmitHint />
              </div>
              <Privacy />
            </form>
          ) : null}

          {view.kind === 'working' ? (
            <div className="ffp-compose">
              <p className="ffp-lede">{view.label}</p>
              <div className="ffp-live" aria-hidden="true">
                <span />
              </div>
              {view.problem ? <p className="ffp-echo">{view.problem}</p> : null}
            </div>
          ) : null}

          {view.kind === 'question' ? (
            <form
              className="ffp-compose"
              onSubmit={(event) => {
                event.preventDefault()
                if (!view.answer.trim()) {
                  setView({ ...view, warning: 'Add a short answer to continue.' })
                  return
                }
                void answer(view)
              }}
            >
              <h1>{view.question}</h1>
              <div className="ffp-field">
                <label htmlFor="planner-answer" className="sr-only">
                  Your answer
                </label>
                <textarea
                  ref={answerRef}
                  id="planner-answer"
                  name="answer"
                  required
                  maxLength={800}
                  rows={4}
                  value={view.answer}
                  placeholder="A short answer is enough."
                  onChange={(event) => setView({ ...view, answer: event.target.value, warning: undefined })}
                  onKeyDown={submitOnShortcut}
                />
              </div>
              {view.warning ? <p className="ffp-warning">{view.warning}</p> : null}
              <div className="ffp-actions">
                <button type="submit" className={buttonClasses('primary')} aria-keyshortcuts="Meta+Enter Control+Enter">
                  Continue
                </button>
                <SubmitHint />
              </div>
              <Privacy />
            </form>
          ) : null}

          {view.kind === 'details' ? (
            <form
              className="ffp-gate"
              onSubmit={(event) => {
                event.preventDefault()
                if (!view.name.trim() || !view.email.trim()) {
                  setView({ ...view, error: 'Enter your name and a work email.' })
                  return
                }
                void claim(view)
              }}
            >
              <div className="ffp-gate-value">
                <p className="ffp-gate-status">
                  <span className="ffp-gate-tick" aria-hidden="true">
                    ✓
                  </span>
                  Questions complete
                </p>
                <p className="ffp-gate-thanks">{view.thanks}</p>
                <article className="ffp-gate-shown">
                  <p className="ffp-label">The agent</p>
                  <h1>{view.agent}</h1>
                  <p>{view.benefit}</p>
                </article>
                <div className="ffp-gate-locked">
                  <div className="ffp-gate-ghost" aria-hidden="true">
                    <div>
                      <p>What the agent does, in order</p>
                      <p>{view.preview?.steps || 'The steps, the tools, and the point where a person still decides.'}</p>
                    </div>
                  </div>
                  <div className="ffp-gate-ghost is-fainter" aria-hidden="true">
                    <div>
                      <p>Where the money shows up</p>
                      <p>{view.preview?.impact || 'Cash, capacity, working capital and revenue.'}</p>
                    </div>
                  </div>
                  <p className="ffp-gate-lock">The rest unlocks with your plan</p>
                </div>
              </div>
              <aside className="ffp-gate-card">
                <h2>Your plan is ready</h2>
                <ul className="ffp-gate-points">
                  <li>
                    <span aria-hidden="true">✓</span>
                    The agent, written from what you told us
                  </li>
                  <li>
                    <span aria-hidden="true">✓</span>
                    The steps, what stays with your team, and where the money shows up
                  </li>
                  <li>
                    <span aria-hidden="true">✓</span>
                    Here on the page, and a copy by email
                  </li>
                </ul>
                <label className="ffp-gate-fieldlabel" htmlFor="planner-name">
                  Your name
                </label>
                <div className="ffp-field">
                  <input
                    ref={nameRef}
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
                <label className="ffp-gate-fieldlabel" htmlFor="planner-email">
                  Work email
                </label>
                <div className="ffp-field">
                  <input
                    id="planner-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={200}
                    placeholder="you@yourfirm.co.uk"
                    value={view.email}
                    onChange={(event) => setView({ ...view, email: event.target.value, error: undefined })}
                  />
                </div>
                {view.error ? <p className="ffp-warning">{view.error}</p> : null}
                <button type="submit" className={buttonClasses('primary', 'ffp-gate-submit')}>
                  Show my plan
                </button>
                <p className="ffp-note">You will see the plan here. A copy arrives by email. Unsubscribe any time.</p>
                <p className="ffp-gate-book">
                  Ready to build it?{' '}
                  <ScopeLink
                    className="ffp-gate-booklink"
                    onOpen={() => {
                      void fetch('/api/agent-planner/cta', { method: 'POST', keepalive: true })
                      trackPlannerEvent('planner_cta_clicked')
                    }}
                  >
                    Book a call
                  </ScopeLink>
                </p>
              </aside>
            </form>
          ) : null}

          {view.kind === 'sent' ? (
            <PlanDocument
              plan={view.full}
              name={view.name}
              email={view.email}
              emailed={view.emailed}
              publicId={view.publicId}
            />
          ) : null}

          {view.kind === 'refusal' || view.kind === 'rate' || view.kind === 'error' ? (
            <div className="ffp-compose">
              <h1>{view.kind === 'refusal' ? 'We cannot plan that from here.' : 'The planner stopped.'}</h1>
              <p className="ffp-lede">{view.message}</p>
              <div className="ffp-actions">
                <button type="button" className={buttonClasses('ink')} onClick={() => void startAgain()}>
                  Describe a process
                </button>
                <Link href="/contact" className={buttonClasses('secondary')}>
                  Book a call
                </Link>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  )
}

function submitOnShortcut(event: KeyboardEvent<HTMLTextAreaElement>) {
  if (event.key !== 'Enter' || event.shiftKey || event.nativeEvent.isComposing) return
  if (!event.metaKey && !event.ctrlKey) return
  if (!window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches) return
  event.preventDefault()
  event.currentTarget.form?.requestSubmit()
}

function SubmitHint() {
  const desktop = useDesktop()
  const mac = useMac()
  if (!desktop || mac === null) return null
  return (
    <p className="ffp-shortcut">
      <kbd>{mac ? '⌘' : 'Ctrl'}</kbd>
      <kbd>Enter</kbd>
    </p>
  )
}

function useMac() {
  const [mac, setMac] = useState<boolean | null>(null)
  useEffect(() => {
    const platform = navigator.platform || ''
    const agent = navigator.userAgent || ''
    setMac(/Mac|iPhone|iPad/.test(platform) || /Mac/.test(agent))
  }, [])
  return mac
}

function useDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)')
    const apply = () => setDesktop(query.matches)
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [])
  return desktop
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
      answer: '',
      warning: typeof record.warning === 'string' ? record.warning : undefined,
    }
  }
  if (record.state === 'details') {
    return {
      kind: 'details',
      problem,
      thanks: typeof record.thanks === 'string' ? record.thanks : 'Thank you for walking through that.',
      agent: typeof record.agent === 'string' ? record.agent : 'The agent should take on the process you described.',
      benefit:
        typeof record.benefit === 'string'
          ? record.benefit
          : 'The plan will show what it does, what stays with your team, and the result worth measuring.',
      preview: readPreview(record.preview),
      name: '',
      email: '',
    }
  }
  if (record.state === 'writing') return { kind: 'writing', problem }
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

function readPreview(value: unknown): { steps: string; impact: string } | null {
  if (!value || typeof value !== 'object') return null
  const record = value as Record<string, unknown>
  if (typeof record.steps !== 'string' || typeof record.impact !== 'string') return null
  return { steps: record.steps, impact: record.impact }
}

function isFull(value: unknown): value is FullPlan {
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return (
    typeof record.title === 'string' &&
    typeof record.outcome === 'string' &&
    typeof record.quote === 'string' &&
    Array.isArray(record.steps) &&
    Array.isArray(record.shifts) &&
    Array.isArray(record.levers) &&
    Array.isArray(record.includes)
  )
}

function statusFor(view: View): string {
  if (view.kind === 'question') return view.question
  if (view.kind === 'writing') return 'Writing the plan.'
  if (view.kind === 'details') return `${view.thanks} ${view.agent} ${view.benefit}`
  if (view.kind === 'sent') return 'The plan is ready.'
  if (view.kind === 'refusal' || view.kind === 'rate' || view.kind === 'error') return view.message
  if (view.kind === 'compose' && view.warning) return view.warning
  return ''
}
