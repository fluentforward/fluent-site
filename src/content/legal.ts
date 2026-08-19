export type LegalSection = {
  id: string
  heading: string
  paragraphs?: string[]
  list?: string[]
  /** Paragraphs rendered after the list. */
  after?: string[]
}

export const privacy = {
  title: 'Privacy',
  lastUpdated: 'August 2026',
  intro:
    'This notice explains what personal information FluentForward Limited collects, why, and what you can do about it. It is written to be read rather than to be technically survivable.',
  sections: [
    {
      id: 'who-we-are',
      heading: 'Who we are',
      paragraphs: [
        'FluentForward Limited is a company registered in England and Wales, operating an AI advisory and implementation practice. For the purposes of UK data protection law we are the data controller for the information described in this notice.',
        'If you want to ask about anything here, email privacy@fluentforward.com and it will reach a person rather than a queue.',
      ],
    },
    {
      id: 'what-we-collect',
      heading: 'What we collect',
      paragraphs: [
        'We collect as little as we can get away with. In practice that falls into three groups.',
      ],
      list: [
        'Website visitors. Our hosting provider processes standard server logs, including IP address, browser type and the pages requested, to serve the site and keep it secure. We do not run advertising or behavioural tracking.',
        'Enquiries and calls. If you book a call or email us, we hold your name, email address, any details you choose to share about your business, and our notes from the conversation.',
        'Clients. During an engagement we hold the contact details, correspondence, contractual records and project documentation needed to deliver the work and meet our accounting obligations.',
      ],
    },
    {
      id: 'why-we-use-it',
      heading: 'Why we use it, and on what basis',
      list: [
        'To respond to enquiries and hold scheduled calls. Our legitimate interest in answering people who contact us.',
        'To deliver an engagement, invoice for it and support it afterwards. Performance of our contract with you.',
        'To keep the website available, functional and secure. Our legitimate interest in operating the site.',
        'To meet statutory obligations, including tax and company record keeping. Legal obligation.',
      ],
      after: [
        'We do not send marketing sequences and we do not add people to a mailing list because they booked a call.',
      ],
    },
    {
      id: 'sharing',
      heading: 'Who else sees it',
      paragraphs: [
        'We use a small number of service providers to run the practice. Each one only receives what it needs to perform its function, and each is bound by contract to protect it.',
      ],
      list: [
        'Cal.com for scheduling calls. If you use the booking calendar on this site, the details you enter are processed by Cal.com to create the booking.',
        'Our hosting and email providers, to serve this website and carry our correspondence.',
        'Our accountant and, where legally required, HMRC or another regulator.',
      ],
      after: [
        'We do not sell personal information, and we do not share it with advertising networks or data brokers.',
      ],
    },
    {
      id: 'client-data',
      heading: 'Client data during an engagement',
      paragraphs: [
        'Consulting work means we sometimes see the systems and records of a client business, which may contain personal data belonging to their staff or customers. In that situation the client remains the controller and we act as their processor under the terms of our engagement agreement.',
        'Two commitments in particular are worth stating here rather than leaving to the contract. We do not use client data to train models, and we do not pool it, reuse it or share it across engagements. Access is limited to what is needed to do the work in front of us.',
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      list: [
        'Enquiries that do not become engagements: up to twelve months, then deleted.',
        'Engagement records and correspondence: for the duration of the engagement and six years afterwards, to meet contractual and tax requirements.',
        'Access to client systems and any working copies of client data: removed on completion of the work, unless the engagement agreement requires otherwise.',
      ],
    },
    {
      id: 'transfers',
      heading: 'Where it goes',
      paragraphs: [
        'Some of our providers operate outside the United Kingdom. Where personal data is transferred internationally we rely on UK adequacy regulations or standard contractual clauses with additional safeguards, as applicable.',
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies and analytics',
      paragraphs: [
        'This site sets no cookies of its own and runs no analytics or advertising scripts. Nothing about your visit is profiled.',
        'The one exception is the booking calendar. When you open it, the Cal.com embed loads and may set cookies necessary for the booking to work. If you would rather not load it at all, email us instead and we will arrange a time by hand.',
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      paragraphs: [
        'Under UK data protection law you can ask us for a copy of the personal information we hold about you, ask us to correct it, ask us to delete it, ask us to restrict how we use it, object to our use of it where we rely on legitimate interests, and ask for it in a portable format.',
        'Email privacy@fluentforward.com and we will respond within one month. If you are not satisfied with how we have handled it, you can complain to the Information Commissioner\u2019s Office at ico.org.uk, though we would rather you gave us the chance to put it right first.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this notice',
      paragraphs: [
        'If we change how we handle personal information we will update this page and the date at the top of it. Material changes affecting existing clients will be raised with them directly rather than left on a web page.',
      ],
    },
  ] satisfies LegalSection[],
}

export const terms = {
  title: 'Terms',
  lastUpdated: 'August 2026',
  intro:
    'These terms cover the use of this website. The work itself is governed by a separate engagement agreement, which takes precedence over anything on this page.',
  sections: [
    {
      id: 'about',
      heading: 'About these terms',
      paragraphs: [
        'This website is operated by FluentForward Limited, a company registered in England and Wales. By using the site you accept these terms. If you do not accept them, please do not use the site.',
      ],
    },
    {
      id: 'website-content',
      heading: 'What the website is and is not',
      paragraphs: [
        'The content here describes services we offer and views we hold. It is general information, not advice on your specific situation, and it should not be relied on as a substitute for a professional assessment of your business.',
        'We take care to keep the site accurate but make no warranty that it is complete, current or uninterrupted. Descriptions of our services, including phases, turnaround windows and inclusions, are indicative and are fixed only in a signed engagement agreement.',
      ],
    },
    {
      id: 'engagements',
      heading: 'Engagements and fees',
      paragraphs: [
        'Nothing on this site is an offer capable of acceptance, and no engagement exists until both parties have signed an agreement setting out scope, fees and timescales.',
        'For clarity, and consistent with what the site says: audit and pilot work is quoted as a fixed fee agreed in writing before work starts, and ongoing implementation work is charged as a flat monthly fee against a defined turnaround commitment. We do not bill by the hour. Fees are not published here because scope varies materially between clients.',
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual property',
      paragraphs: [
        'The content, design and code of this website belong to FluentForward Limited or our licensors. You may read it, quote it with attribution, and share links to it. You may not republish it as your own or use it to train a model or build a competing service.',
        'Ownership of anything we produce during an engagement, including reports, code and documentation, is dealt with in the engagement agreement. Our default position is that the client owns the deliverables.',
      ],
    },
    {
      id: 'confidentiality',
      heading: 'Confidentiality',
      paragraphs: [
        'Anything you tell us on an introductory call is treated as confidential whether or not an agreement follows. We will not name you, quote you or write about your business without your written agreement, which is also why this site carries no anonymised client stories.',
      ],
    },
    {
      id: 'acceptable-use',
      heading: 'Acceptable use',
      paragraphs: [
        'Please do not attempt to interfere with the site, gain unauthorised access to it, scrape it at a volume that degrades it for others, or use the contact routes to send unsolicited commercial messages.',
      ],
    },
    {
      id: 'third-parties',
      heading: 'Third party links and tools',
      paragraphs: [
        'The site links to third party services, including the Cal.com booking calendar. Those services have their own terms and privacy notices, and we are not responsible for their content or availability.',
      ],
    },
    {
      id: 'liability',
      heading: 'Liability',
      paragraphs: [
        'To the extent permitted by law, we are not liable for any loss arising from reliance on the general information published on this website. Liability in respect of engagement work is addressed and limited in the engagement agreement.',
        'Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be excluded.',
      ],
    },
    {
      id: 'governing-law',
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute arising from them.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. The version published here, with the date shown at the top, is the one that applies.',
      ],
    },
  ] satisfies LegalSection[],
}
