import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { TrustBadge } from '@/components/TrustBadge'
import { SecurityCard } from '@/components/SecurityCard'
import { ComplianceCard } from '@/components/ComplianceCard'
import { PracticeCategory } from '@/components/PracticeCategory'
import { IncidentProcessStep } from '@/components/IncidentProcessStep'

export const metadata: Metadata = {
  title: 'Security & Compliance',
  description: 'Bank-level encryption, comprehensive access controls, and compliance frameworks designed for the legal industry\'s strictest requirements.',
}

const trustBadges = [
  { icon: '🔐', text: 'AES-256 Encryption', status: 'Active' },
  { icon: '🛡️', text: 'SOC 2 Type II', status: 'In Progress' },
  { icon: '🇪🇺', text: 'GDPR Compliant', status: 'Active' },
  { icon: '🔍', text: 'ISO 27001', status: 'Roadmap 2025' },
  { icon: '📋', text: 'Audit Logging', status: 'Active' },
]

const securityCards = [
  {
    icon: '🔐',
    title: 'Data Encryption',
    description: 'Your data is encrypted at every stage using industry-standard protocols that meet or exceed regulatory requirements.',
    features: [
      'AES-256 encryption for data at rest',
      'TLS 1.3 for data in transit',
      'Encrypted database storage',
      'Encrypted backups',
      'Key rotation and management',
    ],
  },
  {
    icon: '👤',
    title: 'Access Controls',
    description: 'Granular role-based permissions ensure users only access data appropriate to their role and responsibilities.',
    features: [
      'Role-based access control (RBAC)',
      'Matter-level permissions',
      'Chinese wall support',
      'Multi-factor authentication (MFA)',
      'Single sign-on (SSO) via Azure AD',
    ],
  },
  {
    icon: '🏢',
    title: 'Multi-Tenant Isolation',
    description: 'Complete data separation between firms with dedicated partitions and zero data sharing.',
    features: [
      'Logical data partitioning per tenant',
      'Isolated database schemas',
      'Separate encryption keys per tenant',
      'Independent backup and recovery',
      'Zero cross-tenant data access',
    ],
  },
  {
    icon: '📋',
    title: 'Audit Logging',
    description: 'Comprehensive logging of all system activity for compliance, investigation, and accountability.',
    features: [
      'All data access logged',
      'User authentication events',
      'Configuration changes tracked',
      'Immutable audit trail',
      'Log retention: 7 years',
    ],
  },
  {
    icon: '🔄',
    title: 'Backup & Recovery',
    description: 'Automated backups with rapid recovery capabilities ensure your data is never lost.',
    features: [
      'Automated daily backups',
      'Point-in-time recovery',
      'Geographic redundancy',
      'Encrypted backup storage',
      'Tested disaster recovery procedures',
    ],
  },
  {
    icon: '🛡️',
    title: 'Infrastructure Security',
    description: 'Built on enterprise cloud infrastructure with proven security and reliability.',
    features: [
      'Hosted on AWS/Azure',
      'DDoS protection',
      'Web application firewall (WAF)',
      'Network intrusion detection',
      'Regular security patching',
    ],
  },
]

const complianceCards = [
  {
    icon: '🇪🇺',
    title: 'GDPR',
    status: 'Active',
    statusType: 'active' as const,
    description:
      'Full compliance with EU General Data Protection Regulation including data portability, right to erasure, and privacy by design.',
  },
  {
    icon: '🛡️',
    title: 'SOC 2 Type II',
    status: 'In Progress',
    statusType: 'progress' as const,
    description:
      'Currently undergoing SOC 2 Type II audit covering security, availability, processing integrity, confidentiality, and privacy. Expected completion Q2 2025.',
  },
  {
    icon: '🔍',
    title: 'ISO 27001',
    status: 'Roadmap 2025',
    statusType: 'progress' as const,
    description:
      'International standard for information security management systems. Certification planned for Q4 2025 as we scale operations.',
  },
]

const practiceCategories = [
  {
    title: 'What We Collect',
    items: [
      {
        title: 'Practice Management Data',
        description:
          'Matter information, time entries, invoices, client records, and financial transactions required to provide intelligence services.',
      },
      {
        title: 'Usage Analytics',
        description:
          'Anonymized usage patterns to improve product performance and user experience. Never shared outside your firm.',
      },
      {
        title: 'Authentication Data',
        description: 'User credentials and session information managed through Microsoft Azure AD integration.',
      },
    ],
  },
  {
    title: "What We Don't Do",
    items: [
      {
        title: 'No Data Sharing',
        description:
          'Your data is never shared with other firms, third parties, or used for any purpose beyond providing services to you.',
      },
      {
        title: 'No Training on Your Data',
        description: 'We do not use your firm\'s data to train AI models or improve services for other customers.',
      },
      {
        title: 'No Vendor Lock-In',
        description: 'Complete data export capabilities. You own your data and can leave with it at any time.',
      },
    ],
  },
  {
    title: 'Data Residency',
    items: [
      {
        title: 'UK & EU Options',
        description:
          'Data can be stored in UK or EU data centers to meet jurisdictional requirements and data sovereignty concerns.',
      },
      {
        title: 'Custom Requirements',
        description:
          'Enterprise clients can specify data residency requirements during implementation based on regulatory needs.',
      },
    ],
  },
  {
    title: 'Data Retention',
    items: [
      {
        title: 'Active Subscription',
        description: 'Your data is retained and backed up continuously throughout your active subscription period.',
      },
      {
        title: 'Post-Cancellation',
        description:
          'Data remains accessible for 90 days after cancellation. After 90 days, all data is permanently deleted unless you request earlier deletion.',
      },
    ],
  },
]

const incidentSteps = [
  {
    number: '1',
    title: 'Detection & Classification',
    description:
      '24/7 monitoring systems detect potential security events. Incidents are classified by severity: Critical, High, Medium, Low.',
  },
  {
    number: '2',
    title: 'Immediate Response',
    description: 'Security team is alerted immediately. Critical incidents trigger emergency response procedures within 15 minutes.',
  },
  {
    number: '3',
    title: 'Customer Notification',
    description:
      'Affected customers are notified within 72 hours for data breach incidents, within 24 hours for service disruption.',
  },
  {
    number: '4',
    title: 'Remediation & Prevention',
    description:
      'Root cause analysis, system hardening, and updated procedures to prevent recurrence. Post-incident reports provided to affected customers.',
  },
]

const architectureFeatures = [
  {
    title: 'Defense in Depth',
    description:
      'Multiple layers of security controls ensure that a single point of failure doesn\'t compromise your data.',
  },
  {
    title: 'Zero Trust Model',
    description: 'Every request is authenticated and authorized regardless of source. No implicit trust within the network.',
  },
  {
    title: 'Least Privilege Access',
    description: 'Users and services are granted only the minimum permissions necessary to perform their functions.',
  },
]

export default function Security() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 overflow-hidden text-center">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Bank-level encryption, comprehensive access controls, and compliance frameworks designed for the legal industry's strictest requirements.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Trust Badges Section */}
      <section className="relative bg-white py-16 px-6 lg:px-12 border-b border-slate-200">
        <Container className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={index} {...badge} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Core Security Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Protection
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How We Protect Your Data
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Multiple layers of security protecting your most sensitive client and matter information at every point.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityCards.map((card, index) => (
              <SecurityCard key={index} {...card} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance Section */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Compliance
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Meeting Regulatory Requirements
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Cognify is designed to meet the compliance needs of law firms handling sensitive client data.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceCards.map((card, index) => (
              <ComplianceCard key={index} {...card} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Data Practices Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Practices
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Data Commitments
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Clear, transparent policies on how we handle, store, and protect your firm's data.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceCategories.map((category, index) => (
              <PracticeCategory key={index} {...category} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Architecture
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Secure by Design
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our platform architecture prioritizes security and data isolation at every layer.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-12 rounded-xl shadow-lg mb-12">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-dashed border-indigo-600 rounded-xl p-16 text-center min-h-[400px] flex flex-col justify-center items-center">
                <strong className="block text-2xl text-slate-900 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  SECURITY ARCHITECTURE DIAGRAM
                </strong>
                <small className="block text-sm text-slate-700 max-w-[90%]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Visual diagram showing: (1) Your firm's Microsoft 365 tenant with user authentication via Azure AD, (2) Secure API gateway with TLS 1.3 encryption, (3) Multi-tenant application layer with logical data partitioning, (4) Encrypted database with separate schemas per tenant, (5) Practice management system integration with OAuth, (6) Backup and monitoring infrastructure. Use color coding to show data flow and security boundaries between tenants.
                </small>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architectureFeatures.map((feature, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h4
                    className="text-lg font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {feature.title}
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Incident Response Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Response
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Security Incident Management
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Clear procedures for detecting, responding to, and communicating about security events.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-slate-50 p-12 rounded-xl mb-8">
              {incidentSteps.map((step, index) => (
                <IncidentProcessStep key={index} {...step} delay={index * 0.1} />
              ))}
            </div>

            <p className="text-slate-700 text-center leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <strong>Security Contact:</strong> Report security concerns to{' '}
              <a href="mailto:security@cognifylegal.com" className="text-indigo-600 font-bold hover:text-indigo-700">
                security@cognifylegal.com
              </a>
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Whitepaper Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12 text-center">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Download Our Security Whitepaper
            </h2>
            <p className="text-lg text-slate-800 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Comprehensive technical documentation covering our security architecture, compliance frameworks, and data protection practices.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Download Whitepaper (PDF)
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 text-center text-white">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Questions About Security?
            </h2>
            <p className="text-xl mb-10 text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our team is happy to discuss your specific security and compliance requirements in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/book-demo"
                className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-lime-500/40 hover:shadow-2xl hover:shadow-lime-500/60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="bg-white/15 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30 backdrop-blur-md hover:bg-white/25 hover:border-white/50"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Security Team
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}

