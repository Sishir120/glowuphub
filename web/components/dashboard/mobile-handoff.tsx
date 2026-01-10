"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { DevicePhoneMobileIcon, ArrowDownTrayIcon, QrCodeIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { StoreBadges } from "@/components/ui/store-badges";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Smartphone, Target } from "lucide-react";

export function MobileHandoff() {
    // This should ideally lead to the production store link or the Expo project URL
    const expoLink = "exp://u.expo.dev/df3ef4e2-86d9-41e5-b0df-e3aad77b20df?runtimeVersion=1.0.0&channel-name=production";

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left side: QR Code Experience */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-premium rounded-[3rem] p-10 border border-emerald-500/10 flex flex-col items-center text-center justify-center relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-emerald-500/5 opacity-50 blur-3xl -z-10" />

                <div className="mb-8 p-6 bg-white rounded-[2rem] shadow-2xl shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-500">
                    <QRCodeSVG
                        value={expoLink}
                        size={200}
                        bgColor={"#ffffff"}
                        fgColor={"#050505"}
                        level={"H"}
                        includeMargin={false}
                    />
                </div>

                <div className="space-y-4 max-w-xs">
                    <h3 className="text-2xl font-bold tracking-tight">Instant Access</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                        Scan this code with your phone camera to load the <span className="text-emerald-500 font-bold">GlowUp Hub</span> biological tracker instantly.
                    </p>
                </div>

                <div className="mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-emerald-500/60">
                    <QrCodeIcon className="w-4 h-4" />
                    Secure Encrypted Link
                </div>
            </motion.div>

            {/* Right side: App Details & Stores */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-premium rounded-[3rem] p-10 border border-white/5 flex flex-col justify-between"
            >
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                        Mobile Biological Sanctuary
                    </div>

                    <h2 className="text-4xl font-bold tracking-tighter leading-none">
                        Take Your Biology <br />
                        <span className="text-emerald-500">Everywhere.</span>
                    </h2>

                    <div className="space-y-6">
                        {[
                            { icon: <Target className="w-5 h-5" />, title: "Live Metabolic Tracking", desc: "Log hydration and weight with zero friction." },
                            { icon: <Smartphone className="w-5 h-5" />, title: "Instant Notification", desc: "Receive gentle rituals reminders directly." },
                            { icon: <ShieldCheck className="w-5 h-5" />, title: "Full Privacy Control", desc: "Your health data, decentralized and local." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-500">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{item.title}</h4>
                                    <p className="text-xs text-foreground-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 mt-auto">
                    <p className="text-xs font-bold text-foreground-muted uppercase tracking-widest mb-6">Official Applications</p>
                    <StoreBadges className="scale-110 origin-left" />
                </div>
            </motion.div>
        </div>
    );
}
