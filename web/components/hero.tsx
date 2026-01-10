"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Heart } from "lucide-react";
import { useState } from "react";
import { VideoPlayer } from "./routine/video-player";
import { StoreBadges } from "@/components/ui/store-badges";
import Link from "next/link";

export function Hero() {
    const [showWalkthrough, setShowWalkthrough] = useState(false);

    return (
        <section className="relative w-full min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-[#0a0f0d]">

            {/* --- BACKGROUND ELEMENTS --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Desktop Background (Previous Design Mesh) */}
                <div className="hidden lg:block absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
                </div>

                {/* Mobile Background (New Design Capsules) */}
                <div className="lg:hidden absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-lg aspect-square opacity-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[400px] border border-emerald-500/30 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[580px] border border-emerald-500/20 rounded-full" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* ==========================================
                    DESKTOP VIEW (Restored Jan 6 Design)
                   ========================================== */}
                <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-start gap-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            Expert-Led Weight Loss • 10,000+ Success Stories
                        </div>

                        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-white">
                                Lose Weight
                            </span>{" "}
                            For Good.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-primary to-emerald-600">
                                Metabolism, Not Starvation.
                            </span>
                        </h1>

                        <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                            Stop fighting your biology. Join <span className="text-primary font-semibold">10,480+ women</span> globally resetting their metabolic set-point with Clinical Nutritionist <span className="text-white font-medium">Sabita Subedi.</span>
                            <br />
                            <span className="font-semibold text-white">No counting, no cardio, just results.</span>
                        </p>

                        <div className="flex items-center gap-6">
                            <Link href="/register">
                                <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-primary text-black hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                    Start Losing Weight (Free)
                                </Button>
                            </Link>

                            <button onClick={() => setShowWalkthrough(true)} className="flex items-center gap-3 text-base text-zinc-300 font-semibold group hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                                    <Play className="w-4 h-4 fill-white text-white" />
                                </div>
                                View Walkthrough
                            </button>
                        </div>

                        <div className="mt-4">
                            <p className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4">Available on iOS & Android</p>
                            <StoreBadges className="justify-start scale-110 origin-left" />
                        </div>
                    </motion.div>

                    {/* Right Content (Orbital Visual) */}
                    <div className="relative h-[600px] flex items-center justify-center">
                        {/* Radar Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                            <div className="w-[150px] h-[150px] rounded-full border border-white/10" />
                            <div className="w-[300px] h-[300px] rounded-full border border-white/10" />
                            <div className="w-[450px] h-[450px] rounded-full border border-white/10" />
                            <div className="w-[650px] h-[650px] rounded-full border border-white/5" />
                        </div>

                        {/* Central Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative z-10 w-28 h-28 bg-[#050505] border border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.15)]"
                        >
                            <Logo size={48} />
                        </motion.div>

                        {/* Floating Cards */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-24 right-8 p-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-2xl min-w-[170px]">
                            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Heart className="w-4 h-4 fill-current" /></div>
                            <div><p className="text-[10px] text-zinc-500 leading-none mb-1">Daily Practice</p><p className="text-sm font-bold text-white leading-none">15 min</p></div>
                        </motion.div>
                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }} className="absolute bottom-32 left-8 p-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-2xl min-w-[170px]">
                            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary"><Sparkles className="w-4 h-4" /></div>
                            <div><p className="text-[10px] text-zinc-500 leading-none mb-1">Glow Score</p><p className="text-sm font-bold text-white leading-none">Building ✨</p></div>
                        </motion.div>
                    </div>
                </div>

                {/* ==========================================
                    MOBILE VIEW (Preserved Content)
                   ========================================== */}
                <div className="lg:hidden flex flex-col items-center text-center">
                    {/* Hero Top Illustration */}
                    <div className="relative w-full max-w-sm h-[320px] flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-20 w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                        >
                            <Logo size={48} />
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
                            transition={{ opacity: { duration: 0.5, delay: 0.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                            className="absolute bottom-10 left-0 z-30 p-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-2xl min-w-[160px]"
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center"><Sparkles className="w-5 h-5 text-emerald-400" /></div>
                            <div className="text-left"><p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Glow Score</p><p className="text-sm font-bold text-white tracking-tight">Building ✨</p></div>
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-6 max-w-md -mt-4 pb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                            Science-Backed Metabolic Reset
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight leading-[1.1] flex flex-col gap-1">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-blue-400 to-white">Lose Weight For Good</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">Metabolism, Not Starvation</span>
                        </h1>

                        <p className="text-base text-zinc-400 leading-relaxed">
                            Stop fighting your biology. Join <span className="text-emerald-400 font-bold">10,480+ women</span> resetting their metabolic set-point with <span className="text-white font-medium">Sabita Subedi.</span>
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full pt-4">
                            <Link href="/register" className="w-full">
                                <Button size="lg" className="rounded-full h-14 w-full text-lg font-bold bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                    Start Losing Weight (Free)
                                </Button>
                            </Link>

                            <button onClick={() => setShowWalkthrough(true)} className="flex items-center gap-3 text-base text-zinc-300 font-semibold group hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                                    <Play className="w-4 h-4 fill-white text-white" />
                                </div>
                                View Walkthrough
                            </button>
                        </div>

                        <p className="mt-8 text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase">Available on iOS & Android</p>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {showWalkthrough && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100]">
                        <VideoPlayer onClose={() => setShowWalkthrough(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

