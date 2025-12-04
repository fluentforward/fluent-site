import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { TableOfContents } from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Cognify Legal platform and services.',
}

const tocItems = [
  { label: 'Acceptance of Terms', href: '#acceptance' },
  { label: 'Definitions', href: '#definitions' },
  { label: 'Service Description', href: '#service-description' },
  { label: 'Account & Registration', href: '#account' },
  { label: 'Subscription & Billing', href: '#subscription' },
  { label: 'Acceptable Use', href: '#use-restrictions' },
  { label: 'Customer Data', href: '#data' },
  { label: 'Intellectual Property', href: '#ip' },
  { label: 'Warranties', href: '#warranties' },
  { label: 'Limitation of Liability', href: '#liability' },
  { label: 'Termination', href: '#termination' },
  { label: 'Changes to Terms', href: '#changes' },
  { label: 'Governing Law', href: '#governing-law' },
  { label: 'General Provisions', href: '#general' },
  { label: 'Contact Information', href: '#contact' },
]

export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-20 px-6 lg:px-12 overflow-hidden text-center">
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`,
            animation: 'float 20s linear infinite',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Terms of Service
            </h1>
            <p className="text-lg text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Last Updated: December 1, 2024
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Main Content */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar TOC */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} delay={0.2} />
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 max-w-4xl">
              <FadeIn delay={0.2}>
                <div className="bg-lime-500 p-8 rounded-xl mb-12">
                  <p className="text-slate-800 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong className="text-slate-900">Welcome to Cognify Legal.</strong> These Terms of Service ("Terms") govern your access to and use of the Cognify Legal platform and services.
                  </p>
                  <p className="text-slate-800 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
                  </p>
                  <p className="text-slate-800 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong className="text-slate-900">For questions about these Terms, please contact us at legal@cognifylegal.com</strong>
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-12">
                <FadeIn delay={0.3}>
                  <section id="acceptance" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      By creating an account, accessing, or using the Cognify Legal platform ("Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      These Terms constitute a legally binding agreement between you or the entity you represent ("Customer", "you", or "your") and Cognify Legal Limited ("Cognify", "we", "us", or "our").
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <section id="definitions" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      2. Definitions
                    </h2>
                    <ul className="space-y-3 text-lg text-slate-700 ml-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">Service:</strong> The Cognify Legal software platform, including all features, applications, integrations, and associated services.</li>
                      <li><strong className="text-slate-900">Customer Data:</strong> All data, content, and information submitted, uploaded, or transmitted by you or your authorized users through the Service.</li>
                      <li><strong className="text-slate-900">Authorized Users:</strong> Your employees, contractors, or agents who are authorized to use the Service under your subscription.</li>
                      <li><strong className="text-slate-900">Practice Management System (PMS):</strong> Third-party legal practice management software that integrates with the Service, such as ActionStep or Clio.</li>
                      <li><strong className="text-slate-900">Subscription Plan:</strong> The specific tier of Service (Starter, Professional, or Enterprise) you have selected and are billed for.</li>
                      <li><strong className="text-slate-900">Microsoft 365:</strong> Microsoft's cloud productivity platform with which the Service integrates.</li>
                    </ul>
                  </section>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <section id="service-description" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      3. Service Description
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Cognify provides a business intelligence platform purpose-built for law firms that:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Integrates with your Practice Management System to access and analyze firm data</li>
                      <li>Embeds intelligence capabilities into Microsoft 365 applications (Word, Excel, PowerPoint, Outlook, Teams)</li>
                      <li>Delivers proactive intelligence through an Intelligence Feed</li>
                      <li>Provides performance dashboards with customizable KPIs</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      The Service is provided on a subscription basis. Features, functionality, and availability may vary depending on your Subscription Plan.
                    </p>
                    <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 rounded mb-6">
                      <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <strong className="text-slate-900">Beta Features:</strong> From time to time, we may offer features in beta or early access. These features are provided "as is" and may be modified, discontinued, or removed at any time without notice. Beta features are not subject to SLA commitments.
                      </p>
                    </div>
                  </section>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <section id="account" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4. Account Registration & Security
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4.1 Account Creation
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      To use the Service, you must create an account by providing accurate, current, and complete information. You agree to update this information as necessary to keep it accurate and complete.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4.2 Account Security
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You are responsible for:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Maintaining the confidentiality of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Immediately notifying us of any unauthorized access or security breach</li>
                      <li>Ensuring that Authorized Users comply with these Terms</li>
                    </ul>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4.3 Authorized Users
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You may designate Authorized Users based on your Subscription Plan's user limits. You are responsible for all actions taken by your Authorized Users and must ensure they comply with these Terms. Each user must have a unique login; sharing credentials is prohibited.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <section id="subscription" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5. Subscription Plans, Billing & Payment
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5.1 Subscription Plans
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      The Service is offered in three tiers: Starter, Professional, and Enterprise. Each plan includes different features, user limits, and support levels as described on our pricing page. Enterprise plans may include custom terms negotiated separately.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5.2 Billing
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Subscription fees are billed monthly or annually in advance, based on your selected billing cycle. All fees are in British Pounds Sterling (GBP) unless otherwise agreed in writing.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5.3 Payment Terms
                    </h3>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Payment is due at the start of each billing period</li>
                      <li>You authorize us to charge your designated payment method automatically</li>
                      <li>Failed payments may result in service suspension after 7 days</li>
                      <li>Late payments may incur interest at 1.5% per month or the maximum rate permitted by law</li>
                    </ul>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5.4 Price Changes
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We may change subscription prices with 30 days' notice. Price changes will take effect at the start of your next billing cycle. Founding Client Program participants are exempt from price increases for the duration of their lifetime discount.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5.5 Refunds
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Subscription fees are non-refundable except as required by law or as explicitly stated in these Terms. If you cancel during a billing period, you will retain access until the end of that period, but no refund will be issued for unused time.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5.6 Taxes
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      All fees are exclusive of applicable taxes, duties, and similar charges. You are responsible for all such charges in addition to the subscription fees.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.55}>
                  <section id="use-restrictions" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6. Acceptable Use Policy
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6.1 Permitted Use
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You may use the Service only for lawful purposes and in accordance with these Terms. The Service is designed for use by law firms and legal professionals for business intelligence and practice management purposes.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6.2 Prohibited Activities
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You agree not to:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights of Cognify or third parties</li>
                      <li>Upload viruses, malware, or malicious code</li>
                      <li>Attempt to gain unauthorized access to the Service or related systems</li>
                      <li>Interfere with or disrupt the Service or servers</li>
                      <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                      <li>Use the Service to develop competing products or services</li>
                      <li>Remove or obscure proprietary notices or labels</li>
                      <li>Share your account credentials or allow unauthorized access</li>
                      <li>Use the Service to store or transmit content that is illegal, defamatory, or violates third-party rights</li>
                      <li>Resell, sublicense, or otherwise commercialize access to the Service without our written permission</li>
                    </ul>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6.3 Enforcement
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We reserve the right to investigate and take appropriate action against anyone who violates this policy, including suspending or terminating accounts and reporting illegal activity to law enforcement.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <section id="data" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7. Customer Data & Privacy
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.1 Your Data
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You retain all rights, title, and interest in your Customer Data. We claim no ownership rights over your data. You are solely responsible for the accuracy, quality, and legality of your Customer Data and the means by which you acquired it.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.2 Our Use of Your Data
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We will use Customer Data only to:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Provide, maintain, and improve the Service</li>
                      <li>Respond to your support requests</li>
                      <li>Generate aggregated, anonymized analytics (never for training AI models or sharing with third parties)</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.3 Data Security
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We implement industry-standard security measures to protect Customer Data, including encryption at rest and in transit. However, no method of transmission or storage is 100% secure. See our{' '}
                      <Link href="/security" className="text-indigo-600 font-bold hover:text-lime-500">
                        Security & Compliance page
                      </Link>{' '}
                      for detailed information.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.4 Data Processing
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We process Customer Data in accordance with applicable data protection laws, including GDPR. Our data processing practices are detailed in our{' '}
                      <Link href="/contact" className="text-indigo-600 font-bold hover:text-lime-500">
                        Privacy Policy
                      </Link>
                      , which is incorporated into these Terms by reference.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.5 Data Portability & Deletion
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You may export your Customer Data at any time through the Service. Upon termination, you have 90 days to export your data before it is permanently deleted. We will permanently delete all Customer Data within 90 days of termination unless legal obligations require longer retention.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.65}>
                  <section id="ip" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8. Intellectual Property Rights
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8.1 Cognify Property
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      The Service, including all software, algorithms, designs, text, graphics, interfaces, and other content, is owned by Cognify and protected by copyright, trademark, and other intellectual property laws. These Terms do not grant you any ownership rights in the Service.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8.2 License to Use
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service during your subscription period solely for your internal business purposes.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8.3 Feedback
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If you provide feedback, suggestions, or ideas about the Service, you grant us a worldwide, perpetual, irrevocable, royalty-free license to use such feedback without any obligation to you.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8.4 Trademarks
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      "Cognify Legal," the Cognify logo, and other marks are trademarks of Cognify Legal Limited. You may not use these marks without our prior written permission.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <section id="warranties" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9. Warranties & Disclaimers
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9.1 Service Availability
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We strive to provide reliable service availability. Enterprise plans include specific SLA commitments as detailed in your agreement. For Starter and Professional plans, we target 99.5% uptime but do not guarantee specific availability levels.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9.2 Disclaimer of Warranties
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    </p>
                    <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 rounded mb-6">
                      <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <strong className="text-slate-900">Important:</strong> Cognify is a business intelligence tool. We do not provide legal advice. The insights and analytics provided by the Service are for informational purposes only and should not be relied upon as legal, financial, or professional advice. You are responsible for making your own independent judgments based on the information provided.
                      </p>
                    </div>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9.3 Third-Party Services
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      The Service integrates with third-party systems (e.g., Microsoft 365, practice management systems). We are not responsible for the availability, performance, or security of these third-party services. Changes to third-party APIs or services may affect functionality.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.75}>
                  <section id="liability" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10. Limitation of Liability
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.1 Limitation of Damages
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COGNIFY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, WHETHER IN AN ACTION IN CONTRACT, TORT, OR OTHERWISE, EVEN IF COGNIFY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.2 Cap on Liability
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      COGNIFY'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO COGNIFY IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR £1,000, WHICHEVER IS GREATER.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.3 Exceptions
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      The limitations in this section do not apply to:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Our indemnification obligations</li>
                      <li>Your payment obligations</li>
                      <li>Your breach of intellectual property rights</li>
                      <li>Liability that cannot be excluded under applicable law</li>
                    </ul>
                  </section>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <section id="termination" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11. Term, Termination & Suspension
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11.1 Term
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      These Terms begin when you first access the Service and continue until terminated by either party.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11.2 Termination by You
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You may cancel your subscription at any time through your account settings or by contacting support. Cancellation takes effect at the end of your current billing period. No refunds will be provided for partial months.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11.3 Termination by Us
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We may terminate or suspend your access immediately, without prior notice, if:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>You breach these Terms</li>
                      <li>Your payment fails and remains unpaid for 30 days</li>
                      <li>Your use poses a security risk to the Service or other users</li>
                      <li>We are required to do so by law</li>
                      <li>We decide to discontinue the Service (with 90 days' notice)</li>
                    </ul>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11.4 Effect of Termination
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Upon termination:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Your right to access the Service immediately ceases</li>
                      <li>You must cease all use of the Service</li>
                      <li>You have 90 days to export your Customer Data</li>
                      <li>All fees owed remain due and payable</li>
                      <li>Sections that by their nature should survive termination will continue to apply</li>
                    </ul>
                  </section>
                </FadeIn>

                <FadeIn delay={0.85}>
                  <section id="changes" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      12. Changes to Terms
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We may modify these Terms at any time. We will provide notice of material changes via email or through the Service at least 30 days before they take effect. Your continued use of the Service after changes take effect constitutes acceptance of the modified Terms.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If you do not agree to the modified Terms, you must stop using the Service and cancel your subscription before the changes take effect.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.9}>
                  <section id="governing-law" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      13. Governing Law & Dispute Resolution
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      13.1 Governing Law
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      These Terms are governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      13.2 Jurisdiction
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You agree that any dispute arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      13.3 Dispute Resolution
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Before initiating any formal proceedings, you agree to first attempt to resolve any dispute informally by contacting us at legal@cognifylegal.com. We will attempt to resolve disputes in good faith.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.95}>
                  <section id="general" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14. General Provisions
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14.1 Entire Agreement
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      These Terms, together with our Privacy Policy and any additional terms specific to your Subscription Plan, constitute the entire agreement between you and Cognify regarding the Service.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14.2 Severability
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14.3 Waiver
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14.4 Assignment
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14.5 Force Majeure
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Neither party shall be liable for any failure to perform due to causes beyond its reasonable control, including acts of God, war, terrorism, internet failures, or government actions.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14.6 Export Compliance
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You agree to comply with all applicable export and import laws and regulations in your use of the Service.
                    </p>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14.7 No Agency
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Nothing in these Terms creates any agency, partnership, or joint venture between you and Cognify.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={1.0}>
                  <section id="contact" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      15. Contact Information
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If you have questions about these Terms, please contact us:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">Email:</strong> legal@cognifylegal.com</li>
                      <li><strong className="text-slate-900">General Inquiries:</strong> hello@cognifylegal.com</li>
                      <li><strong className="text-slate-900">Support:</strong> support@cognifylegal.com</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <strong className="text-slate-900">Company Information:</strong>
                      <br />
                      Cognify Legal Limited
                      <br />
                      Registered in England and Wales
                      <br />
                      Company Number: [To be assigned]
                    </p>
                  </section>
                </FadeIn>

                {/* Contact CTA */}
                <FadeIn delay={1.05}>
                  <div className="bg-slate-900 p-12 rounded-xl text-center text-white mt-12">
                    <h3
                      className="text-3xl font-bold mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Questions About These Terms?
                    </h3>
                    <p className="text-white/90 mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If you have questions or need clarification about any part of our Terms of Service, we're here to help.
                    </p>
                    <a
                      href="mailto:legal@cognifylegal.com"
                      className="text-lime-500 font-bold text-xl hover:text-white transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      legal@cognifylegal.com
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

