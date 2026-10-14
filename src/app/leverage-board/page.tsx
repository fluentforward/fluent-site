import { type Metadata } from 'next'

import { BoardDeveloperSection } from '@/components/sections/BoardDeveloperSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { HomeClosingSection } from '@/components/sections/home/HomeClosingSection'
import { HomeProofSection } from '@/components/sections/home/HomeProofSection'
import { HomeThreeStepsSection } from '@/components/sections/home/HomeThreeStepsSection'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { PageHero } from '@/components/sections/PageHero'
import { ResearchProofStrip } from '@/components/sections/ResearchProofStrip'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  faq,
  fitLine,
  gartnerProofBoard,
  hero,
  howItWorksLink,
  meta,
  shipGateImpactBuild,
  summit,
  whatYouGet,
} from '@/content/leverage-board'

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: '/leverage-board' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: '/leverage-board',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
}

export default function LeverageBoardPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} heading={hero.heading} />

      <DefinitionGrid
        heading={whatYouGet.heading}
        lede={whatYouGet.intro}
        items={whatYouGet.items}
        tone="muted"
        id="what-you-get"
      />

      <Section tone="paper" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{summit.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {summit.body}
          </p>
        </Reveal>
      </Section>

      <Section tone="muted" border>
        <Reveal className="max-w-2xl">
          <Heading as="h2">{shipGateImpactBuild.heading}</Heading>
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {shipGateImpactBuild.body}
          </p>
        </Reveal>
      </Section>

      <BoardDeveloperSection />

      <ResearchProofStrip content={gartnerProofBoard} tone="paper" border />

      <HomeProofSection />

      <HomeThreeStepsSection moreLink={howItWorksLink} />

      <FaqSection content={faq} />

      <HomeClosingSection fitLine={fitLine} />
    </>
  )
}
