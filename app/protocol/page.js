import Protocol from '@/components/Protocol';

export const metadata = {
    title: 'The Cross Bracing Protocol | ACL Non-Surgical',
    description: 'Understand the step-by-step non-surgical ACL healing protocol — from early assessment and bracing to progressive rehabilitation.',
};

export default function ProtocolPage() {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <Protocol />
            </div>
        </main>
    );
}
