import { NextRequest, NextResponse } from "next/server";

const ALLOWED_ORIGIN = "https://virtual-break-room-318.vercel.app";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const res = NextResponse.next();

  // Security headers
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  res.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://acceptable.a-ads.com; frame-src https://acceptable.a-ads.com; font-src 'self' data:"
  );

  // CSRF: check Origin on POST to API routes
  if (req.method === "POST" && url.pathname.startsWith("/api/")) {
    const origin = req.headers.get("origin");
    if (origin && origin !== ALLOWED_ORIGIN) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
