"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Transform scroll to a numeric width value (80 -> 65)
    // Increased range to 800px so it reacts over a longer scroll distance
    const widthRaw = useTransform(scrollY, [0, 800], [80, 65]);

    // Softer spring physics for a very smooth, fluid inertia feel
    const smoothWidth = useSpring(widthRaw, {
        stiffness: 50,
        damping: 20,
        mass: 1
    });

    // Convert numeric value back to percentage string
    const width = useTransform(smoothWidth, isNaN => `${isNaN}%`);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Work', path: '/work' },
        { name: 'CV', path: '/cv' },
        { name: 'Profile', path: '/profile' }
    ];

    return (
        <header className="navbar-container">
            <motion.nav
                className="navbar-capsule"
                style={{ width }}
            >
                {/* Logo */}
                <Link href="/" className="navbar-logo">
                    <img src="/assets/logos/logomain.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                </Link>

                {/* Desktop Navigation Links */}
                <ul className="navbar-links desktop-only">
                    {navItems.map((item) => (
                        <motion.li key={item.name} className="nav-item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href={item.path}
                                className="nav-link"
                            >
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Call to Action - Desktop Only */}
                <div className="navbar-actions desktop-only">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="#contact" className="btn btn-contact-nav">
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`mobile-toggle ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Overlay Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="mobile-nav-links">
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.name}
                                        onClick={() => setIsOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Link href={item.path}>{item.name}</Link>
                                    </motion.li>
                                ))}
                                <li onClick={() => setIsOpen(false)}>
                                    <Link href="#contact" className="mobile-contact-btn">
                                        Contact Me
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
}
