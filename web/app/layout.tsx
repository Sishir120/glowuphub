import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlowUp Hub – Sustainable Weight Loss & Healthy Habits App | Expert-Led Nutrition",
  description: "Achieve sustainable weight loss with GlowUp Hub. Expert nutritionist-led program for metabolic health, healthy eating habits, and lasting lifestyle change. No starvation, no shame—just science. Join 10,000+ success stories.",
  keywords: [
    "sustainable weight loss",
    "healthy weight loss app",
    "metabolic health",
    "healthy eating habits",
    "nutrition tracking app",
    "weight loss coach",
    "healthy lifestyle app",
    "habit change app",
    "nutritionist app",
    "weight loss journey",
    "healthy habits tracker",
    "diet and nutrition app",
    "wellness transformation",
    "fat loss program",
    "metabolism booster"
  ],
  openGraph: {
    title: "GlowUp Hub – Sustainable Weight Loss & Metabolic Health",
    description: "Expert-led weight loss program with personalized nutrition, habit tracking, and metabolic health coaching. Join 10,000+ members achieving lasting results without starvation or shame.",
    url: "https://glowuphub.com",
    siteName: "GlowUp Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GlowUp Hub - Sustainable Weight Loss App with Expert Nutritionist Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlowUp Hub – Sustainable Weight Loss Program",
    description: "Expert nutritionist-led weight loss. Track nutrition, build healthy habits, achieve metabolic health. 10,000+ success stories.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground pb-20 md:pb-0`}
      >
        <Providers>
          {children}
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}
