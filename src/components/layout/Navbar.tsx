'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiHome, FiBriefcase, FiCode, FiFileText, FiUser, FiMail } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/', icon: <FiHome /> },
        { name: 'Experience', path: '/experience', icon: <FiBriefcase /> },
        { name: 'Work', path: '/work', icon: <FiCode /> },
        { name: 'CV', path: '/cv', icon: <FiFileText /> },
        { name: 'Profile', path: '/profile', icon: <FiUser /> },
        { name: 'Contact Me', path: '#contact', icon: <FiMail /> }
    ];

    // For smooth width transition on scroll (Desktop only)
    const widthRaw = useTransform(scrollY, [0, 800], [80, 65]);
    const smoothWidth = useSpring(widthRaw, { stiffness: 50, damping: 20, mass: 1 });
    const width = useTransform(smoothWidth, (val) => `${val}%`);

    return (
        <>
            <header className="navbar-container desktop-only">
                <motion.nav
                    className="navbar-capsule"
                    style={{ width }}
                >
                    {/* Logo */}
                    <Link href="/" className="navbar-logo">
                        <Image
                            src="/assets/logos/logomain.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            style={{ height: '40px', width: 'auto' }}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation Links (First 5 items) */}
                    <ul className="navbar-links">
                        {navItems.slice(0, 5).map((item) => (
                            <motion.li key={item.name} className="nav-item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href={item.path}
                                    className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Call to Action - Desktop Only (Last item) */}
                    <div className="navbar-actions">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href={navItems[5].path} className="btn btn-contact-nav">
                                {navItems[5].name}
                            </Link>
                        </motion.div>
                    </div>
                </motion.nav>
            </header>

            {/* Mobile Dock - Bottom Floating */}
            <nav className="mobile-dock">
                <div className="mobile-dock-capsule">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path || (item.path.startsWith('#') && typeof window !== 'undefined' && window.location.hash === item.path);
                        
                        return (
                            <Link 
                                key={item.name} 
                                href={item.path} 
                                className={`mobile-dock-item ${isActive ? 'active' : ''}`}
                            >
                                <span className="dock-icon">{item.icon}</span>
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.span 
                                            className="dock-label"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: 'auto' }}
                                            exit={{ opacity: 0, width: 0 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                {isActive && (
                                    <motion.div 
                                        layoutId="dock-bg"
                                        className="dock-active-bg"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
