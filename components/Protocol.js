'use client';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

const steps = [
    {
        num: 1,
        title: 'Early Assessment',
        badge: 'Days 1–4',
        text: 'Prompt evaluation by a qualified clinician is essential. An MRI is obtained to confirm the ACL tear and assess any associated injuries such as meniscal tears or bone bruising. The treatment window is ideally within the first 4–10 days post-injury, before biological changes reduce the ligament\'s healing capacity.',
    },
    {
        num: 2,
        title: 'Bracing & Immobilisation',
        badge: 'Days 4–10',
        text: 'The knee is placed in a hinged brace set at approximately 90 degrees of flexion. This position approximates the torn ends of the ACL, allowing the body\'s healing response to begin. A significant cellular response initiates cross-bridging of new collagen fibres to repair the damaged tissue.',
    },
    {
        num: 3,
        title: 'Progressive Extension',
        badge: 'Weeks 3–6',
        text: 'The brace angle is gradually adjusted toward full extension over several weeks. This controlled progression allows the healing ligament to remodel under gentle mechanical loading, building structural integrity while protecting the repair.',
    },
    {
        num: 4,
        title: 'Guided Rehabilitation',
        badge: 'Weeks 6–24+',
        text: 'A structured physiotherapy programme progressively restores range of motion, strength, neuromuscular control, and sport-specific function. Follow-up MRI scans are used to monitor ligament healing and guide return-to-activity decisions.',
    },
];

export default function Protocol() {
    const ref = useScrollAnimate();

    return (
        <section className="section protocol" id="protocol" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <p className="section-eyebrow">The Healing Protocol</p>
                    <h2 className="section-title">How Non-Surgical ACL Healing Works</h2>
                    <p className="section-description">Research has shown that the ACL, like a broken bone, can heal if the torn ends are brought close together within a critical treatment window. Our protocol leverages the body&apos;s natural repair mechanisms.</p>
                </div>

                <div className="protocol-timeline">
                    {steps.map((step) => (
                        <div className="timeline-item" data-animate="" key={step.num}>
                            <div className="timeline-marker"><span>{step.num}</span></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{step.title}</h3>
                                    <span className="timeline-badge">{step.badge}</span>
                                </div>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="protocol-note">
                    <div className="note-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                    </div>
                    <p><strong>Important:</strong> Non-surgical management is not appropriate for every ACL injury. Factors including tear pattern, associated injuries, patient activity level, and individual goals must be carefully considered. A shared decision-making consultation with a qualified clinician is essential.</p>
                </div>
            </div>
        </section>
    );
}
