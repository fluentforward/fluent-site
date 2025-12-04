import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { TableOfContents } from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Cognify Legal platform and services.',
}

const tocItems = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Data Controller', href: '#controller' },
  { label: 'Data We Collect', href: '#data-collect' },
  { label: 'How We Collect Data', href: '#how-collect' },
  { label: 'How We Use Data', href: '#use-data' },
  { label: 'Legal Basis', href: '#legal-basis' },
  { label: 'Data Sharing', href: '#sharing' },
  { label: 'Data Retention', href: '#retention' },
  { label: 'Data Security', href: '#security' },
  { label: 'Your Rights', href: '#your-rights' },
  { label: 'Cookies & Tracking', href: '#cookies' },
  { label: 'International Transfers', href: '#international' },
  { label: "Children's Privacy", href: '#children' },
  { label: 'Policy Changes', href: '#changes' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Privacy() {
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
              Privacy Policy
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
                    <strong className="text-slate-900">Your Privacy Matters.</strong> At Cognify Legal, we take data protection seriously. This Privacy Policy explains how we collect, use, protect, and share information about you.
                  </p>
                  <p className="text-slate-800 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    This policy applies to all users of the Cognify Legal platform and website. By using our Service, you agree to the collection and use of information in accordance with this policy.
                  </p>
                  <p className="text-slate-800 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong className="text-slate-900">We are committed to GDPR compliance and protecting your data rights.</strong>
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-12">
                <FadeIn delay={0.3}>
                  <section id="introduction" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      1. Introduction
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Cognify Legal Limited ("Cognify", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>What information we collect and why</li>
                      <li>How we use, store, and protect that information</li>
                      <li>Your rights regarding your personal data</li>
                      <li>How to contact us with privacy-related questions</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      This policy applies to personal data processed through our website (cognifylegal.com) and our software platform (the "Service").
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <section id="controller" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      2. Data Controller
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Cognify Legal Limited is the data controller responsible for your personal information. Our contact details are:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">Company:</strong> Cognify Legal Limited</li>
                      <li><strong className="text-slate-900">Email:</strong> privacy@cognifylegal.com</li>
                      <li><strong className="text-slate-900">Address:</strong> [Company Registered Address]</li>
                      <li><strong className="text-slate-900">Company Number:</strong> [To be assigned]</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      For data protection queries, please contact our Data Protection Officer at privacy@cognifylegal.com.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <section id="data-collect" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      3. What Data We Collect
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We collect different types of information depending on how you interact with us.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      3.1 Account & Profile Information
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      When you create an account, we collect:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Name and email address</li>
                      <li>Company/firm name and size</li>
                      <li>Job title and role</li>
                      <li>Phone number (optional)</li>
                      <li>Password (encrypted and never stored in plain text)</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      3.2 Customer Data
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      When you use our Service, we process data from your practice management systems and Microsoft 365, including:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Matter and client information</li>
                      <li>Time entries and billing data</li>
                      <li>Financial information (invoices, payments, WIP)</li>
                      <li>Staff and resource allocation data</li>
                      <li>Documents and communications (when accessed through integrations)</li>
                    </ul>
                    <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 rounded mb-6">
                      <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <strong className="text-slate-900">Important:</strong> You remain the data controller for all Customer Data. We process this data only on your instructions and in accordance with data processing agreements. We never use your Customer Data to train AI models or for any purpose other than providing the Service to you.
                      </p>
                    </div>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      3.3 Usage Information
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We automatically collect information about how you use the Service:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Features and pages accessed</li>
                      <li>Time spent using different features</li>
                      <li>Queries submitted to the intelligence system</li>
                      <li>Integration usage patterns</li>
                      <li>Error logs and performance data</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      3.4 Technical Information
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We collect technical data necessary to provide the Service:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Referring website and navigation path</li>
                      <li>Connection information and service logs</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      3.5 Marketing & Communications
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If you engage with our marketing:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Email addresses submitted for updates or demos</li>
                      <li>Communication preferences</li>
                      <li>Responses to surveys or feedback requests</li>
                      <li>Event attendance information</li>
                    </ul>
                  </section>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <section id="how-collect" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4. How We Collect Data
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4.1 Information You Provide
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We collect data you directly provide when you:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Create an account or update your profile</li>
                      <li>Configure integrations with your systems</li>
                      <li>Contact our support team</li>
                      <li>Complete forms on our website</li>
                      <li>Participate in surveys or feedback sessions</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4.2 Automated Collection
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We automatically collect data through:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Server logs and application analytics</li>
                      <li>Integration APIs (when you connect external systems)</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      4.3 Third-Party Sources
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We may receive data from:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Your practice management system (via authorized API connections)</li>
                      <li>Microsoft 365 (via authorized integrations)</li>
                      <li>Payment processors (for billing information)</li>
                    </ul>
                  </section>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <section id="use-data" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      5. How We Use Your Data
                    </h2>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full border-collapse border-2 border-slate-200 rounded-lg overflow-hidden">
                        <thead>
                          <tr>
                            <th className="bg-indigo-600 text-white p-4 text-left font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              Purpose
                            </th>
                            <th className="bg-indigo-600 text-white p-4 text-left font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              Data Used
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Provide the Service</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Account information, Customer Data, usage information, technical data
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Process Payments</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Billing information, payment details, subscription tier
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Customer Support</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Account information, usage data, support communications
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Improve Our Service</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Usage patterns, feature adoption, anonymized analytics
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Security & Fraud Prevention</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Technical data, access logs, authentication information
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Communications</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Email address, communication preferences, account status
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Legal Compliance</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              All data as required by law or legal process
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      What We Don't Do
                    </h3>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">Never sell your data:</strong> We do not sell, rent, or trade personal information to third parties</li>
                      <li><strong className="text-slate-900">Never train AI on your data:</strong> Your Customer Data is never used to train machine learning models</li>
                      <li><strong className="text-slate-900">Never share with competitors:</strong> We do not share your data with competing legal tech platforms</li>
                      <li><strong className="text-slate-900">No advertising:</strong> We do not use your data for targeted advertising</li>
                    </ul>
                  </section>
                </FadeIn>

                <FadeIn delay={0.55}>
                  <section id="legal-basis" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6. Legal Basis for Processing (GDPR)
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Under GDPR, we must have a lawful basis for processing your personal data. We rely on the following:
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6.1 Contract Performance
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Processing necessary to provide the Service you've subscribed to, including:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Creating and managing your account</li>
                      <li>Providing access to platform features</li>
                      <li>Processing integrations with your systems</li>
                      <li>Delivering customer support</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6.2 Legitimate Interests
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Processing necessary for our legitimate business interests, such as:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Improving and developing our Service</li>
                      <li>Ensuring security and preventing fraud</li>
                      <li>Understanding how customers use our platform</li>
                      <li>Internal business operations and analytics</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6.3 Legal Obligation
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Processing required to comply with legal obligations, including:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Tax and accounting requirements</li>
                      <li>Responding to lawful requests from authorities</li>
                      <li>Maintaining records as required by law</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      6.4 Consent
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Where we rely on consent (such as for marketing communications), you can withdraw it at any time.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <section id="sharing" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7. When We Share Data
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We only share your personal data in the following limited circumstances:
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.1 Service Providers
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We share data with trusted third-party service providers who help us operate our business:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">Cloud Infrastructure:</strong> AWS/Azure for hosting (UK/EU data centers)</li>
                      <li><strong className="text-slate-900">Payment Processing:</strong> Stripe for billing and subscriptions</li>
                      <li><strong className="text-slate-900">Email Services:</strong> For transactional emails and support communications</li>
                      <li><strong className="text-slate-900">Analytics:</strong> For anonymized usage analytics</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      All service providers are bound by data processing agreements and must maintain GDPR-compliant practices.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.2 Business Transfers
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If Cognify is acquired, merged, or undergoes restructuring, your personal data may be transferred as part of that transaction. We will notify you of any such change.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.3 Legal Requirements
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We may disclose personal data when required by law, such as:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>In response to valid legal process (subpoena, court order)</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>To prevent fraud or illegal activity</li>
                      <li>With your explicit consent</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      7.4 With Your Consent
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We will share your data with other parties only with your explicit consent.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.65}>
                  <section id="retention" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8. Data Retention
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8.1 Active Subscriptions
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We retain your personal data and Customer Data for as long as your account is active and you're using our Service.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8.2 After Cancellation
                    </h3>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">90-Day Grace Period:</strong> After cancellation, you have 90 days to export your Customer Data</li>
                      <li><strong className="text-slate-900">Permanent Deletion:</strong> After 90 days, all Customer Data is permanently deleted from our systems</li>
                      <li><strong className="text-slate-900">Account Information:</strong> Basic account information may be retained for 7 years for legal and accounting purposes</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      8.3 Legal Requirements
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Some data must be retained longer to comply with legal obligations:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Financial records: 7 years (UK tax law requirement)</li>
                      <li>Audit logs: 7 years (security and compliance)</li>
                      <li>Legal claims: Duration of claim plus 7 years</li>
                    </ul>
                  </section>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <section id="security" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9. Data Security
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We implement robust security measures to protect your data:
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9.1 Technical Measures
                    </h3>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">Encryption:</strong> AES-256 encryption at rest, TLS 1.3 in transit</li>
                      <li><strong className="text-slate-900">Access Controls:</strong> Role-based access control (RBAC) and multi-factor authentication (MFA)</li>
                      <li><strong className="text-slate-900">Network Security:</strong> Firewalls, DDoS protection, intrusion detection</li>
                      <li><strong className="text-slate-900">Regular Testing:</strong> Penetration testing and vulnerability assessments</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9.2 Organizational Measures
                    </h3>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Staff training on data protection and security</li>
                      <li>Strict access controls limiting data access to necessary personnel</li>
                      <li>Regular security audits and compliance reviews</li>
                      <li>Incident response procedures</li>
                    </ul>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      9.3 Data Breach Notification
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      In the unlikely event of a data breach affecting your personal data, we will:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Notify you within 72 hours of becoming aware</li>
                      <li>Report to relevant supervisory authorities as required</li>
                      <li>Take immediate action to contain and remedy the breach</li>
                      <li>Provide clear information about what happened and what steps you should take</li>
                    </ul>

                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      For detailed security information, see our{' '}
                      <Link href="/security" className="text-indigo-600 font-bold hover:text-lime-500">
                        Security & Compliance page
                      </Link>
                      .
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.75}>
                  <section id="your-rights" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10. Your Data Protection Rights
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Under GDPR and UK data protection law, you have the following rights:
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.1 Right to Access
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You can request a copy of all personal data we hold about you. We will provide this within 30 days at no charge.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.2 Right to Rectification
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You can update or correct inaccurate personal data through your account settings or by contacting us.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.3 Right to Erasure ("Right to be Forgotten")
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You can request deletion of your personal data. We will comply unless we have a legitimate reason to retain it (such as legal obligations).
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.4 Right to Restrict Processing
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You can request that we limit how we use your data in certain circumstances.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.5 Right to Data Portability
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You can export your Customer Data at any time in a structured, machine-readable format (CSV, JSON).
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.6 Right to Object
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You can object to processing based on legitimate interests or for marketing purposes.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.7 Right to Withdraw Consent
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Where we rely on consent, you can withdraw it at any time without affecting prior processing.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      10.8 Right to Complain
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) or your local supervisory authority.
                    </p>

                    <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 rounded mb-6">
                      <p className="text-slate-700 leading-relaxed mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <strong className="text-slate-900">To exercise any of these rights, contact us at privacy@cognifylegal.com</strong>
                      </p>
                      <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        We will respond to all requests within 30 days.
                      </p>
                    </div>
                  </section>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <section id="cookies" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11. Cookies & Tracking Technologies
                    </h2>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11.1 What Are Cookies?
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Cookies are small text files stored on your device that help us provide and improve our Service.
                    </p>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11.2 Cookies We Use
                    </h3>
                    <div className="overflow-x-auto my-6">
                      <table className="w-full border-collapse border-2 border-slate-200 rounded-lg overflow-hidden">
                        <thead>
                          <tr>
                            <th className="bg-indigo-600 text-white p-4 text-left font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              Type
                            </th>
                            <th className="bg-indigo-600 text-white p-4 text-left font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              Purpose
                            </th>
                            <th className="bg-indigo-600 text-white p-4 text-left font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Essential Cookies</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Required for the Service to function (authentication, security)
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Session or 1 year
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Functional Cookies</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Remember your preferences and settings
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              1 year
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 border-t border-slate-200">
                              <strong className="text-slate-900">Analytics Cookies</strong>
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              Help us understand how users interact with our Service (anonymized)
                            </td>
                            <td className="p-4 border-t border-slate-200 text-slate-700">
                              2 years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3
                      className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      11.3 Managing Cookies
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      You can control cookies through your browser settings. Note that disabling essential cookies may affect Service functionality.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.85}>
                  <section id="international" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      12. International Data Transfers
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Your data is primarily stored in UK and EU data centers. If we transfer data outside the UK/EEA, we ensure adequate protection through:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                      <li>Adequacy decisions recognizing equivalent data protection</li>
                      <li>Additional safeguards as required by GDPR</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Enterprise clients can request data residency in specific regions.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.9}>
                  <section id="children" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      13. Children's Privacy
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Our Service is not intended for individuals under 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately at privacy@cognifylegal.com.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={0.95}>
                  <section id="changes" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      14. Changes to This Policy
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li>Notify you via email of material changes at least 30 days in advance</li>
                      <li>Update the "Last Updated" date at the top of this page</li>
                      <li>Post a notice on our website for significant changes</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Your continued use of the Service after changes take effect constitutes acceptance of the updated policy.
                    </p>
                  </section>
                </FadeIn>

                <FadeIn delay={1.0}>
                  <section id="contact" className="scroll-mt-24">
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-6 pt-8 border-t-2 border-slate-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      15. Contact Us
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      For privacy-related questions, concerns, or to exercise your data protection rights:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700 ml-6 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <li><strong className="text-slate-900">Data Protection Officer:</strong> privacy@cognifylegal.com</li>
                      <li><strong className="text-slate-900">General Inquiries:</strong> hello@cognifylegal.com</li>
                      <li><strong className="text-slate-900">Security Issues:</strong> security@cognifylegal.com</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <strong className="text-slate-900">Postal Address:</strong>
                      <br />
                      Cognify Legal Limited
                      <br />
                      [Company Registered Address]
                      <br />
                      United Kingdom
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <strong className="text-slate-900">Supervisory Authority:</strong>
                      <br />
                      Information Commissioner's Office (ICO)
                      <br />
                      Website: ico.org.uk
                      <br />
                      Phone: 0303 123 1113
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
                      Questions About Your Privacy?
                    </h3>
                    <p className="text-white/90 mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      If you have questions about how we handle your data or want to exercise your privacy rights, we're here to help.
                    </p>
                    <a
                      href="mailto:privacy@cognifylegal.com"
                      className="text-lime-500 font-bold text-xl hover:text-white transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      privacy@cognifylegal.com
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

