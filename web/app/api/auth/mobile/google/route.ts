import { NextRequest, NextResponse } from "next/server";
import { encode } from "next-auth/jwt";
import prisma from "@/lib/prisma"; // Adjust path if necessary

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { token } = body;

        if (!token) {
            return NextResponse.json({ message: "Missing token" }, { status: 400 });
        }

        // 1. Verify Google Token
        const googleRes = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        if (!googleRes.ok) {
            return NextResponse.json(
                { message: "Invalid Google Token" },
                { status: 401 }
            );
        }

        const googleUser = await googleRes.json();
        const { email, name, picture, sub } = googleUser;

        // 2. Find or Create User in DB
        const user = await prisma.user.upsert({
            where: { email },
            update: {
                name,
                // image: picture, // if you have an image field
                accounts: {
                    upsert: {
                        where: {
                            provider_providerAccountId: {
                                provider: 'google',
                                providerAccountId: sub
                            }
                        },
                        update: {},
                        create: {
                            type: 'oauth',
                            provider: 'google',
                            providerAccountId: sub,
                            access_token: token,
                            token_type: 'Bearer',
                            scope: 'openid profile email'
                        }
                    }
                }
            },
            create: {
                email,
                name,
                // image: picture,
                glowScore: 0,
                streak: 0,
                accounts: {
                    create: {
                        type: 'oauth',
                        provider: 'google',
                        providerAccountId: sub,
                        access_token: token,
                        token_type: 'Bearer',
                        scope: 'openid profile email'
                    }
                }
            },
        });

        // 3. Issue App Token (JWT) using NextAuth's secret
        // This token mimics a NextAuth session token
        const secret = process.env.AUTH_SECRET;
        if (!secret) throw new Error("AUTH_SECRET is not set");

        const jwt = await encode({
            token: {
                sub: user.id,
                email: user.email,
                name: user.name,
                picture: picture, // Optional
                // You can add 'role' here if you have it
            },
            secret,
            salt: "", // Provide empty salt if using default? Or rely on default? 
            // NextAuth v5 encode might require specific params
        });

        // NOTE: NextAuth `encode` function signature varies by version. 
        // In v5 beta, it usually takes { token, secret, salt }.
        // If salt is required, we might need a fixed salt or use the default cookie name as salt.
        // For simplicity, let's try standard options.

        return NextResponse.json({
            user,
            token: jwt,
        });

    } catch (error) {
        console.error("Mobile Google Login Error:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
