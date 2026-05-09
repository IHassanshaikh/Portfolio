'use client';
import React, { useState } from 'react';
import './FAQ.css';
import { FiPlus } from 'react-icons/fi';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "I specialize in full-stack web development, including frontend design, backend API development, and database management."
    },
    {
        question: "Do you work with fixed prices or hourly?",
        answer: "I offer both. For well-defined projects, I prefer fixed pricing. For ongoing maintenance or undefined scopes, hourly is available."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "It depends on the project scope. A standard landing page takes 3-5 days, while complex web apps can take 2-4 weeks."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes! I offer 30 days of free support after launch to ensure everything runs smoothly. Long-term maintenance packages are also available."
    },
    {
        question: "Can you work with my existing team?",
        answer: "Absolutely. I'm comfortable using Git, Jira, and other collaboration tools to integrate seamlessly with your current workflow."
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
                    <p className="text-muted">Answers to common queries.</p>
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
                    <a href="#contact" className="btn-faq-cta">
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
}
