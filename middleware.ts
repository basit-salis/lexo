import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let hasCookie = request.cookies.has("user");
  console.log('middleware',hasCookie);
  if (!hasCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  let response = NextResponse.next();
  return response;
}

export const config = {
  matcher: "/user/:path*",
};
