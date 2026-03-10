'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        title: 'Discovery',
        result: 'Understanding the core problem.',
        desc: 'We start by diving deep into your goals, audience, and market. No assuptions, just data.'
    },
    {
        num: '02',
        title: 'Strategy',
        result: 'A blueprint for success.',
        desc: 'Mapping out user flows, technical architecture, and the visual direction before a single line of code is written.'
    },
    {
        num: '03',
        title: 'Development',
        result: 'Pixel-perfect execution.',
        desc: 'Writing clean, scalable code. We focus on performance, accessibility, and robust security.'
    },
    {
        num: '04',
        title: 'Launch',
        result: 'Ready for the world.',
        desc: 'Testing, optimizing, and deploying. We ensure a smooth takeoff and monitor post-launch performance.'
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        const cards = cardsRef.current;
        const totalCards = cards.length;

        // ScrollTrigger for pinning
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: `+=${totalCards * 1000}px`, // Reduced scroll distance slightly for better feel
            pin: true,
            scrub: 1
        });

        // Initialize cards
        // First card visible immediately
        gsap.set(cards[0], { y: 0, scale: 1, opacity: 1 });
        // Others off-screen
        gsap.set(cards.slice(1), { y: '110vh', scale: 0.9, opacity: 0 });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${totalCards * 1000}px`,
                scrub: 1
            }
        });

        // Loop through subsequent cards (1 to end)
        for (let i = 1; i < totalCards; i++) {
            const card = cards[i];
            const prevCard = cards[i - 1];

            // Animation Step
            timeline
                // 1. Previous card moves back/shrinks
                .to(prevCard, {
                    scale: 0.95,
                    y: -10,
                    filter: 'brightness(0.5)',
                    duration: 0.5
                })
                // 2. New card enters from bottom
                .to(card, {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'none'
                }, "<");
        }

    }, { scope: containerRef });

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section className="process-section" ref={containerRef}>
            <div className="process-header">
                <h2>Our Process</h2>
                <p>From concept to reality.</p>
            </div>

            <div className="process-cards-container">
                {steps.map((step, index) => (
                    <div key={index} className="process-card" ref={addToRefs}>
                        <div className="card-top">
                            <span className="step-num">{step.num}</span>
                        </div>
                        <div className="card-body">
                            <h3>{step.title}</h3>
                            <h4 className="text-red">{step.result}</h4>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
