'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const stories = [
    { initials: 'SM', color: '#1a5c6b', quote: 'I was told surgery was my only option. After finding this protocol and working with my physio team, my ACL healed on its own. I\'m back playing football 12 months later.', name: 'Sarah M.', detail: 'Amateur footballer, age 28', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { initials: 'JT', color: '#2980b9', quote: 'The first two weeks in the brace were tough, but the team around me made all the difference. My follow-up MRI showed clear healing. I avoided surgery and I\'m skiing again.', name: 'James T.', detail: 'Recreational skier, age 35' },
    { initials: 'EK', color: '#27ae60', quote: 'As a physiotherapist myself, I was sceptical at first. But the evidence convinced me to try non-surgical management. My recovery exceeded my expectations.', name: 'Elena K.', detail: 'Physiotherapist & netball player, age 31', videoUrl: 'https://vimeo.com/148751763' },
    { initials: 'DP', color: '#8e44ad', quote: 'I tore my ACL at 42 and assumed my active days were over. The non-surgical protocol gave me a path back. I\'m hiking and cycling pain-free.', name: 'David P.', detail: 'Recreational athlete, age 42' },
    { initials: 'LH', color: '#e67e22', quote: 'My daughter tore her ACL at 16. We wanted to explore every option before surgery. The protocol worked for her, and she returned to competitive gymnastics.', name: 'Linda H.', detail: 'Parent of a young athlete' },
    { initials: 'MR', color: '#c0392b', quote: 'I was nervous about taking the non-surgical route, but the research gave me confidence. Nine months later, I ran my first half marathon post-injury.', name: 'Marcus R.', detail: 'Distance runner, age 38' },
];

export default function Stories() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const trackRef = useRef(null);

    useEffect(() => {
        const updatePerView = () => {
            if (window.innerWidth <= 700) setCardsPerView(1);
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

    const touchStart = useRef(0);
    const handleTouchStart = (e) => { touchStart.current = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e) => {
        const diff = touchStart.current - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) goTo(clampedSlide + (diff > 0 ? 1 : -1));
    };

    return (
        <section className="section stories" id="stories">
            <div className="stories-inner">

                {/* Left panel */}
                <div className="stories-left">
                    <div className="stories-quote-icon">
                        <svg viewBox="0 0 32 32" fill="currentColor" width="32" height="32">
                            <path d="M9.333 21.333C7.493 21.333 6 19.84 6 18V12c0-1.84 1.493-3.333 3.333-3.333h2.334V6.667H9.333A5.34 5.34 0 004 12v6a5.34 5.34 0 005.333 5.333H12v-2H9.333zm13.334 0C20.827 21.333 19.333 19.84 19.333 18V12c0-1.84 1.494-3.333 3.334-3.333h2.333V6.667h-2.333A5.34 5.34 0 0017.333 12v6a5.34 5.34 0 005.334 5.333H25.333v-2h-2.666z"/>
                        </svg>
                    </div>

                    <p className="stories-eyebrow">Patient Experiences</p>
                    <h2 className="stories-title">Real Stories<br />of Recovery</h2>
                    <p className="stories-desc">Every ACL journey is unique. These patients chose a non-surgical path and share their experiences to help others make informed decisions.</p>

                    <Link href="/testimonials" className="stories-cta-btn">
                        Share your story
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>

                    {/* Controls live in the left panel */}
                    <div className="stories-controls">
                        <div className="stories-arrows">
                            <button
                                className="stories-arrow"
                                aria-label="Previous"
                                onClick={() => goTo(clampedSlide - 1)}
                                disabled={clampedSlide === 0}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M15 18l-6-6 6-6"/></svg>
                            </button>
                            <button
                                className="stories-arrow"
                                aria-label="Next"
                                onClick={() => goTo(clampedSlide + 1)}
                                disabled={clampedSlide >= totalSlides - 1}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M9 18l6-6-6-6"/></svg>
                            </button>
                        </div>
                        <div className="stories-dots">
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`stories-dot${i === clampedSlide ? ' active' : ''}`}
                                    aria-label={`Slide ${i + 1}`}
                                    onClick={() => goTo(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: carousel */}
                <div className="stories-carousel-wrap">
                    <div
                        className="stories-track"
                        ref={trackRef}
                        style={{ transform: `translateX(-${clampedSlide * (100 / cardsPerView + (20 / (trackRef.current?.offsetWidth || 1)) * 100)}%)` }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {stories.map((s) => (
                            <div className="story-card" key={s.initials}>
                                {/* Avatar banner — stands in for photo */}
                                <div className="story-banner" style={{ background: `linear-gradient(135deg, ${s.color}cc 0%, ${s.color} 100%)` }}>
                                    <span className="story-banner-initials">{s.initials}</span>
                                    <div className="story-quote-badge">
                                        <svg viewBox="0 0 32 32" fill="currentColor" width="16" height="16">
                                            <path d="M9.333 21.333C7.493 21.333 6 19.84 6 18V12c0-1.84 1.493-3.333 3.333-3.333h2.334V6.667H9.333A5.34 5.34 0 004 12v6a5.34 5.34 0 005.333 5.333H12v-2H9.333zm13.334 0C20.827 21.333 19.333 19.84 19.333 18V12c0-1.84 1.494-3.333 3.334-3.333h2.333V6.667h-2.333A5.34 5.34 0 0017.333 12v6a5.34 5.34 0 005.334 5.333H25.333v-2h-2.666z"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className="story-body">
                                    <p className="story-quote">{s.quote}</p>
                                    <div className="story-author">
                                        <strong>{s.name}</strong>
                                        <span>{s.detail}</span>
                                        {s.videoUrl && (
                                            <a
                                                href={s.videoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="story-video-link"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11"><path d="M8 5v14l11-7z"/></svg>
                                                Watch video
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
