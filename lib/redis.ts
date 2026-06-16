import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!redis) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) {
      throw new Error("Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN");
    }
    redis = new Redis({ url, token });
  }
  return redis;
}

const MESSAGES_KEY = "breakroom:messages";
const MAX_MESSAGES = 200;

export interface Message {
  id: string;
  name: string;
  text: string;
  timestamp: number;
}

export async function getMessages(): Promise<Message[]> {
  const r = getRedis();
  const raw = await r.lrange(MESSAGES_KEY, 0, MAX_MESSAGES - 1);
  if (!raw || raw.length === 0) return [];
  return raw.reduce((acc: Message[], item) => {
    if (typeof item === "string") {
      try { acc.push(JSON.parse(item)); } catch { /* skip corrupted */ }
    } else if (item && typeof item === "object") {
      acc.push(item as Message);
    }
    return acc;
  }, []);
}

export async function addMessage(name: string, text: string): Promise<Message> {
  const r = getRedis();
  const msg: Message = {
    id: crypto.randomUUID(),
    name: name.slice(0, 20),
    text: text.slice(0, 200),
    timestamp: Date.now(),
  };
  await r.lpush(MESSAGES_KEY, JSON.stringify(msg));
  await r.ltrim(MESSAGES_KEY, 0, MAX_MESSAGES - 1);
  return msg;
}
