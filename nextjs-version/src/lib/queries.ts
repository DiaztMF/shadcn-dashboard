import { db } from "./db"
import { users, analytics, inquiries, type User, type Analytics, type Inquiry } from "./schema"
import { fallbackUsers, fallbackAnalytics, fallbackInquiries } from "./seed-data"
import { desc } from "drizzle-orm"

export async function getUsers(): Promise<User[]> {
  try {
    if (!db) throw new Error("DB not configured")
    const result = await db.select().from(users).orderBy(desc(users.id))
    return result.length > 0 ? result : (fallbackUsers.map((u, i) => ({
      id: i + 1,
      name: u.name,
      email: u.email,
      role: u.role ?? "user",
      status: u.status ?? "active",
      createdAt: new Date(),
    })))
  } catch {
    return fallbackUsers.map((u, i) => ({
      id: i + 1,
      name: u.name,
      email: u.email,
      role: u.role ?? "user",
      status: u.status ?? "active",
      createdAt: new Date(),
    }))
  }
}

export async function getAnalytics(): Promise<Analytics[]> {
  try {
    if (!db) throw new Error("DB not configured")
    const result = await db.select().from(analytics).orderBy(desc(analytics.id))
    return result.length > 0 ? result : (fallbackAnalytics.map((a, i) => ({
      id: i + 1,
      metric: a.metric,
      value: a.value,
      change: a.change ?? null,
      recordedAt: new Date(),
    })))
  } catch {
    return fallbackAnalytics.map((a, i) => ({
      id: i + 1,
      metric: a.metric,
      value: a.value,
      change: a.change ?? null,
      recordedAt: new Date(),
    }))
  }
}

export async function getInquiries(): Promise<Inquiry[]> {
  try {
    if (!db) throw new Error("DB not configured")
    const result = await db.select().from(inquiries).orderBy(desc(inquiries.id))
    return result.length > 0 ? result : (fallbackInquiries.map((inq, i) => ({
      id: i + 1,
      name: inq.name,
      email: inq.email,
      message: inq.message,
      createdAt: new Date(),
    })))
  } catch {
    return fallbackInquiries.map((inq, i) => ({
      id: i + 1,
      name: inq.name,
      email: inq.email,
      message: inq.message,
      createdAt: new Date(),
    }))
  }
}
