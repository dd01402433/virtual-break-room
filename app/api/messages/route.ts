import { NextRequest, NextResponse } from "next/server";
import { getMessages, addMessage } from "@/lib/redis";

export async function GET() {
  try {
    const messages = await getMessages();
    return NextResponse.json({ ok: true, count: messages.length, messages });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Internal error", stack: e.stack }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, text } = body;
  if (!name || !text) {
    return NextResponse.json({ error: "name and text required" }, { status: 400 });
  }
  const msg = await addMessage(name, text);
  return NextResponse.json(msg, { status: 201 });
}
