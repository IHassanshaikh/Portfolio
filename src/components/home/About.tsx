'use client';
import React from 'react';
import './About.css';
import { FiMove, FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

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
                            {/* Image 1 */}
                            <div className="carousel-item item-1">
                                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Mountain View" />
                            </div>
                            {/* Image 2 */}
                            <div className="carousel-item item-2">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Coding Setup" />
                            </div>
                            {/* Image 3 */}
                            <div className="carousel-item item-3">
                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Technology" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
