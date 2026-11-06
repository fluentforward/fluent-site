import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { HomeWhereToStartSection } from '@/components/sections/home/HomeWhereToStartSection'
import { HomeClosingSection } from '@/components/sections/home/HomeClosingSection'
import { HomeFitSection } from '@/components/sections/home/HomeFitSection'
import { HomeProofSection } from '@/components/sections/home/HomeProofSection'
import { HomeOutcomesSection } from '@/components/sections/home/HomeOutcomesSection'
import { HomeThreeStepsSection } from '@/components/sections/home/HomeThreeStepsSection'
import { HomeWebinarSection } from '@/components/sections/home/HomeWebinarSection'
import { HomeWhyFixesFailSection } from '@/components/sections/home/HomeWhyFixesFailSection'
import { HomeHero } from '@/components/sections/HomeHero'
import { growthLimits } from '@/content/home'
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
  serviceType: 'Profit Engine advisory and implementation for services firms',
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
        eyebrow={growthLimits.eyebrow}
        heading={growthLimits.heading}
        lede={growthLimits.lede}
        items={growthLimits.items}
        closing={growthLimits.closing}
        closingLink={{ href: '/ways-we-work', label: 'See ways we work' }}
        tone="paper"
        id="growth-limits"
        size="compact"
        dense
        variant="quotes"
      />
      <HomeOutcomesSection />
      <HomeWhereToStartSection />
      <HomeWhyFixesFailSection />
      <HomeFitSection />
      <HomeThreeStepsSection
        moreLink={{ href: '/how-it-works', label: 'How Profit Engine works' }}
      />
      <HomeProofSection size="compact" />
      <HomeWebinarSection />
      <HomeClosingSection />
    </>
  )
}
