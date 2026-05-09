'use client';
import React from 'react';
import './ProjectsPreview.css';
import { BsArrowRight } from 'react-icons/bs';

const projects = [
    {
        id: 1,
        title: "Zero-Day Threat Detection",
        category: "AI & Cybersecurity",
        tags: ["Python", "Flask", "ML/Isolation Forest"],
        color: "#EF4444",
    },
    {
        id: 2,
        title: "Luxe Gym Experience",
        category: "High-Performance UI",
        tags: ["Next.js", "Framer Motion", "TypeScript"],
        color: "#3B82F6",
    },
    {
        id: 3,
        title: "Digital Solutions Agency",
        category: "CMS Development",
        tags: ["WordPress", "PHP", "Custom Plugins"],
        color: "#10B981",
    },
    {
        id: 4,
        title: "CoinBand Creative",
        category: "Creative Frontend",
        tags: ["React", "GSAP", "ScrollTrigger"],
        color: "#F59E0B",
    }
];

export default function ProjectsPreview() {
    return (
        <section className="section-padding" id="work">
            <div className="projects-container">
                <div className="projects-header">
                    <div>
                        <h2 className="projects-title">Selected Work</h2>
                        <p className="projects-subtitle">A curated collection of my recent projects.</p>
                    </div>
                    <a href="#" className="view-all-link">
                        View All Projects <BsArrowRight />
                    </a>
                </div>

                <div className="normal-projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="normal-project-card">
                            <div className="card-image-wrapper" style={{ background: '#0a0a0a' }}>
                                <div className="card-image-placeholder" style={{ color: project.color }}>
                                    {project.id}
                                </div>
                            </div>
                            <div className="card-content">
                                <span className="card-category">{project.category}</span>
                                <h3 className="card-title">{project.title}</h3>
                                <div className="card-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="card-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
