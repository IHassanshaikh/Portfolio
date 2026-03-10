'use client';
import React from 'react';
import './IdeaExecution.css';
import { BsArrowRight } from 'react-icons/bs';

export default function IdeaExecution() {
    return (
        <section className="idea-execution-section">
            <div className="idea-content">
                <div className="idea-logo">
                    <img src="/assets/logos/logomain.png" alt="Logo" style={{ height: '80px', width: 'auto' }} />
                </div>

                <div className="idea-cta-wrapper">
                    <h2 className="idea-heading">
                        <span>FROM IDEA TO EXECUTION</span>
                        LET'S BUILD<br />SOMETHING REAL!
                    </h2>

                    {/* Rotating SVG Badge */}
                    <div className="rotating-badge">
                        <svg viewBox="0 0 100 100" width="150" height="150">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="11">
                                <textPath xlinkHref="#circle" className="badge-text" >
                                    OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

                <a href="mailto:contact@example.com" className="idea-btn">
                    Get in touch <BsArrowRight />
                </a>

                <div className="idea-footer-info">
                    <strong>Available for full-time roles and selective freelance projects.</strong>
                    <p>I focus on shipping clean, scalable web solutions that support real users and growing products.</p>
                </div>
            </div>
        </section>
    );
}
