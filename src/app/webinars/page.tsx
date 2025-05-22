import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Webinars',
  description: 'Join our webinars to learn how UK law firms are transforming their practice through Legal Agent Orchestration.',
}

function WebinarCard({
  title,
  description,
  date,
  time,
  speaker,
  isUpcoming = false,
}: {
  title: string
  description: string
  date: string
  time: string
  speaker: string
  isUpcoming?: boolean
}) {
  return (
    <div className="rounded-2xl bg-[#F7F7F7] p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0047AB]">{date}</p>
          <p className="text-sm text-neutral-600">{time}</p>
        </div>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-[#102542]">{title}</h3>
      <p className="mt-2 text-neutral-600">{description}</p>
      <p className="mt-4 text-sm font-semibold text-[#102542]">Speaker: {speaker}</p>
      {isUpcoming && (
        <div className="mt-6">
          <Link
            href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/UNpmhJy2skqvqVJ5Ql-WRg2?anonymous&ep=mlink"
            className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
          >
            Register Now
          </Link>
        </div>
      )}
    </div>
  )
}

function UpcomingWebinars() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Upcoming Webinars
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Join our upcoming sessions to learn how Legal Agent Orchestration can transform your firm's practice.
        </p>
      </FadeIn>
      <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <WebinarCard
          title="Legal Agent Orchestration: A Practical Guide for UK Law Firms"
          description="Learn how to implement and optimize Legal Agent Orchestration in your firm, with real-world examples and best practices."
          date="June 15, 2024"
          time="2:00 PM - 3:30 PM BST"
          speaker="Sarah Williams, Managing Partner at Phobia"
          isUpcoming={true}
        />
        <WebinarCard
          title="Maximizing ROI with Legal Agent Orchestration"
          description="Discover how to measure and maximize the return on investment from your Legal Agent Orchestration implementation."
          date="June 22, 2024"
          time="2:00 PM - 3:30 PM BST"
          speaker="Michael Chen, Practice Group Leader at Family Fund"
          isUpcoming={true}
        />
      </FadeInStagger>
    </Container>
  )
}

function PastWebinars() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Past Webinars
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Missed a session? Watch recordings of our previous webinars to learn from industry experts.
        </p>
      </FadeIn>
      <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <WebinarCard
          title="Introduction to Legal Agent Orchestration"
          description="An overview of how Legal Agent Orchestration is transforming legal practice in the UK."
          date="May 15, 2024"
          time="2:00 PM - 3:30 PM BST"
          speaker="David Thompson, CTO at Orchestrate Legal"
        />
        <WebinarCard
          title="Case Study: Implementing Legal Agent Orchestration"
          description="A detailed look at how one firm successfully implemented Legal Agent Orchestration."
          date="May 22, 2024"
          time="2:00 PM - 3:30 PM BST"
          speaker="Emma Roberts, IT Director at Unseal"
        />
        <WebinarCard
          title="Legal Agent Orchestration and Compliance"
          description="Understanding how Legal Agent Orchestration maintains compliance with SRA and GDPR requirements."
          date="May 29, 2024"
          time="2:00 PM - 3:30 PM BST"
          speaker="James Wilson, Compliance Officer at Mail Smirk"
        />
        <WebinarCard
          title="Future of Legal Practice with AI Agents"
          description="Exploring the future of legal practice and how AI agents will shape the industry."
          date="June 1, 2024"
          time="2:00 PM - 3:30 PM BST"
          speaker="Lisa Patel, Legal Tech Analyst"
        />
      </FadeInStagger>
    </Container>
  )
}

export default function Webinars() {
  return (
    <>
      <PageIntro eyebrow="Webinars" title="Learn from Industry Experts">
        <p>
          Join our webinars to learn how UK law firms are transforming their practice through Legal Agent Orchestration. Our sessions feature industry experts sharing their insights and experiences.
        </p>
      </PageIntro>

      <UpcomingWebinars />
      <PastWebinars />      
    </>
  )
} 