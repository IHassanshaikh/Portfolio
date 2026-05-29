'use client';
import React, { useState } from 'react';
import './WorkPage.css';
import { motion, AnimatePresence } from 'framer-motion';

import { specialtiesData } from '@/data/specialties';

// Flatten all projects from specialtiesData into a single array
const allProjects = specialtiesData.flatMap((specialty) => 
    specialty.projects.map((project, pIdx) => ({
        ...project,
        id: `${specialty.slug}-${pIdx}`,
        category: specialty.title, // Use specialty title as the category
    }))
);

const categories = ['All', ...specialtiesData.map(s => s.title)];

export default function WorkPage() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? allProjects
        : allProjects.filter(p => p.category === filter);

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
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="work-project-img"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/assets/projects/placeholder.jpg';
                                        }}
                                    />
                                </div>
                                <div className="work-card-info">
                                    <span className="work-card-category">{project.category}</span>
                                    <h3 className="work-card-title">
                                        {project.liveLink ? (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                        ) : (
                                            project.title
                                        )}
                                    </h3>
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
