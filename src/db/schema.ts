import { boolean, index, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

import type { FollowUp, FullPlan, PartialPlan, PlannerAttribution } from '@/lib/planner/types'

export const plannerSessions = pgTable(
  'planner_sessions',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    tokenHash: text('token_hash').notNull().unique(),
    publicId: text('public_id').notNull().unique(),
    phase: text('phase').notNull().default('anonymous'),
    problem: text('problem').notNull(),
    followUps: jsonb('follow_ups').$type<FollowUp[]>().notNull(),
    pendingQuestion: text('pending_question'),
    partialPlan: jsonb('partial_plan').$type<PartialPlan | null>(),
    fullPlan: jsonb('full_plan').$type<FullPlan | null>(),
    refusal: text('refusal'),
    sensitiveHold: boolean('sensitive_hold').notNull().default(false),
    name: text('name'),
    email: text('email'),
    emailNormalized: text('email_normalized'),
    claimedAt: timestamp('claimed_at', { withTimezone: true }),
    emailedAt: timestamp('emailed_at', { withTimezone: true }),
    pdfPathname: text('pdf_pathname'),
    attribution: jsonb('attribution').$type<PlannerAttribution>().notNull(),
    loopsPlanSentAt: timestamp('loops_plan_sent_at', { withTimezone: true }),
    loopsEventSentAt: timestamp('loops_event_sent_at', { withTimezone: true }),
    loopsStaffSentAt: timestamp('loops_staff_sent_at', { withTimezone: true }),
    loopsUnsubscribedAt: timestamp('loops_unsubscribed_at', { withTimezone: true }),
    scopingClickedAt: timestamp('scoping_clicked_at', { withTimezone: true }),
    scopingBookedAt: timestamp('scoping_booked_at', { withTimezone: true }),
    ipHash: text('ip_hash'),
    deliveryAttempts: integer('delivery_attempts').notNull().default(0),
    deliveryError: text('delivery_error'),
    freeTextPurgedAt: timestamp('free_text_purged_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    emailIdx: index('planner_sessions_email_idx').on(table.emailNormalized),
    ipCreatedIdx: index('planner_sessions_ip_created_idx').on(table.ipHash, table.createdAt),
    phaseClaimedIdx: index('planner_sessions_phase_idx').on(table.phase, table.emailedAt),
  }),
)

export const plannerRuns = pgTable(
  'planner_runs',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    sessionId: uuid('session_id')
      .notNull()
      .references(() => plannerSessions.id, { onDelete: 'cascade' }),
    slot: text('slot').notNull(),
    model: text('model'),
    promptVersion: text('prompt_version').notNull(),
    promptHash: text('prompt_hash').notNull(),
    input: jsonb('input').$type<unknown>(),
    output: jsonb('output').$type<unknown>(),
    inputTokens: integer('input_tokens'),
    outputTokens: integer('output_tokens'),
    latencyMs: integer('latency_ms'),
    degraded: boolean('degraded').notNull().default(false),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    sessionIdx: index('planner_runs_session_idx').on(table.sessionId, table.createdAt),
  }),
)

export const plannerEvents = pgTable(
  'planner_events',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    sessionId: uuid('session_id')
      .notNull()
      .references(() => plannerSessions.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    sessionIdx: index('planner_events_session_idx').on(table.sessionId, table.createdAt),
  }),
)

export type PlannerSessionRow = typeof plannerSessions.$inferSelect
