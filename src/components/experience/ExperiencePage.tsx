'use client';
import React, { useState } from 'react';
import './ExperiencePage.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiCpu, FiGlobe, FiCoffee, FiCamera, FiMusic, FiAward, FiExternalLink, FiCheckSquare } from 'react-icons/fi';

const skills = [
    { name: 'Frontend', icon: <FiLayers />, level: '95%' },
    { name: 'Backend', icon: <FiDatabase />, level: '85%' },
    { name: 'DevOps', icon: <FiCpu />, level: '75%' },
    { name: 'Web3', icon: <FiGlobe />, level: '70%' },
    { name: 'Algorithms', icon: <FiCode />, level: '90%' }
];

const experiences = [
    {
        id: 1,
        date: '2023 - Present',
        title: 'Senior Full Stack Developer',
        company: 'InnovateTech Solutions',
        logo: '/assets/logos/innovate.png', // Placeholder
        desc: 'Leading the development of enterprise-scale web applications and mentoring junior developers.',
        details: [
            'Architected a microservices-based dashboard that improved data processing speed by 40%.',
            'Implemented a robust CI/CD pipeline reducing deployment errors by 25%.',
            'Collaborated with designers to create a unified design system using React and Tailwind.'
        ]
    },
    {
        id: 2,
        date: '2021 - 2023',
        title: 'Frontend Engineer',
        company: 'Creative Digital Agency',
        logo: '/assets/logos/creative.png',
        desc: 'Built high-end marketing websites and interactive user interfaces for global brands.',
        details: [
            'Developed 15+ pixel-perfect landing pages with complex GSAP animations.',
            'Optimized website performance achieving an average Lighthouse score of 95+.',
            'Integrated headless CMS (Strapi/Contentful) for dynamic content management.'
        ]
    },
    {
        id: 3,
        date: '2019 - 2021',
        title: 'Junior Web Developer',
        company: 'StartUp Hub',
        logo: '/assets/logos/startup.png',
        desc: 'Started my professional journey building web prototypes and small-scale applications.',
        details: [
            'Assisted in migrating a legacy jQuery codebase to modern React.',
            'Developed reusable UI components increasing team productivity by 15%.',
            'Learned and implemented basic SEO and accessibility best practices.'
        ]
    }
];

const certificates = [
    {
        id: 1,
        name: 'Speed Programming Champion',
        issuer: "SMEC'26 - Tech Competition",
        date: 'Jan 2026',
        skills: ['C++', 'Algorithms', 'DSA'],
        icon: <FiAward />
    },
    {
        id: 2,
        name: 'Professional WordPress Expert',
        issuer: 'NS Training (SMC-PRIVATE) Limited',
        date: 'Sep 2024',
        skills: ['WordPress', 'Elementor', 'SEO'],
        icon: <FiCheckSquare />
    },
    {
        id: 3,
        name: 'Full Stack Web Development',
        issuer: 'Tech Academy Global',
        date: 'Mar 2024',
        skills: ['React', 'Node.js', 'MongoDB'],
        icon: <FiCode />
    },
    {
        id: 4,
        name: 'AI Automation Specialist',
        issuer: 'Silicon Valley Forge',
        date: 'Dec 2023',
        skills: ['Python', 'NoCode', 'AutoGPT'],
        icon: <FiCpu />
    }
];

export default function ExperiencePage() {
    const [expandedId, setExpandedId] = useState<number | null>(1);

    return (
        <main className="experience-page">
            {/* About Me / Introduction Section */}
            <div className="container">
                <section className="about-hero-split">
                    <div className="about-text-content">
                        <motion.span
                            className="text-red font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            A Little About Me
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            I build things that <span className="glow-text">matter.</span>
                        </motion.h1>
                        <motion.div
                            className="about-bio"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p>
                                Based in the intersection of design and technology, I am a software engineer
                                with a passion for creating immersive digital experiences. I believe that
                                great software is not just about code—it's about empathy for the user.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="about-image-frame">
                            <div style={{ width: '100%', height: '100%', background: 'rgba(var(--primary), 0.05)' }}></div>
                        </div>
                    </motion.div>
                </section>

                {/* Technical Skills Section */}
                <section className="skill-hexagon-section">
                    <div className="experience-header text-center">
                        <h2>Technical <span className="text-red">Expertise</span></h2>
                        <p className="text-muted">The core technologies I specialize in.</p>
                    </div>

                    <div className="skill-grid-unique">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-hex-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="skill-icon-wrap" style={{ fontSize: '2rem', color: 'rgb(var(--primary))', marginBottom: '1rem' }}>{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                                <div className="skill-level-bar">
                                    <motion.div
                                        className="skill-progress"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(var(--border), 0.3)', margin: '4rem 0' }} />

                <section className="experience-hero" style={{ paddingTop: '2rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        My <span className="glow-text">Professional</span> Journey
                    </motion.h1>
                    <p className="text-muted">A timeline of my growth and contributions in the tech industry.</p>
                </section>
            </div>

            <section className="timeline-container">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="timeline-dot"></div>
                        <span className="timeline-date">{exp.date}</span>

                        <div
                            className={`timeline-content-card ${expandedId === exp.id ? 'active' : ''}`}
                            onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                        >
                            <div className="timeline-header">
                                <div>
                                    <h3 className="job-title">{exp.title}</h3>
                                    <span className="company-name">{exp.company}</span>
                                </div>
                                {/* In a real app, logos would be here */}
                            </div>

                            <p className="experience-desc">{exp.desc}</p>

                            <AnimatePresence>
                                {expandedId === exp.id && (
                                    <motion.div
                                        className="experience-details"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                                    >
                                        <ul>
                                            {exp.details.map((detail, dIndex) => (
                                                <li key={dIndex}>{detail}</li>
                                            ))}
                                        </ul>

                                        <div className="achievement-images">
                                            <div className="achievement-img"></div>
                                            <div className="achievement-img"></div>
                                            <div className="achievement-img"></div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Certificates Section */}
            <section className="certificates-section">
                <div className="container">
                    <div className="experience-header text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Certificates & <span className="text-red">Achievements</span>
                        </motion.h2>
                        <p className="text-muted">Evidence of my commitment to continuous learning and excellence.</p>
                    </div>

                    <div className="certificates-grid">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="certificate-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="cert-badge">{cert.icon}</div>
                                <div className="cert-content">
                                    <span className="cert-date">{cert.date}</span>
                                    <h3 className="cert-name">{cert.name}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <div className="cert-skills">
                                        {cert.skills.map((skill, si) => (
                                            <span key={si} className="cert-skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                    <a href="#" className="cert-link">
                                        View Credential <FiExternalLink />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
