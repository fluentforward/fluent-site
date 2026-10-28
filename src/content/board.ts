export const firstAiMoveUrl = 'https://client.fluentforward.com/first-ai-move'

export function isFirstAiMoveMagnetUrl(href: string): boolean {
  try {
    const target = new URL(href, 'https://fluentforward.com')
    const base = new URL(firstAiMoveUrl)
    return (
      target.origin === base.origin && target.pathname === base.pathname
    )
  } catch {
    return false
  }
}

export const firstAiMoveBuyerOneLiner =
  'Leave with one first AI move for your firm, how it fits the tools you already pay for, and a rough idea of what it could free up, using your own numbers.'

export const auditCta = {
  label: 'Get your first AI move',
  href: firstAiMoveUrl,
  hint: 'About five minutes. No sales pitch.',
} as const

export const reviewCallCta = {
  label: 'Book your free Audit review call',
  href: '/contact',
} as const

/** @deprecated Use reviewCallCta */
export const boardConversationCta = reviewCallCta
