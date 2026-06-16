import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';

export const metadata = {
    title: 'Get Started | ACL Non-Surgical',
    description: 'Contact us to begin your non-surgical ACL healing journey. Reach out as a patient, clinician, or physiotherapist.',
};

export default function ContactPage() {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <Contact />
                <FAQ />
            </div>
        </main>
    );
}
