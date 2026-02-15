import clsx from 'clsx'

type SectionContainerProps = {
  className?: string
  children: React.ReactNode
}

export function SectionContainer({ className, children }: SectionContainerProps) {
  return (
    <div className={clsx('max-w-[1200px] mx-auto px-[5%]', className)}>
      {children}
    </div>
  )
}
