'use client';
import React from 'react';
import './About.css';
import { FiMove, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
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
                        I'm Muhammad Hassan — a Full-Stack & AI Automation Developer at TechTide Co., building practical web solutions, intelligent automations, and digital experiences that solve real business problems. I work across React, Next.js, WordPress, WooCommerce, Shopify, Python, and API integrations.
                    </p>

                    <p className="about-desc">
                        I've built AI-focused products like HumanCall, an AI voice automation platform for sales and support, and SAFE HER, an AI-powered harassment reporting system pitched at NIC Karachi. Whether it's a business website, eCommerce platform, or an agentic workflow — I enjoy taking ideas from concept to a working product.
                    </p>

                    <p className="about-desc">
                        With 50+ projects delivered and strong experience in full-stack development, AI automation, and cloud hosting, I focus on shipping clean, scalable solutions that support real users and growing businesses.
                    </p>

                    <div className="about-socials">
                        <a href="https://www.linkedin.com/in/hassan-shaikh-618966253" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><FiLinkedin /></a>
                        <a href="https://github.com/IHassanshaikh" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><FiGithub /></a>
                        <a href="https://www.instagram.com/hassan.techlife/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><FiInstagram /></a>
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
                                    src="/assets/images/img4.webp"
                                    alt="Hassan at work"
                                    width={200}
                                    height={350}
                                    style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
                                    priority={false}
                                    sizes="200px"
                                />
                            </div>
                            {/* Image 2 */}
                            <div className="carousel-item item-2">
                                <Image
                                    src="/assets/images/img2.webp"
                                    alt="Hassan professional"
                                    width={200}
                                    height={350}
                                    style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
                                    priority={false}
                                    sizes="200px"
                                />
                            </div>
                            {/* Image 3 */}
                            <div className="carousel-item item-3">
                                <Image
                                    src="/assets/events/Ai baithak.jpeg"
                                    alt="Ai baithak"
                                    width={200}
                                    height={350}
                                    style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                                    priority={false}
                                    sizes="200px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
