import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, AlertCircle } from "lucide-react"

interface ChecklistItem {
  label: string
  completed: boolean
  required: boolean
}

interface DocumentCompletionProgressProps {
  percentage: number
  standard: string
  checklist?: Record<string, boolean>
}

export function DocumentCompletionProgress({ percentage, standard, checklist }: DocumentCompletionProgressProps) {
  const getProgressColor = () => {
    if (percentage === 100) return "bg-green-600"
    if (percentage >= 80) return "bg-blue-600"
    if (percentage >= 50) return "bg-yellow-600"
    return "bg-orange-600"
  }

  const standardRequirements: Record<string, string[]> = {
    "research-grade": [
      "Executive Summary",
      "Methodology",
      "Data Validation",
      "Sources Cited",
      "Expert Review",
      "Statistical Analysis",
      "Peer Review",
    ],
    comprehensive: [
      "Overview",
      "Detailed Strategy",
      "Financial Model",
      "Risk Assessment",
      "Implementation Plan",
      "Visual Assets",
      "Success Metrics",
    ],
    standard: ["Overview", "Goals", "Approach", "Expected Outcomes", "Basic Visuals"],
    minimal: ["Title", "Description", "Purpose"],
  }

  const requirements = standardRequirements[standard] || standardRequirements["standard"]

  // Convert checklist object to array of items
  const checklistItems: ChecklistItem[] = checklist
    ? Object.entries(checklist).map(([key, value]) => ({
        label: key
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        completed: value,
        required: true,
      }))
    : requirements.map((req) => ({
        label: req,
        completed: false,
        required: true,
      }))

  const completedCount = checklistItems.filter((item) => item.completed).length
  const totalCount = checklistItems.length

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          <span>Documentation Completion</span>
          <span className="text-2xl font-bold">{percentage}%</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Progress value={percentage} className="h-3" indicatorClassName={getProgressColor()} />
          <p className="text-sm text-muted-foreground">
            {completedCount} of {totalCount} requirements completed
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">Checklist:</h4>
          <div className="space-y-1.5">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {item.completed ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                ) : item.required ? (
                  <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                ) : (
                  <Circle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                )}
                <span className={item.completed ? "text-gray-900" : "text-gray-500"}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {percentage < 100 && (
          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground">
              <strong>Next steps:</strong> Complete remaining checklist items to reach 100% documentation quality.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
