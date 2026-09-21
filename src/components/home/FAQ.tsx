'use client';
import React, { useState } from 'react';
import './FAQ.css';
import { FiPlus } from 'react-icons/fi';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "I offer full-stack web development (React, Next.js, Node.js), WordPress & WooCommerce sites, Shopify stores, AI automation solutions, AI voice agents & calling systems, API integrations, and workflow automation for businesses."
    },
    {
        question: "Do you build AI-powered solutions?",
        answer: "Yes — I build AI chatbots, voice agents for sales and support, automated lead qualification systems, and agentic workflows using OpenAI, Python, and custom APIs. HumanCall is one of my AI products."
    },
    {
        question: "Do you work with fixed prices or hourly?",
        answer: "I offer both. For well-defined projects like a landing page or Shopify store, I prefer fixed pricing. For ongoing development, maintenance, or undefined scopes, hourly rates are available."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "A standard landing page or WordPress site takes 3–7 days. A full eCommerce store or custom web app takes 2–4 weeks depending on scope. AI automation projects vary based on complexity."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes — I offer 30 days of free support after launch to handle bugs and adjustments. Long-term maintenance, hosting management, and retainer packages are also available."
    },
    {
        question: "Can you work with my existing team or codebase?",
        answer: "Absolutely. I'm comfortable using Git, Jira, Slack, and other collaboration tools. I can integrate seamlessly with your existing workflow, whether it's a React codebase, WordPress environment, or a Shopify theme."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2>Frequently Asked <span className="text-red">Questions</span></h2>
                    <p className="text-muted">Answers to common queries about working with me.</p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="faq-icon"><FiPlus /></span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="faq-action">
                    <p className="faq-action-text">Still have questions?</p>
                    <a href="https://wa.me/923101022778" target="_blank" rel="noopener noreferrer" className="btn-faq-cta">
                        Contact Me on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
