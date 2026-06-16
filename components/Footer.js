export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
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
                        </a>
                        <p className="footer-tagline">Advancing non-surgical approaches to ACL injury management through evidence-based protocols and multidisciplinary care.</p>
                    </div>
                    <div className="footer-links-group">
                        <h4>Navigate</h4>
                        <ul>
                            <li><a href="/about">About ACL Injuries</a></li>
                            <li><a href="/protocol">The Protocol</a></li>
                            <li><a href="/team">Treatment Team</a></li>
                            <li><a href="/evidence">Research &amp; Evidence</a></li>
                            <li><a href="/stories">Patient Stories</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-group">
                        <h4>For Clinicians</h4>
                        <ul>
                            <li><a href="/contact">Join Our Network</a></li>
                            <li><a href="/evidence">Clinical Resources</a></li>
                            <li><a href="/protocol">Protocol Guidelines</a></li>
                            <li><a href="/contact">Refer a Patient</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 ACL Non-Surgical. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Medical Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
