import { Asks } from '@/components/home/Asks'
import { CareSection } from '@/components/home/CareScene'
import { Hero } from '@/components/home/Hero'
import { PlannerSection } from '@/components/home/PlannerScene'
import { Close, ProofAndFit, Security, Terms } from '@/components/home/Sections'
import { TenDays } from '@/components/home/TenDays'
import { MobileCta } from '@/components/layout/Header'
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

/* Header, footer and <main> come from SiteChrome. */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Asks />
      <TenDays />
      <CareSection />
      <Terms />
      <PlannerSection />
      <Security />
      <ProofAndFit />
      <Close />
      <MobileCta />
    </>
  )
}
