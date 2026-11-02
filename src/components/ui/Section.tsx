import clsx from 'clsx'

import { Container } from './Container'

type Tone = 'paper' | 'muted' | 'ink'

const toneClasses: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  muted: 'bg-paper-2 text-ink',
  ink: 'bg-ink text-lede-dark section-ambient-dark relative overflow-hidden',
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
