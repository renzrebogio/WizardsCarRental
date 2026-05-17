import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { vehicles } from '../data/vehicles'
import './CarDetails.css'

export default function CarDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const vehicle = vehicles.find(v => v.id === id)
  const [driveMode, setDriveMode] = useState('self')

  if (!vehicle) {
    return (
      <div className="container section-gap" style={{ textAlign: 'center' }}>
        <h1 className="text-headline-lg">Vehicle not found</h1>
        <Link to="/fleet" className="btn-primary" style={{ marginTop: 24, display: 'inline-block' }}>Back to Fleet</Link>
      </div>
    )
  }

  const handleConfirm = () => {
    navigate('/booking-confirmed', { state: { vehicle } })
  }

  return (
    <div className="car-detail-page">
      {/* Top Bar */}
      <div className="container car-detail__topbar">
        <Link to="/fleet" className="car-detail__back">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
          Back to Fleet
        </Link>
      </div>

      {/* Hero Image */}
      <div className="car-detail__hero" style={{ '--glow-color': `var(--${vehicle.glowColor || 'primary'})` }}>
        {/* Layer 1 — DEEP BACKGROUND ATMOSPHERE (z-index: 1) */}
        <div className="platform-bg"></div>

        {/* LAYER 2 — PLATFORM / STAGE FLOOR (z-index: 2) */}
        <div className="platform-stage"></div>
        <div className="platform-stage-edge"></div>

        {/* LAYER 3 — GROUND GLOW / LIGHT POOL (z-index: 3) */}
        <div className="platform-glow"></div>

        {/* LAYER 4 — HALO / RING LIGHT BACKDROP (z-index: 4) */}
        <div className="platform-ring-outer"></div>
        <div className="platform-ring-sharp"></div>
        <div className="platform-ring-inner"></div>

        {/* LAYER 5 — SPOTLIGHT CONE (z-index: 5) */}
        <div className="platform-spotlight"></div>

        {/* LAYER 6 — CAR IMAGE (z-index: 6) */}
        <img 
          src={vehicle.heroImage} 
          alt={`${vehicle.name} ${vehicle.year}`} 
          className="platform-car" 
          onAnimationEnd={(e) => {
            if (e.animationName === 'platformCarEntrance') {
              e.target.style.opacity = '1';
              e.target.style.animation = 'carHeroFloat 5s infinite ease-in-out';
            }
          }}
        />
      </div>

      <div className="container car-detail__body">
        <div className="car-detail__info">
          <h1 className="car-detail__title">{vehicle.name} {vehicle.year}</h1>
          <p className="car-detail__desc">{vehicle.fullDescription}</p>

          {/* Vehicle Stats */}
          <h3 className="car-detail__section-title" style={{ color: 'var(--secondary)' }}>Vehicle Stats</h3>
          <div className="car-detail__stats">
            {[
              { icon: 'settings', label: 'Transmission', value: 'AUTO' },
              { icon: 'local_gas_station', label: 'Fuel Type', value: vehicle.fuel.toUpperCase() },
              { icon: 'group', label: 'Seats', value: vehicle.seats },
              { icon: 'speed', label: 'Power', value: vehicle.power },
              { icon: 'directions_car', label: 'Drivetrain', value: vehicle.drivetrain },
              { icon: 'inventory_2', label: 'Capacity', value: vehicle.capacity }
            ].map((stat, i) => (
              <div className="stat-card" key={i}>
                <span className="material-symbols-outlined stat-card__icon">{stat.icon}</span>
                <span className="stat-card__value">{stat.value}</span>
                <span className="text-label-caps stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Visual Archives */}
          <h3 className="car-detail__section-title" style={{ color: 'var(--secondary)', marginTop: '40px' }}>Visual Archives</h3>
          <div className="car-detail__archives">
            <img src={vehicle.image} alt={`${vehicle.name} Front`} className="archive-img" />
            <img src={vehicle.heroImage} alt={`${vehicle.name} Angle`} className="archive-img" />
            <img src={vehicle.image} alt={`${vehicle.name} Rear`} className="archive-img" />
          </div>

          {/* Features */}
          <h3 className="car-detail__section-title" style={{ color: 'var(--secondary)' }}>Enchantments & Features</h3>
          <div className="car-detail__features">
            {vehicle.features.map((feat, i) => (
              <div className="feature-item" key={i}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 18 }}>check_circle</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Panel */}
        <div className="booking-panel">
          <div className="booking-panel__header">
            <h3 className="booking-panel__title">SUMMON</h3>
            <div className="booking-panel__price">
              <span className="text-price-display" style={{ color: 'var(--primary)' }}>
                ₱{vehicle.pricePerDay.toLocaleString()}
              </span>
              <span style={{ color: 'var(--on-surface-variant)', fontSize: 14 }}>PER DAY</span>
            </div>
          </div>

          {/* Drive Mode */}
          <div className="booking-panel__modes">
            <button
              className={`booking-mode ${driveMode === 'self' ? 'booking-mode--active' : ''}`}
              onClick={() => setDriveMode('self')}
            >
              Self-Drive
            </button>
            <button
              className={`booking-mode ${driveMode === 'driver' ? 'booking-mode--active' : ''}`}
              onClick={() => setDriveMode('driver')}
            >
              With Driver
            </button>
          </div>

          {/* Date Inputs */}
          <div className="booking-panel__field">
            <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>Pickup Ritual</span>
            <div className="booking-panel__date">
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 18 }}>calendar_month</span>
              <input type="date" className="booking-panel__input" />
            </div>
          </div>

          <div className="booking-panel__field">
            <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>Return Ritual</span>
            <div className="booking-panel__date">
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 18 }}>calendar_month</span>
              <input type="date" className="booking-panel__input" />
            </div>
          </div>

          {/* Calendar */}
          <div className="booking-panel__calendar">
            <div className="calendar-header">
              <span className="material-symbols-outlined">chevron_left</span>
              <span>October 2024</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
            <div className="calendar-grid">
              {['S','M','T','W','T','F','S'].map(d => <div className="calendar-day-label" key={`lbl-${d}`}>{d}</div>)}
              <div className="calendar-day disabled">29</div>
              <div className="calendar-day disabled">30</div>
              <div className="calendar-day">1</div>
              <div className="calendar-day">2</div>
              <div className="calendar-day">3</div>
              <div className="calendar-day">4</div>
              <div className="calendar-day">5</div>
              <div className="calendar-day">6</div>
              <div className="calendar-day">7</div>
              <div className="calendar-day">8</div>
              <div className="calendar-day">9</div>
              <div className="calendar-day">10</div>
              <div className="calendar-day">11</div>
              <div className="calendar-day">12</div>
              <div className="calendar-day">13</div>
              <div className="calendar-day">14</div>
              <div className="calendar-day">15</div>
              <div className="calendar-day">16</div>
              <div className="calendar-day">17</div>
              <div className="calendar-day">18</div>
              <div className="calendar-day">19</div>
              <div className="calendar-day">20</div>
              <div className="calendar-day">21</div>
              <div className="calendar-day">22</div>
              <div className="calendar-day">23</div>
              <div className="calendar-day active">24</div>
              <div className="calendar-day in-range">25</div>
              <div className="calendar-day in-range">26</div>
              <div className="calendar-day active">27</div>
              <div className="calendar-day">28</div>
              <div className="calendar-day">29</div>
              <div className="calendar-day">30</div>
              <div className="calendar-day">31</div>
              <div className="calendar-day disabled">1</div>
              <div className="calendar-day disabled">2</div>
            </div>
          </div>

          <div className="booking-panel__total">
            <span>Total (3 Days)</span>
            <span className="text-price-display" style={{ color: 'var(--primary)' }}>
              ₱{(vehicle.pricePerDay * 3).toLocaleString()}
            </span>
          </div>

          <button className="btn-primary booking-panel__confirm" onClick={handleConfirm}>
            CONFIRM RESERVATION
          </button>
        </div>
      </div>
    </div>
  )
}
