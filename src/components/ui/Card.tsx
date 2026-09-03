import clsx from 'clsx'

export function Card({
  tone = 'light',
  hover = false,
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  /** Subtle lift on hover — use on interactive-feeling cards */
  hover?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'rounded-card border p-8 md:p-9',
        tone === 'light' ? 'border-line bg-paper' : 'border-line-dark bg-ink-2',
        hover && 'card-lift shadow-card',
        className,
      )}
    >
      {children}
    </div>
  )
}
