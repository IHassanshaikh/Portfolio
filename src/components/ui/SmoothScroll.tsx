'use client';
import React, { useEffect, useState, useRef } from 'react';
import ReactLenis from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const [useLenis, setUseLenis] = useState(false);
    const timeoutRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        // Respect users who prefer reduced motion and low-memory devices
        const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const deviceMemory = (navigator as any).deviceMemory || 4;
        if (!prefersReduced && deviceMemory >= 2) {
            setUseLenis(true);
        }
    }, []);

    useEffect(() => {
        if (!useLenis) return;

        const onScroll = () => {
            document.documentElement.classList.add('is-scrolling');
            window.clearTimeout(timeoutRef.current as number);
            timeoutRef.current = window.setTimeout(() => {
                document.documentElement.classList.remove('is-scrolling');
            }, 150);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.clearTimeout(timeoutRef.current as number);
            document.documentElement.classList.remove('is-scrolling');
        };
    }, [useLenis]);

    if (!useLenis) return <>{children}</>;

    return (
        <ReactLenis root options={{
            lerp: 0.08,
            duration: 1.0,
            smoothWheel: true,
            syncTouch: true,
            touchMultiplier: 1.5
        }}>
            {children}
        </ReactLenis>
    );
}
