import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <g className={clsx(
        'transition-all duration-300',
        invert ? 'fill-white' : 'fill-[#102542]',
        filled ? 'opacity-100' : 'opacity-0 group-hover/logo:opacity-100'
      )}>
        {/* Main curved shape */}
        <path d="M4 16 C4 8 8 4 16 4 C24 4 28 8 28 16 C28 24 24 28 16 28 C8 28 4 24 4 16 Z" />
        {/* Orchestration waves */}
        <path 
          d="M8 12 C12 12 20 12 24 12" 
          className="stroke-[#0047AB] stroke-2 fill-none"
          strokeLinecap="round"
        />
        <path 
          d="M8 16 C12 16 20 16 24 16" 
          className="stroke-[#0047AB] stroke-2 fill-none"
          strokeLinecap="round"
        />
        <path 
          d="M8 20 C12 20 20 20 24 20" 
          className="stroke-[#0047AB] stroke-2 fill-none"
          strokeLinecap="round"
        />
        {/* Connection points */}
        <circle cx="8" cy="12" r="1.5" className="fill-[#0047AB]" />
        <circle cx="24" cy="12" r="1.5" className="fill-[#0047AB]" />
        <circle cx="8" cy="16" r="1.5" className="fill-[#0047AB]" />
        <circle cx="24" cy="16" r="1.5" className="fill-[#0047AB]" />
        <circle cx="8" cy="20" r="1.5" className="fill-[#0047AB]" />
        <circle cx="24" cy="20" r="1.5" className="fill-[#0047AB]" />
        {/* Central node */}
        <circle cx="16" cy="16" r="2" className="fill-[#0047AB]" />
      </g>
      <g className={clsx(
        'transition-all duration-300',
        invert ? 'stroke-white' : 'stroke-[#102542]',
        filled ? 'opacity-0' : 'opacity-100 group-hover/logo:opacity-0'
      )}>
        {/* Outline version */}
        <path 
          d="M4 16 C4 8 8 4 16 4 C24 4 28 8 28 16 C28 24 24 28 16 28 C8 28 4 24 4 16 Z" 
          fill="none" 
          strokeWidth="1.5"
        />
        <path 
          d="M8 12 C12 12 20 12 24 12" 
          className="stroke-[#0047AB] stroke-2 fill-none"
          strokeLinecap="round"
        />
        <path 
          d="M8 16 C12 16 20 16 24 16" 
          className="stroke-[#0047AB] stroke-2 fill-none"
          strokeLinecap="round"
        />
        <path 
          d="M8 20 C12 20 20 20 24 20" 
          className="stroke-[#0047AB] stroke-2 fill-none"
          strokeLinecap="round"
        />
        <circle cx="8" cy="12" r="1.5" className="fill-[#0047AB]" />
        <circle cx="24" cy="12" r="1.5" className="fill-[#0047AB]" />
        <circle cx="8" cy="16" r="1.5" className="fill-[#0047AB]" />
        <circle cx="24" cy="16" r="1.5" className="fill-[#0047AB]" />
        <circle cx="8" cy="20" r="1.5" className="fill-[#0047AB]" />
        <circle cx="24" cy="20" r="1.5" className="fill-[#0047AB]" />
        <circle cx="16" cy="16" r="2" className="fill-[#0047AB]" />
      </g>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 250 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >      
      <text
        x="52"
        y="24"
        className={clsx(
          'font-display text-xl font-semibold',
          invert ? 'fill-white' : 'fill-[#102542]'
        )}
      >
        Orchestrate Legal
      </text>
    </svg>
  )
}
