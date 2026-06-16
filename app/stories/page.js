import Stories from '@/components/Stories';

export const metadata = {
    title: 'Patient Stories | ACL Non-Surgical',
    description: 'Real stories from patients who chose a non-surgical path for their ACL recovery.',
};

export default function StoriesPage() {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <Stories />
            </div>
        </main>
    );
}
