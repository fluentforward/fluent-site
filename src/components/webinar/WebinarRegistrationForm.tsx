'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import clsx from 'clsx'

import { DemioInlineRegistrationEmbed } from '@/components/webinar/DemioInlineRegistrationEmbed'
import { webinarForm } from '@/content/webinar'
import { getWebinarRegistrationModeOnClient } from '@/lib/demio/config'
import { getOutboundMarketingAttributionParams } from '@/lib/marketing-attribution'
import { trackWebinarRegistrationConversion } from '@/lib/vendors/track-marketing-conversion'

type RegistrationMode = 'api' | 'embed' | 'pending'

const inputClass =
  'w-full rounded-[10px] border border-line-strong bg-paper-3 px-4 py-3 text-[0.9375rem] text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-mist focus:border-steel focus:ring-2 focus:ring-steel-soft'

export function WebinarRegistrationPanel({
  className,
  serverMode,
}: {
  className?: string
  serverMode: RegistrationMode
}) {
  const clientMode = getWebinarRegistrationModeOnClient()
  const mode: RegistrationMode =
    serverMode === 'api' ? 'api' : clientMode === 'embed' ? 'embed' : 'pending'

  if (mode === 'embed') {
    return (
      <div
        className={clsx(
          'rounded-card border border-line bg-paper-3 p-6 shadow-card md:p-8',
          className,
        )}
      >
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.08em] text-mist-d">
          {webinarForm.ctaLabel}
        </p>
        <DemioInlineRegistrationEmbed className="min-h-[360px] w-full [&_.demio-reg-form_input]:rounded-[10px]" />
        <p className="mt-6 text-xs leading-relaxed text-mist">
          {webinarForm.privacyNote}
          <Link
            href={webinarForm.privacyHref}
            className="text-slate underline underline-offset-4 hover:text-ink"
          >
            {webinarForm.privacyLinkLabel}
          </Link>
          .
        </p>
      </div>
    )
  }

  return <BrandedRegistrationForm className={className} mode={mode} />
}

function BrandedRegistrationForm({
  className,
  mode,
}: {
  className?: string
  mode: RegistrationMode
}) {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const response = await fetch('/api/webinar/register', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          email,
          marketingOptIn,
          attribution: getOutboundMarketingAttributionParams(),
        }),
      })

      const payload = (await response.json().catch(() => null)) as {
        error?: string
        configured?: boolean
      } | null

      if (!response.ok) {
        if (payload?.configured === false) {
          setError(webinarForm.demioPendingNote)
        } else {
          setError(payload?.error ?? 'Registration failed. Try again.')
        }
        return
      }

      trackWebinarRegistrationConversion()
      const params = new URLSearchParams()
      if (firstName.trim()) params.set('first', firstName.trim())
      router.push(`/webinar/thanks?${params.toString()}`)
    } catch {
      setError('Registration failed. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className={clsx(
        'rounded-card border border-line bg-paper-3 p-6 shadow-card md:p-8',
        className,
      )}
    >
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div>
          <label
            htmlFor="webinar-first-name"
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist-d"
          >
            {webinarForm.firstNameLabel}
          </label>
          <input
            id="webinar-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className={clsx(inputClass, 'mt-2')}
          />
        </div>

        <div>
          <label
            htmlFor="webinar-email"
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist-d"
          >
            {webinarForm.emailLabel}
          </label>
          <input
            id="webinar-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={clsx(inputClass, 'mt-2')}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate">
          <input
            type="checkbox"
            name="marketingOptIn"
            checked={marketingOptIn}
            onChange={(event) => setMarketingOptIn(event.target.checked)}
            className="mt-1 size-4 shrink-0 accent-accent"
          />
          <span>{webinarForm.marketingOptInLabel}</span>
        </label>

        {error ? (
          <p
            className="rounded-[10px] border border-line-strong bg-paper-2 px-4 py-3 text-sm leading-relaxed text-slate"
            role="alert"
          >
            {error}
          </p>
        ) : null}

        {mode === 'pending' ? (
          <p className="text-xs leading-relaxed text-mist">
            {webinarForm.demioPendingNote}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-btn w-full bg-ink px-7 py-3.5 text-[0.9375rem] font-semibold text-paper transition-[background-color,transform] duration-300 hover:bg-ink-3 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Registering…' : `${webinarForm.ctaLabel} →`}
        </button>

        <p className="text-xs leading-relaxed text-mist">
          {webinarForm.privacyNote}
          <Link
            href={webinarForm.privacyHref}
            className="text-slate underline underline-offset-4 hover:text-ink"
          >
            {webinarForm.privacyLinkLabel}
          </Link>
          .
        </p>
      </form>
    </div>
  )
}
