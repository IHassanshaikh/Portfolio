'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

export default function CVPage() {
    return (
        <main className="cv-page" style={{ background: 'rgb(var(--background))', minHeight: '100vh', padding: '10rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
                        >
                            Curriculum <span className="text-red">Vitae</span>
                        </motion.h1>
                        <p className="text-muted">A comprehensive overview of my professional experience and skills.</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                        style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                    >
                        <FiDownload /> Download PDF
                    </motion.button>
                </header>

                <div className="cv-content" style={{ display: 'grid', gap: '4rem' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(var(--border), 0.5)', paddingBottom: '1rem', marginBottom: '2rem' }}>Experience</h2>
                        <div style={{ display: 'grid', gap: '2.5rem' }}>
                            {[
                                { role: 'Senior Full Stack Developer', company: 'InnovateTech Solutions', date: '2023 - Present' },
                                { role: 'Frontend Engineer', company: 'Creative Digital Agency', date: '2021 - 2023' },
                                { role: 'Junior Web Developer', company: 'StartUp Hub', date: '2019 - 2021' }
                            ].map((job, i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.2rem' }}>{job.role}</h3>
                                        <span className="text-red" style={{ fontWeight: 600 }}>{job.date}</span>
                                    </div>
                                    <span className="text-muted">{job.company}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(var(--border), 0.5)', paddingBottom: '1rem', marginBottom: '2rem' }}>Education</h2>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.2rem' }}>B.S. in Computer Science</h3>
                                <span className="text-red" style={{ fontWeight: 600 }}>2015 - 2019</span>
                            </div>
                            <span className="text-muted">University of Technology</span>
                        </div>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(var(--border), 0.5)', paddingBottom: '1rem', marginBottom: '2rem' }}>Skills</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL'].map(skill => (
                                <span key={skill} style={{ background: 'rgba(var(--surface), 0.5)', padding: '0.5rem 1.25rem', borderRadius: '99px', border: '1px solid rgba(var(--border), 0.3)', fontSize: '0.9rem' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
