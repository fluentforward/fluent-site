import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Orchestrate Legal to learn more about Legal Agent Orchestration.',
}

function ContactForm() {
  return (
    <form className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-neutral-950">
          Name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-[#0047AB] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-neutral-950">
          Email
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-[#0047AB] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-neutral-950">
          Company
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-[#0047AB] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-neutral-950">
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-[#0047AB] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="block w-full rounded-md bg-[#0047AB] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#102542] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047AB]"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

function ContactInfo() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <FadeIn>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Our offices
        </h2>
        <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      </FadeIn>
      <FadeIn>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </FadeIn>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let's talk about your firm's future">
        <p>
          Whether you're ready to transform your practice or just want to learn more about Legal Agent Orchestration, we're here to help.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <FadeIn>
            <ContactForm />
          </FadeIn>
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Schedule a Demonstration
              </h2>
              <p className="mt-4 text-neutral-600">
                See Legal Agent Orchestration in action with a customised demonstration for your firm. Our team will walk you through how our platform can address your specific challenges and opportunities.
              </p>
              <div className="mt-8">
                <a
                  href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/UNpmhJy2skqvqVJ5Ql-WRg2?anonymous&ep=mlink"
                  className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ContactInfo />
      </Container>
    </>
  )
}
