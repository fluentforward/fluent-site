'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react'

import { rememberProblem } from '@/components/booking/ScopeLink'

import { useReducedMotion } from './hooks'
import { Chevron, Tag } from './Mark'
import { EXAMPLES, sketchFrom, toolsIn, type Sketch, type Term, type TermKind } from './sketch'

type Action =
  | { type: 'wait'; ms: number }
  | { type: 'erase' }
  | { type: 'type'; text: string; speed?: number }

type Owner = 'demo' | 'example' | 'visitor'

/** Reading hold from the house motion rules: 0.3s a word plus time to watch the agent settle. */
const holdFor = (text: string) => 300 * text.split(/\s+/).length + 1900

const SKELETON = [0, 1, 2, 3, 4].map((index) => ({ text: '', human: index === 3 }))

type Wire = { id: string; d: string; kind: TermKind; x: number; y: number; delay: number }

const termKey = (text: string, term: Term) => `${term.kind}:${text.slice(term.start, term.end).toLowerCase()}`

function Highlighted({ text, terms }: { text: string; terms: Term[] }) {
  const parts: React.ReactNode[] = []
  let at = 0
  for (const term of terms) {
    if (term.start > at) parts.push(text.slice(at, term.start))
    const phrase = text.slice(term.start, term.end)
    parts.push(
      <mark
        key={`${term.kind}:${phrase.toLowerCase()}:${term.start}`}
        data-key={`${term.kind}:${phrase.toLowerCase()}`}
        className={`ffh-mark is-${term.kind}`}
      >
        {phrase}
      </mark>,
    )
    at = term.end
  }
  parts.push(text.slice(at))
  return <span className="ffh-mirror-text">{parts}</span>
}

function AgentPane({
  sketch,
  run,
  animate,
}: {
  sketch: Sketch
  run: 'a' | 'b' | undefined
  animate: boolean
}) {
  const ready = sketch.status === 'ready'
  const steps = ready ? sketch.steps : SKELETON

  return (
    <div className="ffh-agent">
      <div className="ffh-agent-head">
        <p className="ffh-mono text-mist">Your agent</p>
        <p className="ffh-agent-note">A rough sketch, not a plan. We confirm what is buildable on the call.</p>
      </div>
      <p className="ffh-agent-name" data-target="name" key={ready ? sketch.name : sketch.status}>
        {ready ? (
          sketch.name
        ) : (
          <span className="text-mist">
            {sketch.status === 'listening' ? 'Keep going…' : 'Tell us the problem'}
          </span>
        )}
      </p>
      <ol className="ffh-flow" data-run={animate ? run : undefined}>
        <li aria-hidden="true" className="ffh-flow-line" />
        {animate && run ? <li aria-hidden="true" key={run} className="ffh-flow-run" /> : null}
        <li
          data-target="trigger"
          className={clsx('ffh-node is-trigger', sketch.triggerFromText && 'is-heard')}
          style={{ '--i': 0 } as CSSProperties}
        >
          <span aria-hidden="true" className="ffh-glyph" />
          {sketch.trigger ? (
            <span key={sketch.trigger} className="ffh-swap">
              <span className="sr-only">Starts: </span>
              {sketch.trigger}
            </span>
          ) : (
            <span className="ffh-skel" style={{ width: '44%' }} />
          )}
        </li>
        {steps.map((step, index) => (
          <li
            key={ready ? step.text : `skeleton-${index}`}
            data-target={ready ? toolsIn(step.text).map((id) => `tool:${id}`).join(' ') || undefined : undefined}
            className={clsx('ffh-node', step.human && 'is-human', index === 4 && 'is-out')}
            style={{ '--i': index + 1 } as CSSProperties}
          >
            <span aria-hidden="true" className="ffh-glyph" />
            {ready ? (
              <span className="min-w-0">{step.text}</span>
            ) : (
              <span className="ffh-skel" style={{ width: `${52 + ((index * 17) % 34)}%` }} />
            )}
            {step.human && ready ? <span className="ffh-person">A person</span> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function HeroConsole() {
  const reduced = useReducedMotion()
  const animate = reduced === false
  const [text, setText] = useState<string>(EXAMPLES[0].text)
  const [owner, setOwner] = useState<Owner>('demo')
  const [typing, setTyping] = useState(false)
  const [selecting, setSelecting] = useState(false)
  const [holding, setHolding] = useState(false)
  const [runCount, setRunCount] = useState(0)
  const [announce, setAnnounce] = useState('')
  const [idle, setIdle] = useState(true)
  const runRef = useRef(0)
  const visibleRef = useRef(true)
  const rootRef = useRef<HTMLDivElement>(null)
  const areaRef = useRef<HTMLTextAreaElement>(null)
  const mirrorRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const seenRef = useRef<Set<string> | null>(null)
  const [wires, setWires] = useState<Wire[]>([])
  const id = useId()

  // The generic fallback only appears once typing pauses, so the sketch never guesses mid-sentence.
  const sketch = useMemo(() => sketchFrom(text, { allowCustom: idle && !typing }), [text, idle, typing])

  useEffect(() => {
    setIdle(false)
    const timer = window.setTimeout(() => setIdle(true), 900)
    return () => window.clearTimeout(timer)
  }, [text])
  const signature = [
    sketch.status,
    sketch.name,
    sketch.trigger,
    ...sketch.steps.map((step) => step.text),
    ...sketch.tools.map((tool) => tool.id),
  ].join('|')

  /** Plays a scripted typing sequence. A new call, or the visitor taking over, cancels it. */
  const play = useCallback((actions: Action[], onDone?: () => void) => {
    const token = ++runRef.current
    let index = 0
    let char = 0
    const next = () => {
      if (token !== runRef.current) return
      if (!visibleRef.current || document.hidden) {
        window.setTimeout(next, 200)
        return
      }
      const action = actions[index]
      if (!action) {
        setTyping(false)
        setHolding(false)
        onDone?.()
        return
      }
      if (action.type === 'wait') {
        index += 1
        setHolding(true)
        window.setTimeout(next, action.ms)
        return
      }
      setHolding(false)
      if (action.type === 'erase') {
        setSelecting(true)
        window.setTimeout(() => {
          if (token !== runRef.current) return
          setSelecting(false)
          setText('')
          index += 1
          window.setTimeout(next, 280)
        }, 440)
        return
      }
      setTyping(true)
      char += 1
      setText(action.text.slice(0, char))
      const typed = action.text[char - 1]
      if (char >= action.text.length) {
        char = 0
        index += 1
        setTyping(false)
      }
      const base = action.speed ?? 32
      const jitter = action.speed ? 0 : (action.text.charCodeAt(char % action.text.length) * 13) % 28
      const pause = action.speed ? 0 : typed === ',' ? 170 : typed === '.' ? 260 : 0
      window.setTimeout(next, base + jitter + pause)
    }
    next()
  }, [])

  // When a phrase is newly recognised, draw a wire from the words to the part of the agent they created.
  useLayoutEffect(() => {
    if (!animate) return
    const body = bodyRef.current
    if (!body) return
    const keys = sketch.terms.map((term) => termKey(text, term))
    const first = seenRef.current === null
    const seen = seenRef.current ?? new Set<string>()
    seenRef.current = new Set(keys)
    // Words already on screen at load just underline. Wires are for words as they land.
    if (first || !window.matchMedia('(min-width: 768px)').matches) return
    const base = body.getBoundingClientRect()
    const field = body.querySelector('.ffh-field')?.getBoundingClientRect()
    const fresh: Wire[] = []
    sketch.terms.forEach((term, index) => {
      const key = keys[index]
      if (seen.has(key) || term.kind === 'people') return
      const mark = body.querySelector(`mark[data-key="${CSS.escape(key)}"]`)
      const target = body.querySelector(
        `[data-target~="${term.kind === 'tool' ? `tool:${term.ref}` : term.ref}"]`,
      )
      if (!mark || !target) return
      const lines = mark.getClientRects()
      const from = lines[lines.length - 1]
      const to = target.getBoundingClientRect()
      // Leave from the end of the word's underline, run along the line gap to the edge of the
      // text column, then sweep across to the agent.
      const x1 = from.right - base.left
      const y1 = from.bottom - base.top - 1
      const xr = Math.max(x1 + 6, (field?.right ?? from.right) - base.left + 14)
      const x2 = to.left - base.left - 8
      const y2 = to.top + Math.min(to.height, 28) / 2 - base.top
      if (x2 - xr < 30) return
      const mid = xr + (x2 - xr) * 0.5
      const d = `M${x1.toFixed(1)} ${y1.toFixed(1)} L${xr.toFixed(1)} ${y1.toFixed(1)} C${mid.toFixed(1)} ${y1.toFixed(1)}, ${mid.toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`
      fresh.push({
        id: `${key}:${performance.now()}`,
        d,
        kind: term.kind,
        x: x2,
        y: y2,
        delay: fresh.length * 120,
      })
    })
    if (!fresh.length) return
    setWires((current) => [...current, ...fresh])
    const ids = new Set(fresh.map((wire) => wire.id))
    const timer = window.setTimeout(
      () => setWires((current) => current.filter((wire) => !ids.has(wire.id))),
      2400 + fresh[fresh.length - 1].delay,
    )
    return () => window.clearTimeout(timer)
    // terms and text change together; signature covers the agent side
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, text, signature])

  useEffect(() => {
    const cancel = runRef
    return () => {
      cancel.current += 1
    }
  }, [])

  useEffect(() => {
    const element = rootRef.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // The demo plays once through three examples, then rests. Focus or an example click stops it.
  useEffect(() => {
    if (!animate) return
    const [first, second, third] = EXAMPLES
    play([
      { type: 'wait', ms: 3400 },
      { type: 'erase' },
      { type: 'type', text: second.text },
      { type: 'wait', ms: holdFor(second.text) },
      { type: 'erase' },
      { type: 'type', text: third.text },
      { type: 'wait', ms: holdFor(third.text) },
      { type: 'erase' },
      { type: 'type', text: first.text },
    ])
  }, [animate, play])

  // Once the sketch stops changing, the agent "runs" once down its steps.
  useEffect(() => {
    if (sketch.status !== 'ready') return
    const timer = window.setTimeout(() => setRunCount((count) => count + 1), 420)
    return () => window.clearTimeout(timer)
  }, [signature, sketch.status])

  useEffect(() => {
    if (owner === 'demo' || sketch.status !== 'ready') return
    const timer = window.setTimeout(() => {
      setAnnounce(
        `Sketch: ${sketch.name}. Starts ${sketch.trigger.toLowerCase()}. ${sketch.steps
          .map((step) => step.text)
          .join('. ')}.`,
      )
    }, 800)
    return () => window.clearTimeout(timer)
    // signature captures every visible change in the sketch
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature, owner])

  // Whatever the visitor typed goes with them into the booking popup.
  useEffect(() => {
    if (owner === 'visitor') rememberProblem(text)
  }, [owner, text])

  const takeOver = () => {
    if (owner === 'visitor') return
    runRef.current += 1
    setTyping(false)
    setSelecting(false)
    setHolding(false)
    setOwner('visitor')
    window.requestAnimationFrame(() => areaRef.current?.select())
  }

  const showExample = (example: (typeof EXAMPLES)[number]) => {
    setOwner('example')
    if (!animate) {
      runRef.current += 1
      setText(example.text)
      return
    }
    play([{ type: 'erase' }, { type: 'type', text: example.text, speed: 11 }])
  }

  const run = runCount === 0 ? undefined : runCount % 2 ? 'a' : 'b'
  const showCaret = owner !== 'visitor' && (typing || holding)

  return (
    <div ref={rootRef} className="ffh-console" data-owner={owner}>
      <div className="ffh-console-bar">
        <span className="inline-flex shrink-0 items-center gap-2.5">
          <Chevron className="h-[10px] w-[10px]" />
          Problem in, agent out
        </span>
        <div className="ffh-examples" role="group" aria-label="Try an example">
          <span className="ffh-examples-label">Try</span>
          {EXAMPLES.map((example) => (
            <button
              key={example.id}
              type="button"
              className="ffh-example"
              aria-pressed={text === example.text}
              onClick={() => showExample(example)}
            >
              {example.label}
            </button>
          ))}
        </div>
        <Tag className="shrink-0">{owner === 'visitor' ? 'Rough sketch' : 'Example'}</Tag>
      </div>

      <div ref={bodyRef} className="ffh-console-body">
        {wires.length ? (
          <svg className="ffh-wires" aria-hidden="true">
            {wires.map((wire) => (
              <g key={wire.id} className={`ffh-wire is-${wire.kind}`} style={{ '--d': `${wire.delay}ms` } as CSSProperties}>
                <path d={wire.d} pathLength={1} />
                <circle cx={wire.x} cy={wire.y} r={3} />
              </g>
            ))}
          </svg>
        ) : null}
        <form action="/agent-planner" method="get" className="ffh-pane-in">
          <label htmlFor={`${id}-q`} className="ffh-mono text-mist">
            Tell us the problem
          </label>
          <div className={clsx('ffh-field', selecting && 'is-selecting')}>
            <div ref={mirrorRef} aria-hidden="true" className="ffh-mirror">
              <Highlighted text={text} terms={sketch.terms} />
              {showCaret ? <span className={clsx('ffh-caret', holding && 'is-idle')} /> : null}
              {'​'}
            </div>
            <textarea
              ref={areaRef}
              id={`${id}-q`}
              name="q"
              value={text}
              rows={4}
              maxLength={500}
              spellCheck={false}
              autoComplete="off"
              placeholder="e.g. Every month two people spend three days building client reports from Xero, our CRM and a spreadsheet."
              aria-describedby={`${id}-privacy`}
              onFocus={takeOver}
              onChange={(event) => {
                setOwner('visitor')
                setText(event.target.value)
              }}
              onScroll={(event) => {
                if (mirrorRef.current) mirrorRef.current.scrollTop = event.currentTarget.scrollTop
              }}
            />
          </div>

          <div className="ffh-pane-actions">
            <button type="submit" className="ffh-btn ffh-btn-primary">
              Plan my agent
            </button>
            <span className="text-sm text-mist">Full plan by email.</span>
          </div>

          <p id={`${id}-privacy`} className="ffh-privacy">
            Please don&apos;t include personal, client or confidential data. Describe the process, not
            the people.{' '}
            <Link href="/privacy" prefetch={false}>
              Privacy notice
            </Link>
          </p>
        </form>

        <div className="ffh-hinge" aria-hidden="true">
          <span className="ffh-hinge-node" data-run={animate ? run : undefined}>
            <Chevron className="h-3 w-3" />
          </span>
        </div>

        <AgentPane sketch={sketch} run={run} animate={animate} />
      </div>

      <p className="sr-only" aria-live="polite">
        {announce}
      </p>
    </div>
  )
}
