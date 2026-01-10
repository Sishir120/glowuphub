"use client";

import { motion } from "framer-motion";
import {
    TrendingDown,
    Zap,
    Check,
    Scale,
    Utensils,
    Clock,
    ChevronRight,
    Sparkles,
    ShieldCheck,
    LineChart,
    Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { BmiCalculator } from "@/components/dashboard/bmi-calculator";
import { WeightChart } from "@/components/dashboard/weight-chart";
import { MealLogger } from "@/components/nutrition/meal-logger";
import { BioDigitalTwin } from "@/components/dashboard/bio-digital-twin";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function TrackPage() {
    const [isMealLoggerOpen, setIsMealLoggerOpen] = useState(false);

    return (
        <div className="space-y-16">
            {/* Clinical Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-4">
                <FadeIn direction="down">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500">My Health Data</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none">
                            Body <span className="text-emerald-500">Progress</span>.
                        </h1>
                        <p className="text-base text-foreground-muted max-w-lg leading-relaxed">
                            Tracking your daily stats helps you reach your goals faster. Every detail counts toward <span className="text-foreground font-bold">Your Success</span>.
                        </p>
                    </div>
                </FadeIn>

                <div className="flex items-center gap-4">
                    <Button
                        onClick={() => setIsMealLoggerOpen(true)}
                        className="h-12 px-8 rounded-xl bg-emerald-500 text-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)] font-bold uppercase tracking-[0.15em] text-[9px]"
                    >
                        <Utensils className="mr-2 w-3.5 h-3.5" />
                        Log a Meal
                    </Button>
                </div>
            </header>

            <AnimatePresence>
                {isMealLoggerOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMealLoggerOpen(false)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <div className="relative z-10 w-full max-w-2xl">
                            <MealLogger
                                onSave={() => setIsMealLoggerOpen(false)}
                                onClose={() => setIsMealLoggerOpen(false)}
                            />
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* Analysis Grid */}
            <div className="grid xl:grid-cols-12 gap-6">
                {/* Visual Bio-Digital Twin & Biometrics (4 cols) */}
                <aside className="xl:col-span-4 space-y-6" aria-label="Biometric Visualization">
                    <FadeIn direction="right">
                        <BioDigitalTwin hydration={85} energy={72} focus={94} stress={15} />
                    </FadeIn>

                    <FadeIn direction="right" delay={0.2}>
                        <article className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 relative overflow-hidden group shadow-xl">
                            <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] group-hover:bg-emerald-500/20 transition-all duration-1000" />

                            <div className="relative z-10 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center font-black text-[10px] text-emerald-500 shadow-inner">
                                        AI
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black tracking-tight uppercase">Strategic Health Tip</h4>
                                        <p className="text-[8px] text-foreground-muted font-black uppercase tracking-[0.2em] opacity-40">Predictive Intelligence</p>
                                    </div>
                                </div>

                                <p className="text-sm text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-5">
                                    "Hyper-hydration detected as optimal for current metabolic velocity. Prioritize H2O intake."
                                </p>

                                <div className="flex flex-col gap-2 pt-2">
                                    <Button
                                        variant="outline"
                                        className="w-full h-11 rounded-xl border-emerald-500/20 bg-emerald-500/5 text-emerald-500 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                                    >
                                        Acknowledge Protocol
                                    </Button>
                                </div>
                            </div>
                        </article>
                    </FadeIn>
                </aside>

                {/* Primary Tracking Hub (8 cols) */}
                <main className="xl:col-span-8 space-y-6">
                    {/* Body Composition Calibration */}
                    <FadeIn direction="up">
                        <BmiCalculator />
                    </FadeIn>

                    {/* Weight Trajectory */}
                    <FadeIn delay={0.1}>
                        <section className="glass-premium rounded-3xl p-8 border border-white/5 relative overflow-hidden group shadow-2xl" aria-labelledby="weight-chart-heading">
                            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                                <LineChart size={80} className="text-primary" />
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="space-y-1">
                                        <h3 id="weight-chart-heading" className="text-xl font-black tracking-tight text-white uppercase">Weight Trajectory</h3>
                                        <p className="text-[10px] text-foreground-muted font-black uppercase tracking-[0.3em] text-primary">Biometric History Scan</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 shadow-inner">
                                            <TrendingDown size={14} className="text-primary" />
                                            <span className="text-sm font-black text-white">-0.8kg <span className="text-[9px] text-foreground-muted uppercase ml-1 opacity-50 font-bold">last 7d</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[280px]">
                                    <WeightChart />
                                </div>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Insights & Planning */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <InsightCard
                            title="Goal Convergence"
                            desc="Predicted temporal alignment for target achievement."
                            icon={<Zap className="text-amber-400" size={16} />}
                            mainValue="Mar 12"
                            subValue="12 Weeks Left"
                            color="amber"
                        />
                        <InsightCard
                            title="Homeostasis Score"
                            desc="Cumulative stickiness to core metabolic habits."
                            icon={<Activity className="text-primary" size={16} />}
                            mainValue="94%"
                            subValue="Elite Tier"
                            color="emerald"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

function InsightCard({ title, desc, icon, mainValue, subValue, color }: any) {
    return (
        <div className="glass-premium rounded-xl p-4 border border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center">
                        {icon}
                    </div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground-muted opacity-40">{title}</h4>
                </div>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xl font-black tracking-tighter">{mainValue}</span>
                <span className={cn("text-[9px] font-bold uppercase",
                    color === 'amber' ? 'text-amber-500' : 'text-emerald-500'
                )}>{subValue}</span>
            </div>
            <p className="text-[10px] text-foreground-muted leading-relaxed opacity-60 line-clamp-1">{desc}</p>
        </div>
    );
}
