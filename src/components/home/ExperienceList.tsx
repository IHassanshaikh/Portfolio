'use client';
import React from 'react';
import './ExperienceList.css';

export default function ExperienceList() {
    return (
        <section className="experience-list-section">
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
                            <img src="/assets/logos/tidetechlogo.png" alt="Tech Tide LLC Logo" />
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
                            <img src="/assets/logos/fiverr_com_logo.jfif" alt="Fiverr Logo" />
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
                            <img src="/assets/logos/web_whiz_logo.jfif" alt="Web Whiz Logo" />
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
                            <img src="/assets/logos/codealpha.jfif" alt="CodeAlpha Logo" />
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
                            <img src="/assets/logos/akber_ali_sons_logo.jfif" alt="Akbar Ali & Sons Logo" />
                        </div>
                        <div className="exp-details">
                            <h3 className="exp-role">Employee</h3>
                            <div className="exp-company">Akbar Ali & Sons</div>
                        </div>
                    </div>
                </div>

                <div className="edu-list-header" style={{ marginTop: '5rem' }}>
                    <span className="exp-list-eyebrow">Learning Journey</span>
                    <h2 className="exp-list-title">Education</h2>
                </div>

                <div className="exp-list-wrapper">
                    <div className="exp-list-item">
                        <div className="exp-date">2022 - 2026</div>
                        <div className="exp-logo">
                            <img src="/assets/logos/iqra%20uni%20logo.jfif" alt="Iqra University Logo" />
                        </div>
                        <div className="exp-details">
                            <h3 className="exp-role">Bachelor of Science in Computer Science (BSCS)</h3>
                            <div className="exp-company">Iqra University — Karachi</div>
                            <p className="exp-desc">
                                Current CGPA: 3.3 | Focus: Full-Stack Development, Software Engineering, Programming
                            </p>
                        </div>
                    </div>

                    <div className="exp-list-item">
                        <div className="exp-date">2024</div>
                        <div className="exp-details">
                            <h3 className="exp-role">AI & Chatbots Diploma</h3>
                            <div className="exp-company">SMIT (Saylani Mass IT Training)</div>
                        </div>
                    </div>

                    <div className="exp-list-item">
                        <div className="exp-date">2024</div>
                        <div className="exp-details">
                            <h3 className="exp-role">Web Development Course</h3>
                            <div className="exp-company">AS Community HUB</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
