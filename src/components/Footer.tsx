'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { Modal } from '@/components/Modal'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'FamilyFund', href: '/work/family-fund' },
      { title: 'Unseal', href: '/work/unseal' },
      { title: 'Phobia', href: '/work/phobia' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/implementation' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<{
    title: string
    message: string
    isError: boolean
  }>({
    title: '',
    message: '',
    isError: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setModalContent({
        title: 'Email Required',
        message: 'Please enter your email address to subscribe to our newsletter.',
        isError: true
      })
      setIsModalOpen(true)
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setModalContent({
          title: 'Successfully Subscribed!',
          message: 'Thank you for subscribing to our newsletter. You\'ll receive updates about Legal Agent Orchestration innovations and insights.',
          isError: false
        })
        setEmail('')
      } else {
        setModalContent({
          title: 'Subscription Failed',
          message: data.error || 'There was an error subscribing to our newsletter. Please try again.',
          isError: true
        })
      }
    } catch (error) {
      setModalContent({
        title: 'Network Error',
        message: 'There was a problem connecting to our servers. Please check your internet connection and try again.',
        isError: true
      })
    } finally {
      setIsLoading(false)
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <form className="max-w-sm" onSubmit={handleSubmit}>
        <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
          Sign up for our newsletter
        </h2>
        <p className="mt-4 text-sm text-neutral-700">
        Stay informed about Legal Agent Orchestration innovations and insights.
        </p>
        <div className="relative mt-6">
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              disabled={isLoading}
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <ArrowIcon className="w-4" />
              )}
            </button>
          </div>
        </div>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        className={modalContent.isError ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'}
      >
        <p className="text-sm leading-relaxed">
          {modalContent.message}
        </p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsModalOpen(false)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
              modalContent.isError
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Orchestrate Legal, a trading name of Fluent Forward Ltd. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
