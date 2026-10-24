import { HomeBoardSection } from '@/components/sections/home/HomeBoardSection'
import { HomeWhereToStartSection } from '@/components/sections/home/HomeWhereToStartSection'
import { HomeClosingSection } from '@/components/sections/home/HomeClosingSection'
import { HomeFitSection } from '@/components/sections/home/HomeFitSection'
import { HomeOutcomesSection } from '@/components/sections/home/HomeOutcomesSection'
import { HomePainSection } from '@/components/sections/home/HomePainSection'
import { HomeProofSection } from '@/components/sections/home/HomeProofSection'
import { HomeThreeStepsSection } from '@/components/sections/home/HomeThreeStepsSection'
import { HomeWhyFixesFailSection } from '@/components/sections/home/HomeWhyFixesFailSection'
import { HomeHero } from '@/components/sections/HomeHero'
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
      <HomeWhereToStartSection />
      <HomePainSection />
      <HomeWhyFixesFailSection />
      <HomeBoardSection />
      <HomeOutcomesSection />
      <HomeFitSection />
      <HomeThreeStepsSection />
      <HomeProofSection />
      <HomeClosingSection />
    </>
  )
}
