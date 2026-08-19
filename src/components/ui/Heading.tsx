import clsx from 'clsx'

type Level = 'h1' | 'h2' | 'h3'
type Size = 'display' | 'display-sm' | 'section' | 'sub'

const sizeClasses: Record<Size, string> = {
  display: 'text-display',
  'display-sm': 'text-display-sm',
  section: 'text-section',
  sub: 'text-sub',
}

export function Heading({
  as: Tag = 'h2',
  size = 'section',
  tone = 'light',
  className,
  children,
}: {
  as?: Level
  size?: Size
  tone?: 'light' | 'dark'
  className?: string
  children: React.ReactNode
}) {
  return (
    <Tag
      className={clsx(
        sizeClasses[size],
        tone === 'light' ? 'text-ink' : 'text-paper',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function Lede({
  tone = 'light',
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  className?: string
  children: React.ReactNode
}) {
  return (
    <p
      className={clsx(
        'text-lede',
        tone === 'light' ? 'text-slate' : 'text-mist',
        className,
      )}
    >
      {children}
    </p>
  )
}
