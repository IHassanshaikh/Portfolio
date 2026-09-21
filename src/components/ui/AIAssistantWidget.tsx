'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiUser } from 'react-icons/fi';
import { BsStars, BsRobot } from 'react-icons/bs';
import './AIAssistantWidget.css';

interface Message {
    id: string;
    sender: 'user' | 'bot';
    text: string;
    timestamp: string;
}

const KNOWLEDGE_BASE = {
    bio: "Muhammad Hassan Shaikh is a Full-Stack Developer & AI Automation Engineer based in Karachi, Pakistan. He has delivered 50+ projects globally, specializing in scalable web systems, SaaS platforms, and AI-powered workflows.",
    skills: "Hassan's core stack includes React, Next.js, TypeScript, Python, Node.js, FastAPI, OpenAI, LangChain, Tailwind CSS, PostgreSQL, MongoDB, Docker, WordPress, and Shopify.",
    services: "Hassan offers Full-Stack Web Development, Custom SaaS Platform Engineering, AI Chatbot & Agent Development, Business Process Automation, and High-Conversion E-Commerce Stores.",
    availability: "Hassan is currently available for freelance projects, technical consultation, and high-impact full-time or contract roles.",
    contact: "You can reach Hassan via email at hassanshaikh9717@gmail.com or on WhatsApp at +92 310 1022778.",
    projects: "Hassan has built projects like Human Call AI (LLM customer service agent), SMS.bemydev (telecom bulk messaging portal), Shapio (E-Commerce fashion platform), TideTech Digital Agency, and Coinband Web3 UI."
};

const INITIAL_PROMPTS = [
    "What is Hassan's tech stack?",
    "Is Hassan available for freelance?",
    "Tell me about Hassan's AI projects",
    "How can I contact Hassan?"
];

export default function AIAssistantWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'bot',
            text: "👋 Hi! I'm Hassan's AI Assistant. Ask me anything about his skills, projects, stack, or availability!",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const getAIResponse = (query: string): string => {
        const lower = query.trim().toLowerCase();
        
        // 1. Greetings & Chit-chat
        const greetings = ['hi', 'hello', 'hey', 'hy', 'hlo', 'helo', 'howdy', 'sup', 'greetings', 'good morning', 'good evening', 'good afternoon'];
        if (greetings.some(g => lower === g || lower.startsWith(g + ' ') || lower.endsWith(' ' + g))) {
            return "👋 Hello! Great to meet you. I'm Hassan's AI Assistant. How can I help you today? You can ask me about his tech stack, AI projects, services, or how to get in touch for a project!";
        }

        if (lower.includes('how are you') || lower.includes('how r u') || lower.includes("what's up") || lower.includes('wbu')) {
            return "I'm doing great, thank you for asking! 🤖 Ready to help you explore Hassan's work or discuss potential project collaborations. What are you looking to build?";
        }

        if (lower.includes('thank') || lower.includes('thanks') || lower.includes('thx') || lower.includes('ty')) {
            return "You're very welcome! 😊 Let me know if you need anything else or want to connect directly with Hassan.";
        }

        // 2. Services & Capabilities
        if (lower.includes('service') || lower.includes('offer') || lower.includes('build') || lower.includes('website') || lower.includes('app') || lower.includes('create') || lower.includes('develop')) {
            return `${KNOWLEDGE_BASE.services} Do you have a specific project in mind that you'd like to discuss?`;
        }

        // 3. Rates & Pricing
        if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('budget') || lower.includes('charge') || lower.includes('how much')) {
            return "Hassan offers flexible project-based pricing and hourly rates depending on project scope and complexity. Reach out via WhatsApp (+92 310 1022778) or Email (hassanshaikh9717@gmail.com) for a free custom quote!";
        }

        // 4. Tech Stack & Skills
        if (lower.includes('stack') || lower.includes('skill') || lower.includes('tech') || lower.includes('language') || lower.includes('react') || lower.includes('next') || lower.includes('python') || lower.includes('node')) {
            return `${KNOWLEDGE_BASE.skills} Hassan builds pixel-perfect, scalable web apps and high-performance backend systems.`;
        }

        // 5. Availability & Freelance
        if (lower.includes('freelance') || lower.includes('available') || lower.includes('hire') || lower.includes('work') || lower.includes('full-time') || lower.includes('contract')) {
            return `${KNOWLEDGE_BASE.availability} You can message him directly on WhatsApp or Email to get started immediately!`;
        }

        // 6. Experience & Project Count
        if (lower.includes('experience') || lower.includes('years') || lower.includes('many project') || lower.includes('portfolio') || lower.includes('delivered')) {
            return "Hassan has over 4+ years of hands-on software development experience and has successfully delivered 50+ projects globally across E-Commerce, SaaS, AI Automation, Healthcare, and FinTech.";
        }

        // 7. AI & Bot Work
        if (lower.includes('ai') || lower.includes('bot') || lower.includes('automation') || lower.includes('llm') || lower.includes('openai') || lower.includes('langchain')) {
            return `${KNOWLEDGE_BASE.projects} He builds custom AI agents, RAG systems, and LLM integrations for business automation.`;
        }

        // 8. Contact & Socials
        if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('whatsapp') || lower.includes('message') || lower.includes('number')) {
            return `${KNOWLEDGE_BASE.contact}`;
        }

        // 9. Location & Timezone
        if (lower.includes('where') || lower.includes('location') || lower.includes('country') || lower.includes('city') || lower.includes('timezone') || lower.includes('pakistan') || lower.includes('karachi')) {
            return "Hassan is based in Karachi, Pakistan (PKT, UTC+5), but works seamlessly with clients across global time zones including the US, UK, Europe, and Middle East.";
        }

        // 10. Bio & About
        if (lower.includes('who') || lower.includes('hassan') || lower.includes('about')) {
            return `${KNOWLEDGE_BASE.bio}`;
        }

        return `Thanks for asking! Hassan is a Full-Stack Developer & AI Automation Engineer with 50+ projects delivered. Feel free to ask about his skills, AI projects, rates, or click the WhatsApp button to message him directly!`;
    };

    const handleSend = (textToSend?: string) => {
        const query = textToSend || input;
        if (!query.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: query,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages((prev) => [...prev, userMsg]);
        if (!textToSend) setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const aiReply = getAIResponse(query);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'bot',
                text: aiReply,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            <div className="ai-widget-trigger-container">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="ai-widget-btn"
                    aria-label="Ask Hassan AI Assistant"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="ai-pulse-ring" />
                    {isOpen ? <FiX className="ai-icon" /> : <BsStars className="ai-icon" />}
                    <span className="ai-badge">Ask AI</span>
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="ai-chat-drawer"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                        {/* Header */}
                        <div className="ai-chat-header">
                            <div className="ai-chat-header-info">
                                <div className="ai-avatar">
                                    <BsRobot />
                                </div>
                                <div>
                                    <h4 className="ai-title">Ask Hassan AI</h4>
                                    <span className="ai-status">
                                        <span className="ai-status-dot" /> Online · AI Assistant
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="ai-close-btn" aria-label="Close AI Chat">
                                <FiX />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="ai-chat-body">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`ai-message-row ${msg.sender}`}
                                >
                                    <div className="ai-msg-avatar">
                                        {msg.sender === 'bot' ? <BsRobot /> : <FiUser />}
                                    </div>
                                    <div className="ai-msg-bubble">
                                        <p>{msg.text}</p>
                                        <span className="ai-msg-time">{msg.timestamp}</span>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ai-message-row bot">
                                    <div className="ai-msg-avatar"><BsRobot /></div>
                                    <div className="ai-msg-bubble typing-dots">
                                        <span /><span /><span />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Prompt Chips */}
                        {messages.length < 3 && (
                            <div className="ai-prompt-chips">
                                {INITIAL_PROMPTS.map((prompt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSend(prompt)}
                                        className="ai-chip"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Box */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="ai-chat-input-form"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask AI about Hassan..."
                                className="ai-chat-input"
                            />
                            <button type="submit" disabled={!input.trim()} className="ai-send-btn" aria-label="Send Message">
                                <FiSend />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
