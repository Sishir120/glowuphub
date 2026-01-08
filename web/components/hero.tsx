"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Heart, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { VideoPlayer } from "./routine/video-player";
import Link from "next/link";

export function Hero() {
    const [showWalkthrough, setShowWalkthrough] = useState(false);

    return (
        <section className="relative w-full min-h-screen pt-20 flex items-center overflow-hidden bg-background">
            {/* Enhanced Mobile Background with Multiple Gradient Layers */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Primary emerald gradient - more visible on mobile */}
                <div className="absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.12),transparent_70%)] md:bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
                {/* Secondary cyan gradient for depth - mobile only */}
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_60%)] md:opacity-0" />
                {/* Subtle animated pulse - mobile only */}
                <motion.div
                    animate={{ opacity: [0.03, 0.06, 0.03] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_70%)] md:hidden"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 md:gap-8 max-w-2xl order-2 lg:order-1 pt-4 lg:pt-0"
                    >
                        {/* Status Badge - Improved mobile size and glow */}
                        <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] md:text-xs font-bold text-primary w-fit shadow-[0_0_20px_rgba(16,185,129,0.15)] uppercase tracking-wider"
                        >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                            Science-Backed Metabolic Reset
                        </motion.div>

                        {/* Heading - Enhanced mobile size and text shadows */}
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] md:leading-[0.95] text-foreground max-w-md lg:max-w-none">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-white drop-shadow-[0_2px_10px_rgba(6,182,212,0.3)] md:drop-shadow-none">
                                Lose Weight
                            </span>{" "}
                            <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] md:drop-shadow-none">For Good.</span>
                            <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-primary to-emerald-600 drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)] md:drop-shadow-none block mt-1 md:mt-0">
                                Metabolism, Not Starvation.
                            </span>
                        </h1>

                        {/* Subtext - Enhanced contrast on mobile */}
                        <p className="text-base md:text-xl text-foreground-muted leading-relaxed max-w-sm md:max-w-lg mb-2 md:mb-4">
                            Stop fighting your biology. Join <span className="text-primary font-bold">10,480+ women</span> resetting their metabolic set-point with <span className="text-foreground">Clinical Nutritionist Sabita Subedi</span>.
                        </p>

                        {/* CTAs - Enhanced glow on mobile */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mt-4 md:mt-8 w-full">
                            <Link href="/register" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="rounded-full h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95 transition-all w-full"
                                >
                                    Start Losing Weight (Free)
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="ghost"
                                onClick={() => setShowWalkthrough(true)}
                                className="gap-3 text-base text-foreground font-semibold hover:bg-transparent group active:scale-95 transition-transform w-full sm:w-auto justify-center"
                            >
                                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-white/5 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                View Walkthrough
                            </Button>
                        </div>

                        {/* Store Badges Section - Enhanced mobile size */}
                        <div className="mt-8 md:mt-10 flex flex-col items-center lg:items-start gap-4">
                            <p className="text-[10px] font-bold text-foreground-muted tracking-[0.2em] uppercase">
                                Available on iOS & Android
                            </p>
                            <div className="flex items-center gap-4">
                                <Link href="/download" className="hover:opacity-80 transition-all active:scale-95">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-9 w-auto" alt="App Store" width="120" height="40" />
                                </Link>
                                <Link href="/download" className="hover:opacity-80 transition-all active:scale-95">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-9 w-auto" alt="Play Store" width="135" height="40" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative h-[320px] md:h-[300px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2 mt-4 lg:mt-0">
                        <div className="transform scale-[0.65] md:scale-[0.6] lg:scale-100 origin-center flex items-center justify-center relative w-[650px] h-[650px]">
                            {/* Concentric Circles (Radar) - Enhanced mobile glow */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[150px] h-[150px] rounded-full border border-white/10 md:border-white/5 shadow-[0_0_20px_rgba(16,185,129,0.1)] md:shadow-none" />
                                <div className="w-[300px] h-[300px] rounded-full border border-white/10 md:border-white/5 shadow-[0_0_25px_rgba(16,185,129,0.08)] md:shadow-none" />
                                <div className="w-[450px] h-[450px] rounded-full border border-white/10 md:border-white/5 shadow-[0_0_30px_rgba(16,185,129,0.06)] md:shadow-none" />
                                <div className="w-[650px] h-[650px] rounded-full border border-white/10 md:border-white/5" />
                            </div>

                            {/* Floating Dots on Rings - Enhanced glow */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[450px] h-[450px]"
                            >
                                <div className="absolute top-1/2 left-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(16,185,129,1)] md:shadow-[0_0_10px_rgba(16,185,129,0.8)] -translate-x-1/2" />
                            </motion.div>

                            {/* Central Logo - Enhanced mobile pulse */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-24 h-24 bg-background border border-primary/30 md:border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.15)] md:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
                            >
                                <Logo size={40} />
                            </motion.div>

                            {/* Floating Cards - Enhanced mobile backdrop and shadows */}
                            {/* Daily Practice Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 right-0 p-3 bg-card/80 md:bg-card/60 backdrop-blur-xl md:backdrop-blur-md border border-white/10 md:border-white/5 rounded-2xl flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:shadow-2xl min-w-[160px]"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/15 md:bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_10px_rgba(16,185,129,0.3)] md:shadow-none">
                                    <Heart className="w-4 h-4 fill-current" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-foreground-muted leading-none mb-1">Daily Practice</p>
                                    <p className="text-sm font-bold text-white leading-none">15 min</p>
                                </div>
                            </motion.div>

                            {/* Glow Score Card */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/4 left-0 p-3 bg-card/80 md:bg-card/60 backdrop-blur-xl md:backdrop-blur-md border border-white/10 md:border-white/5 rounded-2xl flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:shadow-2xl min-w-[160px]"
                            >
                                <div className="w-8 h-8 rounded-lg bg-primary/25 md:bg-primary/20 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)] md:shadow-none">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-foreground-muted leading-none mb-1">Glow Score</p>
                                    <p className="text-sm font-bold text-white leading-none">Building ✨</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {showWalkthrough && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100]"
                    >
                        <VideoPlayer onClose={() => setShowWalkthrough(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
