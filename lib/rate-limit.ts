import { getRedis } from "./redis";

async function fixedWindowLimit(
  key: string,
  maxTokens: number,
  windowSec: number
): Promise<{ success: boolean; remaining: number }> {
  const r = getRedis();
  const count = await r.incr(key);

  // Set expiry on first request in the window
  if (count === 1) {
    await r.expire(key, windowSec);
  }

  const remaining = Math.max(0, maxTokens - count);
  return {
    success: count <= maxTokens,
    remaining,
  };
}

export async function checkMessageRateLimit(ip: string) {
  return fixedWindowLimit(`rl:msg:${ip}`, 10, 10);
}

export async function checkCigaretteRateLimit(ip: string) {
  return fixedWindowLimit(`rl:cig:${ip}`, 5, 10);
}
