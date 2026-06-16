'use client';
import { useState } from 'react';

const COLORS = ['#1a5c6b', '#2980b9', '#27ae60', '#8e44ad', '#e67e22', '#c0392b'];

function StarRating({ value, onChange }) {
    const [hovered, setHovered] = useState(0);
    return (
        <div className="star-rating" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className={`star-btn${star <= (hovered || value) ? ' filled' : ''}`}
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    onClick={() => onChange(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </button>
            ))}
        </div>
    );
}

export default function TestimonialForm() {
    const [rating, setRating] = useState(0);
    const [initials, setInitials] = useState('');
    const [avatarColor, setAvatarColor] = useState(COLORS[0]);
    const [status, setStatus] = useState('idle');

    const handleNameChange = (e) => {
        const words = e.target.value.trim().split(/\s+/);
        const init = words.length >= 2
            ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
            : words[0]?.[0]?.toUpperCase() || '';
        setInitials(init);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) return;
        setStatus('sending');
        await new Promise((r) => setTimeout(r, 1200));
        setStatus('sent');
    };

    if (status === 'sent') {
        return (
            <section className="section testimonial-page">
                <div className="container">
                    <div className="testimonial-success">
                        <div className="success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M20 6L9 17l-5-5"/>
                            </svg>
                        </div>
                        <h2>Thank you for sharing!</h2>
                        <p>Your story will inspire others to explore their options. We review all submissions before publishing — we'll be in touch soon.</p>
                        <a href="/stories" className="btn btn-primary">Back to Patient Stories</a>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section testimonial-page">
            <div className="container">
                <div className="testimonial-layout">

                    {/* Left: Info panel */}
                    <div className="testimonial-info">
                        <p className="section-eyebrow">Share Your Experience</p>
                        <h1 className="testimonial-title">Your Story Can Change Someone's Life</h1>
                        <p className="testimonial-lead">Every recovery is unique. By sharing your journey, you help others facing the same decision feel less alone and more confident about their options.</p>

                        <div className="testimonial-why">
                            {[
                                { icon: '🌱', title: 'Give Hope', body: 'Your outcome can show others what non-surgical recovery looks like in real life.' },
                                { icon: '🤝', title: 'Build Community', body: 'Connect with patients across the world who chose the same path.' },
                                { icon: '🔒', title: 'Your Privacy', body: 'We only publish your first name and a brief description — nothing identifying.' },
                            ].map((item) => (
                                <div className="why-item" key={item.title}>
                                    <span className="why-icon">{item.icon}</span>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <p>{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="testimonial-form-card">
                        <div className="form-card-header">
                            <h2>Share Your Story</h2>
                            <p>Takes about 2 minutes</p>
                        </div>

                        <form onSubmit={handleSubmit} className="testimonial-form">

                            {/* Avatar preview + color picker */}
                            <div className="avatar-section">
                                <div className="avatar-preview" style={{ backgroundColor: avatarColor }}>
                                    <span>{initials || '?'}</span>
                                </div>
                                <div className="avatar-options">
                                    <p className="avatar-label">Choose your colour</p>
                                    <div className="color-swatches">
                                        {COLORS.map((c) => (
                                            <button
                                                key={c}
                                                type="button"
                                                className={`color-swatch${avatarColor === c ? ' selected' : ''}`}
                                                style={{ background: c }}
                                                aria-label={`Select colour ${c}`}
                                                onClick={() => setAvatarColor(c)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="t-name">Full Name <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        id="t-name"
                                        name="name"
                                        required
                                        placeholder="e.g. Sarah Mitchell"
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="t-email">Email <span className="required">*</span></label>
                                    <input type="email" id="t-email" name="email" required placeholder="you@example.com" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="t-description">Brief description of yourself</label>
                                <input
                                    type="text"
                                    id="t-description"
                                    name="description"
                                    placeholder="e.g. Amateur footballer, age 28"
                                    maxLength={60}
                                />
                                <span className="field-hint">Shown publicly alongside your testimonial</span>
                            </div>

                            <div className="form-group">
                                <label>Your rating <span className="required">*</span></label>
                                <StarRating value={rating} onChange={setRating} />
                                {rating === 0 && status === 'error' && (
                                    <span className="field-error">Please select a rating</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="t-story">Your story <span className="required">*</span></label>
                                <textarea
                                    id="t-story"
                                    name="story"
                                    rows={5}
                                    required
                                    placeholder="Tell us about your injury, why you chose the non-surgical path, and how your recovery has gone. There's no right or wrong way to tell it."
                                    minLength={50}
                                />
                                <span className="field-hint">Minimum 50 characters</span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="t-sport">Sport / Activity (optional)</label>
                                <input type="text" id="t-sport" name="sport" placeholder="e.g. football, hiking, cycling" />
                            </div>

                            <div className="video-link-section">
                                <div className="video-link-header">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 3l-4 4-4-4"/><circle cx="12" cy="14" r="3" fill="currentColor" stroke="none" opacity=".3"/><path d="M11 13l2 1-2 1v-2z" fill="currentColor" stroke="none"/></svg>
                                    <span>Add a Video (optional)</span>
                                </div>
                                <p className="video-link-desc">Share a YouTube or Vimeo link of your recovery journey. A "Watch video" button will appear on your story card.</p>
                                <div className="form-group" style={{ marginTop: '12px', marginBottom: 0 }}>
                                    <input
                                        type="url"
                                        id="t-video"
                                        name="videoUrl"
                                        placeholder="https://youtube.com/watch?v=..."
                                        pattern="https?://(www\.)?(youtube\.com|youtu\.be|vimeo\.com)/.+"
                                        title="Please enter a YouTube or Vimeo URL"
                                    />
                                    <span className="field-hint">YouTube and Vimeo links only</span>
                                </div>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" id="t-consent" name="consent" required />
                                <label htmlFor="t-consent">I agree that my testimonial may be published on this website (first name and description only)</label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-full"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <span className="btn-spinner" />
                                        Submitting…
                                    </>
                                ) : 'Submit My Story'}
                            </button>

                            <p className="form-note">Your email is never published and is used only to notify you when your story goes live.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
