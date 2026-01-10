"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Heart, X } from "lucide-react";
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
                {/* Desktop Background (Previous Design) */}
                <div className="hidden lg:block absolute inset-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-60" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sage/20 rounded-full blur-[120px] opacity-40" />
                    <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-lavender/15 rounded-full blur-[100px] opacity-20" />
                </div>

                {/* Mobile Background (New Design) */}
                <div className="lg:hidden absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-lg aspect-square opacity-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[400px] border border-emerald-500/30 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[580px] border border-emerald-500/20 rounded-full" />
                    </div>
                    <motion.div
                        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_20px_4px_rgba(52,211,153,0.8)]"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* ==========================================
                    DESKTOP VIEW (Previous Design)
                   ========================================== */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-start gap-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Expert-Led Weight Loss • 10,000+ Success Stories
                            </div>

                            <h1 className="text-7xl font-black tracking-tighter leading-[1.1] text-white">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                                    Sustainable
                                </span>{" "}
                                Weight Loss.
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">
                                    Healthy Habits.
                                </span>
                            </h1>

                            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                                Build <span className="text-primary font-semibold">lasting metabolic health</span> with expert nutritionist Sabita Subedi. <br />
                                <span className="font-semibold text-white">No starvation. No shame. Just science.</span>
                            </p>

                            <div className="flex items-center gap-4">
                                <Link href="/register">
                                    <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-primary text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
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
                                <p className="text-xs text-zinc-500 font-bold tracking-widest uppercase mb-4">Available on iOS & Android</p>
                                <StoreBadges className="justify-start scale-110 origin-left" />
                            </div>
                        </motion.div>

                        {/* Right Content (Orbital Visual) */}
                        <div className="relative h-[600px] flex items-center justify-center">
                            <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5" />
                            <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5" />
                            <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-[spin_30s_linear_infinite]">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/0 via-primary/30 to-transparent blur-2xl" />
                            </div>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative w-[340px] h-[340px] rounded-full bg-black/40 border border-primary/10 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-primary/20"
                            >
                                <div className="absolute inset-4 rounded-full border border-primary/10" />
                                <div className="relative w-[180px] h-[180px] rounded-full bg-black/60 flex items-center justify-center border border-white/5">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-breathe" />
                                    <Logo size={100} />
                                </div>
                            </motion.div>

                            {/* Floating Cards */}
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-20 right-0 p-3 bg-zinc-900/90 backdrop-blur-lg rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400"><Heart className="w-4 h-4" /></div>
                                <div><p className="text-[10px] text-zinc-500 leading-none mb-1">Daily Practice</p><p className="text-sm font-bold text-white leading-none">15 min</p></div>
                            </motion.div>
                            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 left-0 p-3 bg-zinc-900/90 backdrop-blur-lg rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400"><Sparkles className="w-4 h-4" /></div>
                                <div><p className="text-[10px] text-zinc-500 leading-none mb-1">Glow Score</p><p className="text-sm font-bold text-white leading-none">Building ✨</p></div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ==========================================
                    MOBILE VIEW (New Design)
                   ========================================== */}
                <div className="lg:hidden">
                    <div className="flex flex-col items-center text-center">
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

