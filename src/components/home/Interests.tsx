'use client';
import React from 'react';
import './Interests.css';
import { FiGithub, FiFigma, FiCode } from 'react-icons/fi';
import { BsSpotify } from 'react-icons/bs';

export default function Interests() {
    return (
        <section className="interests-section">
            <div className="container">
                <div className="interests-header">
                    <span className="interests-eyebrow">MY SITE</span>
                    <h2 className="interests-title">
                        Discover what keeps<br />
                        me <span>building daily</span>
                    </h2>
                </div>

                <div className="interests-grid">
                    {/* Card 1: Creative Stack */}
                    <div className="interest-card">
                        <div className="stack-icons">
                            <div className="stack-icon-box"><FiGithub /></div>
                            <div className="stack-icon-box"><FiFigma /></div>
                            <div className="stack-icon-box"><FiCode /></div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Creative Stack</h3>
                            <p className="card-desc">Tools and resources that power my workflow</p>
                        </div>
                    </div>

                    {/* Card 2: RuneAI Assistant */}
                    <div className="interest-card">
                        <div className="ai-mockup">
                            <div className="chat-bubble right">"Can you explain React hooks?"</div>
                            <div className="chat-bubble">I'll break down hooks and create a roadmap for you!</div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: 'rgb(var(--primary))' }}>RUNEAI ASSISTANT</h3>
                            <p className="card-desc">Struggling with a topic? Let AI build your roadmap.</p>
                        </div>
                    </div>

                    {/* Card 3: What I'm Learning (Clean & Premium) */}
                    <div className="interest-card learning-card">
                        <div className="learning-header">
                            <FiCode className="learning-icon" />
                            <span className="learning-label">Currently Learning</span>
                        </div>
                        
                        <div className="learning-content-box">
                            <h3 className="learning-main-title">Machine Learning & AI</h3>
                            
                            <ul className="learning-list">
                                <li className="learning-list-item">
                                    <span className="glow-dot dot-red"></span> Neural Networks
                                </li>
                                <li className="learning-list-item">
                                    <span className="glow-dot dot-white"></span> LangChain & LLMs
                                </li>
                                <li className="learning-list-item">
                                    <span className="glow-dot dot-muted"></span> Data Engineering
                                </li>
                            </ul>
                        </div>

                        <div className="learning-abstract-shape">
                            <div className="shape-ring"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
