import { logger } from "./logger"

export interface MonitoringEvent {
  type: "error" | "performance" | "health" | "security"
  severity: "critical" | "high" | "medium" | "low"
  message: string
  metadata?: Record<string, unknown>
  userId?: string
  timestamp: string
}

class MonitoringService {
  private events: MonitoringEvent[] = []
  private readonly MAX_EVENTS = 1000

  async trackError(error: Error, context?: Record<string, unknown>, userId?: string) {
    const event: MonitoringEvent = {
      type: "error",
      severity: this.getErrorSeverity(error),
      message: error.message,
      metadata: {
        stack: error.stack,
        name: error.name,
        ...context,
      },
      userId,
      timestamp: new Date().toISOString(),
    }

    this.addEvent(event)
    logger.error("Error tracked", { error, context, userId })

    // Send to external monitoring (Sentry, LogRocket, etc.)
    if (this.shouldAlert(event)) {
      await this.sendAlert(event)
    }
  }

  async trackPerformance(metric: string, value: number, context?: Record<string, unknown>) {
    const event: MonitoringEvent = {
      type: "performance",
      severity: this.getPerformanceSeverity(metric, value),
      message: `${metric}: ${value}ms`,
      metadata: { metric, value, ...context },
      timestamp: new Date().toISOString(),
    }

    this.addEvent(event)

    if (this.shouldAlert(event)) {
      await this.sendAlert(event)
    }
  }

  async trackHealthCheck(service: string, status: "healthy" | "degraded" | "down", details?: Record<string, unknown>) {
    const event: MonitoringEvent = {
      type: "health",
      severity: status === "down" ? "critical" : status === "degraded" ? "high" : "low",
      message: `${service} is ${status}`,
      metadata: { service, status, ...details },
      timestamp: new Date().toISOString(),
    }

    this.addEvent(event)

    if (status !== "healthy") {
      await this.sendAlert(event)
    }
  }

  async trackSecurityEvent(event: string, details: Record<string, unknown>) {
    const monitoringEvent: MonitoringEvent = {
      type: "security",
      severity: "high",
      message: event,
      metadata: details,
      timestamp: new Date().toISOString(),
    }

    this.addEvent(monitoringEvent)
    await this.sendAlert(monitoringEvent)
  }

  private addEvent(event: MonitoringEvent) {
    this.events.push(event)
    if (this.events.length > this.MAX_EVENTS) {
      this.events.shift()
    }
  }

  private getErrorSeverity(error: Error): "critical" | "high" | "medium" | "low" {
    const message = error.message.toLowerCase()

    if (message.includes("database") || message.includes("connection") || message.includes("auth")) {
      return "critical"
    }
    if (message.includes("payment") || message.includes("stripe")) {
      return "high"
    }
    if (message.includes("fetch") || message.includes("api")) {
      return "medium"
    }
    return "low"
  }

  private getPerformanceSeverity(metric: string, value: number): "critical" | "high" | "medium" | "low" {
    // API response time thresholds
    if (metric.includes("api") || metric.includes("request")) {
      if (value > 5000) return "critical"
      if (value > 3000) return "high"
      if (value > 1000) return "medium"
      return "low"
    }

    // Page load thresholds
    if (metric.includes("page") || metric.includes("load")) {
      if (value > 8000) return "critical"
      if (value > 5000) return "high"
      if (value > 3000) return "medium"
      return "low"
    }

    return "low"
  }

  private shouldAlert(event: MonitoringEvent): boolean {
    // Only alert on critical and high severity in production
    if (process.env.NODE_ENV === "production") {
      return event.severity === "critical" || event.severity === "high"
    }
    return false
  }

  private async sendAlert(event: MonitoringEvent) {
    try {
      // Send to your alerting system (Slack, PagerDuty, email, etc.)
      await fetch("/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      })
    } catch (error) {
      logger.error("Failed to send alert", error)
    }
  }

  getRecentEvents(limit = 100): MonitoringEvent[] {
    return this.events.slice(-limit)
  }

  getEventsByType(type: MonitoringEvent["type"]): MonitoringEvent[] {
    return this.events.filter((e) => e.type === type)
  }

  getCriticalEvents(): MonitoringEvent[] {
    return this.events.filter((e) => e.severity === "critical")
  }
}

export const monitoring = new MonitoringService()
