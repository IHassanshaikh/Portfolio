'use client';
import React, { useState } from 'react';
import './WorkPage.css';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Quantum Dashboard',
        category: 'Web',
        desc: 'A real-time data visualization platform for quantum computing simulations.',
        tags: ['Next.js', 'Three.js', 'WebSockets'],
        image: '/assets/projects/p1.jpg'
    },
    {
        id: 2,
        title: 'Lumina Mobile',
        category: 'Mobile',
        desc: 'A wellness and mindfulness app with custom ambient soundscapes.',
        tags: ['React Native', 'Firebase', 'Expo'],
        image: '/assets/projects/p2.jpg'
    },
    {
        id: 3,
        title: 'Nexus Brand Identity',
        category: 'Design',
        desc: 'Complete brand redesign for a cutting-edge networking startup.',
        tags: ['Figma', 'Illustrator', 'Motion Design'],
        image: '/assets/projects/p3.jpg'
    },
    {
        id: 4,
        title: 'Aura E-commerce',
        category: 'Web',
        desc: 'A luxury fashion store with a focus on immersive editorial layouts.',
        tags: ['Shopify', 'React', 'GSAP'],
        image: '/assets/projects/p4.jpg'
    }
];

const categories = ['All', 'Web', 'Mobile', 'Design'];

export default function WorkPage() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="work-page">
            <section className="work-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Selected <span className="glow-text">Work</span>
                    </motion.h1>
                    <p className="text-muted">A collection of projects where design meets functionality.</p>
                </div>
            </section>

            <div className="container">
                <div className="filter-container">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="work-grid-unique">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="work-card-unique"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="work-card-image">
                                    {/* Placeholder for project image */}
                                    <div style={{ width: '100%', height: '100%', background: 'rgba(var(--primary), 0.05)' }}></div>
                                </div>
                                <div className="work-card-info">
                                    <span className="work-card-category">{project.category}</span>
                                    <h3 className="work-card-title">{project.title}</h3>
                                    <p className="work-card-desc">{project.desc}</p>
                                    <div className="work-card-tags">
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="work-card-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
