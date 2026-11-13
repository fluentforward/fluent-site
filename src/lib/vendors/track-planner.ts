import { readStoredConsent } from '@/lib/cookie-consent/storage'
import { vendorEnvIds } from '@/lib/vendors/env-ids'

export type PlannerAnalyticsEvent =
  | 'planner_start'
  | 'planner_follow_up'
  | 'planner_partial_shown'
  | 'planner_email_captured'
  | 'planner_cta_clicked'

/** Consent-gated planner events. New names, separate from the webinar conversion. */
export function trackPlannerEvent(name: PlannerAnalyticsEvent): void {
  if (typeof window === 'undefined') return
  const consent = readStoredConsent()
  if (!consent?.analytics || !window.gtag || !vendorEnvIds.ga4MeasurementId) return
  window.gtag('event', name, { event_category: 'agent_planner' })
}

export function trackPlannerLead(): void {
  if (typeof window === 'undefined') return
  const consent = readStoredConsent()
  trackPlannerEvent('planner_email_captured')
  if (!consent?.marketing) return
  window.fbq?.('track', 'Lead', { content_name: 'Agent Planner' })
  const conversionId = process.env.NEXT_PUBLIC_LINKEDIN_PLANNER_CONVERSION_ID?.trim()
  if (conversionId && window.lintrk) {
    window.lintrk('track', { conversion_id: conversionId })
  }
}
