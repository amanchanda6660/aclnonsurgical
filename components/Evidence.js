'use client';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

const articles = [
    { type: 'Journal Article', title: 'ACL Healing After Rupture: A Systematic Review', desc: 'Comprehensive review of evidence supporting non-operative ACL healing, published in a leading sports medicine journal examining outcomes across multiple clinical centres.', source: 'Sports Medicine Journal', year: '2023' },
    { type: 'Research Paper', title: 'Healing of Acute ACL Rupture on MRI', desc: 'Landmark research demonstrating MRI-verified healing of acute ACL ruptures managed with bracing protocols, with follow-up imaging confirming ligament continuity and function.', source: 'British Journal of Sports Medicine', year: '2022' },
    { type: 'Case Report', title: 'Non-Operative Management of Complete ACL Rupture', desc: 'Detailed case study documenting successful non-surgical management of a complete ACL tear using a structured bracing and rehabilitation protocol with return to high-level sport.', source: 'Orthopaedic Case Reports', year: '2023' },
    { type: 'Clinical Trial', title: 'Prospective Outcomes of Bracing Protocols for ACL Tears', desc: 'Multi-centre prospective study evaluating functional outcomes, patient satisfaction, and return-to-sport rates in patients managed with structured non-surgical bracing protocols.', source: 'Knee Surgery, Sports Traumatology', year: '2024' },
    { type: 'Podcast', title: 'Rethinking ACL Rehabilitation: Non-Surgical Approaches', desc: 'In-depth discussion with leading researchers on the paradigm shift in ACL management, the biology of ligament healing, and clinical decision-making frameworks.', source: 'Sports Medicine Podcast', year: '2024' },
    { type: 'Video Lecture', title: 'Non-Surgical ACL Management: Clinical Perspectives', desc: 'Expert panel discussion from an international orthopaedic summit presenting the latest clinical data, imaging techniques, and rehabilitation protocols for non-operative ACL care.', source: 'International Orthopaedic Summit', year: '2024' },
];

export default function Evidence() {
    const ref = useScrollAnimate();

    return (
        <section className="section evidence" id="evidence" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <p className="section-eyebrow">Research &amp; Evidence</p>
                    <h2 className="section-title">The Science Behind ACL Healing</h2>
                    <p className="section-description">Our approach is grounded in peer-reviewed research and a growing body of clinical evidence supporting non-surgical ACL management.</p>
                </div>

                <div className="evidence-grid">
                    {articles.map((article) => (
                        <div className="evidence-card" data-animate="" key={article.title}>
                            <div className="evidence-type">{article.type}</div>
                            <h3>{article.title}</h3>
                            <p>{article.desc}</p>
                            <div className="evidence-meta">
                                <span className="evidence-source">{article.source}</span>
                                <span className="evidence-year">{article.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
