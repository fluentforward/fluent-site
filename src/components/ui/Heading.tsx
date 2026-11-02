import clsx from 'clsx'

type Level = 'h1' | 'h2' | 'h3'
type Size = 'display' | 'display-sm' | 'section' | 'sub'

const sizeClasses: Record<Size, string> = {
  display: 'text-display',
  'display-sm': 'text-display-sm',
  section: 'text-section',
  sub: 'text-sub',
}

const widthClasses: Record<Level, string> = {
  h1: 'max-w-[24ch]',
  h2: 'max-w-[32ch]',
  h3: 'max-w-[28ch]',
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
  const displayWidth =
    size === 'display' || size === 'display-sm' ? 'max-w-[24ch]' : widthClasses[Tag]

  return (
    <Tag
      className={clsx(
        sizeClasses[size],
        'text-balance font-semibold',
        displayWidth,
        tone === 'light' ? 'text-ink' : 'text-paper',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

/** Highlight a trailing phrase in accent (preview-style). */
export function AccentPhrase({ children }: { children: React.ReactNode }) {
  return <span className="text-accent">{children}</span>
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
        tone === 'light' ? 'text-slate' : 'text-lede-dark',
        className,
      )}
    >
      {children}
    </p>
  )
}
