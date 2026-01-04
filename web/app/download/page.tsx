"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Smartphone, ShieldCheck, Download, Apple, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Install <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sage">GlowUp Hub</span>
                        </h1>
                        <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-12">
                            Get instant access to your wellness companion. The Progressive Web App works on all devices - no app store needed.
                        </p>

                        <div className="flex items-center justify-center gap-2 mb-8 text-sm font-medium text-blue-600 bg-blue-500/10 py-3 px-6 rounded-full inline-flex mx-auto border border-blue-500/20">
                            <ShieldCheck className="w-4 h-4" />
                            Verified Safe & Secure • Works on iOS & Android
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-16 text-sm font-medium text-blue-600 bg-blue-500/10 py-2 px-4 rounded-full inline-flex mx-auto border border-blue-500/20">
                            <Sparkles className="w-4 h-4" />
                            Production Stable: Capacitor App & PWA available now!
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {/* Android Native - PRIMARY */}
                        <FadeIn delay={0.1}>
                            <div id="android-download" className="bg-card border-2 border-primary/30 p-8 rounded-3xl h-full relative overflow-hidden group hover:border-primary/50 transition-all shadow-lg flex flex-col">
                                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                                    RECOMMENDED
                                </div>
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Smartphone size={120} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                                    </div>
                                    Android Native
                                </h2>
                                <div className="space-y-4 mb-6 flex-1">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                                        <Sparkles className="w-3 h-3" />
                                        Latest Version Available
                                    </div>

                                    <p className="text-foreground-muted text-sm leading-relaxed">
                                        Download the official Android package directly.
                                        <span className="text-primary font-medium"> Fast, secure, and feature-complete with offline support.</span>
                                    </p>
                                </div>

                                <Button className="w-full h-12 rounded-xl mb-6 gap-2 text-lg bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                                    <a href="https://github.com/Sishir120/glowuphub/releases" target="_blank" rel="noopener noreferrer">
                                        <Download size={20} />
                                        Download APK
                                    </a>
                                </Button>
                                <div className="text-xs text-foreground-muted space-y-2 bg-background-muted p-4 rounded-xl border border-border">
                                    <p className="font-semibold">Installation Tip:</p>
                                    <p className="opacity-80">
                                        If your phone says "File might be harmful," tap <span className="text-foreground font-bold">Download anyway</span>. We verify every build for your safety.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Web App (PWA) Section */}
                        <FadeIn delay={0.2}>
                            <div id="pwa-install" className="bg-card border border-border p-8 rounded-3xl h-full relative overflow-hidden group hover:border-primary/30 transition-all flex flex-col">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Smartphone size={120} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <Sparkles size={20} />
                                    </div>
                                    Web App (PWA)
                                </h2>
                                <div className="flex-1">
                                    <p className="text-foreground-muted mb-6 leading-relaxed">
                                        The fastest way to get GlowUp Hub. Install directly from your browser—no app store required. Works on all devices.
                                    </p>

                                    <div className="grid gap-6">
                                        <div className="text-xs text-foreground-muted space-y-2 bg-background-muted p-4 rounded-xl border border-border">
                                            <p className="font-semibold flex items-center gap-2">
                                                <Apple size={14} className="text-foreground" />
                                                iOS (Safari)
                                            </p>
                                            <ol className="list-decimal list-inside space-y-1 opacity-80">
                                                <li>Tap the <span className="font-bold text-foreground">Share</span> button</li>
                                                <li>Tap <span className="font-bold text-foreground">Add to Home Screen</span></li>
                                                <li>Confirm by tapping <span className="font-bold text-primary">Add</span></li>
                                            </ol>
                                        </div>

                                        <div className="text-xs text-foreground-muted space-y-2 bg-background-muted p-4 rounded-xl border border-border">
                                            <p className="font-semibold flex items-center gap-2 text-foreground">
                                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15M7,2.66L14.54,11.15L16.81,8.88L6.05,2.66M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,21.34L14.54,12.85L16.81,15.12L6.05,21.34Z" /></svg>
                                                Android (Chrome)
                                            </p>
                                            <ol className="list-decimal list-inside space-y-1 opacity-80">
                                                <li>Tap the <span className="font-bold text-foreground">Three Dots (⋮)</span></li>
                                                <li>Tap <span className="font-bold text-foreground">Install App</span></li>
                                                <li>Follow the prompts to confirm</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="mt-20 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold mb-4">Why Direct Download?</h3>
                        <p className="text-foreground-muted leading-relaxed">
                            By distributing directly, we can push updates faster, maintain lower subscription costs for you,
                            and protect your data without third-party store analytics.
                            <br /><br />
                            <Link href="/privacy" className="text-primary hover:underline">Read our Security Policy →</Link>
                        </p>
                    </div>

                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
