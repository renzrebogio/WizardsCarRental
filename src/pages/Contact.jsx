import { useState } from 'react'
import { vehicles } from '../data/vehicles'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      {/* Banner */}
      <header className="contact-banner">
        <div className="contact-banner__glow"></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-area" style={{ marginBottom: 0 }}>
            <div className="section-overline">
              <span className="section-overline-line"></span>
              <span className="section-overline-text">✦ Channels of Magic ✦</span>
              <span className="section-overline-line"></span>
            </div>
            <h1 className="section-title">
              GET IN <span className="section-title-accent">TOUCH</span>
            </h1>
            <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
              <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
              <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
              <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
            </svg>
            <p className="section-subtitle">
              Summon our team for inquiries, mystical fleet support, or to channel your feedback directly into our crystal orb.
            </p>
          </div>
        </div>
      </header>

      <section className="contact-body section-gap">
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-card">
            <h3 className="contact-form__heading" style={{ color: 'var(--secondary)' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                required
                className="contact-input"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                required
                className="contact-input"
              />
              <textarea
                placeholder="How can we assist your journey?"
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                required
                className="contact-input contact-textarea"
                rows="5"
              ></textarea>
              <button type="submit" className="btn-primary contact-submit">
                {sent ? '✨ Message Sent!' : 'TRANSMIT MESSAGE'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info__image-wrap">
              <img
                src={vehicles[0].image}
                alt="Always Ready"
                className="contact-info__image"
              />
              <h3 className="contact-info__image-text">ALWAYS READY.</h3>
            </div>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon-wrap">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <div>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>Direct Hotline</span>
                  <a href="tel:+639157722706" className="contact-info__value">+63 0915-772-2706</a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon-wrap">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>Headquarters</span>
                  <p className="contact-info__value" style={{ color: 'var(--on-surface-variant)' }}>
                    Rosedale Residences<br />San Sebastian, Kawit<br />Cavite 4104
                  </p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon-wrap">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>Live Chat</span>
                  <a
                    href="https://m.me/wizardscarrental"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__value"
                    style={{ color: 'var(--secondary)' }}
                  >
                    Message us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
