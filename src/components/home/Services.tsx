'use client';
import React from 'react';
import './Services.css';
import { FiCode, FiCpu, FiMessageSquare, FiTrendingUp, FiShoppingBag, FiGlobe, FiDatabase, FiSettings } from 'react-icons/fi';

const services = [
    {
        title: 'Full-Stack Web Development',
        desc: 'Building high-performance, scalable web applications using React, Next.js, and Node.js.',
        icon: <FiCode />
    },
    {
        title: 'AI Automation Solutions',
        desc: 'Custom workflows, AI voice agents, and automated systems powered by AI to streamline business processes.',
        icon: <FiCpu />
    },
    {
        title: 'Chatbot & AI Assistant Development',
        desc: 'Intelligent conversational agents, voice call bots, and AI receptionists for businesses.',
        icon: <FiMessageSquare />
    },
    {
        title: 'WordPress & WooCommerce',
        desc: 'Custom WordPress websites and WooCommerce stores with plugins, themes, and performance optimization.',
        icon: <FiGlobe />
    },
    {
        title: 'Shopify Development',
        desc: 'Complete Shopify store setup, theme customization, and conversion-optimized eCommerce experiences.',
        icon: <FiShoppingBag />
    },
    {
        title: 'API Development & Integration',
        desc: 'Secure and efficient server-side logic and third-party API connectivity.',
        icon: <FiSettings />
    },
    {
        title: 'Workflow Automation Systems',
        desc: 'Automating repetitive tasks through custom integrations, AI pipelines, and intelligent logic.',
        icon: <FiTrendingUp />
    },
    {
        title: 'Cloud Hosting & Deployment',
        desc: 'VPS setup, deployment pipelines, and server management for reliable, scalable infrastructure.',
        icon: <FiDatabase />
    }
];

export default function Services() {
    return (
        <section className="services-section">
            <div className="container">
                <div className="services-header">
                    <h2>My <span className="text-red">Services</span></h2>
                    <p className="text-muted">Comprehensive solutions for your digital needs.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-action">
                    <a href="https://wa.me/923101022778" target="_blank" rel="noopener noreferrer" className="btn-service-cta">
                        Start a Project
                    </a>
                </div>
            </div>
        </section>
    );
}
