"use server"

import { z } from "zod"
import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().default("user"),
  status: z.string().default("active"),
})

export async function createUserAction(formData: {
  name: string
  email: string
  role?: string
  status?: string
}) {
  const parsed = userSchema.safeParse(formData)
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
      .insert(users)
      .values(parsed.data)
      .returning()

    revalidatePath("/users")
    return { success: true, data: inserted[0] }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create user"
    return { success: false, error: message }
  }
}

export async function deleteUserAction(id: number) {
  try {
    if (!db) {
      return { success: true, fallback: true }
    }

    await db.delete(users).where(eq(users.id, id))
    revalidatePath("/users")
    return { success: true }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to delete user"
    return { success: false, error: message }
  }
}
