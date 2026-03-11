'use client';
import React from 'react';
import FpsMonitor from './FpsMonitor';

export default function FpsMonitorLoader() {
    if (typeof window === 'undefined') return null;
    try {
        if (!(window as any).__ENABLE_FPS) return null;
    } catch (e) {
        return null;
    }

    return <FpsMonitor />;
}
