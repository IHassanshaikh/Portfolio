"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
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

                {/* Navigation Links */}
                <ul className="navbar-links">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Experience', path: '/experience' },
                        { name: 'Work', path: '/work' },
                        { name: 'CV', path: '/cv' },
                        { name: 'Profile', path: '/profile' }
                    ].map((item) => (
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

                {/* Call to Action */}
                <div className="navbar-actions">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="#contact" className="btn btn-contact-nav">
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </motion.nav>
        </header>
    );
}
