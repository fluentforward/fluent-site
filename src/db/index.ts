import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from '@/db/schema'

function createDb() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL is not set')
  const sql = neon(url)
  return drizzle(sql, { schema })
}

let database: ReturnType<typeof createDb> | null = null

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL)
}

export function getDb() {
  if (!database) database = createDb()
  return database
}

export type Database = ReturnType<typeof getDb>
