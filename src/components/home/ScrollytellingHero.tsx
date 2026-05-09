'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import './ScrollytellingHero.css';

const FRAME_COUNT = 32;

function padFrame(n: number): string {
    return String(n).padStart(4, '0');
}

const STORY_STEPS = [
    {
        start: 0,
        end: 0.3,
        greeting: "👋 Hey! It's me Muhammad Hassan,",
        title: "Crafting <span class='scrolly-highlight'>purpose driven</span> experiences.",
        sub: "Full-Stack Developer · AI Automation Engineer"
    },
    {
        start: 0.3,
        end: 0.7,
        greeting: "The Process,",
        title: "Turning <span class='scrolly-highlight'>complex ideas</span> into elegant code.",
        sub: "Bridging the gap between Innovation and Execution."
    },
    {
        start: 0.7,
        end: 1,
        greeting: "Let's Connect,",
        title: "Building the <span class='scrolly-highlight'>future of tech</span> together.",
        sub: "Available for high-impact projects and collaborations."
    }
];

export default function ScrollytellingHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress to image scale (Zoom Out effect)
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [1, 1, 1, 0]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            // Update Frame
            const frameIdx = Math.min(
                FRAME_COUNT - 1,
                Math.floor(latest * FRAME_COUNT)
            );
            setCurrentFrame(frameIdx);

            // Update Text Step
            const stepIdx = STORY_STEPS.findIndex(
                (step) => latest >= step.start && latest <= step.end
            );
            if (stepIdx !== -1) setCurrentStep(stepIdx);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const frameSrc = `/assets/frames/face-${padFrame(currentFrame + 1)}.webp`;
    const step = STORY_STEPS[currentStep];

    return (
        <div ref={containerRef} className="scrolly-wrapper">
            <div className="scrolly-sticky">
                {/* Character Image with Zoom Out effect */}
                <motion.div 
                    style={{ scale: imageScale, opacity: imageOpacity }}
                    className="scrolly-image-container"
                >
                    <img
                        src={frameSrc}
                        alt="3D Avatar Sequence"
                        className="scrolly-face-img"
                    />
                </motion.div>

                <div className="scrolly-overlay" />

                {/* Animated Text Content */}
                <div className="scrolly-text">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <p className="scrolly-greeting">
                                <span className="scrolly-wave"></span> {step.greeting}
                            </p>
                            <h1 
                                className="scrolly-title"
                                dangerouslySetInnerHTML={{ __html: step.title }}
                            />
                            <p className="scrolly-sub">{step.sub}</p>
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
