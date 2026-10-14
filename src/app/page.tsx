import { BoardHowItWorksSection } from '@/components/sections/BoardHowItWorksSection'
import { ContrastSection } from '@/components/sections/ContrastSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { HomeHero } from '@/components/sections/HomeHero'
import { PillarsSection } from '@/components/sections/PillarsSection'
import { ProofSection } from '@/components/sections/ProofSection'
import { ResearchProofStrip } from '@/components/sections/ResearchProofStrip'
import { WhenBoardSaysBuildSection } from '@/components/sections/WhenBoardSaysBuildSection'
import { WhoItsForSection } from '@/components/sections/WhoItsForSection'
import { boardOutcomes } from '@/content/board'
import { closingCta, gartnerProofHome } from '@/content/home'
import { proofPacksHome } from '@/content/proof'
import { site } from '@/content/site'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: 'GB',
  serviceType: 'AI and operations advisory membership',
  founder: { '@type': 'Person', name: 'Matt Todd' },
  address: { '@type': 'PostalAddress', addressCountry: 'GB' },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHero />
      <ContrastSection />
      <PillarsSection />
      <ResearchProofStrip content={gartnerProofHome} tone="paper" border />
      <ProofSection packs={proofPacksHome} />
      <DefinitionGrid
        eyebrow={boardOutcomes.eyebrow}
        heading={boardOutcomes.heading}
        items={boardOutcomes.items}
        tone="muted"
      />
      <BoardHowItWorksSection />
      <WhenBoardSaysBuildSection />
      <WhoItsForSection />
      <CtaBand
        {...closingCta}
        primary={closingCta.primaryCta}
        secondary={closingCta.secondaryCta}
      />
    </>
  )
}
