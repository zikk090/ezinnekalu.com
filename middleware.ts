import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  if (hostname.startsWith("aurora.") && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/aurora/privacy", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
