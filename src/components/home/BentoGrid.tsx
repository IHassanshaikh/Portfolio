'use client';
import React from 'react';
import './BentoGrid.css';
import { motion } from 'framer-motion';
import { SiTypescript, SiTailwindcss, SiFramer, SiSanity, SiMongodb, SiPrisma, SiAwslambda, SiJest, SiCypress, SiRedux, SiSass } from 'react-icons/si';
import { FaAws, FaReact, FaGlobeAmericas } from 'react-icons/fa';
import { BiCopy } from 'react-icons/bi';
import { IoMdInfinite } from 'react-icons/io';

const techStack = [
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Motion', icon: <SiFramer className="text-pink-500" /> },
    { name: 'Sanity', icon: <SiSanity className="text-red-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Prisma', icon: <SiPrisma /> },
    { name: 'Zustand', icon: <FaReact className="text-yellow-500" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
    { name: 'Jest', icon: <SiJest className="text-red-600" /> },
    { name: 'Cypress', icon: <SiCypress className="text-green-300" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    { name: 'Sass', icon: <SiSass className="text-pink-400" /> },
];

const doingList = [
    { title: 'Auth & Identity Layer', desc: 'A shared authentication system powering Rune.' },
    { title: 'In-House CMS', desc: 'Designed a custom CMS for publishing blogs.' },
    { title: 'AI Services', desc: 'Integrated proprietary AI logic to power features.' },
    { title: 'Platform Monitoring', desc: 'Internal tracking and analytics.' },
    { title: 'Custom Payments', desc: 'Built an in-house payment flow.' },
];

export default function BentoGrid() {

    const copyEmail = () => {
        navigator.clipboard.writeText('ksparth12@gmail.com');
        alert('Email copied to clipboard!');
    };

    return (
        <section className="bento-section">
            <div className="container">

                <div className="bento-wrapper">

                    {/* Left Main Column (66%) */}
                    <div className="bento-col-main">

                        {/* Top: Partnership Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bento-card card-partnership"
                        >
                            <div className="avatar-group-container">
                                <div className="avatar-group">
                                    <div className="avatar-ring-large" style={{ opacity: 0.2 }}></div>
                                    <div className="avatar-ring-large" style={{ opacity: 0.4 }}></div>
                                    <div className="avatar-ring-center">
                                        <div className="avatar-img-placeholder">
                                            <IoMdInfinite />
                                        </div>
                                    </div>
                                    <div className="avatar-ring-large" style={{ opacity: 0.4 }}></div>
                                    <div className="avatar-ring-large" style={{ opacity: 0.2 }}></div>
                                </div>
                            </div>

                            <div className="mt-auto z-10 relative">
                                <div className="flex items-center gap-2 mb-2 text-red-500">
                                    <IoMdInfinite size={24} />
                                    <span className="text-xs font-bold tracking-widest uppercase">Partnership</span>
                                </div>
                                <h3 className="bento-title">I prioritize client success, fostering open communication</h3>
                            </div>
                        </motion.div>

                        {/* Bottom Row: Map + Connect */}
                        <div className="bento-split-row">

                            {/* Left: Timezone/Map */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bento-card card-map"
                            >
                                <div className="text-center z-10 relative">
                                    <h3 className="bento-title">I'm highly adaptable across global time zones</h3>
                                    <div className="location-tags">
                                        <span className="loc-tag">GB UK</span>
                                        <span className="loc-tag active">IN India</span>
                                        <span className="loc-tag">US USA</span>
                                    </div>
                                </div>
                                <div className="map-container">
                                    <div className="genome-globe"></div>
                                    <div className="globe-pin"></div>
                                    <div className="globe-pin-label">India</div>
                                </div>
                            </motion.div>

                            {/* Right: Connect Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bento-card card-connect"
                            >
                                <div className="card-connect-content">
                                    <div className="logo-section">
                                        <span className="logo-rs">RS</span>
                                    </div>
                                    <h3 className="bento-title">Let's innovate together</h3>
                                    <p className="bento-subtitle">Ready to bring your vision to life?</p>
                                    <button onClick={copyEmail} className="copy-email-btn">
                                        <BiCopy />
                                        ksparth12@gmail.com
                                    </button>
                                </div>
                                <p className="text-xs text-muted text-center mt-4">Get in touch via email</p>
                            </motion.div>

                        </div>
                    </div>

                    {/* Right Column (33%) - Single Tall Card for Tech + Project */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bento-card card-tech-project"
                    >
                        {/* Top Section: Tech Stack - REMOVED (Moved to dedicated section) */}
                        {/* <div className="tech-section">...</div> */}

                        {/* Bottom Section: Project Preview */}
                        <div className="project-highlight-section">
                            <div className="project-mockup-card">
                                <div className="mockup-header">
                                    <div className="dots">
                                        <div className="dot dot-red"></div>
                                        <div className="dot dot-yellow"></div>
                                        <div className="dot dot-green"></div>
                                    </div>
                                    <div className="mockup-bar"></div>
                                </div>
                                <div className="mockup-body">
                                    <h4 className="font-bold mb-1 text-center">Something that <br /><span className="text-red">stands out.</span></h4>
                                    <div className="flex gap-2 mt-4 justify-center">
                                        <button className="btn-mini-primary">Start →</button>
                                        <button className="btn-mini-outline">Details</button>
                                    </div>
                                </div>
                            </div>
                            {/* Background Glows for Project */}
                            <div className="glow-effect-red"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Marquee Section */}
                <div className="marquee-container">
                    <div className="marquee-left">

                    </div>
                    <div className="marquee-content-wrapper">
                        {/* Marquee is usually just scrolling items, but here it looks like distinct cards */}
                        <div className="marquee-item-static">
                            <h4 className="text-xs font-bold tracking-widest text-muted uppercase">Things I'm Doing</h4>
                            <h3 className="text-xl font-bold">Working on Rune Environment</h3>
                        </div>
                        <div className="marquee-scroll-area">
                            <div className="marquee-track">
                                {[...doingList, ...doingList].map((item, idx) => (
                                    <div key={idx} className="marquee-card">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
