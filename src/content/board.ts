export const capacityScalingRoadmapUrl =
  'https://client.fluentforward.com/capacity-scaling-roadmap'

export function isCapacityScalingRoadmapMagnetUrl(href: string): boolean {
  try {
    const target = new URL(href, 'https://fluentforward.com')
    const base = new URL(capacityScalingRoadmapUrl)
    return (
      target.origin === base.origin && target.pathname === base.pathname
    )
  } catch {
    return false
  }
}

export const capacityScalingRoadmapBuyerOneLiner =
  'In a few minutes, see which of Offers, Demand, or Delivery to run first, and what that means for higher revenue and firmer margins with the team you already have. Results before any call.'

export const auditCta = {
  label: 'Start your roadmap',
  href: capacityScalingRoadmapUrl,
  hint: 'About three to four minutes. No sales pitch.',
} as const

export const reviewCallCta = {
  label: 'Book your free Capacity Constraint review call',
  href: '/contact',
} as const

/** @deprecated Use reviewCallCta */
export const boardConversationCta = reviewCallCta
