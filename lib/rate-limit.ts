import { getRedis } from "./redis";

async function slidingWindowLimit(
  key: string,
  maxTokens: number,
  windowSec: number
): Promise<{ success: boolean; remaining: number }> {
  const r = getRedis();
  const now = Date.now();
  const windowStart = now - windowSec * 1000;

  // Remove old entries
  await r.zremrangebyscore(key, 0, windowStart);
  // Count current window
  const count = await r.zcard(key);

  if (count >= maxTokens) {
    return { success: false, remaining: 0 };
  }

  // Add current request
  await r.zadd(key, { score: now, member: `${now}-${Math.random().toString(36).slice(2, 8)}` });
  await r.expire(key, windowSec * 2);

  return { success: true, remaining: maxTokens - count - 1 };
}

export async function checkMessageRateLimit(ip: string) {
  return slidingWindowLimit(`rl:msg:${ip}`, 10, 10);
}

export async function checkCigaretteRateLimit(ip: string) {
  return slidingWindowLimit(`rl:cig:${ip}`, 5, 10);
}
