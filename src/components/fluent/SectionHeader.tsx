import clsx from 'clsx'

type SectionHeaderProps = {
  title: string
  subtitle?: string
  subtitleClassName?: string
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  subtitleClassName,
  className,
}: SectionHeaderProps) {
  return (
    <div className={clsx('text-center mb-16', className)}>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'text-lg md:text-xl text-neutral-500',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
