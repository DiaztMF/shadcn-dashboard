import { pgSchema, serial, text, integer, timestamp } from "drizzle-orm/pg-core"

export const shadcnDashboardSchema = pgSchema("shadcn_dashboard")

export const users = shadcnDashboardSchema.table("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull().default("user"),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const analytics = shadcnDashboardSchema.table("analytics", {
  id: serial("id").primaryKey(),
  metric: text("metric").notNull(),
  value: integer("value").notNull(),
  change: text("change"),
  recordedAt: timestamp("recorded_at").defaultNow(),
})

export const inquiries = shadcnDashboardSchema.table("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export type Analytics = typeof analytics.$inferSelect
export type NewAnalytics = typeof analytics.$inferInsert

export type Inquiry = typeof inquiries.$inferSelect
export type NewInquiry = typeof inquiries.$inferInsert
