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
          <h1 className="text-display-xl faq-banner__title">Frequently Asked Questions</h1>
          <p className="text-body-lg faq-banner__sub">
            Got questions before you summon your ride? We've compiled the most
            common inquiries from our travelers across the realms.
          </p>
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
