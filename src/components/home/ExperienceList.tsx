'use client';
import React, { useEffect, useRef } from 'react';
import './ExperienceList.css';
import Image from 'next/image';

export default function ExperienceList() {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!listRef.current) return;
            const cards = listRef.current.querySelectorAll('.edu-card');
            cards.forEach((card) => {
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
                (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="experience-list-section" ref={listRef}>
            <div className="container">
                <div className="exp-list-header">
                    <span className="exp-list-eyebrow">Career Path</span>
                    <h2 className="exp-list-title">Experience</h2>
                </div>

                <div className="exp-list-wrapper">
                    {/* Item 1 */}
                    <div className="exp-list-item">
                        <div className="exp-date">2025 - Present</div>
                        <div className="exp-logo">
                            <Image
                                src="/assets/logos/tidetechlogo.png"
                                alt="Tech Tide LLC Logo"
                                width={60}
                                height={60}
                                priority
                            />
                        </div>
                        <div className="exp-details">
                            <h3 className="exp-role">Full-Stack & AI Automation Developer</h3>
                            <div className="exp-company">Tech Tide LLC</div>
                            <ul className="exp-points">
                                <li>Developing scalable web applications</li>
                                <li>Building automation workflows</li>
                                <li>Integrating AI solutions into digital platforms</li>
                                <li>Optimizing performance and backend systems</li>
                                <li>Building APIs and automation tools for business processes</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="exp-list-item">
                        <div className="exp-date">2024 - 2025</div>
                        <div className="exp-logo">
                            <Image
                                src="/assets/logos/fiverr_com_logo.jfif"
                                alt="Fiverr Logo"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className="exp-details">
                            <h3 className="exp-role">Web Developer (Freelancer)</h3>
                            <div className="exp-company">Fiverr</div>
                            <ul className="exp-points">
                                <li>Developed responsive websites for global clients</li>
                                <li>Built modern frontend applications</li>
                                <li>Implemented UI improvements and performance optimizations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="exp-list-item">
                        <div className="exp-date">2023 - 2025</div>
                        <div className="exp-logo">
                            <Image
                                src="/assets/logos/web_whiz_logo.jfif"
                                alt="Web Whiz Logo"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className="exp-details">
                            <h3 className="exp-role">Web Developer</h3>
                            <div className="exp-company">Web Whiz</div>
                            <ul className="exp-points">
                                <li>Developed and maintained web applications</li>
                                <li>Implemented automation systems</li>
                                <li>Improved user experience and performance</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="exp-list-item">
                        <div className="exp-date">2022 - 2023</div>
                        <div className="exp-logo">
                            <Image
                                src="/assets/logos/codealpha.jfif"
                                alt="CodeAlpha Logo"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className="exp-details">
                            <h3 className="exp-role">Frontend Developer Intern</h3>
                            <div className="exp-company">CodeAlpha</div>
                            <ul className="exp-points">
                                <li>Worked with a development team to build responsive React and Next.js applications</li>
                                <li>Implemented UI components and frontend logic</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="exp-list-item">
                        <div className="exp-date">2021 - 2022</div>
                        <div className="exp-logo">
                            <Image
                                src="/assets/logos/akber_ali_sons_logo.jfif"
                                alt="Akbar Ali & Sons Logo"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className="exp-details">
                            <h3 className="exp-role">Employee</h3>
                            <div className="exp-company">Akbar Ali & Sons</div>
                        </div>
                    </div>
                </div>

                <div className="edu-list-header" style={{ marginTop: '5rem' }}>
                    <span className="exp-list-eyebrow">Academic Foundation</span>
                    <h2 className="exp-list-title">Education</h2>
                </div>

                <div className="edu-grid">
                    <div className="edu-card">
                        <div className="edu-card-glow"></div>
                        <div className="edu-card-content">
                            <div className="edu-header">
                                <div className="edu-logo">
                                    <Image
                                        src="/assets/logos/iqra uni logo.jfif"
                                        alt="Iqra University Logo"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="edu-date">2022 - 2026</div>
                            </div>
                            <h3 className="edu-degree">Bachelor of Science in Computer Science</h3>
                            <div className="edu-institution">Iqra University — Karachi</div>
                            <div className="edu-stats">
                                <div className="edu-stat">
                                    <span className="stat-label">CGPA</span>
                                    <span className="stat-value">3.3</span>
                                </div>
                                <div className="edu-stat">
                                    <span className="stat-label">Focus</span>
                                    <span className="stat-value">Full-Stack Dev</span>
                                </div>
                            </div>
                            <p className="edu-desc">
                                Specialized in Software Engineering and Modern Web Technologies.
                            </p>
                        </div>
                    </div>

                    <div className="edu-card mini">
                        <div className="edu-card-glow"></div>
                        <div className="edu-card-content">
                            <div className="edu-date">2024</div>
                            <h3 className="edu-degree">AI & Chatbots Diploma</h3>
                            <div className="edu-institution">SMIT (Saylani Mass IT Training)</div>
                            <div className="edu-badge">Advanced Certification</div>
                        </div>
                    </div>

                    <div className="edu-card mini">
                        <div className="edu-card-glow"></div>
                        <div className="edu-card-content">
                            <div className="edu-date">2024</div>
                            <h3 className="edu-degree">Web Development Course</h3>
                            <div className="edu-institution">AS Community HUB</div>
                            <div className="edu-badge">Skill Mastery</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
