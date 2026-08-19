import clsx from 'clsx'

export function Card({
  tone = 'light',
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'rounded-card border p-7 md:p-8',
        tone === 'light' ? 'border-line bg-paper' : 'border-line-dark bg-ink-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
