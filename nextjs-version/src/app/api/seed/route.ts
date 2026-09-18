import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, analytics, inquiries } from "@/lib/schema"
import { fallbackUsers, fallbackAnalytics, fallbackInquiries } from "@/lib/seed-data"

export async function POST() {
  try {
    if (!db) {
      return NextResponse.json(
        {
          success: false,
          message: "Database connection not configured (DATABASE_URL missing).",
        },
        { status: 503 }
      )
    }

    const insertedUsers = await db.insert(users).values(fallbackUsers).returning()
    const insertedAnalytics = await db.insert(analytics).values(fallbackAnalytics).returning()
    const insertedInquiries = await db.insert(inquiries).values(fallbackInquiries).returning()

    return NextResponse.json({
      success: true,
      message: "Seeded mock data successfully into 'shadcn_dashboard' schema",
      data: {
        users: insertedUsers.length,
        analytics: insertedAnalytics.length,
        inquiries: insertedInquiries.length,
      },
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Seeding failed"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

export async function GET() {
  return POST()
}
