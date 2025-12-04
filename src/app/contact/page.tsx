'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ContactCard } from '@/components/ContactCard'
import { DepartmentCard } from '@/components/DepartmentCard'
import { FAQItem } from '@/components/FAQItem'

const contactCards = [
  {
    icon: '📅',
    title: 'Book a Demo',
    description: 'See Cognify in action with a personalized demonstration tailored to your firm\'s needs.',
    linkText: 'Schedule Demo →',
    href: '/book-demo',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    description: 'Send us a message and we\'ll get back to you within 24 hours during business days.',
    linkText: 'hello@cognifylegal.com',
    href: 'mailto:hello@cognifylegal.com',
  },
  {
    icon: '💬',
    title: 'Connect on LinkedIn',
    description: 'Follow us for product updates, legal tech insights, and company news.',
    linkText: 'Follow Us →',
    href: 'https://linkedin.com/company/cognify-legal',
  },
]

const departments = [
  {
    icon: '💼',
    title: 'Sales',
    description: 'Product demonstrations, pricing questions, founding client program, and implementation planning.',
    email: 'sales@cognifylegal.com',
  },
  {
    icon: '🛟',
    title: 'Customer Success',
    description: 'Onboarding support, training, feature questions, and general account management for existing customers.',
    email: 'support@cognifylegal.com',
  },
  {
    icon: '🔧',
    title: 'Technical Support',
    description: 'Integration issues, technical troubleshooting, API questions, and system performance concerns.',
    email: 'support@cognifylegal.com',
  },
  {
    icon: '🔐',
    title: 'Security',
    description: 'Security audits, compliance questions, vulnerability reports, and data protection inquiries.',
    email: 'security@cognifylegal.com',
  },
  {
    icon: '🤝',
    title: 'Partnerships',
    description: 'Integration partnerships, practice management system vendors, referral programs, and strategic alliances.',
    email: 'partnerships@cognifylegal.com',
  },
  {
    icon: '📰',
    title: 'Press & Media',
    description: 'Press releases, media inquiries, interview requests, and brand assets.',
    email: 'press@cognifylegal.com',
  },
]

const faqs = [
  {
    question: 'How quickly will I hear back?',
    answer:
      'We respond to all inquiries within 24 hours during business days (Monday-Friday). Demo requests typically receive a response within 12 hours. For urgent matters, please mention "urgent" in your subject line.',
  },
  {
    question: 'What\'s the best way to schedule a demo?',
    answer:
      'The fastest way is to use our <a href="/book-demo" style="color: #4F46E5; font-weight: 600;">direct booking calendar</a>, where you can see available time slots and schedule immediately. Alternatively, you can request a demo through this contact form or email sales@cognifylegal.com.',
  },
  {
    question: 'Do you offer custom integrations for Enterprise clients?',
    answer:
      'Yes! Enterprise clients can request custom integrations with their practice management systems or other internal tools. Contact our sales team to discuss your specific requirements.',
  },
  {
    question: 'Can I get pricing information without a demo?',
    answer:
      'Our standard pricing is available on our <a href="/pricing" style="color: #4F46E5; font-weight: 600;">pricing page</a>. For custom Enterprise pricing or founding client program details, we recommend booking a brief call with our sales team.',
  },
  {
    question: 'I\'m having technical issues as a current customer. Who should I contact?',
    answer:
      'Current customers should email support@cognifylegal.com for technical issues. Your response time depends on your plan tier (Starter: 24hr, Professional: 4hr, Enterprise: 1hr).',
  },
  {
    question: 'How do I report a security vulnerability?',
    answer:
      'Please email security@cognifylegal.com immediately with details of the vulnerability. We take security reports very seriously and will respond within 24 hours with next steps.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firmName: '',
    firmSize: '',
    inquiryType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firmName: '',
        firmSize: '',
        inquiryType: '',
        message: '',
      })
    } catch (err) {
      setError('There was an error submitting your form. Please try again or email us directly.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Whether you're ready to book a demo, have questions about our platform, or want to explore founding client opportunities—we'd love to hear from you.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Quick Contact Section */}
      <section className="relative bg-white py-16 px-6 lg:px-12 border-b border-slate-200">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactCards.map((card, index) => (
              <ContactCard key={index} {...card} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="bg-white p-12 rounded-xl shadow-lg h-fit">
                <h2
                  className="text-3xl font-bold text-slate-900 mb-8"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Contact Information
                </h2>

                <div className="mb-10">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    General Inquiries
                  </h3>
                  <div className="flex gap-4 mb-6 items-start">
                    <span className="text-lime-500 text-xl flex-shrink-0 mt-0.5">✉️</span>
                    <a href="mailto:hello@cognifylegal.com" className="text-indigo-600 font-semibold hover:text-lime-500 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      hello@cognifylegal.com
                    </a>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Sales & Demos
                  </h3>
                  <div className="flex gap-4 mb-4 items-start">
                    <span className="text-lime-500 text-xl flex-shrink-0 mt-0.5">📧</span>
                    <a href="mailto:sales@cognifylegal.com" className="text-indigo-600 font-semibold hover:text-lime-500 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      sales@cognifylegal.com
                    </a>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-lime-500 text-xl flex-shrink-0 mt-0.5">📅</span>
                    <Link href="/book-demo" className="text-indigo-600 font-semibold hover:text-lime-500 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Book a demo directly
                    </Link>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Customer Support
                  </h3>
                  <div className="flex gap-4 mb-4 items-start">
                    <span className="text-lime-500 text-xl flex-shrink-0 mt-0.5">🛟</span>
                    <a href="mailto:support@cognifylegal.com" className="text-indigo-600 font-semibold hover:text-lime-500 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      support@cognifylegal.com
                    </a>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-lime-500 text-xl flex-shrink-0 mt-0.5">📚</span>
                    <Link href="/contact" className="text-indigo-600 font-semibold hover:text-lime-500 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Documentation
                    </Link>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Security & Compliance
                  </h3>
                  <div className="flex gap-4 items-start">
                    <span className="text-lime-500 text-xl flex-shrink-0 mt-0.5">🔐</span>
                    <a href="mailto:security@cognifylegal.com" className="text-indigo-600 font-semibold hover:text-lime-500 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      security@cognifylegal.com
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mt-8">
                  <h4 className="font-bold text-slate-900 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Response Times
                  </h4>
                  <p className="text-slate-700 mb-2 leading-relaxed text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong>Email:</strong> Within 24 hours (business days)
                  </p>
                  <p className="text-slate-700 mb-2 leading-relaxed text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong>Demo Requests:</strong> Within 12 hours
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong>Customer Support:</strong> Based on your plan tier
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.3} className="lg:col-span-3">
              <div className="bg-white p-12 rounded-xl shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">✅</div>
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Thank You!
                    </h2>
                    <p className="text-lg text-slate-700 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We've received your message and will get back to you within 24 hours during business days.
                    </p>
                    <Link
                      href="/book-demo"
                      className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Book a Demo Instead
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-3xl font-bold text-slate-900 mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Send Us a Message
                    </h2>
                    <p className="text-slate-700 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Fill out the form below and we'll get back to you as soon as possible. For demo requests, we recommend using our{' '}
                      <Link href="/book-demo" className="text-indigo-600 font-bold hover:text-lime-500">
                        direct booking calendar
                      </Link>
                      .
                    </p>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            First Name <span className="text-indigo-600">*</span>
        </label>
          <input
            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

                        <div>
                          <label htmlFor="lastName" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Last Name <span className="text-indigo-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
      </div>

                        <div>
                          <label htmlFor="email" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Email Address <span className="text-indigo-600">*</span>
        </label>
          <input
            type="email"
                            id="email"
            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

                        <div>
                          <label htmlFor="phone" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
      </div>

                        <div className="md:col-span-2">
                          <label htmlFor="firmName" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Firm Name <span className="text-indigo-600">*</span>
        </label>
          <input
            type="text"
                            id="firmName"
                            name="firmName"
                            required
                            value={formData.firmName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

                        <div>
                          <label htmlFor="firmSize" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Firm Size
                          </label>
                          <select
                            id="firmSize"
                            name="firmSize"
                            value={formData.firmSize}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <option value="">Select size</option>
                            <option value="1-20">1-20 people</option>
                            <option value="21-50">21-50 people</option>
                            <option value="51-100">51-100 people</option>
                            <option value="101-200">101-200 people</option>
                            <option value="200+">200+ people</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="inquiryType" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Inquiry Type <span className="text-indigo-600">*</span>
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <option value="">Select type</option>
                            <option value="demo">Request a Demo</option>
                            <option value="sales">Sales Question</option>
                            <option value="support">Customer Support</option>
                            <option value="founding">Founding Client Program</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="press">Press Inquiry</option>
                            <option value="other">Other</option>
                          </select>
      </div>

                        <div className="md:col-span-2">
                          <label htmlFor="message" className="font-semibold text-slate-900 mb-2 block text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Message <span className="text-indigo-600">*</span>
        </label>
          <textarea
                            id="message"
            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors resize-y"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
                          <span className="text-slate-600 text-xs mt-2 block opacity-70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Please provide as much detail as possible so we can direct your inquiry appropriately.
                          </span>
        </div>
      </div>

        <button
          type="submit"
                        disabled={isSubmitting}
                        className="bg-indigo-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

                      <p className="text-slate-600 text-sm mt-6 opacity-70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        By submitting this form, you agree to our{' '}
                        <Link href="/contact" className="text-indigo-600 font-semibold hover:text-lime-500">
                          Privacy Policy
                        </Link>
                        . We'll only use your information to respond to your inquiry.
                      </p>
                    </form>
                  </>
                )}
      </div>
      </FadeIn>
    </div>
        </Container>
      </section>

      {/* Departments Section */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Departments
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Direct Department Contact
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Reach the right team directly for specialized inquiries.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <DepartmentCard key={index} {...dept} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Common Questions
            </h2>
          </FadeIn>

          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} delay={index * 0.1} />
          ))}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12 text-center">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to See Cognify in Action?
              </h2>
            <p className="text-lg text-slate-800 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              The fastest way to understand how Cognify works is to see it live. Book a demo today.
            </p>
            <Link
              href="/book-demo"
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book Your Demo
            </Link>
          </FadeIn>
      </Container>
      </section>
    </>
  )
}
