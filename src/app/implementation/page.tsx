import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export const metadata: Metadata = {
  description:
    'Learn about Orchestrate Legal\'s implementation process for Legal Agent Orchestration.',
}

function ImplementationHeader() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-[#102542] sm:text-7xl">
          Implementation Process
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          Our proven three-phase approach ensures successful deployment of Legal Agent Orchestration in your firm.
        </p>
      </FadeIn>
    </Container>
  )
}

function AssessPhase() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white">
            <span className="text-xl font-semibold">1</span>
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
            Assess
          </h2>
        </div>
        <p className="mt-6 text-xl text-neutral-600">
          We begin with a comprehensive assessment of your firm's current state and future goals.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Workflow Analysis</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Process mapping</li>
            <li>• Pain point identification</li>
            <li>• Efficiency metrics</li>
            <li>• Technology audit</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Opportunity Assessment</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• ROI calculation</li>
            <li>• Priority setting</li>
            <li>• Risk evaluation</li>
            <li>• Success metrics</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Stakeholder Alignment</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Partner engagement</li>
            <li>• Team interviews</li>
            <li>• Change readiness</li>
            <li>• Training needs</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function OrchestratePhase() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white">
            <span className="text-xl font-semibold">2</span>
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
            Orchestrate
          </h2>
        </div>
        <p className="mt-6 text-xl text-neutral-600">
          We implement and configure your Legal Agent Orchestration platform with careful attention to your firm's specific needs.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Platform Setup</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Infrastructure deployment</li>
            <li>• Security configuration</li>
            <li>• Integration setup</li>
            <li>• Data migration</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Agent Configuration</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Practice-specific setup</li>
            <li>• Workflow automation</li>
            <li>• Compliance rules</li>
            <li>• Quality controls</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Team Enablement</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Training programs</li>
            <li>• Documentation</li>
            <li>• Support setup</li>
            <li>• Change management</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function AmplifyPhase() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white">
            <span className="text-xl font-semibold">3</span>
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
            Amplify
          </h2>
        </div>
        <p className="mt-6 text-xl text-neutral-600">
          We continuously optimize and expand your Legal Agent Orchestration capabilities based on real-world performance and emerging needs.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Performance Monitoring</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Usage analytics</li>
            <li>• ROI tracking</li>
            <li>• Quality metrics</li>
            <li>• User feedback</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Continuous Improvement</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Agent optimization</li>
            <li>• Workflow refinement</li>
            <li>• Feature enhancement</li>
            <li>• Performance tuning</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Strategic Expansion</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• New practice areas</li>
            <li>• Advanced capabilities</li>
            <li>• Integration expansion</li>
            <li>• Innovation roadmap</li>
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}

function Timeline() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Implementation Timeline
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          A typical implementation takes 8-12 weeks, depending on your firm's size and complexity.
        </p>
      </FadeIn>
      <div className="mt-16">
        <FadeInStagger faster>
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-[#0047AB] sm:left-1/2" />
            <div className="space-y-16">
              <div className="relative flex items-center gap-12 sm:justify-between sm:odd:flex-row-reverse">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="text-lg font-semibold">1-2</span>
                </div>
                <div className="w-full rounded-2xl bg-[#F7F7F7] p-8 sm:w-[calc(50%-5rem)]">
                  <h3 className="font-display text-xl font-semibold text-[#102542]">Week 1-2: Assessment</h3>
                  <p className="mt-2 text-neutral-600">
                    Initial analysis, workflow mapping, and opportunity identification
                  </p>
                </div>
              </div>
              <div className="relative flex items-center gap-12 sm:justify-between sm:odd:flex-row-reverse">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="text-lg font-semibold">3-4</span>
                </div>
                <div className="w-full rounded-2xl bg-[#F7F7F7] p-8 sm:w-[calc(50%-5rem)]">
                  <h3 className="font-display text-xl font-semibold text-[#102542]">Week 3-4: Planning</h3>
                  <p className="mt-2 text-neutral-600">
                    Detailed implementation planning and stakeholder alignment
                  </p>
                </div>
              </div>
              <div className="relative flex items-center gap-12 sm:justify-between sm:odd:flex-row-reverse">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="text-lg font-semibold">5-8</span>
                </div>
                <div className="w-full rounded-2xl bg-[#F7F7F7] p-8 sm:w-[calc(50%-5rem)]">
                  <h3 className="font-display text-xl font-semibold text-[#102542]">Week 5-8: Implementation</h3>
                  <p className="mt-2 text-neutral-600">
                    Platform deployment, agent configuration, and integration
                  </p>
                </div>
              </div>
              <div className="relative flex items-center gap-12 sm:justify-between sm:odd:flex-row-reverse">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="text-lg font-semibold">9-10</span>
                </div>
                <div className="w-full rounded-2xl bg-[#F7F7F7] p-8 sm:w-[calc(50%-5rem)]">
                  <h3 className="font-display text-xl font-semibold text-[#102542]">Week 9-10: Training</h3>
                  <p className="mt-2 text-neutral-600">
                    Team training, documentation, and support setup
                  </p>
                </div>
              </div>
              <div className="relative flex items-center gap-12 sm:justify-between sm:odd:flex-row-reverse">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="text-lg font-semibold">11-12</span>
                </div>
                <div className="w-full rounded-2xl bg-[#F7F7F7] p-8 sm:w-[calc(50%-5rem)]">
                  <h3 className="font-display text-xl font-semibold text-[#102542]">Week 11-12: Launch</h3>
                  <p className="mt-2 text-neutral-600">
                    Go-live support, initial optimization, and success metrics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}

function GetStarted() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Ready to Begin Your Implementation?
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Schedule a consultation to discuss your firm's specific needs and create a tailored implementation plan.
        </p>
      </FadeIn>
      <div className="mt-8 text-center">
        <Link
          href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/UNpmhJy2skqvqVJ5Ql-WRg2?anonymous&ep=mlink"
          className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
        >
          Schedule Consultation
        </Link>
      </div>
    </Container>
  )
}

export default function Implementation() {
  return (
    <>
      <ImplementationHeader />
      <AssessPhase />
      <OrchestratePhase />
      <AmplifyPhase />
      <Timeline />
      <GetStarted />      
    </>
  )
} 