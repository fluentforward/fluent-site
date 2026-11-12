import clsx from 'clsx'

/*
  Button looks, kept out of the client Button module so server components can use them too
  (for example the booking link in the home hero).
*/

export type ButtonVariant = 'primary' | 'secondary' | 'ink' | 'ghost' | 'onDark' | 'onDarkGhost'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-ink hover:bg-accent-2 active:scale-[0.98] font-semibold',
  secondary:
    'border-line-strong text-ink hover:bg-paper-2 active:scale-[0.98] border bg-transparent font-semibold',
  ink:
    'border border-transparent bg-ink text-paper hover:bg-ink-3 active:scale-[0.98] font-semibold',
  ghost:
    'border border-white/28 text-paper hover:border-white hover:bg-white/6 active:scale-[0.98] bg-transparent font-semibold',
  onDark:
    'bg-accent text-ink hover:bg-accent-2 active:scale-[0.98] font-semibold',
  onDarkGhost:
    'border border-white/28 text-paper hover:border-white hover:bg-white/6 active:scale-[0.98] bg-transparent font-semibold',
}

const base =
  'rounded-btn inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.9375rem] tracking-[-0.005em] transition-[color,background-color,transform,border-color] duration-300 ease-[cubic-bezier(0.2,0.7,0.1,1)]'

export function buttonClasses(variant: ButtonVariant = 'primary', className?: string) {
  return clsx(base, variantClasses[variant], className)
}
