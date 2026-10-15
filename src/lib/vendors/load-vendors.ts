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

let ga4Loaded = false
let metaLoaded = false
let linkedInLoaded = false

function injectScript(src: string, id?: string): void {
  if (id && document.getElementById(id)) return
  const script = document.createElement('script')
  script.async = true
  script.src = src
  if (id) script.id = id
  document.head.appendChild(script)
}

function loadGa4(measurementId: string): void {
  if (ga4Loaded) return
  ga4Loaded = true
  window.dataLayer = window.dataLayer ?? []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  injectScript(
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`,
    'ff-ga4',
  )
  window.gtag('config', measurementId)
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
  if (!consent) return

  if (consent.analytics && vendorEnvIds.ga4MeasurementId) {
    loadGa4(vendorEnvIds.ga4MeasurementId)
  }

  if (consent.marketing) {
    if (vendorEnvIds.metaPixelId) {
      loadMetaPixel(vendorEnvIds.metaPixelId)
    }
    if (vendorEnvIds.linkedInPartnerId) {
      loadLinkedInInsight(vendorEnvIds.linkedInPartnerId)
    }
    captureMarketingAttributionFromUrl()
  } else {
    clearMarketingVendors()
  }
}
