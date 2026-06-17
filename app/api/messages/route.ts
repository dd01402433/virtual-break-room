import { NextRequest, NextResponse } from "next/server";
import { getMessages, addMessage } from "@/lib/redis";
import { checkMessageRateLimit } from "@/lib/rate-limit";

export async function GET() {
  try {
    const messages = await getMessages();
    return NextResponse.json({ ok: true, count: messages.length, messages });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, text } = body;
    if (!name || !text) {
      return NextResponse.json({ error: "name and text required" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown";
    const { success, remaining } = await checkMessageRateLimit(ip);
    if (!success) {
      return NextResponse.json({ error: "Too many messages, slow down" }, { status: 429 });
    }

    const msg = await addMessage(name, text);
    return NextResponse.json({ ...msg, remaining }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 });
  }
}
