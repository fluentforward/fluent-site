import { ProofSection } from '@/components/sections/ProofSection'
import { SectorsSection } from '@/components/sections/SectorsSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { HomeHero } from '@/components/sections/HomeHero'
import { PhaseRail } from '@/components/sections/PhaseRail'
import { StrategyBlueprintsSection } from '@/components/sections/StrategyBlueprintsSection'
import { ContrastSection } from '@/components/sections/ContrastSection'
import { EngineDefinitionSection } from '@/components/sections/EngineDefinitionSection'
import { WhoItsForSection } from '@/components/sections/WhoItsForSection'
import { StrategyBuildTeaser } from '@/components/sections/StrategyBuildTeaser'
import { TermsStrip } from '@/components/sections/TermsStrip'
import { closingCta } from '@/content/home'
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
  serviceType: 'AI advisory and implementation',
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
      <TermsStrip />
      <ContrastSection />
      <EngineDefinitionSection />
      <WhoItsForSection />
      <PhaseRail />
      <SectorsSection />
      <ProofSection />
      <StrategyBlueprintsSection />
      <StrategyBuildTeaser />
      <CtaBand {...closingCta} />
    </>
  )
}
