import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * NOTE:
 * Demo-only route protection for `/admin/*` using a simple cookie flag.
 * Replace with a real session/auth strategy before production.
 */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const authed = request.cookies.get("admin_auth")?.value === "1";

  if (!authed) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

