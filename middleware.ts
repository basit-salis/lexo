import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
 let hasCookie = request.cookies.has("user");
  console.log('middleware',hasCookie);
  if (!hasCookie) {
   // /auth/login
    return NextResponse.redirect(new URL("/user/dashboard", request.url));
  }
  let response = NextResponse.next();
  return response;
 
}

export const config = {
  matcher: "/user/:path*",
};
