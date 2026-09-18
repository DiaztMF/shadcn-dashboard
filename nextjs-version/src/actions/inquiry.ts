"use server"

import { z } from "zod"
import { db } from "@/lib/db"
import { inquiries } from "@/lib/schema"

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function createInquiryAction(formData: {
  name: string
  email: string
  message: string
}) {
  const parsed = inquirySchema.safeParse(formData)
  if (!parsed.success) {
    return { success: false, error: parsed.error.format() }
  }

  try {
    if (!db) {
      return {
        success: true,
        data: {
          id: Date.now(),
          ...parsed.data,
          createdAt: new Date(),
        },
        fallback: true,
      }
    }

    const inserted = await db
      .insert(inquiries)
      .values(parsed.data)
      .returning()

    return { success: true, data: inserted[0] }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to record inquiry"
    return { success: false, error: message }
  }
}
