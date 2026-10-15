'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { CookieToggle } from '@/components/consent/CookieToggle'
import { useFocusTrap } from '@/hooks/useFocusTrap'

type Props = {
  open: boolean
  analytics: boolean
  marketing: boolean
  onAnalyticsChange: (value: boolean) => void
  onMarketingChange: (value: boolean) => void
  onReject: () => void
  onAcceptAll: () => void
  onSave: () => void
  onClose: () => void
}

export function CookieConsentModal({
  open,
  analytics,
  marketing,
  onAnalyticsChange,
  onMarketingChange,
  onReject,
  onAcceptAll,
  onSave,
  onClose,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  useFocusTrap(open, panelRef)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close cookie settings"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        className="relative z-10 w-full max-w-lg rounded-card border border-line bg-paper p-6 shadow-lift sm:p-8"
      >
        <h2 id="cookie-settings-title" className="text-sub text-ink">
          Cookie settings
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          Strictly necessary cookies always run so you can use the services you
          ask for. Turn optional categories on or off below.{' '}
          <Link
            href="/cookies"
            className="text-ink underline underline-offset-4 hover:text-steel"
          >
            Cookie notice
          </Link>
        </p>

        <div className="mt-8 space-y-6">
          <CookieToggle
            id="cookie-toggle-analytics"
            label="Analytics"
            description="Helps us understand which pages are used (Google Analytics 4)."
            checked={analytics}
            onChange={onAnalyticsChange}
          />
          <CookieToggle
            id="cookie-toggle-marketing"
            label="Marketing"
            description="Supports measurement and retargeting (Meta and LinkedIn) and related browser storage."
            checked={marketing}
            onChange={onMarketingChange}
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            onClick={onReject}
            className="rounded-btn border border-line-strong bg-transparent px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-2"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="rounded-btn border border-line-strong bg-transparent px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-2"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={onSave}
            className="rounded-btn bg-ink px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-3"
          >
            Save choices
          </button>
        </div>
      </div>
    </div>
  )
}
