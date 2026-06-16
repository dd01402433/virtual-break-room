import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

const CIG_KEY = "cigarette:state";
const TTL = 5; // seconds — auto-expire when no one is smoking

export async function GET() {
  try {
    const r = getRedis();
    const raw = await r.get(CIG_KEY);
    if (!raw) {
      return NextResponse.json({
        isBurning: false,
        burnLevel: 0,
        smokerName: "",
        lastUpdate: 0,
      });
    }
    const state = typeof raw === "string" ? JSON.parse(raw) : raw;
    return NextResponse.json(state);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { isBurning, burnLevel, smokerName, lastUpdate } = body;
    const r = getRedis();
    const state = {
      isBurning: !!isBurning,
      burnLevel: typeof burnLevel === "number" ? Math.max(0, Math.min(1, burnLevel)) : 0,
      smokerName: String(smokerName || "").slice(0, 20),
      lastUpdate: typeof lastUpdate === "number" ? lastUpdate : Date.now(),
    };
    await r.set(CIG_KEY, JSON.stringify(state));
    await r.expire(CIG_KEY, TTL);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
