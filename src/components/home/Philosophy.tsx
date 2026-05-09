'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Allow quick disable for debugging scroll jank
        if (typeof window !== 'undefined' && (window as any).__DISABLE_GSAP) {
            return;
        }
        // Split text logic could be added here, but for simplicity we'll use opacity on spans
        if (textRef.current) {
            gsap.fromTo(textRef.current,
                { opacity: 0.2, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1
                    }
                }
            );
        }
    }, { scope: containerRef });

    return (
        <section className="philosophy-section scroll-optimized" ref={containerRef}>
            <div className="philosophy-content">
                <h2 className="philosophy-text" ref={textRef}>
                    <span className="word">I</span> <span className="word">believe</span> <span className="word">in</span> <span className="word">building</span> <span className="word">innovative</span> <br />
                    <span className="word">and</span> <span className="word">impactful</span> <span className="word text-red">solutions.</span> <br /><br />
                    <span className="word">A</span> <span className="word">tea</span> <span className="word">enthusiast</span> <span className="word">and</span> <span className="word">cricket</span> <span className="word">lover</span> <br />
                    <span className="word">who</span> <span className="word">believes</span> <span className="word">in</span> <span className="word">maintaining</span> <span className="word">a</span> <span className="word">healthy</span> <br />
                    <span className="word">balance</span> <span className="word">between</span> <span className="word">creativity,</span> <span className="word text-red">productivity,</span> <br />
                    <span className="word">and</span> <span className="word">personal</span> <span className="word">life.</span>
                </h2>
            </div>
        </section>
    );
}
