import { CtaBand } from '@/components/sections/CtaBand'
import { FounderStrip } from '@/components/sections/FounderStrip'
import { HomeHero } from '@/components/sections/HomeHero'
import { PhaseRail } from '@/components/sections/PhaseRail'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ProofSection } from '@/components/sections/ProofSection'
import { QueueTeaser } from '@/components/sections/QueueTeaser'
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
      <ProblemSection />
      <PhaseRail />
      <QueueTeaser />
      <ProofSection />
      <FounderStrip />
      <CtaBand {...closingCta} />
    </>
  )
}
