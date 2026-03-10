'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="contact-footer">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Let's <span className="text-red">Talk.</span></h2>
                    <p className="contact-subtitle">Have a project in mind? Let's build something extraordinary.</p>
                </div>

                <div className="contact-links">
                    <a href="mailto:hassan@example.com" className="contact-link">
                        <FaEnvelope />
                        <span>Email</span>
                    </a>
                    <a href="https://linkedin.com/in/hassan-shaikh-618966253" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/hassan-shaikh" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                    <a href="https://twitter.com/hassan" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaTwitter />
                        <span>Twitter</span>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Hassan Shaikh. All rights reserved.</p>
                    <p>Designed with <span className="text-red">Passion</span> & code.</p>
                </div>
            </div>
            {/* Holographic grid overlay */}
            <div className="holo-grid"></div>
        </footer>
    );
}
