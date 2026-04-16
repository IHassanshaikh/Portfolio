'use client';
import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    threshold?: number;
    minHeight?: string;
}

export default function LazySection({ children, threshold = 0.1, minHeight = '200px' }: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: '200px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
            {isVisible ? children : null}
        </div>
    );
}
