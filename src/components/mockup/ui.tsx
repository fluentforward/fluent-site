import clsx from 'clsx'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { FOOTNOTE } from '@/lib/motion'

export function MockTag({
  label,
  tone = 'dark',
}: {
  label: 'Illustration' | 'Example'
  tone?: 'dark' | 'light'
}) {
  return <span className={tone === 'light' ? 'ffm-tag ffm-tag-light' : 'ffm-tag'}>{label}</span>
}

export function TenDayNote({
  id,
  tone = 'dark',
}: {
  id: string
  tone?: 'dark' | 'light'
}) {
  return (
    <p
      id={id}
      className={clsx(
        'mt-4 max-w-[46ch] font-mono text-[12px] leading-relaxed tracking-[0.01em]',
        tone === 'dark' ? 'text-mist' : 'text-mist-d',
      )}
    >
      * {FOOTNOTE}
    </p>
  )
}

export function HeroCopy({
  heading,
  tone,
  noteId,
  option,
}: {
  heading: 'h1' | 'p'
  tone: 'dark' | 'light'
  noteId: string
  option: string
}) {
  const Heading = heading
  const Option = heading === 'h1' ? 'p' : 'h2'
  const ink = tone === 'dark'

  return (
    <div>
      <Option
        className={clsx(
          'font-mono text-[12px] font-normal uppercase tracking-[0.08em]',
          ink ? 'text-mist' : 'text-mist-d',
        )}
      >
        {option}
      </Option>
      <p
        className={clsx(
          'mt-5 inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em]',
          ink ? 'text-mist' : 'text-mist-d',
        )}
      >
        <span aria-hidden="true" className="eyebrow-dot shrink-0" />
        10-Day Agent Build
      </p>
      <Heading
        className={clsx(
          'text-display mt-5 max-w-[22ch] text-balance font-semibold',
          ink ? 'text-paper' : 'text-ink',
        )}
      >
        Tell us the problem. We&apos;ll build the agent that{' '}
        <span className="text-accent">fixes it.</span>
      </Heading>
      <p
        className={clsx(
          'text-sub mt-6 max-w-[28ch]',
          ink ? 'text-lede-dark' : 'text-slate',
        )}
      >
        Live in{' '}
        <span aria-describedby={noteId}>10 working days*</span>, hosted and looked
        after by us, improving every month.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href="/contact" prefetch={false} variant={ink ? 'primary' : 'primary'}>
          Scope your agent
        </Button>
        <Button href="/agent-planner" prefetch={false} variant={ink ? 'ghost' : 'secondary'}>
          Try the Agent Planner →
        </Button>
      </div>
      <p className={clsx('mt-3 max-w-[36ch] text-sm', ink ? 'text-mist' : 'text-mist-d')}>
        Describe a problem. See your first agent in under three minutes.
      </p>
      <TenDayNote id={noteId} tone={tone} />
    </div>
  )
}

export function PauseButtons({
  paused,
  onToggle,
  onReplay,
  loop,
  settled,
  tone = 'dark',
  label,
}: {
  paused: boolean
  onToggle: () => void
  onReplay: () => void
  loop: boolean
  settled: boolean
  tone?: 'dark' | 'light'
  label: string
}) {
  const className = tone === 'light' ? 'ffm-control ffm-control-ink' : 'ffm-control'
  if (!loop && settled) {
    return (
      <button type="button" className={className} onClick={onReplay}>
        Replay {label}
      </button>
    )
  }
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className={className}
        aria-pressed={paused}
        onClick={onToggle}
      >
        {paused ? `Play ${label}` : `Pause ${label}`}
      </button>
      <button type="button" className={className} onClick={onReplay}>
        Replay
      </button>
    </div>
  )
}

export function OwnProblemForm({
  id,
  tone = 'dark',
  onFocus,
}: {
  id: string
  tone?: 'dark' | 'light'
  onFocus?: () => void
}) {
  return (
    <form action="/agent-planner" method="get" className="mt-4">
      <label
        htmlFor={id}
        className={clsx(
          'font-mono text-[12px] uppercase tracking-[0.08em]',
          tone === 'dark' ? 'text-mist' : 'text-mist-d',
        )}
      >
        Try your own problem
      </label>
      <div className="ffm-input-row mt-2">
        <input
          id={id}
          name="q"
          className={tone === 'dark' ? 'ffm-input' : 'ffm-input ffm-input-light'}
          placeholder="e.g. Two days a month on reports"
          autoComplete="off"
          maxLength={500}
          onFocus={onFocus}
        />
        <button
          type="submit"
          className="rounded-btn inline-flex min-h-[52px] shrink-0 items-center justify-center whitespace-nowrap bg-accent px-5 font-semibold text-ink transition-colors duration-200 hover:bg-accent-2"
        >
          Plan my agent
        </button>
      </div>
      <p className={clsx('mt-2 text-sm leading-relaxed', tone === 'dark' ? 'text-mist' : 'text-mist-d')}>
        Please don&apos;t include personal, client or confidential data. Describe the
        process, not the people.{' '}
        <Link href="/privacy" className={tone === 'dark' ? 'text-paper underline underline-offset-4' : 'text-ink underline underline-offset-4'}>
          Privacy notice
        </Link>
      </p>
    </form>
  )
}
