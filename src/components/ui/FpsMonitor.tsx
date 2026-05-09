'use client';
import { useEffect } from 'react';

// Lightweight FPS/frame-drop logger for diagnostics.
// Activates only when `window.__ENABLE_FPS === true` to avoid overhead.
export default function FpsMonitor() {
    useEffect(() => {
        try {
            if (typeof window === 'undefined' || !(window as any).__ENABLE_FPS) return;

            let last = performance.now();
            let frames = 0;
            let sumDelta = 0;
            const samples: number[] = [];

            const raf = (now: number) => {
                const delta = now - last;
                last = now;
                frames++;
                sumDelta += delta;
                samples.push(delta);

                // Log heavy frames > 30ms
                if (delta > 30) {
                    console.warn('[FPS Monitor] frame drop', Math.round(delta), 'ms');
                }

                // Every 1s report summary
                if (sumDelta >= 1000) {
                    const avg = sumDelta / frames;
                    const max = Math.max(...samples);
                    console.info(`[FPS Monitor] avg=${avg.toFixed(1)}ms max=${Math.round(max)}ms frames=${frames}`);
                    // reset
                    frames = 0;
                    sumDelta = 0;
                    samples.length = 0;
                }

                (window as any).__FpsMonitor_last = delta;
                (window as any).__FpsMonitor_samples = samples.slice();
                (window as any).__FpsMonitor_active = true;

                requestAnimationFrame(raf);
            };

            const id = requestAnimationFrame(raf);
            return () => {
                cancelAnimationFrame(id);
                (window as any).__FpsMonitor_active = false;
            };
        } catch (e) {
            // ignore
        }
    }, []);

    return null;
}
