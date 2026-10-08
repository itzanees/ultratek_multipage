// src/auth.config.ts (or src/lib/auth.config.ts)
import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github"; 
import Google from "next-auth/providers/google"; 
// Note: If you use CredentialsProvider, import it here instead.

export const authConfig = {
  providers: [
    GitHub, 
    Google
  ],
  pages: {
    signIn: "/login", // Adjust to your login route
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
