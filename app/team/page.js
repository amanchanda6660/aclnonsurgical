import Team from '@/components/Team';

export const metadata = {
    title: 'Your Treatment Team | ACL Non-Surgical',
    description: 'Meet the multidisciplinary specialists behind your ACL recovery — physicians, radiologists, physiotherapists, and orthopaedic surgeons.',
};

export default function TeamPage() {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <Team />
            </div>
        </main>
    );
}
