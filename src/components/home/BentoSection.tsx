'use client';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';
import './BentoSection.css';
import { FiMail, FiArrowRight, FiCode, FiZap, FiGlobe } from 'react-icons/fi';

const GlobeCanvas = dynamic(() => import('../ui/GlobeCard'), { ssr: false });

const techTags = [
    'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Python',
    'MongoDB', 'Prisma', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL',
    'Redis', 'Framer Motion', 'OpenAI', 'LangChain',
];

const projects = [
    { label: 'E-Commerce Platform', tag: 'Full-Stack' },
    { label: 'AI Automation Suite', tag: 'AI/ML' },
    { label: 'Doctor Portal', tag: 'Web App' },
    { label: 'SaaS Dashboard', tag: 'Full-Stack' },
    { label: 'CRM System', tag: 'Backend' },
    { label: 'Mobile App UI', tag: 'Design' },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring" as const, stiffness: 100, damping: 20, mass: 1 }
    },
};

export default function BentoSection() {
    return (
        <section className="bento-section">
            <motion.div 
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* ── Row 1 ── */}

                {/* Card 1: Partnership / Work Showcase */}
                <motion.div variants={itemVariants} className="bento-card bento-card--partnership premium-hover">
                    <div className="card-ambient-glow"></div>
                    <div className="partnership-images">
                        <motion.div whileHover={{ scale: 1.1, zIndex: 10 }} className="partnership-img-ring ring-1">
                            <Image src="/assets/images/home2.jfif" alt="Project 1" width={90} height={90} className="object-cover" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, zIndex: 10 }} className="partnership-img-ring ring-2 ring-center">
                            <Image src="/assets/profile/pfp.webp" alt="Profile" width={110} height={110} className="object-cover" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, zIndex: 10 }} className="partnership-img-ring ring-3">
                            <Image src="/assets/images/home 3.jfif" alt="Project 2" width={90} height={90} className="object-cover" />
                        </motion.div>
                    </div>
                    <div className="partnership-footer">
                        <span className="partnership-label"><FiZap className="inline-icon" /> PARTNERSHIP</span>
                        <p className="partnership-text">I prioritize <span className="text-highlight">client success</span>, fostering open communication & flawless execution.</p>
                    </div>
                </motion.div>

                {/* Card 2: Tech Stack */}
                <motion.div variants={itemVariants} className="bento-card bento-card--techstack premium-hover">
                    <div className="card-ambient-glow"></div>
                    <h3 className="bento-card-title">
                        Focused on latest<br />
                        <span className="bento-card-title--gradient">digital innovations</span>
                    </h3>
                    <div className="tech-tags-wrapper">
                        <div className="tech-tags-track">
                            {[...techTags, ...techTags].map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                        <div className="tech-tags-track tech-tags-track--reverse">
                            {[...techTags, ...techTags].map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                        <div className="tech-tags-track">
                            {[...techTags, ...techTags].map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Row 2 ── */}

                {/* Card 3: Globe */}
                <motion.div variants={itemVariants} className="bento-card bento-card--globe premium-hover">
                    <div className="card-ambient-glow"></div>
                    <div className="globe-card-top">
                        <h3 className="globe-title">
                            Highly adaptable<br />
                            <span className="globe-title-gradient">across global time zones</span>
                        </h3>
                        <div className="globe-tags">
                            <span className="globe-tag">🇬🇧 UK</span>
                            <span className="globe-tag globe-tag--active">🇵🇰 Pakistan</span>
                            <span className="globe-tag">🇺🇸 USA</span>
                        </div>
                    </div>
                    <div className="globe-canvas-box">
                        <GlobeCanvas />
                    </div>
                    <div className="globe-footer">
                        <span className="globe-footer-label"><FiGlobe className="inline-icon" /> REMOTE</span>
                        <span className="globe-footer-city">Karachi, Pakistan (PKT)</span>
                    </div>
                </motion.div>

                {/* Card 4: Contact */}
                <motion.div variants={itemVariants} className="bento-card bento-card--contact premium-hover">
                    <div className="card-ambient-glow"></div>
                    <div className="contact-pulse-ring">
                        <div className="contact-logo">MH</div>
                    </div>
                    <h3 className="contact-title">Let&apos;s innovate together</h3>
                    <p className="contact-sub">Ready to bring your vision to life?</p>
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:hassanshaikh9717@gmail.com" 
                        className="contact-email-btn"
                    >
                        <FiMail className="contact-icon" />
                        hassanshaikh9717@gmail.com
                    </motion.a>
                    <p className="contact-hint">Available for freelance opportunities</p>
                </motion.div>

                {/* Card 5: Something that stands out */}
                <motion.div variants={itemVariants} className="bento-card bento-card--standout premium-hover">
                    <div className="card-ambient-glow"></div>
                    <motion.div 
                        initial={{ rotateX: 10, rotateY: -10 }}
                        whileHover={{ rotateX: 0, rotateY: 0, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="standout-browser"
                    >
                        <div className="browser-dots">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                        </div>
                        <div className="browser-body">
                            <div className="browser-icon-wrap">
                                <FiCode className="browser-icon" />
                            </div>
                            <p className="browser-text">Crafting experiences</p>
                            <p className="browser-text browser-text--gradient">that stand out.</p>
                            <div className="browser-btns">
                                <button className="browser-btn browser-btn--primary">Start →</button>
                                <button className="browser-btn browser-btn--ghost">Details</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Row 3: Scrolling Projects ── */}
                <motion.div variants={itemVariants} className="bento-card bento-card--projects premium-hover">
                    <div className="card-ambient-glow"></div>
                    <div className="projects-header">
                        <p className="projects-label">THINGS I&apos;M DOING</p>
                        <a href="/work" className="projects-cta">
                            View all work <FiArrowRight />
                        </a>
                    </div>
                    <div className="projects-scroll-track-wrapper">
                        <div className="projects-scroll-track">
                            {[...projects, ...projects, ...projects].map((p, i) => (
                                <motion.div 
                                    whileHover={{ y: -5, backgroundColor: 'rgba(var(--foreground), 0.08)' }}
                                    key={i} 
                                    className="project-chip"
                                >
                                    <span className="project-chip-tag">{p.tag}</span>
                                    <span className="project-chip-label">{p.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
