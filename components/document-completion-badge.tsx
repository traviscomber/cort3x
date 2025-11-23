import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

interface DocumentCompletionBadgeProps {
  percentage: number
  standard?: string
  size?: "sm" | "md" | "lg"
}

export function DocumentCompletionBadge({
  percentage,
  standard = "standard",
  size = "md",
}: DocumentCompletionBadgeProps) {
  const getStatusColor = () => {
    if (percentage === 100) return "bg-green-100 text-green-800 border-green-300"
    if (percentage >= 80) return "bg-blue-100 text-blue-800 border-blue-300"
    if (percentage >= 50) return "bg-yellow-100 text-yellow-800 border-yellow-300"
    return "bg-orange-100 text-orange-800 border-orange-300"
  }

  const getIcon = () => {
    if (percentage === 100) return <CheckCircle2 className="h-3 w-3" />
    if (percentage >= 50) return <Clock className="h-3 w-3" />
    return <AlertCircle className="h-3 w-3" />
  }

  const getStandardLabel = () => {
    const labels: Record<string, string> = {
      "research-grade": "Research Grade",
      comprehensive: "Comprehensive",
      standard: "Standard",
      minimal: "Minimal",
    }
    return labels[standard] || "Standard"
  }

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5",
  }

  return (
    <div className="flex items-center gap-2">
      <Badge
        variant="outline"
        className={`${getStatusColor()} ${sizeClasses[size]} font-medium flex items-center gap-1.5`}
      >
        {getIcon()}
        <span>{percentage}% Complete</span>
      </Badge>
      {standard && standard !== "standard" && (
        <Badge variant="secondary" className={`${sizeClasses[size]} font-normal`}>
          {getStandardLabel()}
        </Badge>
      )}
    </div>
  )
}
