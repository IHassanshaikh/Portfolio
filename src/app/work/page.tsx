import WorkPage from '@/components/work/WorkPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Work | Portfolio',
    description: 'A showcase of my recent projects and case studies.',
};

export default function Page() {
    return <WorkPage />;
}
