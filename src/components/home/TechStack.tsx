'use client';
import React, { useEffect, useRef } from 'react';
import './TechStack.css';
import Image from 'next/image';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiDocker,
    SiLinux, SiGit, SiGithub, SiStrapi, SiGreensock, SiN8N,
    SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMysql, SiRedux,
    SiJsonwebtokens, SiOpenai, SiPython
} from 'react-icons/si';
import { FaPython, FaWordpress, FaFlask, FaCogs, FaRobot, FaBrain } from 'react-icons/fa';


// Grouped for cleaner mapping
const technologies = [
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'n8n', icon: <SiN8N /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'AI Automation', icon: <FaRobot /> },
    { name: 'API Integration', icon: <FaCogs /> },
    { name: 'AI APIs', icon: <FaBrain /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
];

export default function TechStack() {
    const circleRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const el = circleRef.current;
        if (!el) return;

        const onScroll = () => {
            // Only update rotation — never touch position
            const deg = window.scrollY * 0.12;
            el.style.transform = `rotate(${deg}deg)`;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section className="techstack-section">
            <div className="techstack-container">

                {/* Single div: CSS positions it, JS only rotates the image */}
                <div className="abstract-element-pos">
                    <img
                        ref={circleRef as React.RefObject<HTMLImageElement>}
                        src="/assets/images/animated-circle.png"
                        alt="Animated Circle"
                        className="abstract-image"
                    />
                </div>

                <span className="techstack-eyebrow">MY SKILLSET</span>
                <h2 className="techstack-title">
                    The Magic <span className="highlight">Behind</span>
                </h2>

                {/* Marquee Slider */}
                <div className="tech-marquee-mask">
                    <div className="tech-marquee-track">
                        {/* Render list twice for infinite loop */}
                        {technologies.map((tech, index) => (
                            <div key={`t1-${index}`} className="tech-pill">
                                <span className="pill-icon">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                        {technologies.map((tech, index) => (
                            <div key={`t2-${index}`} className="tech-pill">
                                <span className="pill-icon">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
