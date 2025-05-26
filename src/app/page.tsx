import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'


const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-[#102542] py-20 mx-5 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by leading UK law firms
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function ProblemStatement() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          UK Law Firms Face a Growing Technology Paradox
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Today's law firms have more technology than ever before, yet solicitors spend up to 70% of their time on administrative tasks rather than applying their expertise.
        </p>
        <p className="mt-4 text-xl text-neutral-600">
          The challenge isn't a lack of tools - it's that these disconnected point solutions create silos, complexity, and often more work than they save.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-2xl font-semibold text-[#102542]">68%</h3>
          <p className="mt-2 text-neutral-600">of UK solicitors report spending too much time on routine tasks</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-2xl font-semibold text-[#102542]">72%</h3>
          <p className="mt-2 text-neutral-600">of law firms have 5+ disconnected technology systems</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-2xl font-semibold text-[#102542]">64%</h3>
          <p className="mt-2 text-neutral-600">of legal AI implementations fail to deliver expected ROI</p>
        </FadeIn>
      </div>
    </Container>
  )
}

function CategoryDefinition() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Introducing Legal Agent Orchestration
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Legal Agent Orchestration (LAO) is a new approach that coordinates purpose-built AI agents across your firm's workflows to create a unified system that multiplies solicitor effectiveness.
        </p>
        <p className="mt-4 text-xl text-neutral-600">
          Unlike isolated point solutions, Orchestrate Legal's platform ensures your AI agents work in harmony - sharing context, maintaining security, and delivering consistent results that align with your firm's standards.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Unified Intelligence</h3>
          <p className="mt-2 text-neutral-600">Agents that communicate and coordinate</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">UK Legal-Specific</h3>
          <p className="mt-2 text-neutral-600">Built for British legal practice, not adapted from generic AI</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Practice Integration</h3>
          <p className="mt-2 text-neutral-600">Works within your existing systems and processes</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Compliance by Design</h3>
          <p className="mt-2 text-neutral-600">SRA, GDPR and Law Society requirements built-in</p>
        </FadeIn>
      </div>
    </Container>
  )
}

function ValueProposition() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          AI Agents Working in Concert, Not Isolation
        </h2>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">For Managing Partners</h3>
          <p className="mt-2 text-neutral-600">Transform your firm economics without disrupting your culture</p>
          <p className="mt-4 text-2xl font-semibold text-[#0047AB]">23%</p>
          <p className="text-neutral-600">average increase in profit per partner within 12 months</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">For Practice Group Leaders</h3>
          <p className="mt-2 text-neutral-600">Practice-specific intelligence that works the way your team does</p>
          <p className="mt-4 text-2xl font-semibold text-[#0047AB]">40%</p>
          <p className="text-neutral-600">reduction in matter delivery time across practice areas</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">For IT Directors</h3>
          <p className="mt-2 text-neutral-600">One platform to coordinate all AI initiatives</p>
          <p className="mt-4 text-2xl font-semibold text-[#0047AB]">65%</p>
          <p className="text-neutral-600">reduction in AI management overhead</p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">For Individual Solicitors</h3>
          <p className="mt-2 text-neutral-600">Focus on judgment and client relationships, not administration</p>
          <p className="mt-4 text-2xl font-semibold text-[#0047AB]">15+</p>
          <p className="text-neutral-600">hours per week reclaimed from administrative tasks</p>
        </FadeIn>
      </div>
    </Container>
  )
}

function HowItWorks() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          The Orchestration Difference
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          More than a platform, Orchestrate Legal coordinates AI agents through a simple three-step approach:
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white">
            <span className="text-xl font-semibold">1</span>
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-[#102542]">Assess</h3>
          <p className="mt-2 text-neutral-600">
            We map your firm's workflows, identify opportunity areas, and establish baseline metrics to ensure measurable results.
          </p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white">
            <span className="text-xl font-semibold">2</span>
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-[#102542]">Orchestrate</h3>
          <p className="mt-2 text-neutral-600">
            We implement our core platform and configure selected AI agents to work together across your practice areas and support functions.
          </p>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB] text-white">
            <span className="text-xl font-semibold">3</span>
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-[#102542]">Amplify</h3>
          <p className="mt-2 text-neutral-600">
            We continuously measure, optimize, and expand capabilities based on real-world usage patterns and emerging needs.
          </p>
        </FadeIn>
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/implementation"
          className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
        >
          View Implementation Process
        </Link>
      </div>
    </Container>
  )
}

function SolutionOverview() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          A Complete Legal Agent Orchestration Solution
        </h2>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Client Services Agents</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Intake & Communication</li>
            <li>• Billing Management</li>
            <li>• Portal Management</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Document Intelligence Agents</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Analysis & Drafting</li>
            <li>• Review & Bundle Creation</li>
            <li>• Version Control</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Knowledge Agents</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Research & Precedents</li>
            <li>• Regulatory Updates</li>
            <li>• Case Tracking</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Practice-Specific Agents</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Property</li>
            <li>• Corporate</li>
            <li>• Litigation</li>
            <li>• Private Client</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Practice Management Agents</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Time Recording</li>
            <li>• KYC</li>
            <li>• Project Management</li>
            <li>• Training</li>
          </ul>
        </FadeIn>
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/agents"
          className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
        >
          Explore Agent Capabilities
        </Link>
      </div>
    </Container>
  )
}

function CaseStudyPreview() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Legal Agent Orchestration in Action
        </h2>
      </FadeIn>
      <div className="mt-16 rounded-2xl bg-[#F7F7F7] p-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#102542]">
                Mid-sized UK Commercial Firm
              </h3>
              <p className="mt-2 text-neutral-600">150 solicitors</p>
              <div className="mt-6">
                <h4 className="font-display text-lg font-semibold text-[#102542]">Challenge</h4>
                <p className="mt-2 text-neutral-600">
                  Struggling with inefficiency, high administrative costs, and increasing client pressure for fixed fees
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-display text-lg font-semibold text-[#102542]">Solution</h4>
                <p className="mt-2 text-neutral-600">
                  Implemented Orchestrate Legal platform with focus on document intelligence and practice management agents
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-[#102542]">Results</h4>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-2xl font-semibold text-[#0047AB]">32%</span>
                  <span className="text-neutral-600">reduction in matter delivery time</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl font-semibold text-[#0047AB]">28%</span>
                  <span className="text-neutral-600">increase in profit per partner</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl font-semibold text-[#0047AB]">90%</span>
                  <span className="text-neutral-600">decrease in document processing errors</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl font-semibold text-[#0047AB]">£380k</span>
                  <span className="text-neutral-600">annual cost savings from streamlined processes</span>
                </li>
              </ul>
            </div>
          </div>
          <blockquote className="mt-8 border-l-4 border-[#0047AB] pl-4 text-lg text-neutral-600">
            "Orchestrate Legal hasn't just given us better technology—it's fundamentally changed how we practice law. Our solicitors are more engaged, our clients are receiving better service, and our financial performance has dramatically improved."
            <footer className="mt-4 font-semibold text-[#102542]">Sarah Williams, Managing Partner</footer>
          </blockquote>
          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
            >
              Read Full Case Study
            </Link>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

function Differentiation() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-[#102542] sm:text-5xl">
          Beyond Point Solutions
        </h2>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Traditional Legal Tech</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Single-function tools</li>
            <li>• Creates technology silos</li>
            <li>• Generic capabilities</li>
            <li>• Additional management burden</li>
            <li>• Focuses on digitising existing processes</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">General-Purpose AI</h3>
          <ul className="mt-4 space-y-2 text-neutral-600">
            <li>• Broad capabilities</li>
            <li>• Requires significant customisation</li>
            <li>• Limited understanding of legal context</li>
            <li>• Compliance risks</li>
            <li>• One-size-fits-all approach</li>
          </ul>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#0047AB] p-8 text-white">
          <h3 className="font-display text-xl font-semibold">Orchestrate Legal</h3>
          <ul className="mt-4 space-y-2">
            <li>• Coordinated agent ecosystem</li>
            <li>• Unified intelligence</li>
            <li>• UK legal-specific training</li>
            <li>• Compliance by design</li>
            <li>• Focused on outcomes, not activities</li>
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
          Begin Your Legal Agent Orchestration Journey
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Whether you're just starting to explore AI or looking to coordinate your existing initiatives, Orchestrate Legal provides a clear path forward for UK law firms of all sizes.
        </p>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Schedule a Demonstration</h3>
          <p className="mt-2 text-neutral-600">
            See Legal Agent Orchestration in action with a customised demonstration for your firm.
          </p>
          <div className="mt-6">
            <Link
              href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/UNpmhJy2skqvqVJ5Ql-WRg2?anonymous&ep=mlink"
              className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
            >
              Book Demo
            </Link>
          </div>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Download Category Overview</h3>
          <p className="mt-2 text-neutral-600">
            Understand the principles and potential of Legal Agent Orchestration with our comprehensive guide.
          </p>
          <div className="mt-6">
            <Link
              href="/resources"
              className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
            >
              Download Guide
            </Link>
          </div>
        </FadeIn>
        <FadeIn className="rounded-2xl bg-[#F7F7F7] p-8">
          <h3 className="font-display text-xl font-semibold text-[#102542]">Attend a Webinar</h3>
          <p className="mt-2 text-neutral-600">
            Join our next live session on how UK law firms are transforming their practice through agent orchestration.
          </p>
          <div className="mt-6">
            <Link
              href="/webinars"
              className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
            >
              Register Now
            </Link>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  description:
    'Orchestrate Legal - Transforming UK law firms through Legal Agent Orchestration.',
}

export default async function Home() {

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-[#102542] sm:text-7xl">
            Transform Your Law Firm with Legal Agent Orchestration
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Coordinate AI agents across your practice to enhance solicitor capabilities, streamline operations, and deliver superior client service.
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

      <Clients />
      <ProblemStatement />
      <CategoryDefinition />
      <ValueProposition />
      <HowItWorks />
      <SolutionOverview />
      <CaseStudyPreview />
      <Differentiation />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Orchestrate Legal went above and beyond with our implementation, creating a truly integrated system that has transformed how our firm operates.
      </Testimonial>

      <GetStarted />      
    </>
  )
}
