import { Inter, Cinzel, Unbounded } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FpsMonitorLoader from '@/components/ui/FpsMonitorLoader';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });
const unbounded = Unbounded({ subsets: ["latin"], variable: '--font-unbounded' });

export const metadata: Metadata = {
  title: "Hassan Shaikh | Portfolio",
  description: "Full-Stack and AI Automation Developer",
  icons: {
    icon: '/assets/logos/logomain.png',
  },
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
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <Navbar />
          <div style={{ overflowX: 'clip', width: '100%' }}>
            {children}
          </div>
          <Footer />
          <SpeedInsights />
          {/* Diagnostic FPS monitor - enable by setting `window.__ENABLE_FPS = true` in the console */}
          <FpsMonitorLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
