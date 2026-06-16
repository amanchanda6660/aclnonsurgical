'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('cookieConsent')) {
            const timer = setTimeout(() => setVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChoice = (consent) => {
        localStorage.setItem('cookieConsent', consent);
        setVisible(false);
    };

    return (
        <div className={`cookie-banner${visible ? ' visible' : ''}`}>
            <p>We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.</p>
            <div className="cookie-actions">
                <button className="btn btn-small btn-outline" onClick={() => handleChoice('declined')}>Decline</button>
                <button className="btn btn-small btn-primary" onClick={() => handleChoice('accepted')}>Accept</button>
            </div>
        </div>
    );
}
