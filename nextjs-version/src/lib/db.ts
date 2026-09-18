import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

const connectionString = process.env.DATABASE_URL || ""

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined
}

export const client =
  globalForDb.conn ??
  (connectionString
    ? postgres(connectionString, {
        prepare: false,
        connect_timeout: 5,
        idle_timeout: 10,
        max: 5,
      })
    : null)

if (process.env.NODE_ENV !== "production" && client) {
  globalForDb.conn = client
}

export const db = client ? drizzle(client, { schema }) : null

export function isDbConfigured(): boolean {
  return !!connectionString && !!db
}
