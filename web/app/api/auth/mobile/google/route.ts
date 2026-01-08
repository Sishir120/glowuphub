import { NextRequest, NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import prisma from '@/lib/prisma';
import { SignJWT } from 'jose';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(req: NextRequest) {
    try {
        const { token } = await req.json();

        if (!token) {
            return NextResponse.json({ error: 'Missing token' }, { status: 400 });
        }

        // Verify Google ID Token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                process.env.GOOGLE_CLIENT_ID!,
                process.env.GOOGLE_ANDROID_CLIENT_ID!,
                process.env.GOOGLE_IOS_CLIENT_ID!,
                process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID!,
            ].filter(Boolean) as string[],
        });

        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            return NextResponse.json({ error: 'Invalid token payload' }, { status: 401 });
        }

        const { email, name, picture, sub: googleId } = payload;

        // Find or create user
        let user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    name: name || '',
                    image: picture,
                    password: '', // Social login users don't have passwords
                    // accounts: { // Optional: Link account if using NextAuth Adapter explicitly
                    //     create: {
                    //         provider: 'google',
                    //         providerAccountId: googleId,
                    //         type: 'oauth',
                    //     }
                    // }
                },
            });
        }

        // Generate Session Token (JWT)
        const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
        const sessionToken = await new SignJWT({
            sub: user.id,
            email: user.email,
            name: user.name,
            picture: user.image,
            role: user.role,
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('30d') // Long-lived session for mobile
            .sign(secret);

        return NextResponse.json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                image: user.image,
                role: user.role,
            },
            token: sessionToken,
        });

    } catch (error) {
        console.error('Mobile Google Auth Error:', error);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }
}
