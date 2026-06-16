import Evidence from '@/components/Evidence';

export const metadata = {
    title: 'Research & Evidence | ACL Non-Surgical',
    description: 'Explore the peer-reviewed research and clinical evidence supporting non-surgical ACL management.',
};

export default function EvidencePage() {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <Evidence />
            </div>
        </main>
    );
}
