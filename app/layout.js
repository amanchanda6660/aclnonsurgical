import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

export const metadata = {
    title: 'ACL Non-Surgical | A Modern Approach to ACL Healing Without Surgery',
    description: 'Discover the non-surgical approach to ACL injury recovery. Evidence-based protocols for anterior cruciate ligament healing without reconstruction surgery.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}
