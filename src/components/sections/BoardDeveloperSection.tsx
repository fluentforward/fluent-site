import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { developerLeverage } from '@/content/leverage-board'

function DeveloperHeading() {
  const heading = developerLeverage.heading
  const splitAt = heading.indexOf('. ')
  if (splitAt === -1) {
    return heading
  }
  const firstLine = heading.slice(0, splitAt + 1)
  const secondLine = heading.slice(splitAt + 2)
  const secondWithNbsp = secondLine.startsWith("A ")
    ? `A\u00a0${secondLine.slice(2)}`
    : secondLine

  return (
    <>
      {firstLine}
      <br className="hidden md:block" />
      {secondWithNbsp}
    </>
  )
}

export function BoardDeveloperSection() {
  return (
    <Section tone="ink" id="when-the-board-says-build" size="loose">
      <Reveal className="max-w-3xl">
        <Eyebrow tone="dark">{developerLeverage.eyebrow}</Eyebrow>
        <Heading as="h2" tone="dark" className="mt-8">
          <DeveloperHeading />
        </Heading>
        <p className="mt-8 text-lede leading-[1.72] text-mist">{developerLeverage.body}</p>
        <p className="mt-8 text-[0.9375rem] leading-[1.72] text-mist/90">
          {developerLeverage.smallPrint}
        </p>
      </Reveal>
    </Section>
  )
}
