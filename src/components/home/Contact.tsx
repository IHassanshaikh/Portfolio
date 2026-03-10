'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    return (
        <footer className="contact-footer">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Let's <span className="text-red">Talk.</span></h2>
                    <p className="contact-subtitle">Have a project in mind? Let's build something extraordinary.</p>
                </div>

                <div className="contact-links">
                    <a href="mailto:hassanshaikh9717@gmail.com" className="contact-link">
                        <FaEnvelope />
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/hassan-shaikh-618966253" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/mhassan9717" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.instagram.com/mhassan9717" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Hassan. All rights reserved.</p>
                    <p>Designed with <span className="text-red">Passion</span> & code.</p>
                </div>
            </div>
            {/* Holographic grid overlay */}
            <div className="holo-grid"></div>
        </footer>
    );
}
