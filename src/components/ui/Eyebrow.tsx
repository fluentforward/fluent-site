import clsx from 'clsx'

export function Eyebrow({
  tone = 'light',
  dot = true,
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  /** Orange pulse dot (preview default). Set false for minimal labels. */
  dot?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em]',
        tone === 'light' ? 'text-mist-d' : 'text-mist',
        className,
      )}
    >
      {dot ? <span aria-hidden="true" className="eyebrow-dot shrink-0" /> : null}
      {children}
    </span>
  )
}
