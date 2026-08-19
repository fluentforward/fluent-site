import clsx from 'clsx'

export function Eyebrow({
  tone = 'light',
  rule = true,
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  rule?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={clsx(
        'flex items-center gap-3 font-mono text-label uppercase',
        tone === 'light' ? 'text-mist' : 'text-mist',
        className,
      )}
    >
      {rule && (
        <span
          aria-hidden="true"
          className={clsx(
            'h-px w-6 shrink-0',
            tone === 'light' ? 'bg-steel' : 'bg-mist',
          )}
        />
      )}
      {children}
    </span>
  )
}
