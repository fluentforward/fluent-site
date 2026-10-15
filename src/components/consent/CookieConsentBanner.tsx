'use client'

import Link from 'next/link'

type Props = {
  onReject: () => void
  onManage: () => void
  onAcceptAll: () => void
}

export function CookieConsentBanner({
  onReject,
  onManage,
  onAcceptAll,
}: Props) {
  return (
    <div
      className="cookie-consent-banner fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-paper/95 backdrop-blur-xl"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-5 md:px-8 md:py-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2 id="cookie-banner-title" className="text-sub text-ink">
              Cookies on this site
            </h2>
            <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-slate">
              We use cookies and similar technologies to run the site, measure
              how our pages perform, and support marketing. You can accept all,
              reject non-essential cookies, or manage your choices.{' '}
              <Link
                href="/cookies"
                className="text-ink underline underline-offset-4 hover:text-steel"
              >
                Read our cookie notice
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:shrink-0">
            <button
              type="button"
              onClick={onReject}
              className="rounded-btn border border-line-strong bg-transparent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-2"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={onManage}
              className="rounded-btn border border-line-strong bg-transparent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-2"
            >
              Manage choices
            </button>
            <button
              type="button"
              onClick={onAcceptAll}
              className="rounded-btn bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-3"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
