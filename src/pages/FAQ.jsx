import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqData } from '../data/vehicles'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-page">
      <header className="faq-banner">
        <div className="faq-banner__glow"></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-area" style={{ marginBottom: 0 }}>
            <div className="section-overline">
              <span className="section-overline-line"></span>
              <span className="section-overline-text">✦ Scrolls of Knowledge ✦</span>
              <span className="section-overline-line"></span>
            </div>
            <h1 className="section-title">
              COMMON <span className="section-title-accent">QUESTIONS</span>
            </h1>
            <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
              <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
              <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
              <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
            </svg>
            <p className="section-subtitle">
              Got questions before you summon your ride? We've compiled the most common inquiries from our travelers across the realms.
            </p>
          </div>
        </div>
      </header>

      <section className="faq-content section-gap">
        <div className="container faq-container">
          <div className="faq-list">
            {faqData.map((item, i) => (
              <div
                className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
                key={i}
              >
                <button
                  className="faq-item__header"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className="faq-item__question">{item.question}</span>
                  <span className="material-symbols-outlined faq-item__icon">
                    {openIndex === i ? 'close' : 'add'}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="faq-item__answer animate-slide-down">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <p>Still need guidance from our scribes?</p>
            <Link to="/contact" className="btn-secondary faq-cta__btn">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
