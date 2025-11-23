/**
 * Rate limiting utilities using Upstash Redis
 * Implements sliding window rate limiting for API protection
 */

import { Redis } from "@upstash/redis"

// Initialize Redis client
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

export interface RateLimitConfig {
  interval: number // Time window in seconds
  limit: number // Max requests per interval
}

export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: number // Unix timestamp when the limit resets
}

/**
 * Check if a request is within rate limits
 * Uses sliding window algorithm with Redis
 *
 * @param identifier - Unique identifier (user ID, IP address, API key, etc.)
 * @param config - Rate limit configuration
 * @returns Rate limit result with remaining quota
 */
export async function rateLimit(identifier: string, config: RateLimitConfig): Promise<RateLimitResult> {
  const key = `rate_limit:${identifier}`
  const now = Date.now()
  const window = config.interval * 1000 // Convert to milliseconds

  try {
    // Use Redis pipeline for atomic operations
    const pipeline = redis.pipeline()

    // Remove old entries outside the current window
    pipeline.zremrangebyscore(key, 0, now - window)

    // Count requests in current window
    pipeline.zcard(key)

    // Add current request timestamp
    pipeline.zadd(key, { score: now, member: `${now}` })

    // Set expiry on the key
    pipeline.expire(key, config.interval)

    const results = await pipeline.exec()
    const count = (results[1] as number) || 0

    const isAllowed = count < config.limit
    const remaining = Math.max(0, config.limit - count - (isAllowed ? 1 : 0))
    const reset = now + window

    return {
      success: isAllowed,
      limit: config.limit,
      remaining,
      reset: Math.floor(reset / 1000),
    }
  } catch (error) {
    console.error("[Rate Limit] Redis error:", error)
    // Fail open - allow request if rate limiting fails
    return {
      success: true,
      limit: config.limit,
      remaining: config.limit - 1,
      reset: Math.floor((now + window) / 1000),
    }
  }
}

/**
 * Pre-configured rate limit configs for different tiers
 */
export const RATE_LIMITS = {
  // Cron jobs - very restrictive
  CRON: {
    interval: 3600, // 1 hour
    limit: 10, // 10 requests per hour
  },

  // API endpoints by subscription tier
  API_FREE: {
    interval: 3600, // 1 hour
    limit: 20, // 20 requests per hour
  },

  API_PRIORITY: {
    interval: 3600,
    limit: 100, // 100 requests per hour
  },

  API_PROFESSIONAL: {
    interval: 3600,
    limit: 500,
  },

  API_ENTERPRISE: {
    interval: 3600,
    limit: 2000,
  },

  // Auth endpoints - prevent brute force
  AUTH_LOGIN: {
    interval: 900, // 15 minutes
    limit: 5, // 5 attempts per 15 minutes
  },

  // Public endpoints - prevent abuse
  PUBLIC: {
    interval: 60, // 1 minute
    limit: 30, // 30 requests per minute
  },
} as const

/**
 * Helper to get user's rate limit based on subscription tier
 */
export function getRateLimitForTier(tier: string): RateLimitConfig {
  switch (tier) {
    case "enterprise":
      return RATE_LIMITS.API_ENTERPRISE
    case "professional":
      return RATE_LIMITS.API_PROFESSIONAL
    case "priority":
      return RATE_LIMITS.API_PRIORITY
    case "free":
    default:
      return RATE_LIMITS.API_FREE
  }
}
