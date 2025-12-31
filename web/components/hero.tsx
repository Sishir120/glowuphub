"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import { Play, Sparkles, Heart, ChevronDown } from "lucide-react";
import { StoreBadges } from "@/components/ui/store-badges";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full min-h-[600px] lg:min-h-screen pt-20 flex items-center overflow-hidden bg-background">
            {/* Warm Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 md:bg-primary/20 rounded-full blur-[60px] md:blur-[120px] opacity-30 md:opacity-60" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-sage/10 md:bg-sage/20 rounded-full blur-[60px] md:blur-[120px] opacity-20 md:opacity-40" />
                <div className="absolute top-[30%] left-[20%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-lavender/15 rounded-full blur-[60px] md:blur-[100px] opacity-20" />
            </div>

            {/* Mobile: Full-Screen Immersive Hero */}
            <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center px-4">
                {/* Animated Gradient Waves Background */}
                <div className="absolute inset-0 overflow-hidden opacity-60">
                    <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" />
                                <stop offset="100%" stopColor="rgba(52, 211, 153, 0.08)" />
                            </linearGradient>
                            <linearGradient id="wave-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(167, 139, 250, 0.12)" />
                                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.08)" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
                            fill="url(#wave-gradient-1)"
                            animate={{
                                d: [
                                    "M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z",
                                    "M0,420 Q360,320 720,420 T1440,420 L1440,800 L0,800 Z",
                                    "M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
                                ]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M0,450 Q360,380 720,450 T1440,450 L1440,800 L0,800 Z"
                            fill="url(#wave-gradient-2)"
                            animate={{
                                d: [
                                    "M0,450 Q360,380 720,450 T1440,450 L1440,800 L0,800 Z",
                                    "M0,470 Q360,400 720,470 T1440,470 L1440,800 L0,800 Z",
                                    "M0,450 Q360,380 720,450 T1440,450 L1440,800 L0,800 Z"
                                ]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </svg>
                </div>

                {/* Large Centered Orbital Logo */}
                <div className="relative w-[320px] h-[320px] z-10 mb-8">
                    <div className="absolute inset-0 rounded-full border border-white/5" />
                    <div className="absolute inset-8 rounded-full border border-white/5" />

                    <div className="absolute inset-0 rounded-full opacity-20 animate-[spin_30s_linear_infinite]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/0 via-primary/30 to-transparent blur-2xl" />
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-card/40 border border-primary/10 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-primary/20"
                    >
                        <div className="absolute inset-4 rounded-full border border-primary/10" />
                        <div className="relative w-[140px] h-[140px] rounded-full bg-background/60 flex items-center justify-center shadow-inner border border-border">
                            <div className="relative w-[80px] h-[80px] rounded-full flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-breathe" />
                                <Logo size={44} />
                            </div>
                        </div>
                        <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_12px_rgba(0,251,255,0.8)] -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]">
                            <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-sage rounded-full shadow-[0_0_10px_rgba(134,239,172,0.6)]" />
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute -top-4 right-0 p-3 bg-card/90 backdrop-blur-lg rounded-xl border border-border flex items-center gap-2.5 shadow-lg"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Heart className="w-4 h-4" />
                        </div>
                        <div className="pr-1">
                            <p className="text-[10px] text-foreground-muted leading-none mb-0.5">Daily</p>
                            <p className="text-sm font-bold text-foreground leading-none">15 min</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-4 left-0 p-3 bg-card/90 backdrop-blur-lg rounded-xl border border-border flex items-center gap-2.5 shadow-lg"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="pr-1">
                            <p className="text-[10px] text-foreground-muted leading-none mb-0.5">Glow</p>
                            <p className="text-sm font-bold text-foreground leading-none">Building ✨</p>
                        </div>
                    </motion.div>
                </div>

                {/* Glassmorphic Text Card Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative z-20 w-full max-w-md"
                >
                    <div className="p-6 rounded-3xl bg-card/60 backdrop-blur-xl border border-border shadow-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            Expert-Led • 10,000+ Success Stories
                        </div>

                        <h1 className="text-3xl font-black tracking-tight leading-[1.1] text-foreground mb-3">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                                Lose Weight
                            </span>{" "}
                            <span className="text-foreground">For Given.</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">
                                Science, Not Starvation.
                            </span>
                        </h1>

                        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                            Stop fighting your biology. Join <span className="text-primary font-semibold">10,000+ women</span> resetting their metabolism with Clinical Nutritionist Sabita Subedi.
                        </p>

                        <div className="flex flex-col gap-2.5 mb-4">
                            <Link href="/register" className="w-full">
                                <Button
                                    size="lg"
                                    className="w-full rounded-full h-12 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                >
                                    Start Your Free Plan
                                </Button>
                            </Link>
                            <Link href="/download" className="w-full">
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="w-full rounded-full h-12 gap-2 text-foreground hover:bg-white/5 font-medium border border-transparent hover:border-white/10"
                                >
                                    <Play className="w-4 h-4 fill-current" /> View Success Stories
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-foreground-muted">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-7 h-7 rounded-full border-2 border-card bg-zinc-800 bg-[url('https://i.pravatar.cc/100?img=${20 + i}')] bg-cover`} />
                                ))}
                            </div>
                            <p>Join <span className="text-foreground font-bold">10,000+</span> members</p>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted"
                >
                    <span className="text-xs font-medium">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </div>

            {/* Desktop: Original Layout (Unchanged) */}
            <div className="hidden lg:block container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start gap-6 md:gap-8 max-w-2xl text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-medium text-primary z-10">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Expert-Led Weight Loss • 10,000+ Success Stories
                        </div>

                        <h1 className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.1] text-foreground mb-6 z-10">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                                Lose Weight
                            </span>{" "}
                            <span className="text-foreground">For Good.</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">
                                Science, Not Starvation.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-lg px-2 md:px-0 mb-8 z-10">
                            Stop fighting your biology. Join <span className="text-primary font-semibold">10,000+ women</span> resetting their metabolism with Clinical Nutritionist Sabita Subedi. <br className="hidden md:block" />
                            <span className="font-semibold text-foreground">No shame. No gimmicks. Just results.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto z-10">
                            <Link href="/register">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto rounded-full h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                >
                                    Start Your Free Plan
                                </Button>
                            </Link>
                            <Link href="/download">
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="w-full sm:w-auto rounded-full h-14 px-8 gap-2 text-foreground hover:bg-white/5 font-medium border border-transparent hover:border-white/10"
                                >
                                    <Play className="w-5 h-5 fill-current" /> View Success Stories
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-6 z-10 w-full sm:w-auto flex flex-col items-center sm:items-start animate-fade-in-up">
                            <p className="text-xs text-foreground-muted font-bold tracking-widest uppercase mb-3 text-center sm:text-left">
                                No credit card required • Cancel anytime
                            </p>
                            <StoreBadges className="justify-center sm:justify-start scale-110 sm:scale-100 origin-left" />
                        </div>

                        <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-foreground-muted mt-6 z-10">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-zinc-800 bg-[url('https://i.pravatar.cc/100?img=${20 + i}')] bg-cover`} />
                                ))}
                            </div>
                            <p>Join <span className="text-foreground font-bold">10,000+ members</span> finding confidence in their metabolism</p>
                        </div>
                    </motion.div>

                    <div className="relative h-[700px] w-full flex items-center justify-center">
                        <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5" />
                        <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5" />

                        <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-[spin_30s_linear_infinite]">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/0 via-primary/30 to-transparent blur-2xl" />
                        </div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-[340px] h-[340px] rounded-full bg-card/40 border border-primary/10 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-primary/20"
                        >
                            <div className="absolute inset-4 rounded-full border border-primary/10" />
                            <div className="relative w-[180px] h-[180px] rounded-full bg-background/60 flex items-center justify-center shadow-inner border border-border">
                                <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-breathe" />
                                    <Logo size={40} />
                                </div>
                            </div>
                            <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,251,255,0.8)] -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute top-32 right-12 p-3 bg-card/90 backdrop-blur-lg rounded-2xl border border-border flex items-center gap-3 shadow-xl"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Heart className="w-4 h-4" />
                            </div>
                            <div className="pr-2">
                                <p className="text-[10px] text-foreground-muted leading-none mb-1">Daily Practice</p>
                                <p className="text-sm font-bold text-foreground leading-none">15 min</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-40 left-8 p-3 bg-card/90 backdrop-blur-lg rounded-2xl border border-border flex items-center gap-3 shadow-xl"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            <div className="pr-2">
                                <p className="text-[10px] text-foreground-muted leading-none mb-1">Glow Score</p>
                                <p className="text-sm font-bold text-foreground leading-none">Building ✨</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}
