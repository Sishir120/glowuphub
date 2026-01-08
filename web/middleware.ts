import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const url = req.nextUrl;
    const host = req.headers.get("host") || "";

    // Redirect www to root domain
    if (host.startsWith("www.")) {
        const newHost = host.replace(/^www\./, "");
        const newUrl = new URL(url.pathname + url.search, `https://${newHost}`);
        return NextResponse.redirect(newUrl, 301);
    }

    return NextResponse.next();
});

export const config = {
    // Only run middleware on these specific routes to avoid crashing the whole site
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
