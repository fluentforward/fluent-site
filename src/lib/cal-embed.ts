import { cal } from '@/content/cal'

type CalQueueApi = ((...args: unknown[]) => void) & { q?: unknown[] }
type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean
  q?: unknown[]
  ns?: Record<string, CalQueueApi>
}

declare global {
  interface Window {
    Cal?: CalApi
  }
}

/**
 * Cal.com's official loader stub, typed. It queues calls made before
 * embed.js finishes downloading, so it is safe to call immediately.
 */
export function loadCal() {
  const push = (target: CalApi | CalQueueApi, args: unknown[]) => {
    target.q = target.q ?? []
    target.q.push(args)
  }

  window.Cal =
    window.Cal ??
    function (...args: unknown[]) {
      const instance = window.Cal as CalApi

      if (!instance.loaded) {
        instance.ns = {}
        instance.q = instance.q ?? []
        const script = document.createElement('script')
        script.src = cal.scriptSrc
        document.head.appendChild(script)
        instance.loaded = true
      }

      if (args[0] === 'init') {
        const namespace = args[1]
        const api = ((...apiArgs: unknown[]) =>
          push(api as CalQueueApi, apiArgs)) as CalQueueApi
        api.q = api.q ?? []

        if (typeof namespace === 'string') {
          instance.ns = instance.ns ?? {}
          instance.ns[namespace] = instance.ns[namespace] ?? api
          push(instance.ns[namespace], args)
          push(instance, ['initNamespace', namespace])
        } else {
          push(instance, args)
        }
        return
      }

      push(instance, args)
    }

  window.Cal('init', cal.namespace, { origin: cal.origin })

  return window.Cal.ns?.[cal.namespace]
}
