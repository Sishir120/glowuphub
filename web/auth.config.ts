import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

export const authConfig = {
    providers: [
        Google,
        // we add Credentials provider in auth.ts as it uses prisma
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            // Define protected routes
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard') ||
                nextUrl.pathname.startsWith('/admin') ||
                nextUrl.pathname.startsWith('/expert') ||
                nextUrl.pathname.startsWith('/track') ||
                nextUrl.pathname.startsWith('/routines') ||
                nextUrl.pathname.startsWith('/calendar') ||
                nextUrl.pathname.startsWith('/movement') ||
                nextUrl.pathname.startsWith('/plan') ||
                nextUrl.pathname.startsWith('/chat') ||
                nextUrl.pathname.startsWith('/profile') ||
                nextUrl.pathname.startsWith('/settings');

            const isOnAuth = nextUrl.pathname.startsWith('/login') ||
                nextUrl.pathname.startsWith('/register');

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect to login
            } else if (isOnAuth) {
                if (isLoggedIn) return Response.redirect(new URL('/dashboard', nextUrl));
                return true;
            }
            return true;
        },
        async session({ session, token }) {
            if (session.user && token?.sub) {
                session.user.id = token.sub;
                session.user.role = token.role as string; // Pass role to session
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
                token.role = user.role; // Store role in token
            }
            return token;
        }
    },
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig
