/** Locked Demio event for the Profit Engine webinar (Tue 15 Dec 2026 · 11:00 GMT). */
export const WEBINAR_DEMIO_EVENT_ID = '1021063'

/**
 * Demio wiring. Event ID defaults to the locked webinar event; override via env if needed.
 * Registration works via:
 * 1. Branded form → PUT /api/v1/event/register (needs DEMIO_API_KEY + DEMIO_API_SECRET)
 * 2. Official inline embed (needs NEXT_PUBLIC_DEMIO_EMBED_REF or NEXT_PUBLIC_DEMIO_EMBED_SCRIPT_SRC)
 */
export const demioConfig = {
  eventId:
    process.env.NEXT_PUBLIC_DEMIO_EVENT_ID?.trim() || WEBINAR_DEMIO_EVENT_ID,
  dateId: process.env.NEXT_PUBLIC_DEMIO_DATE_ID?.trim() ?? '',
  embedRef: process.env.NEXT_PUBLIC_DEMIO_EMBED_REF?.trim() ?? '',
  embedScriptSrc: process.env.NEXT_PUBLIC_DEMIO_EMBED_SCRIPT_SRC?.trim() ?? '',
  embedSrc: process.env.NEXT_PUBLIC_DEMIO_EMBED_SRC?.trim() ?? '',
  apiKey: process.env.DEMIO_API_KEY?.trim() ?? '',
  apiSecret: process.env.DEMIO_API_SECRET?.trim() ?? '',
} as const

export function getDemioEmbedScriptSrc(): string | null {
  if (demioConfig.embedScriptSrc) return demioConfig.embedScriptSrc
  if (demioConfig.embedRef) {
    return `https://my.demio.com/ref/${encodeURIComponent(demioConfig.embedRef)}/form.js`
  }
  return null
}

export function isDemioRegistrationConfigured(): boolean {
  return Boolean(demioConfig.apiKey && demioConfig.apiSecret)
}

export function isDemioEmbedConfigured(): boolean {
  return Boolean(getDemioEmbedScriptSrc() || demioConfig.embedSrc)
}

export function getWebinarRegistrationMode(): 'api' | 'embed' | 'pending' {
  if (isDemioRegistrationConfigured()) return 'api'
  if (isDemioEmbedConfigured()) return 'embed'
  return 'pending'
}

/** Client-safe mode: embed detection only (API keys are server-only). */
export function getWebinarRegistrationModeOnClient(): 'embed' | 'form' {
  if (isDemioEmbedConfigured()) return 'embed'
  return 'form'
}
