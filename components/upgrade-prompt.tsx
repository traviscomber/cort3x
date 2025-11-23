import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, ArrowRight } from "lucide-react"
import Link from "next/link"

interface UpgradePromptProps {
  feature: string
  requiredTier: string
  description: string
}

export function UpgradePrompt({ feature, requiredTier, description }: UpgradePromptProps) {
  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Unlock {feature}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
          Requires {requiredTier} Tier or higher
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Link href="/pricing" className="w-full">
          <Button size="lg" className="w-full">
            View Pricing Plans
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        <p className="text-xs text-muted-foreground text-center">Upgrade anytime to unlock advanced features</p>
      </CardFooter>
    </Card>
  )
}
