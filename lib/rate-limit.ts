import { Ratelimit } from "@upstash/ratelimit";
import { getRedis } from "./redis";

let messageLimiter: Ratelimit | null = null;
let cigaretteLimiter: Ratelimit | null = null;

export function getMessageLimiter(): Ratelimit {
  if (!messageLimiter) {
    messageLimiter = new Ratelimit({
      redis: getRedis(),
      limiter: Ratelimit.slidingWindow(10, "10 s"),
      analytics: true,
      prefix: "ratelimit:msg",
    });
  }
  return messageLimiter;
}

export function getCigaretteLimiter(): Ratelimit {
  if (!cigaretteLimiter) {
    cigaretteLimiter = new Ratelimit({
      redis: getRedis(),
      limiter: Ratelimit.slidingWindow(5, "10 s"),
      analytics: true,
      prefix: "ratelimit:cig",
    });
  }
  return cigaretteLimiter;
}
