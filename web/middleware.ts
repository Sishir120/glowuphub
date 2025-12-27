
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    // Only run middleware on these specific routes to avoid crashing the whole site
    matcher: [
        '/dashboard/:path*',
        '/admin/:path*',
        '/expert/:path*',
        '/track/:path*',
        '/routines/:path*',
        '/calendar/:path*',
        '/movement/:path*',
        '/plan/:path*',
        '/chat/:path*',
        '/profile/:path*',
        '/settings/:path*',
    ],
};
