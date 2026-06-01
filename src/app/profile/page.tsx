'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FiEdit2, FiPlus, FiArrowRight, FiEye, FiUsers, FiBarChart2,
    FiSearch, FiCheckCircle, FiGlobe, FiMail, FiGithub,
    FiPlusSquare, FiSend, FiMoreHorizontal, FiExternalLink, FiAward,
    FiBookmark, FiVideo, FiFileText, FiImage, FiMessageSquare, FiTrendingUp,
    FiLinkedin, FiFacebook, FiInstagram, FiCode, FiBriefcase, FiHeart,
    FiMapPin, FiCalendar
} from 'react-icons/fi';
import './ProfilePage.css';

export default function ProfilePage() {
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);
    const [isPostExpanded, setIsPostExpanded] = useState(false);
    return (
        <main className="profile-page-root">
            <div className="profile-container">
                {/* Main Content Column */}
                <div className="profile-main">

                    {/* Header Card */}
                    <div className="linkedin-card">
                        <div className="profile-banner-container">
                            <div style={{ width: '100%', height: '100%', backgroundImage: 'url("/assets/profile/cover.webp")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>


                            </div>
                        </div>
                        <div className="profile-avatar-overlap">
                            <div style={{ width: '100%', height: '100%', background: 'rgb(var(--surface))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <img src="/assets/profile/pfp.webp" alt="Muhammad Hassan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                            </div>
                        </div>
                        <div className="profile-main-info">
                            <div className="profile-name-section">
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                        <h2 className="profile-name-text">Hassan Shaikh</h2>

                                    </div>
                                    <p className="profile-headline-text">Full-Stack and AI Automation Developer at @TechtideLLC | BSCS Student</p>
                                    <div className="profile-location-info">
                                        <span>Karachi Division, Sindh, Pakistan</span>
                                        <span className="contact-info-link">Contact info</span>
                                    </div>
                                    <div className="github-link-row">
                                        <a href="https://github.com/IHassanshaikh" target="_blank" rel="noopener noreferrer">
                                            GitHub <FiExternalLink size={14} />
                                        </a>
                                    </div>
                                    <a href="#" className="connections-link">500+ connections</a>
                                </div>
                                <div style={{ textAlign: 'right', fontSize: '14px', fontWeight: 600 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'rgba(var(--foreground), 0.1)', borderRadius: '4px' }}></div>
                                        <span>Tech Tide LLC</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'rgba(var(--foreground), 0.1)', borderRadius: '4px' }}></div>
                                        <span>Iqra University (Official)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="header-actions">
                                <Link href="/work" className="action-pill primary">Projects</Link>
                                <Link href="/experience" className="action-pill secondary">Experience</Link>
                                <Link href="#education" className="action-pill secondary">Education</Link>
                                <Link href="/cv" className="action-pill tertiary">CV</Link>
                            </div>
                        </div>

                        {/* Info Boxes Row */}
                        <div className="info-boxes-row">
                            <div className="info-box accent-blue">
                                <div className="info-box-header">
                                    <FiBriefcase className="info-box-icon" />
                                    <h4>Open to work</h4>
                                </div>
                                <div className="info-box-content">
                                    <p className="info-box-title">Web Developer and Frontend Web Developer roles</p>
                                    <div className="info-box-tags">
                                        <span className="info-tag">Full-time</span>
                                        <span className="info-tag">Remote</span>
                                        <span className="info-tag">Contract</span>
                                    </div>
                                </div>
                                <span className="show-details">Show details</span>
                            </div>
                            <div className="info-box accent-green">
                                <div className="info-box-header">
                                    <FiHeart className="info-box-icon" />
                                    <h4>Open to volunteer</h4>
                                </div>
                                <div className="info-box-content">
                                    <p className="info-box-title">Science and Technology, Education</p>
                                    <div className="info-box-tags">
                                        <span className="info-tag">Mentoring</span>
                                        <span className="info-tag">Tech Support</span>
                                    </div>
                                </div>
                                <span className="show-details">Show details</span>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="linkedin-card card-padding">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 className="widget-title">About</h3>
                        </div>
                        <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgb(var(--foreground))' }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '12px' }}>
                                🚀 Final-Year BSCS Student | Full-Stack Web Developer | AI & Automation Enthusiast
                            </p>

                            {!isAboutExpanded ? (
                                <p>
                                    I’m a Final-Year BS Computer Science student at Iqra University Karachi, passionate about building innovative and impactful technology solutions...
                                    <span className="show-more" onClick={() => setIsAboutExpanded(true)}>see more</span>
                                </p>
                            ) : (
                                <div className="about-full-content">
                                    <p style={{ marginBottom: '12px' }}>
                                        I’m a Final-Year BS Computer Science student at Iqra University Karachi, passionate about building innovative and impactful technology solutions.
                                    </p>
                                    <p style={{ fontWeight: 600, marginBottom: '4px' }}>💻 Professional Experience:</p>
                                    <p style={{ marginBottom: '12px' }}>
                                        Currently working at Tide Tech as a Developer, focusing on web development and automation to create efficient, scalable solutions.
                                    </p>
                                    <p style={{ fontWeight: 600, marginBottom: '4px' }}>🛠️ Technical Skills:</p>
                                    <p style={{ marginBottom: '12px' }}>
                                        With growing expertise in Python and a strong background in full-stack web development (React, Next.js, Node.js). Enthusiastic about exploring AI automation and emerging technologies.
                                    </p>
                                    <p style={{ fontWeight: 600, marginBottom: '4px' }}>☕ Beyond Tech:</p>
                                    <p style={{ marginBottom: '12px' }}>
                                        A tea enthusiast and cricket lover, I believe in maintaining a healthy balance between work and play.
                                    </p>
                                    <p style={{ fontWeight: 600, marginBottom: '4px' }}>📢 Open to Opportunities:</p>
                                    <p>
                                        Always excited to connect with professionals, collaborate on projects, and explore opportunities in web development, AI automation, and software engineering.
                                    </p>
                                    <span className="show-more" onClick={() => setIsAboutExpanded(false)} style={{ display: 'block', marginTop: '12px' }}>see less</span>
                                </div>
                            )}

                            <div className="top-skills-box">
                                <h4><FiAward /> Top skills</h4>
                                <p className="top-skills-list">
                                    Agentic AI Development • Generative AI • Cloud Computing (VPS) • Machine Learning • Python • OpenAI API • React.js • Next.js
                                </p>
                                <FiArrowRight className="arrow-right" />
                            </div>
                        </div>
                    </div>


                    {/* Activity Section */}
                    <div className="linkedin-card card-padding" style={{ paddingBottom: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 className="widget-title">Activity</h3>
                        </div>

                        <div className="activity-filters">
                            <button className="filter-pill active">Activity on social media</button>
                        </div>

                        <div className="posts-list">
                            <div className="post-item" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                <div className="post-author-row" style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                                    <div className="post-avatar" style={{ background: 'url("/assets/profile/pfp.webp")', backgroundSize: 'cover', borderRadius: '50%', width: '40px', height: '40px' }}></div>
                                    <div>
                                        <p style={{ fontWeight: 600, fontSize: '13px', margin: 0 }}>Hassan Shaikh <span style={{ color: 'rgb(var(--muted))', fontWeight: 400 }}>• You</span></p>
                                        <p style={{ fontSize: '11px', color: 'rgb(var(--muted))', margin: '2px 0' }}>Full-Stack and AI Automation Developer at @TechtideLLC</p>
                                        <p style={{ fontSize: '11px', color: 'rgb(var(--muted))', margin: 0 }}>6mo • 🌎</p>
                                    </div>
                                </div>
                                <div className="post-content" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                                    <p style={{ fontWeight: 600, marginBottom: '8px' }}>REPRESENTING INNOVATION AT THE AI WRAPPER COMPETITION 2025!</p>
                                    {!isPostExpanded ? (
                                        <p style={{ marginBottom: '8px' }}>
                                            Thrilled to have presented our project "<strong>SAFE HER</strong>" an <strong>AI-BASED HARASSMENT REPORTING & EMOTIONAL SUPPORT BOT</strong> at the <strong>REGIONAL ROUND OF THE AI WRAPPER...</strong> <span className="show-more" onClick={() => setIsPostExpanded(true)} style={{ color: 'rgb(var(--muted))', cursor: 'pointer', fontWeight: 600 }}>see more</span>
                                        </p>
                                    ) : (
                                        <>
                                            <p style={{ marginBottom: '8px' }}>Thrilled to have presented our project "<strong>SAFE HER</strong>" an <strong>AI-BASED HARASSMENT REPORTING & EMOTIONAL SUPPORT BOT</strong> at the <strong>REGIONAL ROUND OF THE AI WRAPPER COMPETITION 2025</strong>, held at <span style={{ color: '#0a66c2', fontWeight: 600 }}>National Incubation Center Karachi</span>, organized by <span style={{ color: '#0a66c2', fontWeight: 600 }}>Ignite - National Technology Fund</span> and <span style={{ color: '#0a66c2', fontWeight: 600 }}>Tech Nation</span></p>
                                            <p style={{ marginBottom: '8px' }}>Our project aims to leverage <strong>ARTIFICIAL INTELLIGENCE (AI), NATURAL LANGUAGE PROCESSING (NLP)</strong>, and <strong>AUTOMATION</strong> to create a <strong>SAFER, SMARTER & MORE EMPATHETIC DIGITAL ENVIRONMENT FOR WOMEN</strong> truly <strong>COMBINING TECHNOLOGY WITH PURPOSE.</strong></p>
                                            <p style={{ marginBottom: '8px' }}>Grateful to my amazing teammate <span style={{ color: '#0a66c2', fontWeight: 600 }}>Rahima Khurram</span> for her collaboration and to <span style={{ color: '#0a66c2', fontWeight: 600 }}>Ignite - National Technology Fund</span> for hosting such an <strong>INSPIRING EVENT DRIVING AI INNOVATION IN PAKISTAN.</strong></p>
                                            <p style={{ color: '#0a66c2', fontWeight: 600, marginBottom: '8px' }}>#AIWrapperCompetition #Ignite #TechNationPakistan #NICKarachi #AI #Innovation #WomenSafety #SafeHer #Teamwork #ArtificialIntelligence</p>
                                            <span className="show-more" onClick={() => setIsPostExpanded(false)} style={{ color: 'rgb(var(--muted))', cursor: 'pointer', fontWeight: 600, display: 'block', marginTop: '8px' }}>see less</span>
                                        </>
                                    )}
                                </div>
                                <div className="post-image" style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', marginTop: '12px', border: '1px solid rgba(var(--foreground), 0.1)', display: 'flex', justifyContent: 'center', background: 'rgba(var(--foreground), 0.02)' }}>
                                    <img src="/assets/images/img6.webp" alt="AI Wrapper Competition" style={{ maxHeight: '650px', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
                                </div>
                            </div>
                        </div>
                        <a href="https://www.linkedin.com/in/hassan-shaikh-618966253" target="_blank" rel="noopener noreferrer" className="show-all-btn">Show all posts →</a>
                    </div>

                    {/* Experience Section */}
                    <div id="experience" className="linkedin-card card-padding">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 className="widget-title">Experience</h3>
                        </div>
                        <div className="linkedin-list">
                            {[
                                {
                                    role: 'Full Stack and AI Automation Developer',
                                    company: 'Tech Tide LLC • Full-time',
                                    date: '2025 - Present • 1 yr 5 mos',
                                    location: 'Karachi, Sindh, Pakistan • Hybrid',
                                    desc: 'Currently working at Tide Tech as a Developer & Automation Specialist, where my major role is to develop and optimize web applications, automate workflows, and integrate AI-driven solutions to improve efficiency and scalability',
                                    skills: 'React js, Automation and +12 skills'
                                },
                                {
                                    role: 'Web Developer Freelancer',
                                    company: 'Fiverr • Freelance',
                                    date: '2024 - Sep 2025 • 1 yr 9 mos',
                                    location: 'Remote',
                                    skills: 'Front-End Development and Web Development'
                                },
                                {
                                    role: 'Web Developer',
                                    company: 'Web Whiz • Full-time',
                                    date: 'Feb 2023 - Sep 2025 • 2 yrs 8 mos',
                                    location: 'Pakistan • On-site',
                                    desc: 'My major role was to develop and maintain web applications, implement automation solutions, and optimize workflows to enhance efficiency and user experience.',
                                    skills: 'React.js, JavaScript and +4 skills'
                                },
                                {
                                    role: 'Frontend Developer Intern',
                                    company: 'CodeAlpha • Internship',
                                    date: 'Dec 2022 - Sep 2023 • 10 mos',
                                    location: 'India • Remote',
                                    desc: 'Collaborated with a team to develop responsive web applications using React.js and Next.js.',
                                    skills: 'Front-End Development, React js and +3 skills'
                                },
                                {
                                    role: 'Ex employee of Akbar ali & sons',
                                    company: 'Akber Ali & Sons • Full-time',
                                    date: 'Aug 2021 - Sep 2022 • 1 yr 2 mos',
                                    location: 'Karachi, Sindh, Pakistan',
                                    skills: ''
                                }
                            ].map((job, i) => (
                                <div key={i} className="linkedin-list-item">
                                    <div className="item-logo">
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(var(--foreground), 0.05)', color: 'rgb(var(--primary))' }}>
                                            <FiBriefcase size={24} />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h3>{job.role}</h3>
                                        <span className="item-subtitle">{job.company}</span>
                                        <div className="item-meta-row">
                                            <span className="item-meta"><FiCalendar size={12} /> {job.date}</span>
                                            {job.location && <span className="item-meta"><FiMapPin size={12} /> {job.location}</span>}
                                        </div>
                                        {job.desc && (
                                            <p className="item-description">
                                                {job.desc}
                                            </p>
                                        )}
                                        {job.skills && (
                                            <div className="experience-skill-tag">
                                                <FiAward /> <span>{job.skills}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div id="education" className="linkedin-card card-padding">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 className="widget-title">Education</h3>
                        </div>
                        <div className="linkedin-list">
                            {[
                                {
                                    school: 'Iqra University (Official)',
                                    degree: "Bachelor's in Computer Science, Development",
                                    date: 'Jul 2022 - Aug 2026',
                                    grade: 'Grade: 3.3',
                                    desc: 'Activities and societies: Completed intensive training in full-stack development, focusing on modern frameworks and best practices.',
                                    skills: 'C++, Python (Programming Language) and +1 skill'
                                },
                                {
                                    school: 'AS Community HUB',
                                    degree: 'Course, Web Development',
                                    date: 'May 2024 - Aug 2024',
                                    grade: '',
                                    desc: '',
                                    skills: ''
                                },
                                {
                                    school: 'SMIT',
                                    degree: 'Diploma, AI and Chatbots',
                                    date: 'Jan 2024 - Jul 2024',
                                    grade: '',
                                    desc: '',
                                    skills: ''
                                }
                            ].map((edu, i) => (
                                <div key={i} className="linkedin-list-item">
                                    <div className="item-logo">
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(var(--foreground), 0.05)', color: 'rgb(var(--primary))' }}>
                                            <FiAward size={24} />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h3>{edu.school}</h3>
                                        <span className="item-subtitle">{edu.degree}</span>
                                        <div className="item-meta-row">
                                            <span className="item-meta"><FiCalendar size={12} /> {edu.date}</span>
                                            {edu.grade && <span className="item-meta">{edu.grade}</span>}
                                        </div>
                                        {edu.desc && <p className="item-description">{edu.desc}</p>}
                                        {edu.skills && (
                                            <div className="experience-skill-tag">
                                                <FiAward /> <span>{edu.skills}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="show-all-btn">Show all educations →</a>
                    </div>

                    {/* Licenses & Certifications Section */}
                    <div className="linkedin-card card-padding">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 className="widget-title">Licenses & certifications</h3>
                        </div>
                        <div className="linkedin-list">
                            {[
                                {
                                    name: 'Speed programming',
                                    issuer: 'SMEC\'26',
                                    date: 'Issued Jan 2026',
                                    skills: 'C++, DSA and +1 skill',
                                    img: '/assets/cerrtificates/smec.jpg'
                                },
                                {
                                    name: 'Wordpress',
                                    issuer: 'NS Training (SMC-PRIVATE) Limited',
                                    date: 'Issued Sep 2024',
                                    skills: 'WordPress and Elementor',
                                    img: '/assets/cerrtificates/NS-training-wp.jpg'
                                },
                                {
                                    name: 'Frontend Developer Intern',
                                    issuer: 'CodeAlpha',
                                    date: 'Issued Sep 2023',
                                    skills: 'Front-End Development',
                                    img: '/assets/cerrtificates/Codealpha-fronened.jpg'
                                },
                                {
                                    name: 'Data Structure and Algorithm (DSA)',
                                    issuer: 'CodeAlpha',
                                    date: 'Issued 2023',
                                    skills: 'DSA, Problem Solving',
                                    img: '/assets/cerrtificates/codealpha-DSA.jpg'
                                },
                                {
                                    name: 'UI/UX Designing',
                                    issuer: 'SMIT',
                                    date: 'Issued 2023',
                                    skills: 'UI/UX, Figma',
                                    img: '/assets/cerrtificates/SMIT-UIUX.jpg'
                                },
                                {
                                    name: 'Web Development Course',
                                    issuer: 'AS Community HUB',
                                    date: 'Issued Aug 2024',
                                    skills: 'Web Development',
                                    img: '/assets/cerrtificates/AS-commuinty-webdev.jpg'
                                },
                                {
                                    name: 'Tailwind CSS Workshop',
                                    issuer: 'Workshop',
                                    date: 'Issued 2024',
                                    skills: 'Tailwind CSS',
                                    img: '/assets/cerrtificates/tailwind-workshop.jpg'
                                }
                            ].map((cert, i) => (
                                <div key={i} className="linkedin-list-item">
                                    <div className="item-logo" style={{ background: 'rgba(var(--foreground), 0.1)', borderRadius: '4px' }}></div>
                                    <div className="item-content">
                                        <h3>{cert.name}</h3>
                                        <span className="item-subtitle" style={{ color: 'rgb(var(--foreground))' }}>{cert.issuer}</span>
                                        <span className="item-meta">{cert.date}</span>
                                        <div className="experience-skill-tag">
                                            <FiAward /> <span>{cert.skills}</span>
                                        </div>
                                        <div style={{ marginTop: '12px', padding: '8px', border: '1px solid rgba(var(--foreground), 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', width: 'fit-content' }}>
                                            <div style={{ width: '60px', height: '40px', background: 'rgba(var(--foreground), 0.05)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'rgb(var(--muted))', overflow: 'hidden' }}>
                                                {cert.img ? (
                                                    <img src={cert.img} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                ) : (
                                                    'IMG'
                                                )}
                                            </div>
                                            <span style={{ fontSize: '14px', fontWeight: 600 }}>{cert.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar Column */}
                <aside className="profile-aside">

                    {/* People Also Viewed Widget */}
                    <div className="sidebar-widget">
                        <h3 className="widget-title" style={{ fontSize: '14px', marginBottom: '16px' }}>People also viewed</h3>

                        <div className="viewer-list">
                            {[
                                { name: 'Sarah Johnson', title: 'Senior Frontend Engineer at Google', avatar: 'SJ' },
                                { name: 'David Chen', title: 'Product Designer at Meta', avatar: 'DC' },
                                { name: 'Alex Rivera', title: 'Engineering Manager at Netflix', avatar: 'AR' }
                            ].map((person, i) => (
                                <div key={i} className="viewer-item">
                                    <div className="viewer-avatar">{person.avatar}</div>
                                    <div className="viewer-info">
                                        <h4>{person.name}</h4>
                                        <p>{person.title}</p>
                                        <button className="connect-btn">Connect</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Profiles Widget */}
                    <div className="sidebar-widget">
                        <h3 className="widget-title" style={{ fontSize: '14px', marginBottom: '16px' }}>Social Profiles</h3>

                        <div className="social-links-list">
                            <a href="https://github.com/IHassanshaikh" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <FiGithub size={20} />
                                <span>@hassan-shaikh</span>
                            </a>
                            <a href="https://www.linkedin.com/in/hassan-shaikh-618966253" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <FiLinkedin size={20} />
                                <span>Hassan Shaikh</span>
                            </a>
                            <a href="#" className="social-link-item">
                                <FiFacebook size={20} />
                                <span>Muhammad Hassan</span>
                            </a>
                            <a href="#" className="social-link-item">
                                <FiInstagram size={20} />
                                <span>hassanshaikh9717</span>
                            </a>
                            <a href="#" className="social-link-item">
                                <FiCode size={20} />
                                <span>hassanshaikh</span>
                            </a>
                        </div>
                    </div>

                </aside>
            </div>
        </main>
    );
}

