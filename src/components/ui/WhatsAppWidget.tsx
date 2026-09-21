'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="whatsapp-widget-container">
            <AnimatePresence>
                {isHovered && (
                    <motion.div 
                        className="whatsapp-tooltip"
                        initial={{ opacity: 0, x: 10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="whatsapp-status-dot" />
                        <span>Chat on WhatsApp</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href="https://wa.me/923101022778"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="whatsapp-pulse-ring" />
                <FaWhatsapp className="whatsapp-icon" />
            </motion.a>
        </div>
    );
}
