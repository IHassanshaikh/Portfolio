'use client';
import React from 'react';
import './TechStack.css';
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
    return (
        <section className="techstack-section">
            <div className="techstack-container">

                <div className="abstract-element">
                    <img
                        src="https://cdn.dribbble.com/users/1770290/screenshots/6154339/dark-sphere-dribbble.png"
                        alt="Abstract Magic"
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
