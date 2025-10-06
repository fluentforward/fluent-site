import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'About',
  description: 'Launching soon — Agentic Business Intelligence for Legal.',
}

export default function About() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Coming soon
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          We’re focused on a private pilot with select firms. Public site will launch soon.
        </p>
        <div className="mt-8">
          <Link
            href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/UNpmhJy2skqvqVJ5Ql-WRg2?anonymous&ep=mlink"
            className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
          >
            Schedule a Demonstration
          </Link>
        </div>
      </FadeIn>
    </Container>
  )
}
