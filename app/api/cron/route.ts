import { NextResponse } from "next/server";

// Vercel Cron Jobs ping this every 5 minutes to keep the function warm
export async function GET() {
  return NextResponse.json({ ok: true, ts: Date.now() });
}
