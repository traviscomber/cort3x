"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

interface UpdateProgressDialogProps {
  initiative: {
    id: string
    title: string
    progress: number | null
  }
  open?: boolean
  onOpenChange?: (open: boolean) => void
  isOpen?: boolean
  onClose?: () => void
  onSuccess?: () => void
}

export function UpdateProgressDialog({
  initiative,
  open,
  onOpenChange,
  isOpen,
  onClose,
  onSuccess,
}: UpdateProgressDialogProps) {
  const [progress, setProgress] = useState(initiative.progress || 0)
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const dialogOpen = open ?? isOpen ?? false

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange?.(nextOpen)
    if (!nextOpen) onClose?.()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log("[v0] Updating progress for initiative:", initiative.id)
    console.log("[v0] New progress value:", progress)

    try {
      const supabase = createClient()

      const { error } = await supabase
        .from("initiatives")
        .update({
          progress,
          updated_at: new Date().toISOString(),
        })
        .eq("id", initiative.id)

      if (error) {
        console.error("[v0] Error updating progress:", error)
        alert("Failed to update progress. Please try again.")
        return
      }

      console.log("[v0] Progress updated successfully")
      handleOpenChange(false)
      onSuccess?.()
      router.refresh()
    } catch (error) {
      console.error("[v0] Error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Progress</DialogTitle>
          <DialogDescription>
            Update the completion status for: <span className="font-semibold">{initiative.title}</span>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="progress">Progress</Label>
                <span className="text-2xl font-bold text-primary">{progress}%</span>
              </div>
              <Input
                id="progress"
                type="number"
                min={0}
                max={100}
                step={5}
                value={progress}
                onChange={(e) => setProgress(Math.min(100, Math.max(0, Number.parseInt(e.target.value) || 0)))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Progress Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Add any notes about this progress update..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Save Progress"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
