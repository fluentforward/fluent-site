import {
  CONSENT_MAX_AGE_MS,
  CONSENT_SCHEMA_VERSION,
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_POLICY_VERSION,
} from '@/lib/cookie-consent/constants'
import type {
  CookieConsentChoice,
  StoredCookieConsent,
} from '@/lib/cookie-consent/types'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function parseConsent(raw: string): StoredCookieConsent | null {
  try {
    const data: unknown = JSON.parse(raw)
    if (!isRecord(data)) return null
    if (data.v !== CONSENT_SCHEMA_VERSION) return null
    if (data.policyVersion !== COOKIE_POLICY_VERSION) return null
    if (typeof data.updatedAt !== 'string') return null
    if (typeof data.analytics !== 'boolean') return null
    if (typeof data.marketing !== 'boolean') return null

    const updatedAt = Date.parse(data.updatedAt)
    if (Number.isNaN(updatedAt)) return null
    if (Date.now() - updatedAt > CONSENT_MAX_AGE_MS) return null

    return {
      v: 1,
      updatedAt: data.updatedAt,
      policyVersion: data.policyVersion,
      analytics: data.analytics,
      marketing: data.marketing,
    }
  } catch {
    return null
  }
}

export function readStoredConsent(): StoredCookieConsent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!raw) return null
    return parseConsent(raw)
  } catch {
    return null
  }
}

export function writeStoredConsent(choice: CookieConsentChoice): StoredCookieConsent {
  const record: StoredCookieConsent = {
    v: 1,
    updatedAt: new Date().toISOString(),
    policyVersion: COOKIE_POLICY_VERSION,
    analytics: choice.analytics,
    marketing: choice.marketing,
  }
  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify(record),
  )
  return record
}

export function clearStoredConsent(): void {
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
  } catch {
    /* ignore */
  }
}
