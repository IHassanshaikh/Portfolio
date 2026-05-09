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
        desc: 'Custom workflows and automated systems powered by AI to streamline business processes.',
        icon: <FiCpu />
    },
    {
        title: 'Chatbot & AI Assistant Development',
        desc: 'Intelligent conversational agents, voice call bots, and AI receptionists for businesses.',
        icon: <FiMessageSquare />
    },
    {
        title: 'API Development & Integration',
        desc: 'Secure and efficient server-side logic and third-party API connectivity.',
        icon: <FiSettings />
    },
    {
        title: 'Workflow Automation Systems',
        desc: 'Automating repetitive tasks through custom integrations and intelligent logic.',
        icon: <FiTrendingUp />
    },
    {
        title: 'E-commerce Website Development',
        desc: 'Modern online stores built on Shopify, WordPress, or custom platforms.',
        icon: <FiShoppingBag />
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
                    <a href="#contact" className="btn-service-cta">
                        Start a Project
                    </a>
                </div>
            </div>
        </section>
    );
}
