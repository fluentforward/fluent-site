export const proofSection = {
  eyebrow: 'Proof',
  heading: 'Process autopsies.',
  lede:
    'Real engagements, anonymised. How work moved, what we refused to bolt on, and the system they own now.',
}

export type ProofPack = {
  slug: string
  label: string
  title: string
  summary: string
  ctaLabel: string
  meta: readonly string[]
  body: readonly string[]
  comparison?: {
    before: string
    withUs: string
  }
}

export const proofPacks: readonly ProofPack[] = [
  {
    slug: 'energy-utilities',
    label: 'Energy & utilities',
    title: 'The CRM was winning. The process was losing.',
    summary:
      'An energy-sector owner and ops team stopped bending their process around a legacy CRM, sheets, and inbox, and got an internal pipeline and client platform they actually run on.',
    ctaLabel: 'Read the process autopsy',
    meta: ['Proof', 'Energy & utilities', 'Anonymised'],
    comparison: {
      before:
        'Client stage, project delivery, prices, and pipeline split across a CRM that fought the process, spreadsheets with their own gravity, and an inbox that held the truth. At scale, hand-offs depended on memory. Nothing off the shelf fitted, so the process bent around the tools.',
      withUs:
        'A short audit of how work actually moved, then a bespoke platform for pipeline and client work, shaped around their processes, owned by them. Full visibility of sales, delivery, costings, and who held which work. Scale without a linear headcount climb, and less risk of missing what matters.',
    },
    body: [
      'An energy-sector firm had the usual stack: a legacy CRM, a growing pile of spreadsheets, and an inbox that quietly held the truth. None of it matched how they actually sold or delivered work. Growth plans were on the table. The tools were not ready.',
      'This is the story of what happened when they stopped bending their process around the software, and built an internal system shaped around how the business really runs.',
      'On paper, they were covered. There was a CRM. There were spreadsheets for the things the CRM could not hold. Email filled the gaps: status of a job, a price someone had quoted, which client sat where in the journey, who was meant to do what next.',
      'For a while that mix works. Someone always knows where the important thread is. Someone always has the right sheet open. Then volume rises, headcount stays tight, and "someone always knows" stops being a strategy.',
      'That was the bind for this owner and ops team. Tracking the client base, the stage each client was at, delivery of client projects, pricing, and the sales pipeline had become hard to trust. Hand-offs depended on memory. Visibility depended on who you asked. Missing something was not a dramatic failure mode. It was a slow leak: a follow-up that slipped, a costing that lived in the wrong place, a piece of work that sat with the wrong person for a week before anyone noticed.',
      'They had growth plans. Other areas they wanted to move into. Technology was the thing in the way. Not because they lacked tools, but because nothing off the shelf fitted how they worked. Every product they looked at asked the same trade: reshape your process to fit our model. They had already done enough of that. The CRM did not match how they sold or delivered. Spreadsheets and email had become the real system of record. The process was bending around the tools, not the other way around.',
      'FluentForward did not start by picking a platform. We started with a short audit: what the business needed, where the current systems and tools fell short, and (most importantly) how work actually moved day to day. Not the tidy version in a vendor deck. The real version: who touched what, where truth lived, what broke when a busy week stacked up.',
      'That audit made the first build obvious. Not a two-year transformation. Not another SaaS account to configure around. A focused first release: a bespoke platform to manage their work and pipeline, built around their processes (client stages, delivery, costings, and clear ownership of which team member held which piece of work).',
      'They own it. Ops and the owner run it as part of how the business works, not as a specialist tool that needs interpreting. From day one it was meant to be the place you look, not another tab competing with the inbox.',
      'The first release was about initial value: get the spine in place so pipeline and client work stop living in three places at once. Then we stayed on. Ongoing support and development as they spotted more of the process the platform could carry: features that tightened hand-offs, clarified costings, and pulled more of the real workflow out of email and into something shared.',
      'What changed is easy to say and hard to fake. They got full visibility across the sales pipeline and client work: costings, status, and which team member work sat with. Operations tightened. Things that used to fall between a CRM field, a spreadsheet row, and a thread became harder to miss. They could pursue scale without simply adding headcount to compensate for broken tooling, and with less risk of dropping a client, a price, or a next step as volume rose.',
      'The quiet win is process fit. The software follows how they work. Growth plans are no longer held hostage by a stack that was never designed for them.',
      'If your team is bending process around a CRM, a sheet farm, or an inbox that became the real system of record, the useful first move is usually the same one we took here: a short audit of how work actually moves, then a focused build you own.',
    ],
  },
]

export function getProofPack(slug: string): ProofPack | undefined {
  return proofPacks.find((pack) => pack.slug === slug)
}

export function proofHref(slug: string): string {
  return `/proof/${slug}`
}
