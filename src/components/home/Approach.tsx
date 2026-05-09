"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Approach.css";
import { specialtiesData as content } from "@/data/specialties";
import Link from "next/link";

export default function Approach() {
    const [activeIndex, setActiveIndex] = useState(0);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            textRefs.current.forEach((el, index) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();
                const blockCenter = rect.top + rect.height / 2;
                const distance = Math.abs(viewportCenter - blockCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <section className="approach-section" id="approach">
            <div className="approach-header-global">
                <span className="approach-category-label">SPECIALTIES</span>
                <h2 className="approach-main-heading">Core Expertise</h2>
            </div>

            <div className="approach-container">
                <div className="approach-content">
                    {content.map((item, idx) => (
                        <div
                            key={idx}
                            ref={(el) => {
                                textRefs.current[idx] = el;
                            }}
                            className={`approach-text-block ${activeIndex === idx ? "active" : ""
                                }`}
                        >
                            <h3 className="approach-title">{item.title}</h3>
                            <p className="approach-desc">{item.description}</p>
                            <Link
                                href={`/category/${item.slug}`}
                                className="approach-see-more-btn"
                            >
                                See More Projects &rarr;
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="approach-visuals">
                    <div className="visuals-sticky-wrapper">
                        <div className="cards-container">
                            {content.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`approach-box ${activeIndex === idx ? "active" : ""
                                        }`}
                                    style={{
                                        background: item.color,
                                        border: `1px solid ${item.borderColor}`,
                                    }}
                                >
                                    <div className="approach-box-content">
                                        <h3 className="approach-box-heading">{item.description}</h3>
                                        <div className="arrow">→</div>
                                    </div>

                                    <div className="approach-images-container">
                                        <div className="backimg">
                                            <Image
                                                src={item.backImage}
                                                alt={`${item.title} back`}
                                                fill
                                                quality={100}
                                                sizes="(max-width: 768px) 90vw, 680px"
                                                className="approach-card-img"
                                            />
                                        </div>

                                        <div className="frontimg">
                                            <Image
                                                src={item.frontImage}
                                                alt={`${item.title} front`}
                                                fill
                                                priority={idx < 2}
                                                quality={100}
                                                sizes="(max-width: 768px) 90vw, 680px"
                                                className="approach-card-img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="approach-cta-wrapper">
                <a href="#contact" className="btn-approach-cta">
                    Let&apos;s Build Together
                </a>
            </div>

        </section>
    );
}