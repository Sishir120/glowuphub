"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Heart, ChevronDown, X } from "lucide-react";
import { useState } from "react";

import Link from "next/link";

export function Hero() {

    return (
        <section className="relative w-full min-h-[100dvh] pt-20 md:pt-24 pb-12 md:pb-16 flex items-center overflow-hidden bg-background">
            {/* Enhanced Background with Mesh Gradient Effect on Mobile */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Desktop Gradients */}
                <div className="hidden md:block absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_70%)]" />

                {/* Mobile Mesh Gradient - more vibrant and breathable */}
                <div className="md:hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[40%] bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_60%)] filter blur-[60px]" />
                    <div className="absolute bottom-[20%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_60%)] filter blur-[80px]" />
                </div>

                <motion.div
                    animate={{ opacity: [0.03, 0.08, 0.03] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.1),transparent_80%)]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Content Section - Re-ordered for mobile to be first */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 md:gap-8 max-w-2xl order-1 lg:order-1 pt-4 lg:pt-0"
                    >
                        {/* Status Badge - Refined for mobile rhythm */}
                        <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] md:text-xs font-bold text-primary w-fit shadow-[0_0_20px_rgba(16,185,129,0.1)] uppercase tracking-wider mb-2"
                        >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                            Expert-Led Weight Loss
                        </motion.div>

                        {/* Heading - Improved line height and hierarchy for mobile */}
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] md:leading-[1.1] text-foreground max-w-[18ch] lg:max-w-none">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-white drop-shadow-[0_2px_10px_rgba(6,182,212,0.2)]">
                                Lose Weight
                            </span>{" "}
                            <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">For Good.</span>
                            <br className="md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-primary to-emerald-600 block mt-3 md:mt-2 text-3xl md:text-6xl">
                                Metabolism, Not Starvation.
                            </span>
                        </h1>

                        {/* Subtext - Better spacing and readability */}
                        <p className="text-sm md:text-xl text-foreground-muted leading-relaxed max-w-sm md:max-w-lg px-2 md:px-0">
                            Stop fighting your biology. Join <span className="text-primary font-bold">10,480+ women</span> globally resetting their metabolic set-point. <span className="hidden md:inline">No counting, no cardio, just results.</span>
                        </p>

                        {/* CTAs - Stacked nicely on mobile */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mt-4 md:mt-8 w-full">
                            <Link href="/register" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="rounded-full h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.4)] active:scale-[0.98] transition-all w-full min-w-[240px]"
                                >
                                    Start Losing Weight (Free)
                                </Button>
                            </Link>
                            <Link href="/blog/walkthrough" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="gap-3 text-base text-foreground font-semibold hover:bg-white/5 group active:scale-[0.98] transition-transform w-full justify-center h-14"
                                >
                                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                                        <Play className="w-3.5 h-3.5 fill-current" />
                                    </div>
                                    View Walkthrough
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual Section - Product Focus instead of Abstract */}
                    <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center order-2 lg:order-2 mt-4 lg:mt-0">
                        {/* More Compact "Illustrated" Visual */}
                        <div className="relative w-full max-w-[400px] lg:scale-100 origin-center flex items-center justify-center">

                            {/* Modern Abstract Backdrop - Mobile only */}
                            <div className="absolute inset-0 md:hidden flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
                                <div className="absolute w-80 h-80 rounded-full border border-white/[0.03]" />
                                <div className="absolute w-[440px] h-[440px] rounded-full border border-white/[0.02]" />
                            </div>

                            {/* Center Piece: The "Glow" Logo with Intense Glow */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-28 h-28 md:w-32 md:h-32 bg-background border border-primary/30 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.2)]"
                            >
                                <Logo size={48} />
                                {/* Pulsing Ring around Logo */}
                                <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-20" />
                            </motion.div>

                            {/* Illustrative Cards - Positioned to look like an interface on mobile */}
                            {/* Daily Practice Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -top-4 -right-4 md:right-0 p-3 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 min-w-[150px]"
                            >
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                                    <Heart className="w-4 h-4 fill-current" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-foreground-muted mb-0.5">Metabolic Activity</p>
                                    <p className="text-sm font-bold text-white leading-none">High 🔥</p>
                                </div>
                            </motion.div>

                            {/* Glow Score Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="absolute bottom-4 -left-4 md:left-0 p-3 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 min-w-[150px]"
                            >
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-foreground-muted mb-0.5">Glow Score</p>
                                    <p className="text-sm font-bold text-white leading-none">Building ✨</p>
                                </div>
                            </motion.div>

                            {/* Simplified App Ring Indicators */}
                            <div className="absolute inset-0 pointer-events-none opacity-50 md:opacity-100">
                                <svg className="w-full h-full p-4" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" className="stroke-white/5 fill-none" strokeWidth="0.5" />
                                    <circle cx="50" cy="50" r="35" className="stroke-white/5 fill-none" strokeWidth="0.5" />
                                    <motion.circle
                                        cx="50" cy="50" r="45"
                                        className="stroke-primary/20 fill-none" strokeWidth="1"
                                        strokeDasharray="283"
                                        animate={{ strokeDashoffset: [283, 100, 283] }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Store Badges Moved to bottom on mobile, side on desktop */}
                    <div className="w-full lg:col-span-2 flex flex-col items-center lg:items-start gap-6 mt-8 md:mt-0">
                        <div className="flex flex-col items-center lg:items-start gap-3">
                            <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase opacity-70">
                                Start Your Journey Today
                            </p>
                            <div className="flex items-center gap-4">
                                <Link href="/download" className="hover:opacity-80 transition-all active:scale-95">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-8 md:h-9 w-auto" alt="App Store" width="120" height="40" />
                                </Link>
                                <Link href="/download" className="hover:opacity-80 transition-all active:scale-95">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-8 md:h-9 w-auto" alt="Play Store" width="135" height="40" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
