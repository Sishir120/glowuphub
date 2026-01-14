"use client";

import { motion } from "framer-motion";
import { Check, X, Info, ArrowRight } from "lucide-react";

const rows = [
    { label: "Scientific Approach", glowup: "Metabolic Hormonal Balance", other: "Calorie Deficit Only" },
    { label: "Food Relationship", glowup: "Food Freedom & Rituals", other: "Restriction & Deprivation" },
    { label: "Daily Effort", glowup: "15-Min Practices", other: "1-Hour Exhausting Workouts" },
    { label: "Expert Support", glowup: "Direct Lab-Qualified Advice", other: "Generic AI Bots" },
    { label: "Long-term Results", glowup: "Biological Reset (Lasting)", other: "Yo-Yo Weight Cycles" },
];

export function ComparisonSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Why GlowUp Hub is <span className="text-primary italic">Different</span>
                    </h2>
                    <p className="text-lg text-foreground-muted">
                        Most apps count your calories. We count your hormones.
                        Stop fighting your and start working with it.
                    </p>
                </div>

                <div className="relative">
                    {/* Mobile Scroll Hint */}
                    <div className="md:hidden flex items-center justify-center gap-2 mb-4 text-[10px] font-black uppercase tracking-widest text-primary/40 animate-pulse">
                        <ArrowRight size={12} />
                        Swipe to compare
                        <ArrowRight size={12} />
                    </div>

                    <div className="max-w-4xl mx-auto overflow-x-auto scrollbar-hide rounded-3xl border border-border bg-card/50 backdrop-blur-sm shadow-xl">
                        <div className="min-w-[600px] md:min-w-0">
                            <div className="grid grid-cols-3 border-b border-border bg-card/80">
                                <div className="p-6 text-sm font-bold text-foreground-muted uppercase tracking-wider">Features</div>
                                <div className="p-6 text-center text-primary font-bold bg-primary/5">GlowUp Hub</div>
                                <div className="p-6 text-center text-foreground-muted font-bold">Generic Apps</div>
                            </div>

                            {rows.map((row, i) => (
                                <div key={row.label} className="grid grid-cols-3 border-b border-border last:border-0 hover:bg-white/5 transition-colors">
                                    <div className="p-6 text-sm font-semibold text-foreground flex items-center gap-2">
                                        {row.label}
                                    </div>
                                    <div className="p-6 text-center text-sm font-bold text-foreground bg-primary/5 flex items-center justify-center gap-2">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span>{row.glowup}</span>
                                    </div>
                                    <div className="p-6 text-center text-sm font-medium text-foreground-muted flex items-center justify-center gap-2">
                                        <X className="w-4 h-4 text-foreground-muted/50" />
                                        <span>{row.other}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                        <Info className="w-4 h-4" />
                        Focus on biology, not just physics.
                    </div>
                </div>
            </div>
        </section>
    );
}
