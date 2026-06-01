'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import './ScrollytellingHero.css';

const FRAME_COUNT = 32;

function padFrame(n: number): string {
    return String(n).padStart(4, '0');
}

const STORY_STEPS = [
    {
        start: 0,
        end: 0.5,
        greeting: "👋 Hey! It's me Muhammad Hassan,",
        title: "Crafting <span class='scrolly-highlight'>purpose driven</span> experiences.",
        sub: "Full-Stack Developer · AI Automation Engineer"
    },
    {
        start: 0.5,
        end: 1,
        greeting: "Let's Connect,",
        title: "Building the <span class='scrolly-highlight'>future of tech</span> together.",
        sub: "Available for high-impact projects and collaborations."
    }
];

export default function ScrollytellingHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const [currentStep, setCurrentStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress to image scale (Zoom Out effect)
    const imageScale = useTransform(smoothProgress, [0, 1], [1, 0.85]);
    const imageOpacity = useTransform(smoothProgress, [0, 0.05, 0.9, 1], [1, 1, 1, 0]);

    useEffect(() => {
        // Preload all frames for smooth animation
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `/assets/frames/face-${padFrame(i)}.webp`;
        }
    }, []);

    useEffect(() => {
        const unsubscribe = smoothProgress.on('change', (latest) => {
            // Update Frame Index in state
            const frameIdx = Math.min(
                FRAME_COUNT,
                Math.floor(latest * FRAME_COUNT) + 1
            );
            
            setCurrentFrame(frameIdx);

            // Update Text Step (keep in state for AnimatePresence)
            const stepIdx = STORY_STEPS.findIndex(
                (step) => latest >= step.start && latest <= step.end
            );
            if (stepIdx !== -1) setCurrentStep(stepIdx);
        });

        return () => unsubscribe();
    }, [smoothProgress]);

    const step = STORY_STEPS[currentStep];

    return (
        <div ref={containerRef} className="scrolly-wrapper">
            <div className="scrolly-sticky">
                {/* Character Image with Zoom Out effect */}
                <motion.div 
                    style={{ scale: imageScale, opacity: imageOpacity }}
                    className="scrolly-image-container"
                >
                    {Array.from({ length: FRAME_COUNT }).map((_, i) => {
                        const frameNum = i + 1;
                        return (
                            <img
                                key={frameNum}
                                src={`/assets/frames/face-${padFrame(frameNum)}.webp`}
                                alt={frameNum === 1 ? "3D Avatar Sequence" : ""}
                                className="scrolly-face-img"
                                style={{
                                    display: currentFrame === frameNum ? 'block' : 'none',
                                }}
                                // Force high priority fetch for the first frame
                                fetchPriority={frameNum === 1 ? 'high' : 'auto'}
                            />
                        );
                    })}
                </motion.div>

                <div className="scrolly-overlay" />

                {/* Animated Text Content */}
                <div className="scrolly-text">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { 
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
                                },
                                exit: { opacity: 0, transition: { duration: 0.3 } }
                            }}
                            className="scrolly-text-inner"
                        >
                            <motion.p 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="scrolly-greeting"
                            >
                                <span className="scrolly-wave">👋</span> {step.greeting.replace("👋 ", "")}
                            </motion.p>
                            <motion.h1 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="scrolly-title"
                                dangerouslySetInnerHTML={{ __html: step.title }}
                            />
                            <motion.p 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="scrolly-sub"
                            >
                                {step.sub}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    {currentStep === 0 && (
                        <div className="scrolly-scroll-hint">
                            <span>Scroll to explore</span>
                            <div className="scrolly-arrow">↓</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
