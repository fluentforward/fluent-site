import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export const metadata: Metadata = {
  description:
    'Explore Orchestrate Legal\'s comprehensive suite of AI agents designed specifically for UK law firms.',
}

function AgentsHeader() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-[#102542] sm:text-7xl">
          Legal Agent Capabilities
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          Our suite of specialized AI agents works in concert to transform your firm's operations, from client service to practice management.
        </p>
      </FadeIn>
    </Container>
  )
}

function ClientServicesAgents() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Client Services Agents
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Enhance client experience and streamline service delivery with intelligent automation.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Intake & Communication</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Initial client screening</li>
            <li>• Matter classification</li>
            <li>• Automated responses</li>
            <li>• Client portal management</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Billing Management</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Time entry automation</li>
            <li>• Invoice generation</li>
            <li>• Payment tracking</li>
            <li>• Budget monitoring</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Portal Management</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Document sharing</li>
            <li>• Status updates</li>
            <li>• Secure messaging</li>
            <li>• Client onboarding</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function DocumentIntelligenceAgents() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Document Intelligence Agents
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Transform document handling with AI-powered analysis, drafting, and management.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Analysis & Drafting</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Contract analysis</li>
            <li>• Document drafting</li>
            <li>• Clause extraction</li>
            <li>• Risk assessment</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Review & Bundle Creation</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Document review</li>
            <li>• Bundle compilation</li>
            <li>• Version comparison</li>
            <li>• Quality assurance</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Version Control</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Change tracking</li>
            <li>• Document history</li>
            <li>• Collaboration management</li>
            <li>• Audit trails</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function KnowledgeAgents() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Knowledge Agents
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Leverage AI-powered research and knowledge management to enhance legal expertise.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Research & Precedents</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Case law research</li>
            <li>• Precedent analysis</li>
            <li>• Legal updates</li>
            <li>• Knowledge extraction</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Regulatory Updates</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Compliance monitoring</li>
            <li>• Regulatory tracking</li>
            <li>• Impact assessment</li>
            <li>• Update notifications</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Case Tracking</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Matter monitoring</li>
            <li>• Deadline tracking</li>
            <li>• Status updates</li>
            <li>• Progress reporting</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function PracticeSpecificAgents() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Practice-Specific Agents
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Specialized AI agents tailored to the unique requirements of different practice areas.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Property</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Title analysis</li>
            <li>• Contract review</li>
            <li>• Due diligence</li>
            <li>• Completion tracking</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Corporate</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Company analysis</li>
            <li>• Transaction support</li>
            <li>• Compliance checking</li>
            <li>• Document automation</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Litigation</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Case analysis</li>
            <li>• Evidence review</li>
            <li>• Strategy support</li>
            <li>• Court preparation</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Private Client</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Will analysis</li>
            <li>• Trust management</li>
            <li>• Estate planning</li>
            <li>• Tax compliance</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function PracticeManagementAgents() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Practice Management Agents
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Streamline firm operations and enhance team productivity with intelligent management tools.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Time Recording</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Activity tracking</li>
            <li>• Billing automation</li>
            <li>• Productivity analysis</li>
            <li>• Time optimization</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">KYC</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Client verification</li>
            <li>• Risk assessment</li>
            <li>• Compliance checking</li>
            <li>• Document validation</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Project Management</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Task allocation</li>
            <li>• Deadline tracking</li>
            <li>• Resource planning</li>
            <li>• Progress monitoring</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Training</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Skill assessment</li>
            <li>• Learning paths</li>
            <li>• Performance tracking</li>
            <li>• Knowledge sharing</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function GetStarted() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Ready to Transform Your Practice?
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Schedule a demonstration to see how our AI agents can work together to enhance your firm's capabilities.
        </p>
      </FadeIn>
      <div className="mt-8 text-center">
        <Link
          href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/UNpmhJy2skqvqVJ5Ql-WRg2?anonymous&ep=mlink"
          className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
        >
          Schedule a Demonstration
        </Link>
      </div>
    </Container>
  )
}

export default function Agents() {
  return (
    <>
      <AgentsHeader />
      <ClientServicesAgents />
      <DocumentIntelligenceAgents />
      <KnowledgeAgents />
      <PracticeSpecificAgents />
      <PracticeManagementAgents />
      <GetStarted />
      <ContactSection />
    </>
  )
} 