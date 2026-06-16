'use client';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('sent');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const btnText = {
        idle: 'Send Enquiry',
        sending: 'Sending...',
        sent: 'Enquiry Sent!',
        error: 'Failed — Try Again',
    };

    const btnStyle = status === 'sent'
        ? { background: '#27ae60', borderColor: '#27ae60' }
        : status === 'error'
        ? { background: '#c0392b', borderColor: '#c0392b' }
        : {};

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-content">
                        <p className="section-eyebrow">Get Started</p>
                        <h2 className="section-title">Begin Your Healing Journey</h2>
                        <p>Whether you are a patient seeking non-surgical options, a clinician exploring this protocol for your practice, or a physiotherapist looking to expand your ACL management toolkit — we are here to help.</p>
                        <div className="contact-options">
                            <div className="contact-option">
                                <div className="contact-option-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                </div>
                                <div>
                                    <strong>Email Us</strong>
                                    <p>info@aclnonsurgical.com</p>
                                </div>
                            </div>
                            <div className="contact-option">
                                <div className="contact-option-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                </div>
                                <div>
                                    <strong>Worldwide Network</strong>
                                    <p>Clinicians across 40+ countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required placeholder="you@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">I am a...</label>
                                <select id="role" name="role" required defaultValue="">
                                    <option value="" disabled>Select your role</option>
                                    <option value="patient">Patient / Carer</option>
                                    <option value="physician">Physician / Doctor</option>
                                    <option value="physiotherapist">Physiotherapist</option>
                                    <option value="surgeon">Orthopaedic Surgeon</option>
                                    <option value="radiologist">Radiologist</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Tell us about your situation or question..." />
                            </div>
                            <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'} style={btnStyle}>
                                {btnText[status]}
                            </button>
                            <p className="form-note">We aim to respond within 48 hours. This is not a substitute for emergency medical advice.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
