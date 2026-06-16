'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Protocol', href: '/protocol' },
        { label: 'Team', href: '/team' },
        { label: 'Evidence', href: '/evidence' },
        { label: 'Patient Stories', href: '/stories' },
    ];

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-container">
                <Link href="/" className="logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="24" y1="2" x2="24" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="24" y1="40" x2="24" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="2" y1="24" x2="8" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="40" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="8.3" y1="8.3" x2="12.5" y2="12.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="35.5" y1="35.5" x2="39.7" y2="39.7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="39.7" y1="8.3" x2="35.5" y2="12.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="12.5" y1="35.5" x2="8.3" y2="39.7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="#e8f4f6"/>
                            <rect x="21" y="15" width="6" height="18" rx="1.5" fill="currentColor"/>
                            <rect x="15" y="21" width="18" height="6" rx="1.5" fill="currentColor"/>
                        </svg>
                    </div>
                    <span className="logo-text">ACL<span className="logo-highlight">NonSurgical</span></span>
                </Link>
                <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li><Link href="/contact" className="nav-cta">Get Started</Link></li>
                </ul>
                <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
                    <span style={menuOpen ? { opacity: 0 } : {}} />
                    <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
                </button>
            </div>
        </nav>
    );
}
