'use client'

import clsx from 'clsx'
import { useEffect, useRef } from 'react'

const WIDGET_SRC =
  'https://registry.blockmarktech.com/certificates/f28ee0bf-e116-4526-a9d8-c88d9301e26f/widget/?tooltip_position=bottom_right&theme=transparent&hover=t'

export function CyberEssentialsBadge({ className }: { className?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const wrapRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    const wrap = wrapRef.current
    if (!iframe || !wrap) return

    const setFocused = () => {
      wrap.setAttribute('data-focused', '')
    }

    const clearFocused = () => {
      wrap.removeAttribute('data-focused')
    }

    const onWindowBlur = () => {
      if (document.activeElement === iframe) {
        setFocused()
      }
    }

    const onWindowFocus = () => {
      clearFocused()
    }

    const onIframeBlur = () => {
      clearFocused()
    }

    window.addEventListener('blur', onWindowBlur)
    window.addEventListener('focus', onWindowFocus)
    iframe.addEventListener('blur', onIframeBlur)

    return () => {
      window.removeEventListener('blur', onWindowBlur)
      window.removeEventListener('focus', onWindowFocus)
      iframe.removeEventListener('blur', onIframeBlur)
    }
  }, [])

  return (
    <span
      ref={wrapRef}
      className={clsx(
        'inline-block rounded-sm data-[focused]:outline data-[focused]:outline-2 data-[focused]:outline-[#ff4a1c] data-[focused]:[outline-offset:3px]',
        className,
      )}
    >
      <iframe
        ref={iframeRef}
        src={WIDGET_SRC}
        title="Cyber Essentials certificate, verified by BlockMark"
        className="block rounded-sm"
        style={{ border: 'none', height: 132, width: 132 }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </span>
  )
}