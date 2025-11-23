type LogLevel = "info" | "warn" | "error" | "debug"

interface LogContext {
  [key: string]: unknown
}

class Logger {
  private isDev = typeof window === "undefined" ? process.env.NODE_ENV === "development" : false
  private isProduction = typeof window === "undefined" ? process.env.NODE_ENV === "production" : true

  private log(level: LogLevel, message: string, context?: LogContext) {
    // In development, use console
    if (this.isDev) {
      const prefix = `[${level.toUpperCase()}]`
      if (context) {
        console.log(prefix, message, context)
      } else {
        console.log(prefix, message)
      }
      return
    }

    // In production, only log errors and warnings
    if (this.isProduction) {
      if (level === "error" || level === "warn") {
        // In a real production app, send to monitoring service like Sentry, DataDog, etc.
        // For now, still log to console but with structured format
        console[level](
          JSON.stringify({
            level,
            message,
            timestamp: new Date().toISOString(),
            ...context,
          }),
        )
      }
    }
  }

  info(message: string, context?: LogContext) {
    this.log("info", message, context)
  }

  warn(message: string, context?: LogContext) {
    this.log("warn", message, context)
  }

  error(message: string, error?: Error | unknown, context?: LogContext) {
    const errorContext =
      error instanceof Error
        ? { error: error.message, stack: error.stack, ...context }
        : { error: String(error), ...context }

    this.log("error", message, errorContext)
  }

  debug(message: string, context?: LogContext) {
    this.log("debug", message, context)
  }
}

export const logger = new Logger()
