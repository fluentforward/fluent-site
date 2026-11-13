CREATE TABLE IF NOT EXISTS planner_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash text NOT NULL UNIQUE,
  public_id text NOT NULL UNIQUE,
  phase text NOT NULL DEFAULT 'anonymous',
  problem text NOT NULL,
  follow_ups jsonb NOT NULL,
  pending_question text,
  partial_plan jsonb,
  full_plan jsonb,
  refusal text,
  sensitive_hold boolean NOT NULL DEFAULT false,
  name text,
  email text,
  email_normalized text,
  claimed_at timestamptz,
  emailed_at timestamptz,
  pdf_pathname text,
  attribution jsonb NOT NULL,
  loops_plan_sent_at timestamptz,
  loops_event_sent_at timestamptz,
  loops_staff_sent_at timestamptz,
  loops_unsubscribed_at timestamptz,
  scoping_clicked_at timestamptz,
  scoping_booked_at timestamptz,
  ip_hash text,
  delivery_attempts integer NOT NULL DEFAULT 0,
  delivery_error text,
  free_text_purged_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS planner_sessions_email_idx ON planner_sessions (email_normalized);
CREATE INDEX IF NOT EXISTS planner_sessions_ip_created_idx ON planner_sessions (ip_hash, created_at);
CREATE INDEX IF NOT EXISTS planner_sessions_phase_idx ON planner_sessions (phase, emailed_at);

CREATE TABLE IF NOT EXISTS planner_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES planner_sessions (id) ON DELETE CASCADE,
  slot text NOT NULL,
  model text,
  prompt_version text NOT NULL,
  prompt_hash text NOT NULL,
  input jsonb,
  output jsonb,
  input_tokens integer,
  output_tokens integer,
  latency_ms integer,
  degraded boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS planner_runs_session_idx ON planner_runs (session_id, created_at);

CREATE TABLE IF NOT EXISTS planner_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES planner_sessions (id) ON DELETE CASCADE,
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS planner_events_session_idx ON planner_events (session_id, created_at);
