'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiZoomIn } from 'react-icons/fi';
import './page.css';

const eventImages: Array<{id: number; src: string; title: string; colSpan?: number; description?: string}> = [
    { id: 1, src: '/assets/events/KHI next.jpeg', title: 'KHI NEXT Tech Event', description: 'Attended the Google-backed KHI NEXT event in Karachi, connecting with local tech leaders and developers.', colSpan: 2 },
    { id: 2, src: '/assets/events/Mindtrek.jpeg', title: 'MindTrek 2.0', description: 'Core Team Member and Organizer for MindTrek 2.0 at Liaquat Memorial Auditorium, focusing on technology and leadership.', colSpan: 1 },
    { id: 3, src: '/assets/events/Microsoft studetns ambasador meetup.jpeg', title: 'Microsoft Student Ambassador Meetup', description: 'Participated as a Microsoft Student Ambassador Team Member.', colSpan: 1 },
    { id: 4, src: '/assets/events/CEO summit.jpeg', title: 'CEO Summit Karachi', description: 'Attended the CEO Summit in Karachi, networking with top business leaders and entrepreneurs.', colSpan: 2 },
    { id: 5, src: '/assets/events/CWA hackathon.jpeg', title: 'Code; Without Barriers (CWA) Hackathon', description: 'Volunteered from the Microsoft Team at the CWA Hackathon, empowering inclusive innovations in tech.', colSpan: 2 },
    { id: 6, src: '/assets/events/Ai baithak.jpeg', title: 'AI Baithak: Beyond ChatGPT', description: 'Served as Team Lead for the AI Baithak event exploring the future of artificial intelligence.', colSpan: 1 },
    { id: 7, src: '/assets/events/aptech vision.jpeg', title: 'Aptech Vision 2026', description: 'Attended the Aptech Vision tech exhibition at Pearl-Continental Hotel Karachi.', colSpan: 1 },
    { id: 8, src: '/assets/events/collaborat26.jpeg', title: 'Collaborate 2026', description: 'Attended the Opti Sphere Network Collaborate 2026 event.', colSpan: 2 },
    { id: 9, src: '/assets/events/IUCORE.jpeg', title: 'Iqra University Core Team', description: 'Proud part of the IU Core team contributing to campus tech initiatives.', colSpan: 1 },
    { id: 10, src: '/assets/events/iu core.jpeg', title: 'IU Core Organizing Team', description: 'Working with the Iqra University core team to manage tech events.', colSpan: 1 },
    { id: 11, src: '/assets/events/iucore pitch.jpeg', title: 'IU Core Pitch Session', description: 'Pitching ideas at an Iqra University Core team session.', colSpan: 2 }
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof eventImages[0] | null>(null);

    return (
        <main className="gallery-page">
            <div className="gallery-header">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="gallery-title"
                >
                    Event <span className="highlight">Gallery</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="gallery-subtitle"
                >
                    Moments captured from speaking engagements, tech events, and community meetups.
                </motion.p>
            </div>

            {eventImages.length === 0 ? (
                <div className="gallery-empty">
                    <p>No events to display yet. Upload some pictures to get started!</p>
                </div>
            ) : (
                <div className="gallery-grid">
                    {eventImages.map((image, i) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`gallery-item span-${image.colSpan || 1}`}
                            onClick={() => setSelectedImage(image)}
                            whileHover={{ y: -5 }}
                        >
                            <div className="image-wrapper">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <FiZoomIn size={24} />
                                        <span>{image.title}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="lightbox-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                                <FiX size={24} />
                            </button>
                            <div className="lightbox-image-container">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    sizes="100vw"
                                />
                            </div>
                            <div className="lightbox-caption">
                                <h3>{selectedImage.title}</h3>
                                {selectedImage.description && <p style={{ fontSize: '14px', marginTop: '8px', color: 'rgba(255,255,255,0.8)' }}>{selectedImage.description}</p>}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
