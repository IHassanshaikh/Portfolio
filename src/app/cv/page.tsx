'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    FiDownload, 
    FiMail, 
    FiPhone, 
    FiMapPin, 
    FiGithub, 
    FiLinkedin, 
    FiGlobe, 
    FiAward,
    FiCheckCircle
} from 'react-icons/fi';
import './CVPage.css';

export default function CVPage() {
    const handleDownload = () => {
        window.print();
    };

    const skills = {
        technical: ["React / Next.js", "TypeScript / JS", "Node.js / Python", "PostgreSQL / Prisma", "AWS / Docker", "REST / GraphQL"],
        ai_automation: ["OpenAI / LangChain", "Automation Workflows", "Prompt Engineering", "RAG Systems"],
        design: ["Figma", "Framer Motion", "GSAP Animations", "UI/UX Architecture"]
    };

    return (
        <main className="cv-page">
            <div className="cv-container">
                <header className="cv-header">
                    <div className="cv-header-info">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Hassan <span className="text-red">Shaikh</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Full-Stack & AI Automation Developer
                        </motion.h2>

                        <div className="cv-contact-grid">
                            <a href="mailto:hassan@example.com" className="cv-contact-item">
                                <FiMail /> hassan@example.com
                            </a>
                            <a href="tel:+92123456789" className="cv-contact-item">
                                <FiPhone /> +92 (300) 1234567
                            </a>
                            <div className="cv-contact-item">
                                <FiMapPin /> Karachi, Pakistan
                            </div>
                            <div className="cv-contact-item">
                                <FiGlobe /> hassan-shaikh.dev
                            </div>
                        </div>
                    </div>

                    <motion.button
                        onClick={handleDownload}
                        className="cv-download-btn no-print"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <FiDownload /> Download PDF
                    </motion.button>
                </header>

                <div className="cv-layout">
                    {/* Left Sidebar */}
                    <aside className="cv-sidebar">
                        <section className="sidebar-section">
                            <h3 className="sidebar-section-title"> Expertise</h3>
                            <div className="skill-category">
                                <h4>Development</h4>
                                <div className="skill-list">
                                    {skills.technical.map(s => <span key={s} className="skill-badge">{s}</span>)}
                                </div>
                            </div>
                            <div className="skill-category">
                                <h4>AI & Automation</h4>
                                <div className="skill-list">
                                    {skills.ai_automation.map(s => <span key={s} className="skill-badge">{s}</span>)}
                                </div>
                            </div>
                            <div className="skill-category">
                                <h4>Design</h4>
                                <div className="skill-list">
                                    {skills.design.map(s => <span key={s} className="skill-badge">{s}</span>)}
                                </div>
                            </div>
                        </section>

                        <section className="sidebar-section">
                            <h3 className="sidebar-section-title"> Languages</h3>
                            <div className="lang-item">
                                <span className="lang-name">English</span>
                                <span className="lang-level">Professional</span>
                            </div>
                            <div className="lang-item">
                                <span className="lang-name">Urdu</span>
                                <span className="lang-level">Native</span>
                            </div>
                        </section>

                        <section className="sidebar-section">
                            <h3 className="sidebar-section-title"> Socials</h3>
                            <div className="cv-contact-grid" style={{ gridTemplateColumns: '1fr' }}>
                                <a href="#" className="cv-contact-item"><FiLinkedin /> linkedin.com/in/hassan</a>
                                <a href="#" className="cv-contact-item"><FiGithub /> github.com/hassan</a>
                            </div>
                        </section>
                    </aside>

                    {/* Right Main Content */}
                    <div className="cv-main">
                        <section>
                            <h3 className="main-section-title">Profile Summary</h3>
                            <p className="cv-summary">
                                Dynamic Full-Stack Developer specialized in building scalable web applications and 
                                intelligent AI automation workflows. Proven track record of delivering 
                                high-performance digital solutions with a focus on modern user experiences and 
                                business efficiency. Bridging the gap between complex backend architectures and 
                                premium frontend designs.
                            </p>
                        </section>

                        <section>
                            <h3 className="main-section-title">Professional Experience</h3>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-header">
                                        <h4 className="timeline-role">Full-Stack & AI Automation Developer</h4>
                                        <span className="timeline-date">2025 - PRESENT</span>
                                    </div>
                                    <span className="timeline-company">Tech Tide LLC</span>
                                    <ul className="timeline-content">
                                        <li>Architecting scalable web platforms using Next.js and robust cloud backends.</li>
                                        <li>Developing custom AI integrations and automation pipelines for optimized workflows.</li>
                                        <li>Leading performance audits resulting in 40% faster load times across client projects.</li>
                                    </ul>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-header">
                                        <h4 className="timeline-role">Web Developer (Freelancer)</h4>
                                        <span className="timeline-date">2024 - 2025</span>
                                    </div>
                                    <span className="timeline-company">Fiverr / Remote</span>
                                    <ul className="timeline-content">
                                        <li>Delivered 50+ high-end responsive websites for global clients with 100% satisfaction.</li>
                                        <li>Translated complex design requirements into pixel-perfect interactive experiences.</li>
                                    </ul>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-header">
                                        <h4 className="timeline-role">Frontend Developer Intern</h4>
                                        <span className="timeline-date">2022 - 2023</span>
                                    </div>
                                    <span className="timeline-company">CodeAlpha</span>
                                    <ul className="timeline-content">
                                        <li>Collaborated with cross-functional teams to build modular UI component libraries.</li>
                                        <li>Assisted in the migration of legacy projects to modern React-based frameworks.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="main-section-title">Education</h3>
                            <div className="edu-list">
                                <div className="edu-item">
                                    <div className="edu-item-content">
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h3>BS in Computer Science</h3>
                                            <span className="timeline-date">2022 - 2026</span>
                                        </div>
                                        <span className="univ">Iqra University — Karachi</span>
                                    </div>
                                </div>
                                <div className="edu-item">
                                    <div className="edu-item-content">
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h3>AI & Chatbots Diploma</h3>
                                            <span className="timeline-date">2024</span>
                                        </div>
                                        <span className="univ">SMIT (Saylani Mass IT Training)</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="main-section-title">Achievements</h3>
                            <div className="skill-category">
                                <div className="lang-item"><span className="lang-name"><FiAward style={{ marginRight: '0.5rem', color: '#DC2626' }} /> Top Rated Developer Award (Fiverr)</span></div>
                                <div className="lang-item"><span className="lang-name"><FiCheckCircle style={{ marginRight: '0.5rem', color: '#DC2626' }} /> Certified AI Workflow Specialist</span></div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

