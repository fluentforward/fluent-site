export type StoredCookieConsent = {
  v: 1
  updatedAt: string
  policyVersion: string
  analytics: boolean
  marketing: boolean
}

export type CookieConsentChoice = {
  analytics: boolean
  marketing: boolean
}
