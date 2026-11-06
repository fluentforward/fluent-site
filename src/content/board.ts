export const profitConstraintScoreMagnetUrl =
  'https://client.fluentforward.com/profit-constraint-score'

/** @deprecated Use profitConstraintScoreMagnetUrl */
export const capacityScalingRoadmapUrl = profitConstraintScoreMagnetUrl

export function isProfitConstraintScoreMagnetUrl(href: string): boolean {
  try {
    const target = new URL(href, 'https://fluentforward.com')
    const base = new URL(profitConstraintScoreMagnetUrl)
    return target.origin === base.origin && target.pathname === base.pathname
  } catch {
    return false
  }
}

/** @deprecated Use isProfitConstraintScoreMagnetUrl */
export const isCapacityScalingRoadmapMagnetUrl = isProfitConstraintScoreMagnetUrl

export const profitConstraintScoreBuyerOneLiner =
  'In a few minutes, see which of Offers, Demand, or Delivery is binding you now, and what fixing that constraint could mean for revenue and margin with the team you already have. Results before any call.'

/** @deprecated Use profitConstraintScoreBuyerOneLiner */
export const capacityScalingRoadmapBuyerOneLiner = profitConstraintScoreBuyerOneLiner

export const scoreCta = {
  label: 'Get your Profit Constraint Score',
  href: profitConstraintScoreMagnetUrl,
  hint: 'About three minutes. No sales pitch.',
} as const

/** @deprecated Use scoreCta */
export const auditCta = scoreCta

export const reviewCallCta = {
  label: 'Book a free Constraint review',
  href: '/review',
} as const

/** @deprecated Use reviewCallCta */
export const boardConversationCta = reviewCallCta
