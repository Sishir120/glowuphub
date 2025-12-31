
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    // Only run middleware on these specific routes to avoid crashing the whole site
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
