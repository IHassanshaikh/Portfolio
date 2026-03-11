'use client';
import React, { useState } from 'react';
import './Testimonials.css';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiStar } from 'react-icons/fi';
import Image from 'next/image';

const testimonials = [
    {
        quote: "Hassan delivered a robust, scalable solution that completely transformed our workflow. The attention to detail was unmatched. He really understood our business needs from day one.",
        name: "Sarah Jenkins",
        title: "CTO at TechFlow",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "The design is stunning and the performance is incredible. It feels like a native app, not a website. I was impressed by how quickly he iterated on feedback.",
        name: "Michael Chen",
        title: "Founder, StartUp Inc",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "Professional, timely, and incredibly talented. One of the best developers I've had the pleasure of working with. His code is clean and very easy to maintain.",
        name: "Emily Davis",
        title: "Director of Product",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "We saw a 40% increase in conversion rates after the redesign. The results speak for themselves. Hassan knows how to build for growth.",
        name: "David Wilson",
        title: "Marketing Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "Hassan's ability to solve complex backend problems while keeping the frontend buttery smooth is a rare skill. He saved us weeks of development time.",
        name: "James Carter",
        title: "VP of Engineering, CloudScale",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "A visionary developer who cares deeply about the user experience. The animation work he did for our landing page won us an award.",
        name: "Sophia Martinez",
        title: "Creative Director, PixelPerfect",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "From concept to deployment, the process was seamless. I highly recommend Hassan for any high-stakes web project.",
        name: "William Turner",
        title: "Founder, NextGen Apps",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">

                {/* Left Side */}
                <div className="testimonials-left">
                    <span className="testimonials-label">
                        <FiStar className="fill-current" /> TESTIMONIALS
                    </span>
                    <h2 className="testimonials-title">
                        What others <br /> say
                    </h2>
                    <p className="testimonials-desc">
                        I've worked with some amazing people over the years, here is what they have to say about me.
                    </p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="t-link">
                        Check it out on Linkedin <FiArrowUpRight />
                    </a>
                </div>

                {/* Right Side - Slider */}
                <div className="testimonials-right">
                    <div className="testimonial-card-wrapper">
                        <div
                            key={activeIndex}
                            className="testimonial-card-active fade-in"
                        >
                            <div className="t-author-header">
                                <Image
                                    src={activeTestimonial.avatar}
                                    alt={activeTestimonial.name}
                                    width={60}
                                    height={60}
                                    className="t-avatar"
                                />
                                <div className="t-author-info">
                                    <h4>{activeTestimonial.name}</h4>
                                    <span className="t-author-role">{activeTestimonial.title}</span>
                                </div>
                            </div>
                            <p className="t-quote">
                                {activeTestimonial.quote}
                                <span className="t-read-more">see more</span>
                            </p>
                        </div>
                    </div>

                    <div className="t-controls">
                        <button onClick={prevSlide} className="t-btn" aria-label="Previous testimonial">
                            <FiArrowLeft />
                        </button>
                        <span className="t-counter">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </span>
                        <button onClick={nextSlide} className="t-btn" aria-label="Next testimonial">
                            <FiArrowRight />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
