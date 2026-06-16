export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <p className="section-eyebrow">Understanding Your ACL</p>
                        <h2 className="section-title">What Is an ACL Injury?</h2>
                        <p>The anterior cruciate ligament (ACL) is one of the key stabilising ligaments in your knee. It connects the thighbone to the shinbone and plays a critical role in rotational stability.</p>
                        <p>The first signs of an ACL injury may include your knee giving way beneath you, hearing a &quot;pop&quot; at the moment of injury, or rapid swelling within hours. These injuries are common in sports involving pivoting, jumping, or sudden direction changes.</p>
                        <p className="callout">While an ACL injury is not a medical emergency, it is important to seek medical attention promptly. Early assessment opens the door to treatment options &mdash; including non-surgical approaches &mdash; that may not be available if treatment is delayed.</p>
                    </div>
                    <div className="about-visual">
                        <div className="anatomy-card">
                            <div className="anatomy-illustration">
                                <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M120 40 C120 40, 100 80, 105 120 C108 145, 95 170, 100 190 C105 205, 130 220, 150 225 C170 220, 195 205, 200 190 C205 170, 192 145, 195 120 C200 80, 180 40, 180 40" stroke="#1a5c6b" strokeWidth="2.5" fill="#e8f4f6"/>
                                    <path d="M105 260 C105 255, 110 245, 115 240 C125 235, 140 232, 150 232 C160 232, 175 235, 185 240 C190 245, 195 255, 195 260 L192 360 L108 360 Z" stroke="#1a5c6b" strokeWidth="2.5" fill="#e8f4f6"/>
                                    <ellipse cx="150" cy="230" rx="50" ry="12" fill="#f0f7f8" stroke="#1a5c6b" strokeWidth="1.5"/>
                                    <path d="M130 210 C135 218, 155 240, 165 248" stroke="#c0392b" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
                                    <path d="M165 208 C160 218, 140 238, 135 248" stroke="#2980b9" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                                    <path d="M110 228 C115 222, 135 220, 150 225" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
                                    <path d="M190 228 C185 222, 165 220, 150 225" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
                                    <text x="60" y="210" fill="#c0392b" fontSize="11" fontWeight="600">ACL</text>
                                    <line x1="82" y1="208" x2="128" y2="212" stroke="#c0392b" strokeWidth="1" opacity="0.5"/>
                                    <text x="210" y="210" fill="#2980b9" fontSize="11" fontWeight="600">PCL</text>
                                    <line x1="208" y1="208" x2="167" y2="210" stroke="#2980b9" strokeWidth="1" opacity="0.5"/>
                                </svg>
                            </div>
                            <p className="anatomy-caption">Simplified knee anatomy showing the ACL (red) and PCL (blue)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
