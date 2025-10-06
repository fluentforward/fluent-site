import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Launching soon — blog will return after our private pilot.',
}

export default function Blog() {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Launching soon">
        <p>
          We’re focused on delivery with pilot firms. Articles will be back soon.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Link
            href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/UNpmhJy2skqvqVJ5Ql-WRg2?anonymous&ep=mlink"
            className="inline-block rounded-lg bg-[#0047AB] px-6 py-3 text-base font-semibold text-white hover:bg-[#102542]"
          >
            Schedule a Demonstration
          </Link>
        </FadeIn>
      </Container>
    </>
  )
}
