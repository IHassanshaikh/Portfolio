"use client";

import React from "react";
import Link from "next/link";
import { specialtiesData } from "@/data/specialties";
import "./CategoryPage.css";

interface CategoryPageProps {
    slug: string;
}

export default function CategoryPage({ slug }: CategoryPageProps) {
    const categoryInfo = specialtiesData.find((cat) => cat.slug === slug);

    if (!categoryInfo) {
        return (
            <main className="category-page not-found-container">
                <h1>Category Not Found</h1>
                <p>The specialty you are looking for does not exist.</p>
                <Link href="/#approach" className="btn-back">
                    &larr; Back to Home
                </Link>
            </main>
        );
    }

    return (
        <main className="category-page">
            <div className="category-hero">
                <h1 className="category-title">{categoryInfo.title}</h1>
                <p className="category-desc">{categoryInfo.description}</p>
            </div>

            <div className="category-projects-grid">
                {categoryInfo.projects.map((proj, idx) => (
                    <article key={idx} className="category-project-card">
                        <div className="category-project-image">
                            <div className="hover-hint">
                                <span>Hover to view full site</span>
                            </div>
                            {/* Standard img tag is used here so full-height screenshots can expand naturally without cropping */}
                            <img
                                src={proj.image || "/assets/images/placeholder.jpg"}
                                alt={proj.title}
                                className="category-project-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="category-project-content">
                            <h2 className="category-project-title">{proj.title}</h2>
                            <p className="category-project-desc">{proj.desc}</p>

                            <div className="category-project-tags">
                                {proj.tags.map((tag) => (
                                    <span key={tag} className="category-project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="category-project-footer">
                                <a 
                                    href={proj.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-live-link"
                                >
                                    View Live Project &nearr;
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
                <Link href="/#approach" className="btn-back">
                    &larr; Back to Specialties
                </Link>
            </div>
        </main>
    );
}
