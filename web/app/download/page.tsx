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

                        <div className="flex items-center justify-center gap-2 mb-16 text-sm font-medium text-amber-600 bg-amber-500/10 py-2 px-4 rounded-full inline-flex mx-auto border border-amber-500/20">
                            <Sparkles className="w-4 h-4" />
                            Native Android APK coming soon - PWA available now!
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {/* PWA Section - PRIMARY */}
                        <FadeIn delay={0.1}>
                            <div id="pwa" className="bg-card border-2 border-primary/30 p-8 rounded-3xl h-full relative overflow-hidden group hover:border-primary/50 transition-all shadow-lg">
                                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                                    RECOMMENDED
                                </div>
                                <div id="android" className="bg-card border border-border p-8 rounded-3xl h-full relative overflow-hidden group hover:border-primary/30 transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Smartphone size={120} />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                                        </div>
                                        Android
                                    </h2>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-4 text-sm bg-background/50 p-3 rounded-xl border border-border">
                                            <div>
                                                <p className="font-semibold text-foreground">Version</p>
                                                <p className="text-foreground-muted">v1.0.0 (RC1)</p>
                                            </div>
                                            <div className="w-px h-8 bg-border" />
                                            <div>
                                                <p className="font-semibold text-foreground">Updated</p>
                                                <p className="text-foreground-muted">Dec 27, 2025</p>
                                            </div>
                                        </div>

                                        <p className="text-xs font-mono text-foreground-muted bg-background/50 p-2 rounded truncate" title="Verify file integrity">
                                            SHA-256: 7f83b165... (Verify after download)
                                        </p>

                                        <p className="text-foreground-muted text-sm">
                                            Download the official APK file. You may need to allow installation from "Unknown Sources".
                                        </p>
                                    </div>

                                    <Button className="w-full h-12 rounded-xl mb-6 gap-2 text-lg" asChild>
                                        <a href="/android/app-release.apk" download="GlowUpHub-v1.0.apk">
                                            <Download size={20} />
                                            Download APK (v1.0)
                                        </a>
                                    </Button>
                                    <div className="text-xs text-foreground-muted space-y-2 bg-background-muted p-4 rounded-xl">
                                        <p className="font-semibold">Installation Steps:</p>
                                        <ol className="list-decimal list-inside space-y-1 opacity-80">
                                            <li>Tap "Download APK" above</li>
                                            <li>Tap "Open" when finished</li>
                                            <li>If prompted, tap "Settings" &rarr; "Allow from this source"</li>
                                            <li>Tap "Install"</li>
                                        </ol>
                                    </div>
                                </div>
                        </FadeIn>

                        {/* iOS & Android PWA Section */}
                        <FadeIn delay={0.2}>
                            <div id="pwa" className="bg-card border border-border p-8 rounded-3xl h-full relative overflow-hidden group hover:border-primary/30 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Smartphone size={120} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <Sparkles size={20} />
                                    </div>
                                    Web App (PWA)
                                </h2>
                                <p className="text-foreground-muted mb-6">
                                    The fastest way to get GlowUp Hub. Install directly from your browser—no app store required.
                                </p>

                                <div className="grid gap-6">
                                    <div className="text-xs text-foreground-muted space-y-2 bg-background-muted p-4 rounded-xl border border-border">
                                        <p className="font-semibold flex items-center gap-2">
                                            <Apple size={14} className="text-foreground" />
                                            iOS (Safari)
                                        </p>
                                        <ol className="list-decimal list-inside space-y-1 opacity-80">
                                            <li>Tap the <span className="font-bold">Share</span> button</li>
                                            <li>Tap <span className="font-bold">Add to Home Screen</span></li>
                                            <li>Tap <span className="font-bold text-primary">Add</span></li>
                                        </ol>
                                    </div>

                                    <div className="text-xs text-foreground-muted space-y-2 bg-background-muted p-4 rounded-xl border border-border">
                                        <p className="font-semibold flex items-center gap-2">
                                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-foreground"><path d="M3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15M7,2.66L14.54,11.15L16.81,8.88L6.05,2.66M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,21.34L14.54,12.85L16.81,15.12L6.05,21.34Z" /></svg>
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
