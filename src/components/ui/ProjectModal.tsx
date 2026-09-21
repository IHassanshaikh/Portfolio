'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiExternalLink, FiShare2, FiCheck, FiCpu, FiShield, FiZap, FiBarChart2 } from 'react-icons/fi';
import './ProjectModal.css';

export interface ProjectData {
    id?: string;
    title: string;
    desc: string;
    image: string;
    tags: string[];
    liveLink?: string;
    category?: string;
}

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [copied, setCopied] = useState(false);

    if (!project) return null;

    const isLive = project.liveLink && project.liveLink !== 'private';

    const handleCopy = () => {
        if (isLive) {
            navigator.clipboard.writeText(project.liveLink!);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="pm-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="pm-modal"
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="pm-header">
                            <div>
                                {project.category && <span className="pm-category">{project.category}</span>}
                                <h2 className="pm-title">{project.title}</h2>
                            </div>
                            <button onClick={onClose} className="pm-close-btn" aria-label="Close project modal">
                                <FiX />
                            </button>
                        </div>

                        {/* Image Showcase */}
                        <div className="pm-image-wrapper">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1200}
                                height={675}
                                className="pm-hero-img"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/assets/projects/placeholder.webp';
                                }}
                            />
                            <div className="pm-image-overlay" />
                        </div>

                        {/* Content Body */}
                        <div className="pm-body">
                            {/* Action Row */}
                            <div className="pm-actions">
                                {isLive ? (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pm-btn pm-btn-primary"
                                    >
                                        Visit Live Demo <FiExternalLink />
                                    </a>
                                ) : (
                                    <span className="pm-btn pm-btn-private">
                                        Private Enterprise System
                                    </span>
                                )}

                                {isLive && (
                                    <button onClick={handleCopy} className="pm-btn pm-btn-outline">
                                        {copied ? <><FiCheck /> Copied!</> : <><FiShare2 /> Share</>}
                                    </button>
                                )}
                            </div>

                            {/* Impact Metrics Banner */}
                            <div className="pm-metrics-grid">
                                <div className="pm-metric-card">
                                    <FiZap className="pm-metric-icon" />
                                    <div>
                                        <span className="pm-metric-val">High Speed</span>
                                        <span className="pm-metric-lbl">Sub-second Latency</span>
                                    </div>
                                </div>
                                <div className="pm-metric-card">
                                    <FiShield className="pm-metric-icon" />
                                    <div>
                                        <span className="pm-metric-val">Enterprise Security</span>
                                        <span className="pm-metric-lbl">JWT & Encrypted API</span>
                                    </div>
                                </div>
                                <div className="pm-metric-card">
                                    <FiBarChart2 className="pm-metric-icon" />
                                    <div>
                                        <span className="pm-metric-val">Scalable Architecture</span>
                                        <span className="pm-metric-lbl">Multi-tenant / Cloud</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study Details */}
                            <div className="pm-section">
                                <h3 className="pm-section-title">Overview & Impact</h3>
                                <p className="pm-text">{project.desc}</p>
                            </div>

                            <div className="pm-section">
                                <h3 className="pm-section-title">Technical Architecture & Tools</h3>
                                <div className="pm-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="pm-tag">
                                            <FiCpu className="pm-tag-icon" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
