/**
 * Instant, client-side agent sketch for the home hero.
 * Reads the visitor's own words and maps them onto one of the example agent
 * patterns from the brief (§7.3). No network, no storage, no model call.
 * It is a rough sketch to show the shape of an agent, never a plan or a
 * feasibility promise. The Agent Planner (Morgan) produces the real plan.
 */

export type ToolId =
  | 'finance'
  | 'crm'
  | 'sheet'
  | 'email'
  | 'calendar'
  | 'docs'
  | 'pms'
  | 'time'
  | 'project'
  | 'forms'
  | 'chat'

export type TermKind = 'task' | 'tool' | 'trigger' | 'people'

export type Term = {
  start: number
  end: number
  kind: TermKind
  /** Which part of the agent this phrase informs. */
  ref: string
}

export type Step = { text: string; human?: boolean }

type Freq = 'daily' | 'weekly' | 'monthly' | 'quarterly'

export type ArchetypeId =
  | 'reporting'
  | 'followup'
  | 'intake'
  | 'insights'
  | 'delivery'
  | 'inbox'
  | 'credit'
  | 'drafting'
  | 'custom'

export type Sketch = {
  status: 'empty' | 'listening' | 'ready'
  archetype: ArchetypeId | null
  name: string
  trigger: string
  triggerFromText: boolean
  steps: Step[]
  human: string
  tools: { id: ToolId; label: string; detected: boolean }[]
  terms: Term[]
}

const TOOL_LABEL: Record<ToolId, string> = {
  finance: 'Finance system',
  crm: 'CRM',
  sheet: 'Spreadsheet',
  email: 'Email',
  calendar: 'Calendar',
  docs: 'Document system',
  pms: 'Practice management',
  time: 'Time tracking',
  project: 'Project tool',
  forms: 'Forms',
  chat: 'Team chat',
}

const TOOL_NOUN: Record<ToolId, string> = {
  finance: 'finance system',
  crm: 'CRM',
  sheet: 'spreadsheet',
  email: 'email',
  calendar: 'calendar',
  docs: 'document system',
  pms: 'practice management system',
  time: 'time tracking',
  project: 'project tool',
  forms: 'forms',
  chat: 'team chat',
}

/** Which tools a sentence names, so a recognised word can point at the step that uses it. */
export function toolsIn(text: string): ToolId[] {
  const lower = text.toLowerCase()
  return (Object.keys(TOOL_NOUN) as ToolId[]).filter((id) =>
    new RegExp(String.raw`\b${TOOL_NOUN[id].toLowerCase()}\b`).test(lower),
  )
}

const TOOL_PATTERNS: [ToolId, string][] = [
  ['finance', String.raw`xero|quickbooks|sage|freeagent|netsuite|finance system|accounting (?:system|software)|accounts package|ledger`],
  ['crm', String.raw`crm|hubspot|salesforce|pipedrive|zoho`],
  ['sheet', String.raw`spreadsheets?|excel|google sheets?|sheets?`],
  ['email', String.raw`e-?mails?|inbox(?:es)?|outlook|gmail`],
  ['calendar', String.raw`calendars?|diary|diaries`],
  ['docs', String.raw`sharepoint|google drive|dropbox|imanage|netdocuments|document management`],
  ['pms', String.raw`clio|leap|actionstep|proclaim|practice management(?: system)?|case management(?: system)?`],
  ['time', String.raw`timesheets?|harvest|toggl|time tracking`],
  ['project', String.raw`asana|jira|trello|clickup|project (?:tool|board|management tool)s?`],
  ['forms', String.raw`forms?|typeform|questionnaires?`],
  ['chat', String.raw`slack|microsoft teams`],
]

const FREQ_PATTERNS: [Freq, string][] = [
  ['daily', String.raw`every (?:working )?day|each (?:working )?day|daily|every morning|each morning`],
  ['weekly', String.raw`every week|each week|weekly|every (?:monday|friday)`],
  ['monthly', String.raw`every month|each month|monthly|month[- ]end`],
  ['quarterly', String.raw`every quarter|each quarter|quarterly`],
]

const FREQ_TRIGGER: Record<Freq, string> = {
  daily: 'Every working morning',
  weekly: 'Every Monday morning',
  monthly: 'First working day of each month',
  quarterly: 'Start of each quarter',
}

const FREQ_PERIOD: Record<Freq, string> = {
  daily: "yesterday's",
  weekly: "last week's",
  monthly: "last month's",
  quarterly: "last quarter's",
}

const FREQ_ADJ: Record<Freq, string> = {
  daily: 'Daily',
  weekly: 'Weekly',
  monthly: 'Monthly',
  quarterly: 'Quarterly',
}

const PEOPLE = String.raw`(?:(?:one|two|three|four|five|six|seven|eight|nine|ten|\d+|our|my)\s+)?(?:senior\s+)?(?:people|person|staff|partners|account (?:managers|leads)|analysts|paralegals|associates|team members|fee earners|accountants|admins)`

type Ctx = {
  has: (id: ToolId) => boolean
  freq: Freq | null
  lower: string
}

type Archetype = {
  id: ArchetypeId
  pattern: string
  name: (ctx: Ctx) => string
  trigger: string
  defaults: ToolId[]
  human: string
  steps: (ctx: Ctx) => Step[]
}

function list(words: string[]) {
  if (words.length <= 1) return words[0] ?? ''
  return `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`
}

function from(ctx: Ctx, ids: ToolId[], fallback: string) {
  const hit = ids.filter((id) => ctx.has(id))
  return hit.length ? `your ${list(hit.map((id) => TOOL_NOUN[id]))}` : fallback
}

function withFreq(ctx: Ctx, name: string) {
  if (!ctx.freq) return name
  return `${FREQ_ADJ[ctx.freq]} ${name.charAt(0).toLowerCase()}${name.slice(1)}`
}

const ARCHETYPES: Archetype[] = [
  {
    id: 'reporting',
    pattern: String.raw`(?:client |management |board |monthly |weekly |kpi )?(?:reports?|reporting|board packs?|management accounts|dashboards?)`,
    name: (ctx) => {
      const base = ctx.lower.includes('board pack')
        ? 'Board pack agent'
        : ctx.lower.includes('client')
          ? 'Client report agent'
          : ctx.lower.includes('management')
            ? 'Management report agent'
            : 'Reporting agent'
      return withFreq(ctx, base)
    },
    trigger: 'First working day of each month',
    defaults: ['finance', 'crm', 'sheet'],
    human: 'Checking flagged figures and approving every report before it goes out.',
    steps: (ctx) => [
      {
        text: `Pull ${ctx.freq ? FREQ_PERIOD[ctx.freq] : 'the latest'} figures from ${from(ctx, ['finance', 'crm', 'time', 'pms'], 'your systems')}`,
      },
      {
        text: ctx.has('sheet')
          ? 'Reconcile them with the spreadsheet and flag gaps'
          : 'Check the figures and flag anything odd',
      },
      { text: 'Draft each report in your template' },
      { text: 'A person reviews and approves it', human: true },
      {
        text: ctx.has('crm') ? 'Send it and log it in the CRM' : 'Send it and file a copy',
      },
    ],
  },
  {
    id: 'followup',
    pattern: String.raw`leads?|proposals?|follow[- ]?ups?|follows? up|following up|pipeline|prospects?|enquir(?:y|ies)|deals?`,
    name: (ctx) =>
      ctx.lower.includes('proposal') && !/\blead/.test(ctx.lower)
        ? 'Proposal follow-up agent'
        : 'Sales follow-up agent',
    trigger: 'Every working morning',
    defaults: ['crm', 'email'],
    human: 'Anything that needs judgement or a relationship call.',
    steps: (ctx) => [
      {
        text: ctx.has('crm')
          ? 'Watch new leads and open proposals in the CRM'
          : 'Watch new leads and open proposals',
      },
      { text: 'Draft a follow-up in your tone, on time' },
      { text: 'Chase the replies that have gone quiet' },
      { text: 'Flag the deals that need a person', human: true },
      { text: ctx.has('crm') ? 'Log every touch in the CRM' : 'Log every touch so nothing slips' },
    ],
  },
  {
    id: 'intake',
    pattern: String.raw`intake|onboard(?:ing)?|new clients?|new matters?|kyc|aml checks?|engagement letters?|client take[- ]on|matter opening`,
    name: (ctx) =>
      ctx.lower.includes('onboard')
        ? 'Client onboarding agent'
        : ctx.lower.includes('matter')
          ? 'Matter intake agent'
          : 'Client intake agent',
    trigger: 'When a new client signs',
    defaults: ['forms', 'email', 'pms'],
    human: 'Signing off each new client, and any checks your rules require.',
    steps: (ctx) => [
      {
        text:
          ctx.has('forms') || ctx.has('email')
            ? `Collect what you need by ${list(['forms', 'email'].filter((id) => ctx.has(id as ToolId)))}`
            : 'Collect what you always need from a new client',
      },
      { text: 'Check it is complete and chase any gaps' },
      {
        text: `Set the work up in ${from(ctx, ['pms', 'project', 'crm'], 'your systems')}`,
      },
      { text: 'A person signs off the new client', human: true },
      { text: 'Keep the client updated until work starts' },
    ],
  },
  {
    id: 'insights',
    pattern: String.raw`can[’']?t see|visibility|what(?: is|[’']s) happening|leadership|insights?|utili[sz]ation|wip|forecasts?|cash ?flow|three systems|management information`,
    name: (ctx) => withFreq(ctx, 'Leadership briefing agent'),
    trigger: 'Every working morning',
    defaults: ['finance', 'time', 'crm'],
    human: 'Decisions. The agent reports, people decide.',
    steps: (ctx) => [
      {
        text: `Read ${from(ctx, ['finance', 'time', 'crm', 'pms', 'sheet'], 'your finance, time and pipeline data')}`,
      },
      { text: 'Spot what changed and what needs attention' },
      { text: 'Write a short briefing in plain English' },
      { text: 'Leadership decides what to act on', human: true },
      {
        text: ctx.has('chat') ? 'Post it to your team chat' : 'Send it before the day starts',
      },
    ],
  },
  {
    id: 'delivery',
    pattern: String.raw`admin|status updates?|handovers?|chasers?|scheduling|resourcing|project updates?|chasing`,
    name: () => 'Delivery ops agent',
    trigger: 'End of each working day',
    defaults: ['project', 'email'],
    human: 'Expert judgement and client conversations.',
    steps: (ctx) => [
      {
        text: `Gather status from ${from(ctx, ['project', 'pms', 'sheet', 'time'], 'your project tools')}`,
      },
      { text: 'Draft status updates and handover notes' },
      { text: 'Send chasers for anything overdue' },
      { text: 'Pass anything expert to a person', human: true },
      { text: 'Log it where your team already works' },
    ],
  },
  {
    id: 'inbox',
    pattern: String.raw`triage|support (?:queue|requests?|tickets?)|queries|shared mailbox|requests? come in`,
    name: () => 'Inbox triage agent',
    trigger: 'As each email arrives',
    defaults: ['email'],
    human: 'Replies that need judgement, and anything sensitive.',
    steps: () => [
      { text: 'Read each request as it arrives' },
      { text: 'Sort it and route it to the right person' },
      { text: 'Draft replies to the routine ones' },
      { text: 'A person approves replies before they go', human: true },
      { text: 'Track each request until it is resolved' },
    ],
  },
  {
    id: 'credit',
    pattern: String.raw`invoices?|invoicing|billing|credit control|debtors?|overdue payments?|remittances?|unpaid|late payments?`,
    name: () => 'Credit control agent',
    trigger: 'Every working morning',
    defaults: ['finance', 'email'],
    human: 'Disputes, exceptions and client relationships.',
    steps: (ctx) => [
      {
        text: ctx.has('finance')
          ? 'Check what is due or overdue in the finance system'
          : 'Check which invoices are due or overdue',
      },
      { text: 'Draft reminders in your tone' },
      { text: 'Match payments and remittances as they land' },
      { text: 'Finance approves anything unusual', human: true },
      { text: 'Update the ledger and report what is owed' },
    ],
  },
  {
    id: 'drafting',
    pattern: String.raw`contracts?|drafting|document review|letters|bundles?|precedents?`,
    name: (ctx) =>
      ctx.lower.includes('contract')
        ? 'Contract drafting agent'
        : ctx.lower.includes('letter')
          ? 'Letter drafting agent'
          : 'Drafting agent',
    trigger: 'When a new instruction arrives',
    defaults: ['docs', 'pms'],
    human: 'Advice, judgement and sign-off.',
    steps: (ctx) => [
      { text: 'Gather the facts from the file' },
      { text: 'Draft from your precedents and templates' },
      { text: 'Check it against your house rules' },
      { text: 'A qualified person reviews and signs off', human: true },
      {
        text: ctx.has('docs') || ctx.has('pms') ? 'File it and update the matter' : 'File it where your team can find it',
      },
    ],
  },
]

const CUSTOM: Archetype = {
  id: 'custom',
  pattern: '',
  name: () => 'Your custom agent',
  trigger: 'When the work arrives',
  defaults: ['email'],
  human: 'Anything that needs judgement.',
  steps: () => [
    { text: 'Pick up the work as it arrives' },
    { text: 'Do the repeatable steps the same way, every time' },
    { text: 'Check the result against your rules' },
    { text: 'Hand anything that needs judgement to a person', human: true },
    { text: 'Log what it did, so you can see every run' },
  ],
}

function matches(text: string, pattern: string) {
  return [...text.matchAll(new RegExp(String.raw`\b(?:${pattern})\b`, 'gi'))]
}

const EMPTY: Sketch = {
  status: 'empty',
  archetype: null,
  name: '',
  trigger: '',
  triggerFromText: false,
  steps: [],
  human: '',
  tools: [],
  terms: [],
}

export function sketchFrom(text: string, { allowCustom = true }: { allowCustom?: boolean } = {}): Sketch {
  if (!text.trim()) return EMPTY
  const lower = text.toLowerCase()
  const words = lower.split(/\s+/).filter(Boolean).length

  type Candidate = Term & { priority: number }
  const candidates: Candidate[] = []

  let best: { archetype: Archetype; hits: RegExpMatchArray[] } | null = null
  for (const archetype of ARCHETYPES) {
    const hits = matches(text, archetype.pattern)
    if (hits.length && (!best || hits.length > best.hits.length)) best = { archetype, hits }
  }
  if (best) {
    for (const hit of best.hits) {
      const start = hit.index ?? 0
      candidates.push({ start, end: start + hit[0].length, kind: 'task', ref: 'name', priority: 0 })
    }
  }

  const detected = new Set<ToolId>()
  for (const [id, pattern] of TOOL_PATTERNS) {
    for (const hit of matches(text, pattern)) {
      detected.add(id)
      const start = hit.index ?? 0
      candidates.push({ start, end: start + hit[0].length, kind: 'tool', ref: id, priority: 1 })
    }
  }

  let freq: Freq | null = null
  for (const [id, pattern] of FREQ_PATTERNS) {
    const hit = matches(text, pattern)[0]
    if (hit) {
      freq ??= id
      const start = hit.index ?? 0
      candidates.push({ start, end: start + hit[0].length, kind: 'trigger', ref: 'trigger', priority: 2 })
    }
  }

  for (const hit of matches(text, PEOPLE)) {
    const start = hit.index ?? 0
    candidates.push({ start, end: start + hit[0].length, kind: 'people', ref: 'human', priority: 3 })
  }

  const accepted: Term[] = []
  for (const candidate of [...candidates].sort((a, b) => a.priority - b.priority || a.start - b.start)) {
    if (accepted.some((term) => candidate.start < term.end && term.start < candidate.end)) continue
    accepted.push({ start: candidate.start, end: candidate.end, kind: candidate.kind, ref: candidate.ref })
  }
  accepted.sort((a, b) => a.start - b.start)

  const archetype = best?.archetype ?? (allowCustom && words >= 7 ? CUSTOM : null)
  if (!archetype) {
    // Still listening: show what we have heard so far (when it runs, what it touches).
    return {
      ...EMPTY,
      status: 'listening',
      trigger: freq ? FREQ_TRIGGER[freq] : '',
      triggerFromText: Boolean(freq),
      tools: [...detected].slice(0, 4).map((id) => ({ id, label: TOOL_LABEL[id], detected: true })),
      terms: accepted,
    }
  }

  const ctx: Ctx = { has: (id) => detected.has(id), freq, lower }
  const toolIds: ToolId[] = detected.size ? [...detected] : archetype.defaults

  return {
    status: 'ready',
    archetype: archetype.id,
    name: archetype.name(ctx),
    trigger: freq ? FREQ_TRIGGER[freq] : archetype.trigger,
    triggerFromText: Boolean(freq),
    steps: archetype.steps(ctx),
    human: archetype.human,
    tools: toolIds.slice(0, 4).map((id) => ({ id, label: TOOL_LABEL[id], detected: detected.has(id) })),
    terms: accepted,
  }
}

export const EXAMPLES = [
  {
    id: 'reports',
    label: 'Reports',
    text: 'Every month two people spend three days building client reports from Xero, our CRM and a spreadsheet.',
  },
  {
    id: 'followup',
    label: 'Follow-ups',
    text: 'Leads and proposals go quiet because no one follows up in time.',
  },
  {
    id: 'intake',
    label: 'Intake',
    text: 'New clients wait days to get started. Intake is all email and forms.',
  },
  {
    id: 'insights',
    label: 'Briefings',
    text: "Leadership can't see what is happening without chasing three systems.",
  },
  {
    id: 'admin',
    label: 'Admin',
    text: "Senior people are stuck sending status updates and chasers that don't need their judgement.",
  },
] as const
