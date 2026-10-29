'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { CookieConsentBanner } from '@/components/consent/CookieConsentBanner'
import { CookieConsentModal } from '@/components/consent/CookieConsentModal'
import {
  readStoredConsent,
  writeStoredConsent,
} from '@/lib/cookie-consent/storage'
import type { StoredCookieConsent } from '@/lib/cookie-consent/types'
import { applyVendorConsent } from '@/lib/vendors/load-vendors'

type OpenModalSource = 'banner' | 'settings' | null

type CookieConsentContextValue = {
  consent: StoredCookieConsent | null
  openCookieSettings: (trigger?: HTMLElement | null) => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
)

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider')
  }
  return ctx
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [hydrated, setHydrated] = useState(false)
  const [consent, setConsent] = useState<StoredCookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalAnalytics, setModalAnalytics] = useState(false)
  const [modalMarketing, setModalMarketing] = useState(false)
  const modalSourceRef = useRef<OpenModalSource>(null)
  const settingsTriggerRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const stored = readStoredConsent()
    setConsent(stored)
    setShowBanner(!stored)
    applyVendorConsent(stored)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    document.body.classList.toggle(
      'cookie-banner-open',
      showBanner && !modalOpen,
    )
    return () => {
      document.body.classList.remove('cookie-banner-open')
    }
  }, [hydrated, showBanner, modalOpen])

  const persist = useCallback((choice: { analytics: boolean; marketing: boolean }) => {
    const record = writeStoredConsent(choice)
    setConsent(record)
    setShowBanner(false)
    setModalOpen(false)
    applyVendorConsent(record)
    return record
  }, [])

  const acceptAll = useCallback(() => {
    persist({ analytics: true, marketing: true })
  }, [persist])

  const rejectNonEssential = useCallback(() => {
    persist({ analytics: false, marketing: false })
  }, [persist])

  const openModal = useCallback(
    (source: OpenModalSource, trigger?: HTMLElement | null) => {
      modalSourceRef.current = source
      if (trigger) settingsTriggerRef.current = trigger
      if (source === 'banner') {
        setModalAnalytics(false)
        setModalMarketing(false)
      } else if (consent) {
        setModalAnalytics(consent.analytics)
        setModalMarketing(consent.marketing)
      } else {
        setModalAnalytics(false)
        setModalMarketing(false)
      }
      setModalOpen(true)
    },
    [consent],
  )

  const closeModal = useCallback(() => {
    setModalOpen(false)
    const trigger = settingsTriggerRef.current
    if (modalSourceRef.current === 'settings' && trigger) {
      requestAnimationFrame(() => trigger.focus())
    }
    modalSourceRef.current = null
  }, [])

  const openCookieSettings = useCallback(
    (trigger?: HTMLElement | null) => {
      if (trigger) settingsTriggerRef.current = trigger
      openModal('settings', trigger ?? null)
    },
    [openModal],
  )

  const saveModalChoices = useCallback(() => {
    persist({ analytics: modalAnalytics, marketing: modalMarketing })
    if (settingsTriggerRef.current) {
      requestAnimationFrame(() => settingsTriggerRef.current?.focus())
    }
  }, [modalAnalytics, modalMarketing, persist])

  const contextValue = useMemo(
    () => ({ consent, openCookieSettings }),
    [consent, openCookieSettings],
  )

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
      {hydrated && showBanner && !modalOpen && (
        <CookieConsentBanner
          onReject={rejectNonEssential}
          onManage={() => openModal('banner')}
          onAcceptAll={acceptAll}
        />
      )}
      {hydrated && (
        <CookieConsentModal
          open={modalOpen}
          analytics={modalAnalytics}
          marketing={modalMarketing}
          onAnalyticsChange={setModalAnalytics}
          onMarketingChange={setModalMarketing}
          onReject={rejectNonEssential}
          onAcceptAll={acceptAll}
          onSave={saveModalChoices}
          onClose={closeModal}
        />
      )}
    </CookieConsentContext.Provider>
  )
}

export function CookieSettingsButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { openCookieSettings } = useCookieConsent()
  return (
    <button
      type="button"
      className={className}
      onClick={(event) => openCookieSettings(event.currentTarget)}
    >
      {children}
    </button>
  )
}
