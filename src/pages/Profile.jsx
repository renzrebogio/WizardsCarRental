import { useState } from 'react'
import { Link } from 'react-router-dom'
import { vehicles } from '../data/vehicles'
import './Profile.css'

export default function Profile() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4, 1)) // May 2026
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  
  // Interactive Verification Requirements State
  const [requirements, setRequirements] = useState({
    license: { submitted: true, name: "Driver's License (Class A)", status: 'Verified', fileName: 'license_zee_class_a.pdf' },
    govId: { submitted: false, name: 'Government Issued ID', status: 'Not Submitted', fileName: null }
  })

  const handleUploadId = (e) => {
    const file = e.target.files[0]
    if (file) {
      setRequirements(prev => ({
        ...prev,
        govId: {
          submitted: true,
          name: 'Government Issued ID',
          status: 'Pending Review',
          fileName: file.name
        }
      }))
    }
  }

  // Hardcoded premium wizard account details
  const accountInfo = {
    name: 'Archmage Zee',
    rank: 'Grand Summoner (Tier 4)',
    level: 28,
    email: 'zee.magic@wizardsrental.com',
    mana: '2,450 MP',
    rides: 12,
    miles: '12,450 km',
    license: 'Class A (Professional)',
    origin: 'Kawit, Cavite',
    guild: 'Cavite Summoners Guild',
    phone: '+63 0915-772-2706'
  }

  // Bookings list mapping to our vehicles data
  const bookings = [
    {
      id: 'BK-5482',
      vehicle: vehicles[0], // Toyota Fortuner
      startDate: new Date(2026, 4, 14),
      endDate: new Date(2026, 4, 17),
      quest: 'Expedition to the High Spire (Mountain Retreat)',
      status: 'Enchanted',
      totalCost: 18000,
      addOns: ['GPS Navigator', 'Magical Coverage']
    },
    {
      id: 'BK-8821',
      vehicle: vehicles[1], // Mitsubishi Xpander
      startDate: new Date(2026, 4, 24),
      endDate: new Date(2026, 4, 26),
      quest: 'Midgard Family Carriage (Metro Tour)',
      status: 'Pending Mana',
      totalCost: 8400,
      addOns: ['Child Seat']
    }
  ]

  // Generate calendar days for May 2026
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay()
  }

  const daysCount = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth())
  const startDayOffset = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth())

  const calendarDays = []
  
  // Fill initial offset blanks
  for (let i = 0; i < startDayOffset; i++) {
    calendarDays.push({ day: null, date: null })
  }

  // Fill actual calendar days
  for (let d = 1; d <= daysCount; d++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d)
    
    // Check if this date has any active booking
    const activeBooking = bookings.find(b => {
      const start = new Date(b.startDate.getFullYear(), b.startDate.getMonth(), b.startDate.getDate())
      const end = new Date(b.endDate.getFullYear(), b.endDate.getMonth(), b.endDate.getDate())
      return date >= start && date <= end
    })

    calendarDays.push({
      day: d,
      date: date,
      booking: activeBooking || null
    })
  }

  // Handle date cell clicks
  const handleDateClick = (dayInfo) => {
    if (dayInfo.booking) {
      setSelectedBooking(dayInfo.booking)
    } else {
      setSelectedBooking(null)
    }
  }

  // Month navigation helpers
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
    setSelectedBooking(null)
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    setSelectedBooking(null)
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="profile-page">
      {/* Background magical elements */}
      <div className="profile-magic-bg">
        <div className="profile-aura p-aura-1"></div>
        <div className="profile-aura p-aura-2"></div>
      </div>

      <div className="container profile-container">
        {/* Profile Grid Columns */}
        <div className="profile-grid-wrapper">
          
          {/* Column 1: Account Info Card */}
          <div className="profile-column-left">
            <div className="profile-card-glass account-info-card">
              <div className="account-info-header" style={{ marginBottom: '24px' }}>
                <div className="profile-avatar-frame">
                  <div className="profile-avatar-inner">
                    <span>AZ</span>
                  </div>
                  <div className="profile-avatar-ring"></div>
                </div>
                <h2 className="account-profile-name" style={{ margin: 0 }}>{accountInfo.name}</h2>
              </div>

              <div className="account-stats-grid" style={{ marginBottom: '24px' }}>
                <div className="account-stat-box">
                  <span className="material-symbols-outlined stat-box-icon">auto_stories</span>
                  <div className="stat-box-vals">
                    <span className="stat-box-val">{accountInfo.rides}</span>
                    <span className="stat-box-label">Summonings</span>
                  </div>
                </div>
                
                <div className="account-stat-box">
                  <span className="material-symbols-outlined stat-box-icon">navigation</span>
                  <div className="stat-box-vals">
                    <span className="stat-box-val">{accountInfo.miles}</span>
                    <span className="stat-box-label">Travelled</span>
                  </div>
                </div>
              </div>

              <div className="account-detail-rows" style={{ marginBottom: '32px' }}>
                <h3 className="details-header-title">Guild Credentials</h3>
                
                <div className="detail-row">
                  <span className="detail-row-lbl">Realm Email</span>
                  <span className="detail-row-val">{accountInfo.email}</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-row-lbl">Sanctum Residence</span>
                  <span className="detail-row-val">{accountInfo.origin}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-row-lbl">Communication Line</span>
                  <span className="detail-row-val">{accountInfo.phone}</span>
                </div>
              </div>

              {/* Council Sanctum Audit - Positioned directly before Perks */}
              <div className="account-audit-section" style={{ marginBottom: '32px' }}>
                <h3 className="details-header-title">Council Sanctum Audit</h3>
                <p className="sanctum-card-desc" style={{ marginBottom: '16px' }}>
                  The High Wizard Council must verify your credentials before carriage summons are finalized.
                </p>

                <div className="requirements-list-area">
                  {/* REQUIREMENT 1: LICENSE */}
                  <div className="requirement-item">
                    <div className="requirement-status-row">
                      <span className="material-symbols-outlined req-icon verified-icon">verified_user</span>
                      <div className="requirement-meta">
                        <span className="req-name">{requirements.license.name}</span>
                        <span className="req-status-badge badge-verified">{requirements.license.status}</span>
                      </div>
                    </div>
                    <div className="req-file-details">
                      <span className="material-symbols-outlined file-icon">description</span>
                      <span className="req-file-name">{requirements.license.fileName}</span>
                    </div>
                  </div>

                  {/* REQUIREMENT 2: GOV ID */}
                  <div className="requirement-item">
                    <div className="requirement-status-row">
                      <span className={`material-symbols-outlined req-icon ${
                        requirements.govId.status === 'Verified' ? 'verified-icon' :
                        requirements.govId.status === 'Pending Review' ? 'pending-icon animate-spin-slow' : 'warning-icon'
                      }`}>
                        {requirements.govId.status === 'Verified' ? 'verified_user' :
                         requirements.govId.status === 'Pending Review' ? 'sync' : 'gpp_maybe'}
                      </span>
                      <div className="requirement-meta">
                        <span className="req-name">{requirements.govId.name}</span>
                        <span className={`req-status-badge ${
                          requirements.govId.status === 'Verified' ? 'badge-verified' :
                          requirements.govId.status === 'Pending Review' ? 'badge-pending' : 'badge-unsubmitted'
                        }`}>
                          {requirements.govId.status}
                        </span>
                      </div>
                    </div>

                    {requirements.govId.submitted ? (
                      <div className="req-file-details">
                        <span className="material-symbols-outlined file-icon">description</span>
                        <span className="req-file-name">{requirements.govId.fileName}</span>
                      </div>
                    ) : (
                      <div className="req-upload-trigger-area">
                        <p className="upload-note">Online submission is open for council review.</p>
                        <label className="req-upload-btn">
                          <span className="material-symbols-outlined">cloud_upload</span>
                          <span>Upload Government ID</span>
                          <input 
                            type="file" 
                            accept=".pdf,.png,.jpg,.jpeg" 
                            onChange={handleUploadId} 
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Enchanted Perks Section */}
              <div className="account-perks-section">
                <h3 className="details-header-title">Enchanted Perks</h3>
                <div className="perks-list" style={{ marginBottom: '24px' }}>
                  <div className="perk-pill">
                    <span className="material-symbols-outlined">wind_power</span>
                    <span>Favorable Wind (-10% MPV)</span>
                  </div>
                  <div className="perk-pill">
                    <span className="material-symbols-outlined">magic_button</span>
                    <span>Cavite Teleportation (Free Drop-off)</span>
                  </div>
                </div>
              </div>

              {/* Depart Sanctum (Logout Button) */}
              <div className="account-logout-wrapper">
                <button className="btn-logout" onClick={() => setShowLogoutModal(true)}>
                  <span className="material-symbols-outlined">logout</span>
                  <span>DEPART SANCTUM</span>
                </button>
              </div>

            </div>
          </div>

          {/* Column 2: Large Magical Calendar (Highlight) */}
          <div className="profile-column-right">
            
            {/* The Big Calendar Container */}
            <div className="profile-card-glass calendar-card">
              <div className="calendar-header">
                <div className="calendar-title-group">
                  <span className="material-symbols-outlined calendar-title-icon">calendar_month</span>
                  <h2 className="calendar-main-title">Enchanted Chronicles</h2>
                </div>
                
                <div className="calendar-controls">
                  <button className="calendar-ctrl-btn" onClick={prevMonth} aria-label="Previous month">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <span className="calendar-month-indicator">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </span>
                  <button className="calendar-ctrl-btn" onClick={nextMonth} aria-label="Next month">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Calendar Grid Display */}
              <div className="calendar-grid-container">
                {/* Week Day Labels */}
                <div className="calendar-week-days">
                  {weekDays.map(wd => (
                    <div key={wd} className="calendar-week-day-lbl">{wd}</div>
                  ))}
                </div>

                {/* Days Grid Cells */}
                <div className="calendar-days-grid">
                  {calendarDays.map((dayInfo, idx) => {
                    const isToday = dayInfo.day === 18 && currentMonth.getMonth() === 4 && currentMonth.getFullYear() === 2026
                    const hasBooking = !!dayInfo.booking
                    
                    // Determine classes for styled cells
                    let cellClasses = 'calendar-day-cell'
                    if (dayInfo.day === null) cellClasses += ' cell-empty'
                    if (isToday) cellClasses += ' cell-today'
                    if (hasBooking) {
                      cellClasses += ' cell-has-booking'
                      if (dayInfo.booking.vehicle.glowColor === 'primary') {
                        cellClasses += ' booking-blue'
                      } else {
                        cellClasses += ' booking-red'
                      }
                    }

                    return (
                      <div 
                        key={idx} 
                        className={cellClasses}
                        onClick={() => dayInfo.day && handleDateClick(dayInfo)}
                      >
                        {dayInfo.day && (
                          <>
                            <span className="cell-day-num">{dayInfo.day}</span>
                            {hasBooking && (
                              <div className="cell-booking-badge" title={dayInfo.booking.quest}>
                                <span className="cell-booking-dot"></span>
                                <span className="cell-booking-txt">{dayInfo.booking.vehicle.name}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Color legend guide */}
              <div className="calendar-legend">
                <div className="legend-item">
                  <span className="legend-dot dot-today"></span>
                  <span>Today</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot dot-blue"></span>
                  <span>Royal SUVs (Fortuner)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot dot-red"></span>
                  <span>Action MPVs (Xpander)</span>
                </div>
              </div>
            </div>

            {/* Selected Booking Info Card details below or beside */}
            <div className="booking-info-details-area">
              {selectedBooking ? (
                <div className="profile-card-glass selected-booking-details-card animate-summon-card">
                  <div className="booking-details-header">
                    <div className="booking-ref-badge">SUMMON REF: {selectedBooking.id}</div>
                    <div className={`booking-status-indicator status-${selectedBooking.status.toLowerCase().replace(' ', '-')}`}>
                      {selectedBooking.status}
                    </div>
                  </div>

                  <div className="booking-details-body-grid">
                    <div className="booking-vehicle-preview">
                      <img 
                        src={selectedBooking.vehicle.image} 
                        alt={selectedBooking.vehicle.name} 
                        className="booking-preview-car-photo"
                      />
                      <div className="booking-preview-car-backdrop"></div>
                    </div>

                    <div className="booking-quest-info">
                      <h3 className="booking-vehicle-title">{selectedBooking.vehicle.name}</h3>
                      <p className="booking-vehicle-spec">
                        {selectedBooking.vehicle.year} • {selectedBooking.vehicle.type} • {selectedBooking.vehicle.transmission}
                      </p>
                      
                      <div className="booking-meta-row">
                        <span className="material-symbols-outlined booking-meta-icon">explore</span>
                        <div>
                          <h4 className="booking-meta-lbl">Active Quest Objective</h4>
                          <p className="booking-meta-val">{selectedBooking.quest}</p>
                        </div>
                      </div>

                      <div className="booking-meta-row">
                        <span className="material-symbols-outlined booking-meta-icon">schedule</span>
                        <div>
                          <h4 className="booking-meta-lbl">Duration of Enchantment</h4>
                          <p className="booking-meta-val">
                            {selectedBooking.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} to{' '}
                            {selectedBooking.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="booking-details-footer-row">
                    <div className="booking-addons-group">
                      <span className="booking-footer-lbl">Equipped Add-ons:</span>
                      <div className="booking-addons-pills">
                        {selectedBooking.addOns.map(add => (
                          <span key={add} className="addon-pill-micro">{add}</span>
                        ))}
                      </div>
                    </div>

                    <div className="booking-price-group">
                      <span className="booking-footer-lbl">Total Mana Cost</span>
                      <span className="booking-footer-price">₱{selectedBooking.totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="profile-card-glass booking-placeholder-info-card">
                  <span className="material-symbols-outlined placeholder-icon">auto_awesome</span>
                  <h3 className="placeholder-title">Magical Chronicles</h3>
                  <p className="placeholder-desc">
                    Click on any glowing calendar date with an active booking to display the vehicle specs, summoned quest details, reference ID, and rental duration values!
                  </p>
                  <Link to="/fleet" className="placeholder-fleet-btn">
                    <span className="material-symbols-outlined">add_circle</span>
                    <span>Summon New Carriage</span>
                  </Link>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* ═══ MAGICAL LOGOUT CONFIRMATION MODAL ═══ */}
      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal-card glass-panel">
            <div className="logout-modal-glow"></div>
            
            <div className="logout-modal-header">
              <div className="logout-modal-icon-wrap">
                <span className="material-symbols-outlined">gpp_maybe</span>
              </div>
              <h2 className="logout-modal-title">Depart Sanctum?</h2>
            </div>
            
            <div className="logout-modal-body">
              <p>
                Are you sure you want to temporarily depart your sanctum? Your active summonings, credentials, and mana points will remain securely locked in the High Council vaults until you return.
              </p>
            </div>
            
            <div className="logout-modal-actions">
              <button className="btn-modal-cancel" onClick={() => setShowLogoutModal(false)}>
                Stay Connected
              </button>
              <button 
                className="btn-modal-confirm" 
                onClick={() => {
                  alert("✨ You have safely departed the sanctum! (Frontend Demo Mode)");
                  setShowLogoutModal(false);
                }}
              >
                Depart
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
