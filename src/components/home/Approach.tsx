"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import './Approach.css';

const content = [
    {
        title: "AI Automation",
        description: "Intelligent agents, machine learning integration, and automated workflows that streamline operations.",
        frontImage: "/assets/images/human-call-1.jpg",
        backImage: "/assets/images/human-call-2.jpg",
        color: "linear-gradient(to bottom, #EA3232, #701010)",
        borderColor: "rgba(234, 50, 50, 0.3)"
    },
    {
        title: "E-Commerce",
        description: "Scalable online stores with seamless payment gateways, inventory management, and optimized user journeys.",
        frontImage: "/assets/images/ecommerce.JPG",
        backImage: "/assets/images/shapio.JPG",
        color: "linear-gradient(to bottom, #2563EB, #1E3A8A)",
        borderColor: "rgba(37, 99, 235, 0.3)"
    },
    {
        title: "Healthcare",
        description: "HIPAA-compliant platforms, patient management systems, and secure telemedicine solutions.",
        frontImage: "/assets/images/doctors.JPG",
        backImage: "/assets/images/doctors 2.JPG",
        color: "linear-gradient(to bottom, #0D9488, #115E59)",
        borderColor: "rgba(13, 148, 136, 0.3)"
    },
    {
        title: "FinTech",
        description: "Secure financial dashboards, real-time transaction processing, and data visualization for financial insights.",
        frontImage: "/assets/images/shapio.JPG",
        backImage: "/assets/images/novis2.JPG",
        color: "linear-gradient(to bottom, #7C3AED, #4C1D95)",
        borderColor: "rgba(124, 58, 237, 0.3)"
    },
    {
        title: "E-Book Platform",
        description: "Digital publishing aggregators, interactive reader applications, and content management systems.",
        frontImage: "/assets/images/novis2.JPG",
        backImage: "/assets/images/ecommerce.JPG",
        color: "linear-gradient(to bottom, #0EA5E9, #075985)",
        borderColor: "rgba(14, 165, 233, 0.3)"
    }
];

export default function Approach() {
    const visualRef = useRef<HTMLDivElement>(null);
    const backImgRef = useRef<HTMLDivElement>(null);
    const frontImgRef = useRef<HTMLDivElement>(null);

    // State to track active category
    const [activeIndex, setActiveIndex] = useState(0);

    // Refs for text blocks to observe
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        textRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex((prev) => {
                            if (prev !== index) return index;
                            return prev;
                        });
                    }
                },
                {
                    root: null,
                    rootMargin: "-40% 0px -40% 0px", // Trigger when element is in the middle 20% of viewport
                    threshold: 0
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <section className="approach-section">
            <div className="approach-container">

                {/* Left: Scrollable Text */}
                <div className="approach-content">
                    {content.map((item, idx) => (
                        <div
                            key={idx}
                            className={`approach-text-block ${activeIndex === idx ? 'active' : ''}`}
                            ref={el => { textRefs.current[idx] = el; }}
                        >
                            <h3 className="approach-title">
                                {item.title}
                            </h3>
                            <p className="approach-desc">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right: Sticky Images Container */}
                <div className="approach-visuals" ref={visualRef}>
                    <div className="visuals-sticky-wrapper">
                        {content.map((item, idx) => (
                            <div
                                key={idx}
                                className="approach-box cursor-pointer shadow-2xl border"
                                style={{
                                    background: item.color,
                                    borderColor: item.borderColor,
                                    opacity: activeIndex === idx ? 1 : 0,
                                    visibility: activeIndex === idx ? 'visible' : 'hidden',
                                    pointerEvents: activeIndex === idx ? 'auto' : 'none',
                                    transition: 'opacity 0.6s ease, background 0.5s ease, border-color 0.5s ease'
                                }}
                            >
                                {/* Card Header */}
                                <div className="w-full flex justify-between items-start z-10 approach-box-content">
                                    <h3 className="approach-box-heading">
                                        {item.description}
                                    </h3>
                                    <div className="arrow">→</div>
                                </div>

                                {/* Images Container (Bottom Aligned) */}
                                <div className="approach-images-container group">
                                    {/* Back Image */}
                                    <div
                                        className="bottom-0 w-full h-full rounded-t-[16px] overflow-hidden backimg shadow-xl bg-gray-900 origin-bottom-left"
                                        style={{ position: 'absolute' }}
                                    >
                                        <Image
                                            src={item.backImage}
                                            alt={`${item.title} Detail`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Front Image */}
                                    <div
                                        className="bottom-0 w-full h-full rounded-t-[16px] frontimg overflow-hidden shadow-2xl bg-gray-800"
                                        style={{ position: 'relative' }}
                                    >
                                        <Image
                                            src={item.frontImage}
                                            alt={`${item.title} Main`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                            className="object-cover aproach-img-main"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="approach-cta-wrapper">
                <a href="#contact" className="btn-approach-cta">
                    Let's Build Together
                </a>
            </div>
        </section>
    );
}
