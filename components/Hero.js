'use client';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ target, isPercent }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const start = performance.now();
                    const tick = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.floor(eased * target);
                        if (progress < 1) requestAnimationFrame(tick);
                        else el.textContent = target;
                    };
                    requestAnimationFrame(tick);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span className={`stat-number${isPercent ? ' stat-percent' : ''}`} ref={ref}>0</span>
    );
}

export default function Hero() {
    return (
        <header className="hero" id="hero">
            <div className="hero-bg-pattern" />
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow">Evidence-Based ACL Recovery</p>
                    <h1 className="hero-title">A Modern Non-Surgical Approach to <span className="text-gradient">ACL Healing</span></h1>
                    <p className="hero-subtitle">Your anterior cruciate ligament has the potential to heal. Guided by the latest research, our protocol supports natural tissue repair &mdash; helping patients return to the activities they love, without surgery.</p>
                    <div className="hero-actions">
                        <a href="#protocol" className="btn btn-primary">Learn the Protocol</a>
                        <a href="#stories" className="btn btn-outline">Patient Stories</a>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-card" data-animate="">
                        <AnimatedCounter target={2100} />
                        <span className="stat-label">Patients Treated</span>
                    </div>
                    <div className="stat-card" data-animate="">
                        <AnimatedCounter target={40} />
                        <span className="stat-label">Countries Worldwide</span>
                    </div>
                    <div className="stat-card" data-animate="">
                        <AnimatedCounter target={85} isPercent />
                        <span className="stat-label">Positive Healing Outcomes</span>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow" />
            </div>
        </header>
    );
}
