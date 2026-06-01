'use client';
import React, { useState } from 'react';
import './ExperiencePage.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiCpu, FiGlobe, FiCoffee, FiCamera, FiMusic, FiAward, FiExternalLink, FiCheckSquare } from 'react-icons/fi';

const skills = [
    { name: 'Full Stack Web', icon: <FiLayers />, level: '95%' },
    { name: 'AI / Machine Learning', icon: <FiCpu />, level: '85%' },
    { name: 'Python & Data', icon: <FiDatabase />, level: '80%' },
    { name: 'REST APIs & Backend', icon: <FiGlobe />, level: '90%' },
    { name: 'Algorithms (DSA)', icon: <FiCode />, level: '90%' }
];

const experiences = [
    {
        id: 1,
        date: '2025 - Present',
        title: 'Full Stack and AI Automation Developer',
        company: 'Tech Tide LLC',
        logo: '/assets/logos/innovate.png', // Placeholder
        desc: 'Currently working at Tide Tech as a Developer & Automation Specialist, where my major role is to develop and optimize web applications, automate workflows, and integrate AI-driven solutions to improve efficiency and scalability.',
        details: [
            'React js, Automation and +12 skills'
        ]
    },
    {
        id: 2,
        date: '2024 - 2025',
        title: 'Web Developer Freelancer',
        company: 'Fiverr',
        logo: '/assets/logos/creative.png',
        desc: 'Worked as a freelance Web Developer focusing on frontend and web development projects.',
        details: [
            'Front-End Development and Web Development'
        ]
    },
    {
        id: 3,
        date: '2023 - 2025',
        title: 'Web Developer',
        company: 'Web Whiz',
        logo: '/assets/logos/startup.png',
        desc: 'My major role was to develop and maintain web applications, implement automation solutions, and optimize workflows to enhance efficiency and user experience.',
        details: [
            'React.js, JavaScript and +4 skills'
        ]
    },
    {
        id: 4,
        date: '2022 - 2023',
        title: 'Frontend Developer Intern',
        company: 'CodeAlpha',
        logo: '/assets/logos/startup.png',
        desc: 'Collaborated with a team to develop responsive web applications using React.js and Next.js.',
        details: [
            'Front-End Development, React js and +3 skills'
        ]
    },
    {
        id: 5,
        date: '2021 - 2022',
        title: 'Ex employee of Akbar ali & sons',
        company: 'Akber Ali & Sons',
        logo: '/assets/logos/startup.png',
        desc: 'Started my professional journey here.',
        details: []
    }
];

const certificates = [
    {
        id: 1,
        name: 'Speed Programming Champion',
        issuer: "SMEC'26 - Tech Competition",
        date: 'Jan 2026',
        skills: ['C++', 'Algorithms', 'DSA'],
        icon: <FiAward />,
        link: '/assets/cerrtificates/smec.jfif'
    },
    {
        id: 2,
        name: 'Professional WordPress Expert',
        issuer: 'NS Training (SMC-PRIVATE) Limited',
        date: 'Sep 2024',
        skills: ['WordPress', 'Elementor', 'SEO'],
        icon: <FiCheckSquare />,
        link: '/assets/cerrtificates/NS training wp.jfif'
    },
    {
        id: 3,
        name: 'Frontend Developer Intern',
        issuer: 'CodeAlpha',
        date: 'Sep 2023',
        skills: ['Front-End Development'],
        icon: <FiCode />,
        link: '/assets/cerrtificates/Codealpha fronened.jfif'
    },
    {
        id: 4,
        name: 'Data Structure and Algorithm (DSA)',
        issuer: 'CodeAlpha',
        date: '2023',
        skills: ['DSA', 'Problem Solving'],
        icon: <FiCpu />,
        link: '/assets/cerrtificates/codealpha DSA.jfif'
    },
    {
        id: 5,
        name: 'UI/UX Designing',
        issuer: 'SMIT',
        date: '2023',
        skills: ['UI/UX', 'Figma'],
        icon: <FiAward />,
        link: '/assets/cerrtificates/SMIT UIUX.jfif'
    },
    {
        id: 6,
        name: 'Web Development Course',
        issuer: 'AS Community HUB',
        date: 'Aug 2024',
        skills: ['Web Development'],
        icon: <FiGlobe />,
        link: '/assets/cerrtificates/AS commuinty webdev.jfif'
    },
    {
        id: 7,
        name: 'Tailwind CSS Workshop',
        issuer: 'Workshop',
        date: '2024',
        skills: ['Tailwind CSS'],
        icon: <FiCode />,
        link: '/assets/cerrtificates/tailwind workshop.jfif'
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
                            <img src="/assets/images/img3.webp" alt="Experience Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                            <div className="achievement-img" style={{ overflow: 'hidden' }}>
                                                <img src="/assets/images/img4.webp" alt="Achievement 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="achievement-img" style={{ overflow: 'hidden' }}>
                                                <img src="/assets/images/img5.webp" alt="Achievement 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="achievement-img" style={{ overflow: 'hidden' }}>
                                                <img src="/assets/images/img6.webp" alt="Achievement 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
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
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
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
