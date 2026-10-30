import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { HomeSectorStripSection } from '@/components/sections/home/HomeSectorStripSection'
import { HomeWhereToStartSection } from '@/components/sections/home/HomeWhereToStartSection'
import { HomeClosingSection } from '@/components/sections/home/HomeClosingSection'
import { HomeFitSection } from '@/components/sections/home/HomeFitSection'
import { HomeProofSection } from '@/components/sections/home/HomeProofSection'
import { HomeThreeStepsSection } from '@/components/sections/home/HomeThreeStepsSection'
import { HomeWhyFixesFailSection } from '@/components/sections/home/HomeWhyFixesFailSection'
import { HomeHero } from '@/components/sections/HomeHero'
import { bindingWall } from '@/content/home'
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
  serviceType: 'Client Capacity advisory for services firms',
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
      <DefinitionGrid
        eyebrow={bindingWall.eyebrow}
        heading={bindingWall.heading}
        lede={bindingWall.lede}
        items={bindingWall.items}
        closing={bindingWall.closing}
        tone="paper"
        id="binding-wall"
      />
      <HomeWhereToStartSection />
      <HomeSectorStripSection />
      <HomeWhyFixesFailSection />
      <HomeFitSection />
      <HomeThreeStepsSection />
      <HomeProofSection />
      <HomeClosingSection />
    </>
  )
}
