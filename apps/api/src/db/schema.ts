import { relations } from 'drizzle-orm'
import {
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core'

export const userTable = pgTable(
  'users',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
    passwordHash: text().notNull(),
    createdAt: timestamp({ mode: 'date' }).notNull().defaultNow(),
    peer: integer(),
  },
  (table) => [uniqueIndex().on(table.name)],
)

export const userRelations = relations(userTable, ({ one }) => ({
  peer: one(userTable),
}))
