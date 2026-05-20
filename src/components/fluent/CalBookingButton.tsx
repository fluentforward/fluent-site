'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import clsx from 'clsx'

type CalNamespaceApi = ((...args: unknown[]) => void) & { q?: unknown[] }
type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean
  q?: unknown[]
  ns?: Record<string, CalNamespaceApi>
}

declare global {
  interface Window {
    Cal?: CalApi
  }
}

const primaryButtonClasses =
  'inline-block px-8 py-4 text-lg font-semibold rounded transition-all duration-300 bg-fluent-red text-white border-2 border-fluent-red hover:bg-transparent hover:text-fluent-red'

type CalBookingButtonProps = {
  className?: string
  showArrow?: boolean
  label?: ReactNode
  children?: ReactNode
}

export function CalBookingButton({
  label,
  children,
  className,
  showArrow = false,
}: CalBookingButtonProps) {
  useEffect(() => {
    ((C, A, L) => {
      const p = (a: CalNamespaceApi | CalApi, ar: IArguments | unknown[]) => {
        a.q = a.q || []
        a.q.push(ar)
      }
      const d = C.document

      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal as CalApi
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            const script = d.createElement('script')
            script.src = A
            d.head.appendChild(script)
            cal.loaded = true
          }

          if (args[0] === L) {
            const namespace = args[1]
            const api = ((...apiArgs: unknown[]) =>
              p(api as CalNamespaceApi, apiArgs)) as CalNamespaceApi
            api.q = api.q || []
            if (typeof namespace === 'string') {
              cal.ns = cal.ns || {}
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], args)
              p(cal, ['initNamespace', namespace])
            } else {
              p(cal, args)
            }
            return
          }

          p(cal, args)
        }
    })(window, 'https://app.cal.eu/embed/embed.js', 'init')

    window.Cal?.('init', '30min', { origin: 'https://app.cal.eu' })
    window.Cal?.ns?.['30min']?.('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  const inner =
    children !== undefined && children !== null ? (
      children
    ) : (
      <>
        {label}
        {showArrow ? <span className="ml-1">→</span> : null}
      </>
    )

  return (
    <a
      href="#"
      className={clsx(primaryButtonClasses, className)}
      data-cal-link="matthew-todd/30min"
      data-cal-namespace="30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      {inner}
    </a>
  )
}
