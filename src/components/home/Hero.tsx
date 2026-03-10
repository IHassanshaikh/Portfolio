'use client';
import React from 'react';
import LightPillar from '../ui/LightPillar';
import './Hero.css';
import { FiArrowUpRight, FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="hero-section">

            {/* Background - Light Pillar (Restored to Red) */}
            <div className="hero-background">
                <LightPillar
                    topColor="#000000"
                    bottomColor="#DC2626"
                    intensity={1.1}
                    mixBlendMode="normal"
                    pillarRotation={24}
                    interactive={false}
                />
            </div>

            <div className="hero-container">
                <div className="hero-top">
                    <div className="hero-intro animate-fade-up">
                        <span className="hand-wave-red">👋</span> Hey! It's me Muhammad Hassan,
                    </div>

                    <div className="hero-subtitle animate-fade-up delay-100">
                        Full-Stack Developer | AI Automation Engineer | Software Innovator
                    </div>

                    <h1 className="hero-title animate-fade-up delay-200">
                        Crafting <span className="highlight-red">purpose driven experiences</span> that inspire & engage.
                    </h1>
                </div>
                <div className='herobottom-section'>
                    {/* Line + Description Row */}
                    <div className="hero-middle-row animate-fade-up delay-250">
                        <div className="hero-horizontal-line"></div>
                        <p className="hero-desc">
                            I work with businesses and startups globally to build scalable, pixel-perfect, and high-performance digital solutions. My focus is on developing modern web platforms, automation systems, and AI-powered tools that improve efficiency and help companies grow.
                        </p>
                    </div>

                    {/* Footer Row: Socials on left, Buttons on right */}
                    <div className="hero-footer-row animate-fade-up delay-280">
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/hassan-shaikh-618966253" target="_blank" rel="noopener noreferrer" className="social-link">Linkedin <FiArrowUpRight className="social-arrow" /></a>
                            <a href="https://github.com/mhassan9717" target="_blank" rel="noopener noreferrer" className="social-link">Github <FiArrowUpRight className="social-arrow" /></a>
                            <a href="https://www.instagram.com/mhassan9717" target="_blank" rel="noopener noreferrer" className="social-link">Instagram <FiArrowUpRight className="social-arrow" /></a>
                            <a href="mailto:hassanshaikh9717@gmail.com" className="social-link">Gmail <FiArrowUpRight className="social-arrow" /></a>
                        </div>

                        <div className="hero-btns">
                            <a href="#about" className="btn-know-me">
                                Know me better
                            </a>
                            <a href="/Hassan_Shaikh_Resume.pdf" download className="btn-resume">
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Marquee/Ticker */}
            <div className="hero-ticker">
                <div className="ticker-track">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="ticker-item">
                            <span>Animations</span> <span className="ticker-star">✦</span>
                            <span>Community</span> <span className="ticker-star">✦</span>
                            <span>Development</span> <span className="ticker-star">✦</span>
                            <span>Mentor</span> <span className="ticker-star">✦</span>
                            <span>Websites</span> <span className="ticker-star">✦</span>
                            <span>Design</span> <span className="ticker-star">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
