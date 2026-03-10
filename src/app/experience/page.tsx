import ExperiencePage from '@/components/experience/ExperiencePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Experience | Portfolio',
    description: 'A timeline of my professional journey and achievements.',
};

export default function Page() {
    return <ExperiencePage />;
}
