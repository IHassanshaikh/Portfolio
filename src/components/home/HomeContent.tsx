'use client';
import dynamic from 'next/dynamic';
import LazySection from '@/components/ui/LazySection';

import About from '@/components/home/About';
import BentoSection from '@/components/home/BentoSection';

const Loading = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', width: '100%', opacity: 0.5 }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid rgba(var(--primary), 0.2)', borderTop: '3px solid rgb(var(--primary))', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
);

const TechStack = dynamic(() => import('@/components/home/TechStack'), { ssr: false, loading: Loading });
const Services = dynamic(() => import('@/components/home/Services'), { loading: Loading });
const Approach = dynamic(() => import('@/components/home/Approach'), { ssr: false, loading: Loading });
const FAQ = dynamic(() => import('@/components/home/FAQ'), { loading: Loading });
const Interests = dynamic(() => import('@/components/home/Interests'), { loading: Loading });
const IdeaExecution = dynamic(() => import('@/components/home/IdeaExecution'), { loading: Loading });
const ExperienceList = dynamic(() => import('@/components/home/ExperienceList'), { loading: Loading });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { loading: Loading });

export default function HomeContent() {
    return (
        <div className="relative z-10">
            <About />
            <BentoSection />
            <LazySection minHeight="500px"><TechStack /></LazySection>
            <LazySection minHeight="700px"><Services /></LazySection>
            <LazySection minHeight="1200px"><Approach /></LazySection>
            <LazySection minHeight="1000px"><ExperienceList /></LazySection>
            <LazySection minHeight="600px"><Testimonials /></LazySection>
            <LazySection minHeight="600px"><FAQ /></LazySection>
            <LazySection minHeight="600px"><Interests /></LazySection>
            <LazySection minHeight="500px"><IdeaExecution /></LazySection>
        </div>
    );
}
