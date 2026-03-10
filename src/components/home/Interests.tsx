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
                            <h3 className="card-title" style={{ color: '#DC2626' }}>RUNEAI ASSISTANT</h3>
                            <p className="card-desc">Struggling with a topic? Let AI build your roadmap.</p>
                        </div>
                    </div>

                    {/* Card 3: Spotify */}
                    <div className="interest-card">
                        <div className="spotify-header">
                            <BsSpotify size={20} />
                            Recent Favorite
                        </div>
                        <div className="card-content" style={{ maxWidth: '80%' }}>
                            <p className="card-desc" style={{ color: '#fff', fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                                "I'm listening to Another Story by Nicholas Hooper from the album Harry Potter..."
                            </p>
                        </div>
                        <div className="album-art">
                            {/* Placeholder for Vinyl effect */}
                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'linear-gradient(45deg, #333, #111)' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
