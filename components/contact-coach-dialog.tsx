"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, User, MessageSquare, Send, CheckCircle2 } from "lucide-react"

interface ContactCoachDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactCoachDialog({ open, onOpenChange }: ContactCoachDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      onOpenChange(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">Talk to a Coach</DialogTitle>
              <DialogDescription className="text-base text-gray-600">
                Fill out the form below and we'll connect you with an innovation coach to discuss your project.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                  Your Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-900">
                  Tell us about your project
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Textarea
                    id="message"
                    placeholder="I'm interested in learning more about innovation coaching services..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="pl-10 min-h-[120px] resize-none"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for your interest. Our team will get back to you within 24 hours.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
