import { auth } from "@/lib/auth";
import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config";
import { NextResponse } from "next/server";

export const { auth: middleware } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // Normalize: strip trailing slash so "/admin/login/" === "/admin/login"
  const cleanPath = pathname.replace(/\/+$/, "") || "/";

  // Allow NextAuth API routes and the login page through untouched
  if (cleanPath.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (cleanPath === "/admin/login") {
    // If already logged in, bounce to dashboard
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.next();
  }

  // Protect everything else under /admin
  if (cleanPath.startsWith("/admin") && !isLoggedIn) {
    const url = new URL("/admin/login", req.url);
    // Don't append ?from if we're already going to the login page
    if (cleanPath !== "/admin/login") {
      url.searchParams.set("from", cleanPath);
    }
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  // matcher: ["/admin/:path*", "/api/auth/:path*"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};