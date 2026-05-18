import { useState } from 'react'
import { Link } from 'react-router-dom'
import { vehicles } from '../data/vehicles'
import './Fleet.css'

const filters = ['All Vehicles', 'SUV', 'MPV', '8 Seater']

export default function Fleet() {
  const [active, setActive] = useState('All Vehicles')

  const filtered = vehicles.filter(v => {
    if (active === 'All Vehicles') return true
    if (active === 'SUV') return v.type === 'SUV'
    if (active === 'MPV') return v.type === 'MPV'
    if (active === '8 Seater') return v.seats >= 8
    return true
  })

  return (
    <div className="fleet-page">
      {/* Banner */}
      <header className="fleet-banner">
        <div className="fleet-banner__glow"></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-area" style={{ marginBottom: 0 }}>
            <div className="section-overline">
              <span className="section-overline-line"></span>
              <span className="section-overline-text">✦ Summon Your Steed ✦</span>
              <span className="section-overline-line"></span>
            </div>
            <h1 className="section-title">
              OUR <span className="section-title-accent">FLEET</span>
            </h1>
            <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
              <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
              <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
              <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
            </svg>
            <p className="section-subtitle">
              Select from our magical roster of hand-picked steeds for your grand quest
            </p>
          </div>
        </div>
      </header>

      <div className="container fleet-content">
        {/* Filter Bar */}
        <div className="fleet-filter glass-panel">
          {filters.map(f => (
            <button
              key={f}
              className={`fleet-filter__btn ${active === f ? 'fleet-filter__btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="fleet-grid stagger-children">
          {filtered.map(car => (
            <article className="fleet-card" key={car.id}>
              <div className={`fleet-card__status fleet-card__status--${car.status === 'Available' ? 'available' : 'limited'}`}>
                {car.status}
              </div>

              <div className="fleet-card__image-wrap">
                <div className="fleet-card__image-glow"></div>
                <img src={car.image} alt={`${car.name} ${car.year}`} className="fleet-card__image" loading="lazy" />
              </div>

              <div className="fleet-card__body">
                <div className="fleet-card__header">
                  <h2 className="text-headline-lg">{car.name} {car.year}</h2>
                  <span className="fleet-card__seats">
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>group</span>
                    {car.seats} Seats
                  </span>
                </div>

                <p className="fleet-card__desc">{car.description}</p>

                <div className="fleet-card__specs">
                  <div className="fleet-card__spec">
                    <span className="material-symbols-outlined color-secondary">speed</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="fleet-card__spec">
                    <span className="material-symbols-outlined color-secondary">local_gas_station</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>

                <div className="fleet-card__footer">
                  <div className="fleet-card__price">
                    <span className="text-label-caps color-muted">Starting at</span>
                    <span className="text-price-display color-primary">
                      ₱{car.pricePerDay.toLocaleString()}
                      <span className="fleet-card__price-unit">/day</span>
                    </span>
                  </div>
                  <Link to={`/fleet/${car.id}`} className="btn-primary">Book Now</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="fleet-empty">
            <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--primary)' }}>search_off</span>
            <p>No vehicles match this filter. Try another category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
