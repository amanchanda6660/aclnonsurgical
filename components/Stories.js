'use client';
import { useState, useRef, useEffect } from 'react';

const stories = [
    { initials: 'SM', color: '#1a5c6b', quote: '"I was told surgery was my only option. After finding this protocol and working with my physio team, my ACL healed on its own. I\'m back playing football 12 months later."', name: 'Sarah M.', detail: 'Amateur footballer, age 28' },
    { initials: 'JT', color: '#2980b9', quote: '"The first two weeks in the brace were tough, but the team around me made all the difference. My follow-up MRI showed clear healing. I avoided surgery and I\'m skiing again."', name: 'James T.', detail: 'Recreational skier, age 35' },
    { initials: 'EK', color: '#27ae60', quote: '"As a physiotherapist myself, I was sceptical at first. But the evidence convinced me to try non-surgical management. My recovery exceeded my expectations."', name: 'Elena K.', detail: 'Physiotherapist & netball player, age 31' },
    { initials: 'DP', color: '#8e44ad', quote: '"I tore my ACL at 42 and assumed my active days were over. The non-surgical protocol gave me a path back. I\'m hiking and cycling pain-free."', name: 'David P.', detail: 'Recreational athlete, age 42' },
    { initials: 'LH', color: '#e67e22', quote: '"My daughter tore her ACL at 16. We wanted to explore every option before surgery. The protocol worked for her, and she returned to competitive gymnastics."', name: 'Linda H.', detail: 'Parent of a young athlete' },
    { initials: 'MR', color: '#c0392b', quote: '"I was nervous about taking the non-surgical route, but the research gave me confidence. Nine months later, I ran my first half marathon post-injury."', name: 'Marcus R.', detail: 'Distance runner, age 38' },
];

export default function Stories() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const trackRef = useRef(null);

    useEffect(() => {
        const updatePerView = () => {
            if (window.innerWidth <= 768) setCardsPerView(1);
            else if (window.innerWidth <= 1024) setCardsPerView(2);
            else setCardsPerView(3);
        };
        updatePerView();
        window.addEventListener('resize', updatePerView);
        return () => window.removeEventListener('resize', updatePerView);
    }, []);

    const totalSlides = Math.max(1, stories.length - cardsPerView + 1);
    const clampedSlide = Math.min(currentSlide, totalSlides - 1);

    const goTo = (i) => setCurrentSlide(Math.max(0, Math.min(i, totalSlides - 1)));

    // Touch support
    const touchStart = useRef(0);
    const handleTouchStart = (e) => { touchStart.current = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e) => {
        const diff = touchStart.current - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) goTo(clampedSlide + (diff > 0 ? 1 : -1));
    };

    return (
        <section className="section stories" id="stories">
            <div className="container">
                <div className="section-header">
                    <p className="section-eyebrow">Patient Experiences</p>
                    <h2 className="section-title">Real Stories of Recovery</h2>
                    <p className="section-description">Every ACL journey is unique. These patients chose a non-surgical path and share their experiences to help others make informed decisions.</p>
                </div>

                <div className="stories-carousel">
                    <div
                        className="stories-track"
                        ref={trackRef}
                        style={{ transform: `translateX(-${clampedSlide * (100 / cardsPerView + (24 / (trackRef.current?.offsetWidth || 1)) * 100)}%)` }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {stories.map((s) => (
                            <div className="story-card" key={s.initials}>
                                <div className="story-avatar" style={{ backgroundColor: s.color }}>
                                    <span>{s.initials}</span>
                                </div>
                                <blockquote>{s.quote}</blockquote>
                                <div className="story-author">
                                    <strong>{s.name}</strong>
                                    <span>{s.detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button className="carousel-btn prev" aria-label="Previous stories" onClick={() => goTo(clampedSlide - 1)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <div className="carousel-dots">
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <button key={i} className={`carousel-dot${i === clampedSlide ? ' active' : ''}`} aria-label={`Slide ${i + 1}`} onClick={() => goTo(i)} />
                            ))}
                        </div>
                        <button className="carousel-btn next" aria-label="Next stories" onClick={() => goTo(clampedSlide + 1)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
