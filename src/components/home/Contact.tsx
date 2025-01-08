"use client"

import { useState } from "react"
import { Send } from "lucide-react"

interface FormState {
  name: string
  email: string
  message: string
}

interface FormStatus {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus({ isSubmitting: false, isSuccess: true, error: null })
      setFormData({ name: "", email: "", message: "" }) // Reset form
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, isSuccess: false }))
      }, 5000)
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <section id="contact" className="py-32">
      <div className="container px-4">
        <h2 className="text-4xl font-bold mb-20 text-center">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-md border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  required
                  aria-required="true"
                  disabled={status.isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-md border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  disabled={status.isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-md border bg-background px-4 py-3 text-base min-h-[200px] focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your message..."
                required
                aria-required="true"
                disabled={status.isSubmitting}
              />
            </div>

            {status.error && (
              <div className="text-sm text-destructive" role="alert">
                {status.error}
              </div>
            )}

            {status.isSuccess && (
              <div className="text-sm text-green-500" role="alert">
                Message sent successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={status.isSubmitting}
              className="w-full rounded-md bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status.isSubmitting ? (
                <>
                  <div className="h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 