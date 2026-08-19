import clsx from 'clsx'

export function Container({
  className,
  width = 'page',
  children,
}: {
  className?: string
  width?: 'page' | 'prose'
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'mx-auto px-6 sm:px-8',
        width === 'page' ? 'max-w-page' : 'max-w-prose',
        className,
      )}
    >
      {children}
    </div>
  )
}
