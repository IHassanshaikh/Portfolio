'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useTheme } from 'next-themes';

export default function GlobeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const phiRef = useRef(1.8);
    const { theme } = useTheme();

    useEffect(() => {
        let width = 0;
        let globe: ReturnType<typeof createGlobe>;

        const onResize = () => {
            if (canvasRef.current) width = canvasRef.current.offsetWidth;
        };
        window.addEventListener('resize', onResize);
        onResize();

        if (!canvasRef.current) return;

        globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 1.8,
            theta: 0.35,
            dark: theme === 'light' ? 0 : 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: theme === 'light' ? [0.9, 0.9, 0.9] : [0.1, 0.1, 0.1],
            markerColor: [0.86, 0.15, 0.15],
            glowColor: theme === 'light' ? [0.9, 0.9, 0.9] : [0.7, 0.05, 0.05],
            markers: [
                { location: [24.8607, 67.0011], size: 0.08 }, // Karachi
            ],
            onRender(state) {
                state.phi = phiRef.current;
                phiRef.current += 0.003;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', cursor: 'grab' }}
        />
    );
}
