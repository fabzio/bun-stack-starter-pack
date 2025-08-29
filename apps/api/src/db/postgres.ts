import { drizzle } from 'drizzle-orm/bun-sql'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import env from '@/env'
import * as schema from './schema'

declare global {
  var postgres: PostgresJsDatabase<typeof schema> | undefined
}

// biome-ignore lint/suspicious/noRedeclare: Global declaration for the database instance
let postgres: PostgresJsDatabase<typeof schema>

if (env.NODE_ENV === 'production') {
  postgres = drizzle(env.DATABASE_URL, {
    schema,
    casing: 'snake_case',
  })
} else {
  if (!global.postgres) {
    global.postgres = drizzle(env.DATABASE_URL, {
      schema,
      casing: 'snake_case',
    })
  }
  postgres = global.postgres
}

export default postgres
