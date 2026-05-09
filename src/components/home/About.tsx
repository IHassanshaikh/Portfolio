'use client';
import React from 'react';
import './About.css';
import { FiMove, FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

export default function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <span className="about-eyebrow">A Quick Glance</span>
                    <h2 className="about-title">
                        Building the bridge between<br />
                        ideas and <span className="highlight">experiences</span>
                    </h2>

                    <p className="about-desc">
                        I am Muhammad Hassan, a Final-Year Bachelor of Computer Science (BSCS) student at Iqra University, Karachi, and a passionate Full-Stack Developer and AI Automation Engineer. I specialize in building scalable web applications, intelligent automation systems, and modern digital solutions that help businesses operate more efficiently.
                    </p>

                    <p className="about-desc">
                        Currently, I am working at Tech Tide LLC as a Full-Stack and AI Automation Developer, where I focus on developing high-performance web applications, automating workflows, and integrating AI-driven technologies to improve productivity and system scalability.
                    </p>

                    <p className="about-desc">
                        With strong experience in modern full-stack development, I work extensively with technologies such as React.js, Next.js, Node.js, and Python, along with database systems and API integrations. My work emphasizes writing clean, maintainable code while delivering reliable and user-focused solutions.
                    </p>

                    <div className="about-socials">
                        <a href="https://www.linkedin.com/in/hassan-shaikh-618966253" className="social-icon" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="https://github.com/mhassan9717" className="social-icon" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                        <a href="https://www.instagram.com/mhassan9717" className="social-icon" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                    </div>

                    <a href="#" className="dive-deeper">
                        Dive in deeper <BsArrowRight />
                    </a>
                </div>

                <div className="about-visuals">
                    <div className="carousel-3d-container">
                        <div className="carousel-3d-spinner">
                            {/* Image 1 - Profile */}
                            <div className="carousel-item item-1">
                                <Image
                                    src="/assets/profile/pfp.webp"
                                    alt="Profile Photo"
                                    width={300}
                                    height={400}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    priority={false}
                                />
                            </div>
                            {/* Image 2 - Home 2 */}
                            <div className="carousel-item item-2">
                                <Image
                                    src="/assets/images/home2.jfif"
                                    alt="Home 2"
                                    width={300}
                                    height={400}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    priority={false}
                                />
                            </div>
                            {/* Image 3 - Home 3 */}
                            <div className="carousel-item item-3">
                                <Image
                                    src="/assets/images/home 3.jfif"
                                    alt="Home 3"
                                    width={300}
                                    height={400}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
