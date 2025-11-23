import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

interface UpdateIndicatorProps {
  updatedAt: string
  createdAt: string
  className?: string
}

export function UpdateIndicator({ updatedAt, createdAt, className = "" }: UpdateIndicatorProps) {
  const created = new Date(createdAt)
  const updated = new Date(updatedAt)
  const daysSinceUpdate = Math.floor((Date.now() - updated.getTime()) / (1000 * 60 * 60 * 24))

  // Only show if actually updated (not just created) and within last 7 days
  if (updated <= created || daysSinceUpdate > 7) {
    return null
  }

  return (
    <Badge
      className={`bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg animate-pulse hover:animate-none ${className}`}
    >
      <Sparkles className="h-3 w-3 mr-1" />
      Updated {daysSinceUpdate === 0 ? "today" : `${daysSinceUpdate}d ago`}
    </Badge>
  )
}
