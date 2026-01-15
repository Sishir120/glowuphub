"use client";

import { motion } from "framer-motion";
import { ActivityRings } from "@/components/dashboard/activity-rings";
import { SuccessStories } from "@/components/dashboard/success-stories";
import { LifestyleRituals } from "@/components/dashboard/lifestyle-rituals";
import { TransformationMap } from "@/components/dashboard/transformation-map";
import { ClinicalAdvice } from "@/components/dashboard/clinical-advice";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { StreakTracker } from "@/components/dashboard/streak-tracker";
import { FortuneCookie } from "@/components/rewards/fortune-cookie";
import { InteractiveLogModal } from "@/components/dashboard/interactive-log-modal";
import { useState, useEffect } from "react";
import {
    Scale,
    Target,
    Zap,
    Flame,
    Droplets,
    Sparkles,
    ShieldCheck,
    Brain,
    Wind,
    Sun,
    Moon,
    Loader2,
    Smartphone
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BioStat } from "@/components/dashboard/bio-stat";
import { RitualCard } from "@/components/dashboard/ritual-card";

import { MobileHandoff } from "@/components/dashboard/mobile-handoff";

export default function DashboardPage() {
    const [isLogOpen, setIsLogOpen] = useState(false);
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("/api/user");
                if (res.ok) {
                    const data = await res.json();
                    setUserData(data);
                } else {
                    console.error("Failed to fetch user data");
                    setError(true);
                }
            } catch (err) {
                console.error("Error fetching user data:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
            </div>
        );
    }

    if (error || !userData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <p className="text-foreground-muted">Unable to load primary dashboard data.</p>
                <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
        );
    }

    // Derived Data
    const firstName = userData.name?.split(' ')[0] || "User";

    return (
        <div className="space-y-12 lg:space-y-16 pb-32">
            <InteractiveLogModal
                isOpen={isLogOpen}
                onClose={() => setIsLogOpen(false)}
                onComplete={(data) => {
                    console.log("Activity logged:", data);
                }}
            />

            {/* Mobile-First Header */}
            <header className="flex flex-col gap-6 lg:gap-8 px-0 lg:px-4">
                <FadeIn direction="down">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-emerald-500">Official Mobile Portal</span>
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight lg:leading-none">
                            Welcome, <br className="lg:hidden" /> <span className="text-emerald-500">{firstName}</span>.
                        </h1>
                        <p className="text-base lg:text-lg text-foreground-muted max-w-xl leading-relaxed font-medium">
                            The full <span className="text-foreground font-bold">GlowUp Experience</span> is exclusively on mobile. Sync your profile below to begin your metabolic reset.
                        </p>
                        <div className="pt-2">
                            <Link href="/download">
                                <Button className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400 font-bold gap-2">
                                    <Smartphone className="w-4 h-4" />
                                    Install Mobile App
                                </Button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </header>

            {/* The Handoff Experience */}
            <FadeIn delay={0.1}>
                <MobileHandoff />
            </FadeIn>

            {/* Footer Note */}
            <div className="flex flex-col items-center gap-6 pt-12">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground-muted/40">
                    Trusted by 10,000+ members worldwide
                </p>
            </div>
        </div>
    );
}
