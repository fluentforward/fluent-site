import clsx from 'clsx'

export function CookieToggle({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  id: string
  label: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div className="flex gap-4 border-t border-line pt-6 first:border-t-0 first:pt-0">
      <div className="flex-1">
        <label htmlFor={id} className="text-sub text-ink">
          {label}
        </label>
        <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={clsx(
          'relative mt-1 h-7 w-12 shrink-0 rounded-full border transition-colors duration-300',
          disabled
            ? 'cursor-not-allowed border-line bg-paper-3 opacity-60'
            : 'border-line-strong',
          checked && !disabled ? 'bg-ink' : 'bg-paper-2',
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            'absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-paper shadow-sm transition-transform duration-300',
            checked && 'translate-x-5',
          )}
        />
        <span className="sr-only">{label}</span>
      </button>
    </div>
  )
}
