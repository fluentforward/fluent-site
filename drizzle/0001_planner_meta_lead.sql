ALTER TABLE planner_sessions
  ADD COLUMN IF NOT EXISTS team_size text,
  ADD COLUMN IF NOT EXISTS meta_lead_id text,
  ADD COLUMN IF NOT EXISTS company text;

CREATE INDEX IF NOT EXISTS planner_sessions_meta_lead_idx ON planner_sessions (meta_lead_id);