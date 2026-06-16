import TestimonialForm from '@/components/TestimonialForm';

export const metadata = {
    title: 'Share Your Story | ACL Non-Surgical',
    description: 'Share your ACL non-surgical recovery journey and inspire others.',
};

export default function TestimonialsPage() {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <TestimonialForm />
            </div>
        </main>
    );
}
