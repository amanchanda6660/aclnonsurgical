'use client';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

const teamMembers = [
    {
        title: 'Treating Physician',
        role: 'Sports Medicine Physician, Orthopaedic Surgeon, or Specialist GP',
        description: 'Your treating physician must be involved early — ideally within days of injury. They evaluate your medical history, review MRI findings, assess associated injuries, and conduct a shared decision-making consultation exploring both surgical and non-surgical pathways.',
        link: 'Find a Physician',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="40" height="40" rx="12" fill="#e8f4f6"/>
                <path d="M24 14v20M14 24h20" stroke="#1a5c6b" strokeWidth="3" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        title: 'Radiologist',
        role: 'Musculoskeletal Imaging Specialist',
        description: 'A specialist musculoskeletal radiologist ensures high-quality MRI imaging with appropriate sequences for accurate diagnosis. They assess the tear pattern, identify concomitant injuries such as meniscal or cartilage damage, and provide follow-up imaging to monitor healing progress.',
        link: 'Learn More',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="40" height="40" rx="12" fill="#e8f4f6"/>
                <circle cx="24" cy="20" r="6" stroke="#1a5c6b" strokeWidth="2.5"/>
                <path d="M14 38 C14 32, 19 28, 24 28 C29 28, 34 32, 34 38" stroke="#1a5c6b" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        title: 'Physiotherapist',
        role: 'Specialist in Knee & ACL Rehabilitation',
        description: 'Often the first professional on the scene at a sporting injury, the physiotherapist plays a critical role from initial bracing through to full return to sport. They guide the progressive rehabilitation programme, monitor functional milestones, and coordinate with the broader medical team.',
        link: 'Find a Physio',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="40" height="40" rx="12" fill="#e8f4f6"/>
                <path d="M16 34 L22 24 L26 28 L32 16" stroke="#1a5c6b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="16" cy="34" r="2" fill="#1a5c6b"/>
                <circle cx="32" cy="16" r="2" fill="#1a5c6b"/>
            </svg>
        ),
    },
    {
        title: 'Orthopaedic Surgeon',
        role: 'Knee Specialist Surgeon',
        description: 'For cases involving severe concomitant injuries or where non-surgical management does not achieve the desired outcome, an orthopaedic knee surgeon provides expert assessment. Some patients may ultimately require ACL reconstruction, and having a surgeon involved ensures seamless continuity of care.',
        link: 'Learn More',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="40" height="40" rx="12" fill="#e8f4f6"/>
                <path d="M18 16 L30 16 L32 32 L16 32 Z" stroke="#1a5c6b" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M22 16 L22 12 L26 12 L26 16" stroke="#1a5c6b" strokeWidth="2.5" strokeLinejoin="round"/>
                <line x1="20" y1="22" x2="28" y2="22" stroke="#1a5c6b" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="26" x2="28" y2="26" stroke="#1a5c6b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        ),
    },
];

export default function Team() {
    const ref = useScrollAnimate();

    return (
        <section className="section team" id="team" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <p className="section-eyebrow">Recovery Team</p>
                    <h2 className="section-title">The Specialists Behind Your Recovery</h2>
                    <p className="section-description">Successful non-surgical ACL management requires a coordinated, multidisciplinary team. Each member plays a distinct and vital role in your healing journey.</p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div className="team-card" data-animate="" key={member.title}>
                            <div className="team-card-icon">{member.icon}</div>
                            <h3>{member.title}</h3>
                            <p className="team-role">{member.role}</p>
                            <p>{member.description}</p>
                            <div className="team-card-footer">
                                <a href="#contact" className="card-link">{member.link} <span>&rarr;</span></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
