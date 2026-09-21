'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
    FiSearch, FiHome, FiBriefcase, FiCode, FiFileText, FiUser, FiImage, 
    FiMail, FiMessageSquare, FiDownload, FiSun, FiMoon, FiCheck, FiCornerDownLeft 
} from 'react-icons/fi';
import { useTheme } from 'next-themes';
import './CommandPalette.css';

interface CommandItem {
    id: string;
    title: string;
    category: 'Navigation' | 'Actions' | 'Specialties';
    icon: React.ReactNode;
    action: () => void;
}

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [copied, setCopied] = useState(false);
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    // Toggle via Cmd+K or Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const commands: CommandItem[] = [
        // Navigation
        { id: 'nav-home', title: 'Go to Home', category: 'Navigation', icon: <FiHome />, action: () => router.push('/') },
        { id: 'nav-exp', title: 'Go to Experience', category: 'Navigation', icon: <FiBriefcase />, action: () => router.push('/experience') },
        { id: 'nav-work', title: 'Go to Work Portfolio', category: 'Navigation', icon: <FiCode />, action: () => router.push('/work') },
        { id: 'nav-cv', title: 'Go to CV / Resume', category: 'Navigation', icon: <FiFileText />, action: () => router.push('/cv') },
        { id: 'nav-profile', title: 'Go to Profile', category: 'Navigation', icon: <FiUser />, action: () => router.push('/profile') },
        { id: 'nav-gallery', title: 'Go to Event Gallery', category: 'Navigation', icon: <FiImage />, action: () => router.push('/gallery') },

        // Actions
        {
            id: 'act-email',
            title: 'Copy Email Address (hassanshaikh9717@gmail.com)',
            category: 'Actions',
            icon: copied ? <FiCheck /> : <FiMail />,
            action: () => {
                navigator.clipboard.writeText('hassanshaikh9717@gmail.com');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        },
        {
            id: 'act-wa',
            title: 'Chat on WhatsApp (+92 310 1022778)',
            category: 'Actions',
            icon: <FiMessageSquare />,
            action: () => window.open('https://wa.me/923101022778', '_blank')
        },
        {
            id: 'act-resume',
            title: 'Download Resume (Hassan_Shaikh_Resume.pdf)',
            category: 'Actions',
            icon: <FiDownload />,
            action: () => {
                const link = document.createElement('a');
                link.href = '/Hassan_Shaikh_Resume.pdf';
                link.download = 'Hassan_Shaikh_Resume.pdf';
                link.click();
            }
        },
        {
            id: 'act-theme',
            title: `Switch Theme to ${theme === 'light' ? 'Dark' : 'Light'} Mode`,
            category: 'Actions',
            icon: theme === 'light' ? <FiMoon /> : <FiSun />,
            action: () => setTheme(theme === 'light' ? 'dark' : 'light')
        },

        // Specialties
        { id: 'spec-ai', title: 'Filter: AI Automation Projects', category: 'Specialties', icon: <FiCode />, action: () => router.push('/category/ai-automation') },
        { id: 'spec-saas', title: 'Filter: SaaS Platforms', category: 'Specialties', icon: <FiCode />, action: () => router.push('/category/saas-platforms') },
        { id: 'spec-ecom', title: 'Filter: E-Commerce Projects', category: 'Specialties', icon: <FiCode />, action: () => router.push('/category/e-commerce') },
        { id: 'spec-agency', title: 'Filter: Digital Agency Projects', category: 'Specialties', icon: <FiCode />, action: () => router.push('/category/digital-agencies') }
    ];

    const filtered = commands.filter((cmd) =>
        cmd.title.toLowerCase().includes(search.toLowerCase()) ||
        cmd.category.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    const handleSelect = (cmd: CommandItem) => {
        cmd.action();
        setIsOpen(false);
        setSearch('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % filtered.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
        } else if (e.key === 'Enter' && filtered[selectedIndex]) {
            e.preventDefault();
            handleSelect(filtered[selectedIndex]);
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="cmd-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        className="cmd-modal"
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="cmd-search-bar">
                            <FiSearch className="cmd-search-icon" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type a command or search..."
                                className="cmd-input"
                                autoFocus
                            />
                            <span className="cmd-esc-badge">ESC</span>
                        </div>

                        {/* List */}
                        <div className="cmd-list">
                            {filtered.length === 0 ? (
                                <div className="cmd-empty">No commands found.</div>
                            ) : (
                                filtered.map((cmd, idx) => (
                                    <div
                                        key={cmd.id}
                                        className={`cmd-item ${idx === selectedIndex ? 'selected' : ''}`}
                                        onClick={() => handleSelect(cmd)}
                                        onMouseEnter={() => setSelectedIndex(idx)}
                                    >
                                        <div className="cmd-item-left">
                                            <span className="cmd-item-icon">{cmd.icon}</span>
                                            <span className="cmd-item-title">{cmd.title}</span>
                                        </div>
                                        <div className="cmd-item-right">
                                            <span className="cmd-item-category">{cmd.category}</span>
                                            {idx === selectedIndex && <FiCornerDownLeft className="cmd-enter-icon" />}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="cmd-footer">
                            <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
                            <span><kbd>↵</kbd> to select</span>
                            <span><kbd>ESC</kbd> to exit</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
