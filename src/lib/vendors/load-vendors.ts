import {
  clearMarketingAttribution,
  captureMarketingAttributionFromUrl,
} from '@/lib/marketing-attribution'
import type { StoredCookieConsent } from '@/lib/cookie-consent/types'
import { vendorEnvIds } from '@/lib/vendors/env-ids'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
    _linkedin_partner_id?: string
    _linkedin_data_partner_ids?: string[]
  }
}

let ga4ConsentModeInitialized = false
let metaLoaded = false
let linkedInLoaded = false

/** Google Consent Mode v2 defaults — must run before gtag js/config. */
export const GTAG_CONSENT_DEFAULT_DENIED = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500,
} as const

function injectScript(src: string, id?: string): void {
  if (id && document.getElementById(id)) return
  const script = document.createElement('script')
  script.async = true
  script.src = src
  if (id) script.id = id
  document.head.appendChild(script)
}

function ensureGtagStub(): (...args: unknown[]) => void {
  window.dataLayer = window.dataLayer ?? []
  if (window.gtag) return window.gtag
  // gtag.js only processes Arguments-like queue entries (not rest-param Arrays).
  const gtag = function gtag() {
    window.dataLayer?.push(arguments)
  } as (...args: unknown[]) => void
  window.gtag = gtag
  return gtag
}

/** Load GA4 with Consent Mode v2 advanced: default denied, cookieless pings while denied. */
export function ensureGa4ConsentMode(measurementId: string): void {
  if (ga4ConsentModeInitialized) return
  ga4ConsentModeInitialized = true

  const gtag = ensureGtagStub()
  gtag('consent', 'default', { ...GTAG_CONSENT_DEFAULT_DENIED })
  gtag('js', new Date())
  injectScript(
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`,
    'ff-ga4',
  )
  gtag('config', measurementId)
}

export function gtagConsentStateFromChoice(choice: {
  analytics: boolean
  marketing: boolean
}): Record<string, 'granted' | 'denied'> {
  return {
    analytics_storage: choice.analytics ? 'granted' : 'denied',
    ad_storage: choice.marketing ? 'granted' : 'denied',
    ad_user_data: choice.marketing ? 'granted' : 'denied',
    ad_personalization: choice.marketing ? 'granted' : 'denied',
  }
}

export function applyGtagConsentUpdate(
  choice: Pick<StoredCookieConsent, 'analytics' | 'marketing'>,
): void {
  const gtag = window.gtag
  if (!gtag) return
  gtag('consent', 'update', gtagConsentStateFromChoice(choice))
}

type FbqStub = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[]
  loaded?: boolean
  version?: string
}

function loadMetaPixel(pixelId: string): void {
  if (metaLoaded) return
  metaLoaded = true
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args)
      } else {
        fbq.queue.push(args)
      }
    } as FbqStub
    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'
    window.fbq = fbq
    window._fbq = fbq
    injectScript(
      'https://connect.facebook.net/en_US/fbevents.js',
      'ff-meta-pixel',
    )
  }
  window.fbq?.('init', pixelId)
  window.fbq?.('track', 'PageView')
}

function loadLinkedInInsight(partnerId: string): void {
  if (linkedInLoaded) return
  linkedInLoaded = true
  window._linkedin_partner_id = partnerId
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids ?? []
  if (!window._linkedin_data_partner_ids.includes(partnerId)) {
    window._linkedin_data_partner_ids.push(partnerId)
  }
  injectScript(
    'https://snap.licdn.com/li.lms-analytics/insight.min.js',
    'ff-linkedin-insight',
  )
}

export function clearMarketingVendors(): void {
  clearMarketingAttribution()
}

export function applyVendorConsent(consent: StoredCookieConsent | null): void {
  if (vendorEnvIds.ga4MeasurementId) {
    ensureGa4ConsentMode(vendorEnvIds.ga4MeasurementId)
    if (consent) {
      applyGtagConsentUpdate(consent)
    }
  }

  if (!consent?.marketing) {
    clearMarketingVendors()
  }

  if (!consent) return

  if (consent.marketing) {
    if (vendorEnvIds.metaPixelId) {
      loadMetaPixel(vendorEnvIds.metaPixelId)
    }
    if (vendorEnvIds.linkedInPartnerId) {
      loadLinkedInInsight(vendorEnvIds.linkedInPartnerId)
    }
    captureMarketingAttributionFromUrl()
  }
}
