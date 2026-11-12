import { Asks } from '@/components/home/Asks'
import { CareSection } from '@/components/home/CareScene'
import { HomeFooter } from '@/components/home/Footer'
import { HomeHeader, MobileCta } from '@/components/home/Header'
import { Hero } from '@/components/home/Hero'
import { PlannerSection } from '@/components/home/PlannerScene'
import { Close, ProofAndFit, Security, Terms } from '@/components/home/Sections'
import { TenDays } from '@/components/home/TenDays'
import { site } from '@/content/site'

import '@/components/home/home.css'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: 'GB',
  serviceType: 'AI agents built, hosted and looked after for services firms',
  address: { '@type': 'PostalAddress', addressCountry: 'GB' },
}

/* The home page brings its own header and footer (see SiteChrome). Other pages keep the site chrome. */
export default function Home() {
  return (
    <div className="ffh flex min-h-full flex-1 flex-col bg-ink text-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <HomeHeader />
      <main id="main" className="flex-auto">
        <Hero />
        <Asks />
        <TenDays />
        <CareSection />
        <Terms />
        <PlannerSection />
        <Security />
        <ProofAndFit />
        <Close />
      </main>
      <HomeFooter />
      <MobileCta />
    </div>
  )
}
