import clsx from 'clsx'

/** The FluentForward chevron, as used in the logo. */
export function Chevron({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span
      aria-hidden="true"
      className={clsx('inline-block shrink-0 bg-accent', className)}
      style={{
        clipPath: 'polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%, 45% 50%)',
        ...style,
      }}
    />
  )
}

export function Eyebrow({
  tone = 'dark',
  className,
  children,
}: {
  tone?: 'dark' | 'light'
  className?: string
  children: React.ReactNode
}) {
  return (
    <p
      className={clsx(
        'ffh-mono inline-flex items-center gap-2.5',
        tone === 'dark' ? 'text-mist' : 'text-mist-d',
        className,
      )}
    >
      <span aria-hidden="true" className="eyebrow-dot shrink-0" />
      {children}
    </p>
  )
}

export function Tag({
  children,
  tone = 'dark',
  className,
}: {
  children: React.ReactNode
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <span className={clsx('ffh-tag', tone === 'light' && 'ffh-tag-light', className)}>
      {children}
    </span>
  )
}

export const FOOTNOTE =
  'Once we have access to your systems, the data the agent needs, and scope agreed in writing.'

export const OWNERSHIP =
  'You own your data, processes and outputs. We host, run and improve the agents.'
