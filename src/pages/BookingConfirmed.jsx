import { useLocation, Link } from 'react-router-dom'
import './BookingConfirmed.css'

export default function BookingConfirmed() {
  const { state } = useLocation()
  const vehicle = state?.vehicle
  const ref = 'WCR-' + Math.random().toString(36).substring(2, 8).toUpperCase()

  return (
    <div className="booking-page section-gap">
      <div className="container booking-container">
        <div className="booking-logo-wrap">
          <img src="/images/logo-mascot.png" alt="Wizard's Logo" className="booking-logo" />
        </div>
        <h2 className="booking-title">Booking Confirmed! 🎉</h2>
        <p className="booking-subtitle">Your magical ride is ready to be summoned.</p>

        <div className="booking-receipt">
          <div className="booking-receipt__header">
            <span className="text-label-caps" style={{ color: 'var(--secondary)' }}>Booking Reference</span>
            <h3 className="booking-receipt__ref">{ref}</h3>
          </div>
          <div className="booking-receipt__row">
            <div className="booking-receipt__label">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>directions_car</span>
              Vehicle
            </div>
            <span className="booking-receipt__value">{vehicle ? `${vehicle.name} ${vehicle.year}` : 'Mystic Sedan GT'}</span>
          </div>
          <div className="booking-receipt__row">
            <div className="booking-receipt__label">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
              Dates
            </div>
            <span className="booking-receipt__value">Oct 24 – Oct 28, 2024</span>
          </div>
          <div className="booking-receipt__total">
            <div className="booking-receipt__label">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>payments</span>
              Total Amount
            </div>
            <span className="text-price-display" style={{ color: 'var(--primary)' }}>
              ₱{vehicle ? (vehicle.pricePerDay * 3).toLocaleString() : '12,500'}
            </span>
          </div>
        </div>

        <div className="booking-actions">
          <button className="btn-secondary booking-action-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
            Save Booking Details
          </button>
          <a href="tel:+639157722706" className="btn-primary btn-pill booking-action-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>phone</span>
            Call Us to Confirm
          </a>
        </div>
        <p className="booking-note">A confirmation owl has been dispatched to your email address.</p>
        <Link to="/" className="booking-home-link">Return to Home</Link>
      </div>
    </div>
  )
}
