'use client'

import { useCallback, useEffect, useState } from 'react'

import { isFirstAiMoveMagnetUrl } from '@/content/board'
import { appendMarketingAttributionToUrl } from '@/lib/marketing-attribution'

export function useMarketingAttributedHref(href: string): string {
  const [resolved, setResolved] = useState(href)

  useEffect(() => {
    if (!isFirstAiMoveMagnetUrl(href)) {
      setResolved(href)
      return
    }
    setResolved(appendMarketingAttributionToUrl(href))
  }, [href])

  return resolved
}

export function useFirstAiMoveClickHandler(href: string) {
  return useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isFirstAiMoveMagnetUrl(href)) return
      const next = appendMarketingAttributionToUrl(href)
      if (next === event.currentTarget.href) return
      event.preventDefault()
      window.location.assign(next)
    },
    [href],
  )
}

type AnchorProps = React.ComponentPropsWithoutRef<'a'> & { href: string }

export function MarketingAttributedAnchor({
  href,
  onClick,
  ...props
}: AnchorProps) {
  const attributedHref = useMarketingAttributedHref(href)
  const ensureAttributionOnClick = useFirstAiMoveClickHandler(href)

  return (
    <a
      href={attributedHref}
      onClick={(event) => {
        ensureAttributionOnClick(event)
        onClick?.(event)
      }}
      {...props}
    />
  )
}
