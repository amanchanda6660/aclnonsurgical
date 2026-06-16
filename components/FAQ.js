'use client';
import { useState } from 'react';

const faqs = [
    { q: 'Can an ACL really heal without surgery?', a: 'Yes. A growing body of peer-reviewed research demonstrates that the ACL has the capacity to heal when the torn ends are approximated early and protected during the healing process. MRI follow-up studies confirm ligament continuity in a significant proportion of patients managed non-surgically.' },
    { q: 'How quickly do I need to start treatment?', a: 'The treatment window is ideally within 4 to 10 days of injury. Early intervention — before the ligament undergoes biological changes known as involution — is critical for maximising healing potential. Seek medical assessment as soon as possible after injury.' },
    { q: 'Is this suitable for all ACL tears?', a: 'Not all ACL injuries are candidates for non-surgical management. Factors including tear pattern, severity, associated injuries (meniscal or cartilage damage), patient age, activity level, and personal goals all influence the decision. A thorough assessment and shared decision-making conversation with your clinician is essential.' },
    { q: 'What if the non-surgical approach doesn\'t work?', a: 'Non-surgical management does not preclude future surgery. If healing is incomplete or the patient experiences ongoing instability, ACL reconstruction surgery remains available. Having an orthopaedic surgeon as part of the treatment team ensures continuity of care regardless of outcome.' },
    { q: 'How long is the recovery?', a: 'Recovery timelines vary, but most patients progress through the bracing phase over 6–8 weeks, followed by a structured rehabilitation programme. Return to sport typically occurs between 9 and 12 months, guided by functional milestones and follow-up imaging. This timeline is comparable to surgical ACL reconstruction recovery.' },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

    return (
        <section className="section faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <p className="section-eyebrow">Common Questions</p>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div className={`faq-item${activeIndex === i ? ' active' : ''}`} key={i}>
                            <button className="faq-question" onClick={() => toggle(i)}>
                                <span>{faq.q}</span>
                                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
