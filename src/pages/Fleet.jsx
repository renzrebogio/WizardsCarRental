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
        <h1 className="text-display-xl fleet-banner__title animate-fade-in-up">OUR FLEET</h1>
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
                <img src={car.image} alt={`${car.name} ${car.year}`} className="fleet-card__image" />
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
