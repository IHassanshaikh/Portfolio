'use client';
import React from 'react';
import './Hero.css';
import FloatingLines from '../ui/FloatingLines';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-top">
                    <div className="hero-intro animate-fade-up">
                        <span className="hand-wave-red">👋</span> Hey! It's me Muhammad Hassan,
                    </div>

                    <div className="hero-subtitle animate-fade-up">
                        Full-Stack Developer | AI Automation Engineer | Software Innovator
                    </div>

                    <h1 className="hero-title animate-fade-up">
                        Crafting <span className="highlight-red">purpose driven experiences</span> that inspire & engage.
                    </h1>
                </div>
                <div className='herobottom-section'>
                    {/* Line + Description Row */}
                    <div className="hero-middle-row animate-fade-up">
                        <div className="hero-horizontal-line"></div>
                        <p className="hero-desc">
                            I work with businesses and startups globally to build scalable, pixel-perfect, and high-performance digital solutions. My focus is on developing modern web platforms, automation systems, and AI-powered tools that improve efficiency and help companies grow.
                        </p>
                    </div>

                    {/* Footer Row: Socials on left, Buttons on right */}
                    <div className="hero-footer-row animate-fade-up">
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

            <div className="hero-background">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={[5]}
                    lineDistance={[5]}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                    linesGradient={['#DC2626', '#8B0000', 'rgba(0, 0, 0, 1)']}
                />
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
