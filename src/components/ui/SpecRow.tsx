import clsx from 'clsx'

/**
 * A single row of the retainer spec table: monospace term on the left, plain
 * definition on the right. Deliberately reads like product documentation.
 */
export function SpecRow({
  term,
  children,
  tone = 'light',
}: {
  term: string
  children: React.ReactNode
  tone?: 'light' | 'dark'
}) {
  return (
    <div
      className={clsx(
        'grid gap-2 border-t py-5 first:border-t-0 first:pt-0 md:grid-cols-[13rem_1fr] md:gap-8',
        tone === 'light' ? 'border-line' : 'border-line-dark',
      )}
    >
      <dt
        className={clsx(
          'pt-1 font-mono text-label uppercase',
          tone === 'light' ? 'text-mist' : 'text-mist',
        )}
      >
        {term}
      </dt>
      <dd className={tone === 'light' ? 'text-ink' : 'text-paper'}>
        {children}
      </dd>
    </div>
  )
}
