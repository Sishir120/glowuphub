"use client";

import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { SocialAuth } from "@/components/auth/social-auth";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid email or password");
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AuthLayout
            heading="Welcome back"
            subheading="Enter your email to sign in to your account"
        >
            <div className="grid gap-6">
                <form onSubmit={onSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-zinc-400 font-medium">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            type="email"
                            className="h-12 bg-white/[0.03] border-white/10 rounded-xl focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-zinc-400 font-medium">Password</Label>
                            <Link
                                href="#"
                                className="text-xs text-primary hover:underline font-medium"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            className="h-12 bg-white/[0.03] border-white/10 rounded-xl focus:ring-primary/20 focus:border-primary/40 transition-all"
                            disabled={isLoading}
                            required
                        />
                    </div>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-400 font-medium bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                        >
                            {error}
                        </motion.div>
                    )}
                    <Button className="h-12 rounded-full font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90" disabled={isLoading}>
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Signing In...</span>
                            </div>
                        ) : "Sign In with Email"}
                    </Button>
                </form>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white/5" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#050505] px-2 text-muted-foreground/60 font-bold tracking-widest">
                            Or continue with
                        </span>
                    </div>
                </div>

                <SocialAuth />

                <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="text-primary font-bold hover:underline underline-offset-4"
                    >
                        Sign Up Free
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
