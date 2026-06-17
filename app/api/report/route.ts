import { NextRequest, NextResponse } from "next/server";
import { addReport } from "@/lib/redis";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messageId, reason } = body;
    if (!messageId) {
      return NextResponse.json({ error: "messageId required" }, { status: 400 });
    }

    const report = await addReport(messageId, (reason || "").slice(0, 200));
    return NextResponse.json({ ok: true, report }, { status: 201 });
  } catch (e: any) {
    console.error("Report POST error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
