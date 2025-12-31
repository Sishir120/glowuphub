"use client";

import { motion } from "framer-motion";
import { Circle, Activity, Heart, Sparkles, ShieldCheck, Leaf, Utensils, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Step 1: Eat More, Weigh Less",
        description: "Your metabolism isn't broken, it's confusing. We design custom meal plans that trigger metabolic burn without cutting the foods you love.",
        icon: <Utensils className="w-6 h-6 text-primary" />,
        className: "md:col-span-1",
    },
    {
        title: "Step 2: Movement That Heals",
        description: "Forget punishment cardio. 15-minute hormonal-balancing routines designed to lower cortisol and build lean tone.",
        icon: <Activity className="w-6 h-6 text-sage" />,
        className: "md:col-span-1",
    },
    {
        title: "Step 3: Rewire Your Habits",
        description: "Stop the self-sabotage. We help you build unshakeable self-trust and end emotional eating for good.",
        icon: <BrainCircuit className="w-6 h-6 text-lavender" />,
        className: "md:col-span-1",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 md:py-32 bg-background relative overflow-hidden">

            {/* Warm ambient background */}
            <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[40%] h-[40%] bg-sage/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                            The <span className="text-primary italic">3-Step Metabolic Reset</span>
                        </h2>
                        <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                            A science-backed system for lasting results. Most diets fail because they fight your biology. We work with it.
                        </p>
                    </motion.div>
                </div>

                {/* Simple 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between",
                                "bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300",
                                feature.className
                            )}
                        >
                            {/* Subtle hover gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(232, 180, 184, 0.08), transparent 40%)`
                                }}
                            />

                            <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary-soft border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-foreground-muted leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
