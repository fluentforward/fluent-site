/** Browser storage for campaign attribution (marketing consent only). */
export const MARKETING_ATTRIBUTION_STORAGE_KEY = 'ff_marketing_attribution_v1'

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

export type MarketingAttribution = Partial<
  Record<(typeof UTM_PARAMS)[number], string>
>

export function readMarketingAttribution(): MarketingAttribution | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(MARKETING_ATTRIBUTION_STORAGE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return null
    return parsed as MarketingAttribution
  } catch {
    return null
  }
}

export function captureMarketingAttributionFromUrl(): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const payload: MarketingAttribution = {}
  let hasAny = false
  for (const key of UTM_PARAMS) {
    const value = params.get(key)
    if (value) {
      payload[key] = value
      hasAny = true
    }
  }
  if (!hasAny) return
  try {
    window.localStorage.setItem(
      MARKETING_ATTRIBUTION_STORAGE_KEY,
      JSON.stringify({
        ...payload,
        capturedAt: new Date().toISOString(),
      }),
    )
  } catch {
    /* ignore */
  }
}

export function clearMarketingAttribution(): void {
  try {
    window.localStorage.removeItem(MARKETING_ATTRIBUTION_STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export const marketingOnlyStorageKeys = [MARKETING_ATTRIBUTION_STORAGE_KEY]
