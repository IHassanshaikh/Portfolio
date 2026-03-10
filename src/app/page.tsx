import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import TechStack from '@/components/home/TechStack';
import ExperienceList from '@/components/home/ExperienceList';
import Testimonials from '@/components/home/Testimonials';
import Services from '@/components/home/Services';
import Approach from '@/components/home/Approach';
import FAQ from '@/components/home/FAQ';
import Interests from '@/components/home/Interests';
import IdeaExecution from '@/components/home/IdeaExecution';

export default function Home() {
    return (
        <main>
            <Hero />

            <div className="relative z-10">
                <About />
                <TechStack />
                <Services />
                <Approach />
                <ExperienceList />
                <Testimonials />
                <FAQ />
                <Interests />
            </div>

            <IdeaExecution />
        </main>
    );
}
