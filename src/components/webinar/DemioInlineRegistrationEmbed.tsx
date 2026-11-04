'use client'

import Script from 'next/script'
import { useEffect } from 'react'

import {
  getDemioEmbedScriptSrc,
  demioConfig,
  isDemioEmbedConfigured,
} from '@/lib/demio/config'
import { captureMarketingAttributionFromUrl } from '@/lib/marketing-attribution'
import { readStoredConsent } from '@/lib/cookie-consent/storage'
import { trackWebinarRegistrationConversion } from '@/lib/vendors/track-marketing-conversion'

/** Official Demio unstyled inline registration embed (Share → Embed options). */
export function DemioInlineRegistrationEmbed({ className }: { className?: string }) {
  const scriptSrc = getDemioEmbedScriptSrc()
  const iframeSrc = demioConfig.embedSrc

  useEffect(() => {
    const consent = readStoredConsent()
    if (consent?.marketing) {
      captureMarketingAttributionFromUrl()
    }

    function onMessage(event: MessageEvent) {
      if (typeof event.data !== 'object' || event.data === null) return
      const data = event.data as Record<string, unknown>
      const type = data.type ?? data.event
      if (
        type === 'demio-registration-success' ||
        type === 'registration_success' ||
        data.registered === true
      ) {
        trackWebinarRegistrationConversion()
      }
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  if (!isDemioEmbedConfigured()) return null

  if (iframeSrc) {
    return (
      <iframe
        title="Register for the Profit Engine webinar"
        src={iframeSrc}
        className={className}
        loading="lazy"
      />
    )
  }

  if (!scriptSrc) return null

  return (
    <div className={className}>
      <div className="demio-reg-form" />
      <Script src={scriptSrc} strategy="afterInteractive" />
    </div>
  )
}
