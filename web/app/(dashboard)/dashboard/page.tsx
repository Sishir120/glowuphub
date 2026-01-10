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
    Loader2
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
    const [showWebView, setShowWebView] = useState(false);

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
    const currentWeight = userData.currentWeight || 0;
    const latestLog = userData.logs && userData.logs.length > 0 ? userData.logs[0] : null;

    // Fallbacks if no log exists yet
    const moveScore = latestLog?.moveScore || 0;
    const glowScore = latestLog?.glowScore || 0;
    const mindScore = latestLog?.mindScore || 0;

    // Mock calculations for demo
    const targetWeight = 70;
    const weightProgress = Math.max(0, Math.min(100, ((90 - currentWeight) / (90 - targetWeight)) * 100));

    return (
        <div className="space-y-16 pb-32">
            <InteractiveLogModal
                isOpen={isLogOpen}
                onClose={() => setIsLogOpen(false)}
                onComplete={(data) => {
                    console.log("Activity logged:", data);
                }}
            />

            {/* Mobile-First Header */}
            <header className="flex flex-col gap-8 px-4">
                <FadeIn direction="down">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Mobile Onboarding Portal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                            Welcome, <span className="text-emerald-500">{firstName}</span>.
                        </h1>
                        <p className="text-lg text-foreground-muted max-w-xl leading-relaxed font-medium">
                            Your biological tracking experience is <span className="text-foreground font-bold">Best on Mobile.</span> Scan the code below to sync your profile instantly.
                        </p>
                    </div>
                </FadeIn>
            </header>

            {/* The Handoff Experience */}
            <FadeIn delay={0.1}>
                <MobileHandoff />
            </FadeIn>

            {/* Transition to Web View */}
            {!showWebView ? (
                <div className="flex flex-col items-center gap-6 pt-12">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <Button
                        variant="ghost"
                        onClick={() => setShowWebView(true)}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground-muted hover:text-emerald-500 transition-colors"
                    >
                        Or Continue with Web Dashboard
                    </Button>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-24 pt-20"
                >
                    <div className="flex items-center justify-between px-4">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Web Legacy Dashboard</h3>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowWebView(false)}
                            className="text-[8px] h-8 rounded-full border-white/5 bg-white/3 font-black uppercase tracking-widest"
                        >
                            Return to Mobile Hub
                        </Button>
                    </div>

                    <div className="grid xl:grid-cols-12 gap-10">
                        {/* Left: Bio-Data Visualization (8 cols) */}
                        <div className="xl:col-span-8 space-y-10">
                            <FadeIn>
                                <StreakTracker count={userData.streak || 0} activeDayIndex={new Date().getDay() === 0 ? 6 : new Date().getDay() - 1} days={['M', 'T', 'W', 'T', 'F', 'S', 'S']} />
                            </FadeIn>
                            <ClinicalAdvice />
                            {/* Primary Metabolic Engine */}
                            <FadeIn>
                                <div className="glass-premium rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-lavender/5 opacity-50" />

                                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                                        <div className="relative group/bio">
                                            <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full opacity-30 group-hover/bio:opacity-60 transition-opacity duration-1000" />
                                            <ActivityRings size={280} move={moveScore} glow={glowScore} mind={mindScore} />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                <Scale size={20} className="text-emerald-500 mb-1 opacity-50" />
                                                <span className="text-4xl font-black tracking-tighter">{currentWeight}</span>
                                                <span className="text-[10px] uppercase font-black text-foreground-muted tracking-[0.3em] mt-0.5">KG</span>
                                            </div>
                                        </div>

                                        <div className="flex-1 space-y-10">
                                            <div className="space-y-4">
                                                <h3 className="text-3xl font-bold tracking-tight">Daily Energy</h3>
                                                <p className="text-sm text-foreground-muted leading-relaxed">
                                                    Your efficiency is at <span className="text-emerald-500 font-bold">{(moveScore + glowScore) / 2}%</span>.
                                                    Goal reach in <span className="text-foreground font-bold italic">14 days</span>!
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-6">
                                                <BioStat
                                                    label="Calorie Gap"
                                                    value="-320"
                                                    unit="kcal"
                                                    icon={<Flame size={18} className="text-coral" />}
                                                    trend="Deficit"
                                                    progress={75}
                                                    color="coral"
                                                />
                                                <BioStat
                                                    label="Destination"
                                                    value={`${targetWeight.toFixed(1)}`}
                                                    unit="kg"
                                                    icon={<Target size={18} className="text-emerald-500" />}
                                                    trend="On track"
                                                    progress={weightProgress}
                                                    color="emerald"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Transformation Map */}
                            <FadeIn delay={0.2}>
                                <TransformationMap />
                            </FadeIn>
                        </div>

                        {/* Right: Success & Accountability (4 cols) */}
                        <aside className="xl:col-span-4 space-y-10">
                            <FadeIn direction="left" delay={0.4}>
                                <div className="glass-premium rounded-[3rem] p-8 border border-white/5 space-y-8">
                                    <h3 className="text-xl font-bold tracking-tight">Our Success Stories</h3>
                                    <SuccessStories />
                                </div>
                            </FadeIn>

                            <FadeIn direction="left" delay={0.6}>
                                <FortuneCookie />
                            </FadeIn>

                            {/* Ritual Integration (Simplified for web view) */}
                            <FadeIn direction="left" delay={0.8}>
                                <div className="glass-premium rounded-[3rem] p-8 border border-white/5 space-y-8 overflow-hidden relative group">
                                    <h3 className="text-xl font-bold tracking-tight">Lifestyle Rituals</h3>
                                    <LifestyleRituals />
                                </div>
                            </FadeIn>
                        </aside>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
