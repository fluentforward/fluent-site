/** Browser storage for campaign attribution (marketing consent only). */
export const MARKETING_ATTRIBUTION_STORAGE_KEY = 'ff_marketing_attribution_v1'

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

const CLICK_ID_PARAMS = ['gclid'] as const

export const MARKETING_ATTRIBUTION_QUERY_PARAMS = [
  ...UTM_PARAMS,
  ...CLICK_ID_PARAMS,
] as const

export type MarketingAttribution = Partial<
  Record<(typeof MARKETING_ATTRIBUTION_QUERY_PARAMS)[number], string>
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
  for (const key of MARKETING_ATTRIBUTION_QUERY_PARAMS) {
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

/** UTMs and click ids from the current page URL, with stored values as fallback. */
export function getOutboundMarketingAttributionParams(): MarketingAttribution {
  if (typeof window === 'undefined') return {}
  const merged: MarketingAttribution = {}
  const stored = readMarketingAttribution()
  for (const key of MARKETING_ATTRIBUTION_QUERY_PARAMS) {
    const value = stored?.[key]
    if (value) merged[key] = value
  }
  const current = new URLSearchParams(window.location.search)
  for (const key of MARKETING_ATTRIBUTION_QUERY_PARAMS) {
    const value = current.get(key)
    if (value) merged[key] = value
  }
  return merged
}

export function appendMarketingAttributionToUrl(url: string): string {
  if (typeof window === 'undefined') return url
  const attribution = getOutboundMarketingAttributionParams()
  const keys = Object.keys(attribution) as (keyof MarketingAttribution)[]
  if (keys.length === 0) return url
  try {
    const parsed = new URL(url)
    for (const key of keys) {
      const value = attribution[key]
      if (value) parsed.searchParams.set(key, value)
    }
    return parsed.toString()
  } catch {
    return url
  }
}

export const marketingOnlyStorageKeys = [MARKETING_ATTRIBUTION_STORAGE_KEY]
