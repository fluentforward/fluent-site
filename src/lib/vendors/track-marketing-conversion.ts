import { readStoredConsent } from '@/lib/cookie-consent/storage'
import { vendorEnvIds } from '@/lib/vendors/env-ids'

declare global {
  interface Window {
    lintrk?: (action: string, data?: Record<string, unknown>) => void
  }
}

/** Fires after a successful webinar registration when the user has granted consent. */
export function trackWebinarRegistrationConversion(): void {
  if (typeof window === 'undefined') return
  const consent = readStoredConsent()

  if (consent?.marketing) {
    window.fbq?.('track', 'Lead', {
      content_name: 'Profit Engine Webinar',
    })

    const conversionId =
      process.env.NEXT_PUBLIC_LINKEDIN_WEBINAR_CONVERSION_ID?.trim()
    if (conversionId && window.lintrk) {
      window.lintrk('track', { conversion_id: conversionId })
    }
  }

  if (consent?.analytics && window.gtag && vendorEnvIds.ga4MeasurementId) {
    window.gtag('event', 'webinar_registration', {
      event_category: 'consulting_growth',
      event_label: 'profit_engine_webinar',
    })
  }
}
