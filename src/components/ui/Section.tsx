import clsx from 'clsx'

import { Container } from './Container'

type Tone = 'paper' | 'muted' | 'ink'

const toneClasses: Record<Tone, string> = {
  paper: 'bg-paper',
  muted: 'bg-paper-2',
  ink: 'bg-ink text-mist',
}

export function Section({
  id,
  tone = 'paper',
  border = false,
  size = 'default',
  className,
  containerClassName,
  width,
  children,
}: {
  id?: string
  tone?: Tone
  /** Adds a hairline above the section. Use between two same-tone sections. */
  border?: boolean
  size?: 'default' | 'compact' | 'loose'
  className?: string
  containerClassName?: string
  width?: 'page' | 'prose'
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={clsx(
        toneClasses[tone],
        border &&
          (tone === 'ink'
            ? 'border-t border-line-dark'
            : 'border-t border-line'),
        size === 'compact' && 'py-16 md:py-24',
        size === 'default' && 'py-24 md:py-36',
        size === 'loose' && 'py-28 md:py-44',
        className,
      )}
    >
      <Container width={width} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
