import About from '@/components/About';

export const metadata = {
    title: 'About ACL Injuries | ACL Non-Surgical',
    description: 'Learn about anterior cruciate ligament injuries, symptoms, and why early assessment is critical for non-surgical treatment options.',
};

export default function AboutPage() {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <About />
            </div>
        </main>
    );
}
