import { Inter, Cinzel, Unbounded } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FpsMonitorLoader from '@/components/ui/FpsMonitorLoader';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });
const unbounded = Unbounded({ subsets: ["latin"], variable: '--font-unbounded' });

export const metadata: Metadata = {
  title: "Hassan Shaikh | Portfolio",
  description: "Full-Stack and AI Automation Developer",
};

// SmoothScroll disabled temporarily to avoid scroll jank with GSAP/pinned animations
// import SmoothScroll from '@/components/ui/SmoothScroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${cinzel.variable} ${unbounded.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        {/* Diagnostic FPS monitor - enable by setting `window.__ENABLE_FPS = true` in the console */}
        <FpsMonitorLoader />
      </body>
    </html>
  );
}
