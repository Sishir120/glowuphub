"use client";

import React, { useState, useEffect } from 'react';
import { FadeIn } from "@/components/ui/fade-in";
import {
    Target,
    TrendingUp,
    Activity,
    Utensils,
    Heart,
    Calendar,
    MessageSquare,
    Sparkles,
    CheckCircle2,
    Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NutritionPlan {
    name: string;
    description: string;
    assignedBy: string;
    assignedDate: string;
    macros: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
    notes?: string;
    features: string[];
}

export default function MyPlanPage() {
    const [loading, setLoading] = useState(true);
    const [plan, setPlan] = useState<NutritionPlan | null>(null);

    useEffect(() => {
        fetchPlan();
    }, []);

    async function fetchPlan() {
        try {
            const response = await fetch('/api/user/plan');
            if (!response.ok) throw new Error('Failed to fetch plan');
            const data = await response.json();
            setPlan(data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch plan:", error);
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    if (!plan) {
        return (
            <FadeIn>
                <section className="flex items-center justify-center min-h-[60vh]">
                    <div className="max-w-md text-center space-y-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                            <Target size={32} className="text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">No Plan Assigned Yet</h2>
                        <p className="text-foreground-muted">
                            Your nutritionist will create a personalized plan based on your goals and biometric data.
                        </p>
                        <Link href="/chat">
                            <Button className="rounded-full bg-primary text-primary-foreground">
                                <MessageSquare size={16} className="mr-2" />
                                Message Your Nutritionist
                            </Button>
                        </Link>
                    </div>
                </section>
            </FadeIn>
        );
    }

    return (
        <div className="space-y-10 pb-20">
            <FadeIn direction="down">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-1.5">
                            My Nutrition <span className="text-primary">Plan</span>
                        </h1>
                        <p className="text-foreground-muted text-base">
                            Personalized by {plan.assignedBy}
                        </p>
                    </div>
                    <Link href="/chat">
                        <Button className="rounded-2xl h-12 bg-primary text-primary-foreground gap-2 shadow-[0_0_20px_rgba(223,255,0,0.2)]">
                            <MessageSquare size={18} />
                            Ask Questions
                        </Button>
                    </Link>
                </header>
            </FadeIn>

            {/* Plan Overview */}
            <FadeIn delay={0.1}>
                <section className="glass-premium rounded-[3rem] p-8 border border-white/5 space-y-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl font-black mb-2 tracking-tight">{plan.name}</h2>
                                <p className="text-foreground-muted leading-relaxed">{plan.description}</p>
                            </div>
                            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-primary" />
                                <span className="text-sm font-black text-primary uppercase tracking-widest">Active</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-foreground-muted mt-6 font-bold uppercase tracking-wider">
                            <Sparkles size={14} className="text-primary" />
                            <span>Assigned on <span className="text-white">{plan.assignedDate}</span></span>
                        </div>

                        {plan.notes && (
                            <article className="mt-8 p-6 rounded-3xl bg-black/40 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/30" />
                                <h4 className="text-[10px] font-black text-primary mb-3 uppercase tracking-widest flex items-center gap-2">
                                    <MessageSquare size={12} /> Nutritionist Strategic Notes
                                </h4>
                                <p className="text-sm text-foreground-muted leading-relaxed italic">{plan.notes}</p>
                            </article>
                        )}
                    </div>
                </section>
            </FadeIn>

            {/* Daily Macros */}
            <FadeIn delay={0.2}>
                <section aria-labelledby="macros-heading">
                    <h3 id="macros-heading" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground-muted mb-8 text-center sm:text-left">Daily Metabolic Thresholds</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MacroCard
                            icon={<Activity className="text-primary" />}
                            label="Energy Floor"
                            value={plan.macros.calories}
                            unit="kcal"
                            color="primary"
                        />
                        <MacroCard
                            icon={<TrendingUp className="text-rose-400" />}
                            label="Protein Base"
                            value={plan.macros.protein}
                            unit="g"
                            color="rose"
                        />
                        <MacroCard
                            icon={<Utensils className="text-amber-400" />}
                            label="Glycemic Load"
                            value={plan.macros.carbs}
                            unit="g"
                            color="amber"
                        />
                        <MacroCard
                            icon={<Heart className="text-lavender" />}
                            label="Lipid Matrix"
                            value={plan.macros.fat}
                            unit="g"
                            color="lavender"
                        />
                    </div>
                </section>
            </FadeIn>

            {/* Plan Features */}
            <FadeIn delay={0.3}>
                <section className="glass-premium rounded-[2.5rem] p-8 border border-white/5" aria-labelledby="features-heading">
                    <h3 id="features-heading" className="text-xl font-black mb-8 tracking-tight">System Integrations</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {plan.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="text-sm font-bold tracking-tight">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* Quick Actions */}
            <FadeIn delay={0.4}>
                <nav className="grid sm:grid-cols-3 gap-6" aria-label="Quick Actions">
                    <Link href="/track" className="block group">
                        <section className="glass-premium rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all text-center space-y-4 shadow-xl">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all">
                                <Utensils size={28} className="text-primary" />
                            </div>
                            <div>
                                <h4 className="font-black text-lg">Biometric Log</h4>
                                <p className="text-[10px] text-foreground-muted font-bold uppercase tracking-widest mt-1 opacity-60">Input Telemetry</p>
                            </div>
                        </section>
                    </Link>

                    <Link href="/chat" className="block group">
                        <section className="glass-premium rounded-3xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all text-center space-y-4 shadow-xl">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all">
                                <MessageSquare size={28} className="text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="font-black text-lg">Expert Comms</h4>
                                <p className="text-[10px] text-foreground-muted font-bold uppercase tracking-widest mt-1 opacity-60">Human Interface</p>
                            </div>
                        </section>
                    </Link>

                    <Link href="/progress" className="block group">
                        <section className="glass-premium rounded-3xl p-8 border border-white/5 hover:border-lavender/30 transition-all text-center space-y-4 shadow-xl">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-lavender/10 border border-lavender/20 flex items-center justify-center group-hover:scale-110 transition-all">
                                <TrendingUp size={28} className="text-lavender" />
                            </div>
                            <div>
                                <h4 className="font-black text-lg">Trend Analysis</h4>
                                <p className="text-[10px] text-foreground-muted font-bold uppercase tracking-widest mt-1 opacity-60">Visual Optimization</p>
                            </div>
                        </section>
                    </Link>
                </nav>
            </FadeIn>
        </div>
    );
}

function MacroCard({ icon, label, value, unit, color }: any) {
    const colors: any = {
        primary: "bg-primary/10 border-primary/20",
        rose: "bg-rose-500/10 border-rose-500/20",
        amber: "bg-amber-500/10 border-amber-500/20",
        lavender: "bg-lavender/10 border-lavender/20"
    };

    return (
        <div className={cn("glass-premium rounded-2xl p-6 border space-y-4", colors[color])}>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-1">{label}</p>
                <p className="text-3xl font-black">
                    {value}
                    <span className="text-lg text-foreground-muted ml-1">{unit}</span>
                </p>
            </div>
        </div>
    );
}
