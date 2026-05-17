import { useState } from 'react'
import { rateVehicles, addOns } from '../data/vehicles'
import './Rates.css'

const periods = ['Daily', 'Weekly', 'Monthly']

export default function Rates() {
  const [period, setPeriod] = useState('Daily')
  const [activeAddOns, setActiveAddOns] = useState({})

  const toggleAddOn = (id) => {
    setActiveAddOns(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const getPrice = (vehicle) => {
    if (period === 'Weekly') return vehicle.pricePerWeek
    if (period === 'Monthly') return vehicle.pricePerMonth
    return vehicle.pricePerDay
  }

  const getPeriodLabel = () => {
    if (period === 'Weekly') return '/week'
    if (period === 'Monthly') return '/month'
    return '/day'
  }

  return (
    <div className="rates-page">
      {/* Banner */}
      <header className="rates-banner">
        <div className="rates-banner__glow"></div>
        <div className="container rates-banner__content animate-fade-in-up">
          <h1 className="text-display-xl">Transparent Rates. No Hidden Fees.</h1>
          <p className="text-body-lg rates-banner__sub">
            Choose the perfect chariot for your quest. Our magical fleet is priced clearly, ensuring
            your journey begins without a hitch.
          </p>
        </div>
      </header>

      <div className="container rates-content">
        {/* Period Toggle */}
        <div className="rates-toggle">
          {periods.map(p => (
            <button
              key={p}
              className={`rates-toggle__btn ${period === p ? 'rates-toggle__btn--active' : ''}`}
              onClick={() => setPeriod(p)}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Vehicle Cards */}
        <div className="rates-grid stagger-children">
          {rateVehicles.map(vehicle => (
            <div className={`rate-card ${vehicle.popular ? 'rate-card--popular' : ''}`} key={vehicle.id}>
              {vehicle.popular && (
                <div className="rate-card__badge">
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>star</span>
                  Most Popular
                </div>
              )}
              <div className="rate-card__image-wrap">
                <img src={vehicle.image} alt={vehicle.name} className="rate-card__image" />
              </div>
              <h3 className="rate-card__name">{vehicle.name}</h3>
              <div className="rate-card__price">
                <span className="text-price-display color-primary">
                  ₱{getPrice(vehicle).toLocaleString()}
                </span>
                <span className="rate-card__period">{getPeriodLabel()}</span>
              </div>
              <div className="rate-card__specs">
                <div className="rate-card__spec-item">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>group</span>
                  {vehicle.seats} Seats
                </div>
                {vehicle.specs.map((spec, i) => (
                  <div className="rate-card__spec-item" key={i}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                      {i === 0 ? 'local_gas_station' : 'inventory_2'}
                    </span>
                    {spec}
                  </div>
                ))}
              </div>
              <button className={`rate-card__btn ${vehicle.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {vehicle.popular ? 'Summon Vehicle' : 'Select Vehicle'}
              </button>
            </div>
          ))}
        </div>

        {/* Add-Ons */}
        <section className="addons">
          <h2 className="text-headline-lg addons__title">Magical Add-Ons</h2>
          <div className="addons__grid">
            {addOns.map(addon => (
              <div className={`addon-card ${activeAddOns[addon.id] ? 'addon-card--active' : ''}`} key={addon.id}>
                <div className="addon-card__icon-wrap">
                  <span className="material-symbols-outlined addon-card__icon">{addon.icon}</span>
                </div>
                <h4 className="addon-card__name">{addon.name}</h4>
                <p className="addon-card__desc">{addon.description}</p>
                <div className="addon-card__footer">
                  <span className="text-price-display addon-card__price">₱{addon.pricePerDay}/D</span>
                  <button
                    className={`addon-toggle ${activeAddOns[addon.id] ? 'addon-toggle--on' : ''}`}
                    onClick={() => toggleAddOn(addon.id)}
                    aria-label={`Toggle ${addon.name}`}
                  >
                    <div className="addon-toggle__thumb"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
