import type { NewUser, NewAnalytics, NewInquiry } from "./schema"

export const fallbackUsers: NewUser[] = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "admin",
    status: "active",
  },
  {
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "editor",
    status: "active",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "user",
    status: "active",
  },
  {
    name: "David Kim",
    email: "david.kim@example.com",
    role: "user",
    status: "pending",
  },
  {
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    role: "viewer",
    status: "inactive",
  },
]

export const fallbackAnalytics: NewAnalytics[] = [
  { metric: "Total Revenue", value: 45231, change: "+20.1% from last month" },
  { metric: "Subscriptions", value: 2350, change: "+180.1% from last month" },
  { metric: "Active Now", value: 573, change: "+201 since last hour" },
  { metric: "Sales Count", value: 12234, change: "+19% from last month" },
]

export const fallbackInquiries: NewInquiry[] = [
  {
    name: "Alex Morgan",
    email: "alex@example.com",
    message: "Interested in the enterprise plan features and custom integrations.",
  },
  {
    name: "Taylor Swift",
    email: "taylor@swift.io",
    message: "Loving the dashboard template! Would love a Figma to Next.js sync plugin.",
  },
]
