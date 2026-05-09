'use client';
import dynamic from 'next/dynamic';
import LazySection from '@/components/ui/LazySection';

const Loading = () => <div className="h-40 flex items-center justify-center text-muted opacity-50">Loading section...</div>;

const About = dynamic(() => import('@/components/home/About'), { loading: Loading });
const TechStack = dynamic(() => import('@/components/home/TechStack'), { ssr: false, loading: Loading });
const Services = dynamic(() => import('@/components/home/Services'), { loading: Loading });
const Approach = dynamic(() => import('@/components/home/Approach'), { ssr: false, loading: Loading });
const BentoSection = dynamic(() => import('@/components/home/BentoSection'), { ssr: false, loading: Loading });
const FAQ = dynamic(() => import('@/components/home/FAQ'), { loading: Loading });
const Interests = dynamic(() => import('@/components/home/Interests'), { loading: Loading });
const IdeaExecution = dynamic(() => import('@/components/home/IdeaExecution'), { loading: Loading });
const ExperienceList = dynamic(() => import('@/components/home/ExperienceList'), { loading: Loading });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { loading: Loading });

export default function HomeContent() {
    return (
        <div className="relative z-10">
            <LazySection minHeight="800px"><About /></LazySection>
            <LazySection minHeight="700px"><BentoSection /></LazySection>
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
