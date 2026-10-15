import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { theBoard } from '@/content/home'

export function HomeBoardSection() {
  return (
    <Section tone="paper" border>
      <Reveal className="max-w-3xl">
        <Eyebrow>{theBoard.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">{theBoard.heading}</Heading>
        <Lede className="mt-8">{theBoard.body}</Lede>
        <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
          {theBoard.support}
        </p>
        <div className="mt-6">
          <ArrowLink href="/leverage-board">See what a seat includes</ArrowLink>
        </div>
      </Reveal>
    </Section>
  )
}
