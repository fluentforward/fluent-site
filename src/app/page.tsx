import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'


export const metadata: Metadata = {
  description:
    'Agentic Business Intelligence for Legal — conversational insights, autonomous actions, Teams-native.',
}

export default function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-[#102542] sm:text-7xl">
            Agentic Business Intelligence for Legal
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Move beyond static dashboards. Our conversational agents deliver instant answers to complex business questions—and can act on insights to optimise firm performance in real time.
          </p>
          <ul className="mt-8 space-y-2 text-neutral-600">
            <li>• Conversational intelligence: ask, drill down, decide</li>
            <li>• Autonomous actions: alerts and workflows that run themselves</li>
            <li>• Microsoft Teams native: in the flow of daily work</li>
          </ul>
          <p className="mt-6 text-neutral-500">Launching soon. Limited pilot invitations available.</p>
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
    </>
  )
}
