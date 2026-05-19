import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { vehicles } from '../data/vehicles'
import './Home.css'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [storyActive, setStoryActive] = useState(false)
  const [arsenalActive, setArsenalActive] = useState(false)
  const [valuesActive, setValuesActive] = useState(false)
  const [sanctumActive, setSanctumActive] = useState(false)
  const [ritesActive, setRitesActive] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  
  const storyRef = useRef(null)
  const arsenalRef = useRef(null)
  const valuesRef = useRef(null)
  const sanctumRef = useRef(null)
  const ritesRef = useRef(null)

  const heroRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === storyRef.current && entry.isIntersecting) setStoryActive(true)
        if (entry.target === arsenalRef.current && entry.isIntersecting) setArsenalActive(true)
        if (entry.target === valuesRef.current && entry.isIntersecting) setValuesActive(true)
        if (entry.target === sanctumRef.current && entry.isIntersecting) setSanctumActive(true)
        if (entry.target === ritesRef.current && entry.isIntersecting) setRitesActive(true)

        // Pause video when out of view
        if (entry.target === heroRef.current) {
          if (entry.isIntersecting) {
            videoRef.current?.play()
          } else {
            videoRef.current?.pause()
          }
        }
      })
    }, { 
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    })

    if (heroRef.current) observer.observe(heroRef.current)
    if (storyRef.current) observer.observe(storyRef.current)
    if (arsenalRef.current) observer.observe(arsenalRef.current)
    if (valuesRef.current) observer.observe(valuesRef.current)
    if (sanctumRef.current) observer.observe(sanctumRef.current)
    if (ritesRef.current) observer.observe(ritesRef.current)

    return () => observer.disconnect()
  }, [])

  const nextVehicle = () => {
    setActiveIndex((prev) => (prev + 1) % 4)
  }

  const prevVehicle = () => {
    setActiveIndex((prev) => (prev - 1 + 4) % 4)
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero__video-container">
          <video 
            ref={videoRef}
            className="hero__video-bg" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/wizards_hero_bg.mp4" type="video/mp4" />
          </video>
          <div className="hero__video-overlay"></div>
        </div>
        <div className="container hero__grid">
          <div className="hero__content animate-fade-in-up">
            <h1 className="hero__title text-display-xl glow-text-primary">
              Rent th<span style={{ marginLeft: '2px' }}>e</span> <span className="color-primary">Magic.</span>
              <br />
              Drive th<span style={{ marginLeft: '2px' }}>e</span> <span className="color-secondary">Moment.</span>
            </h1>
            <p className="hero__subtitle text-body-lg">
              Summon the perfect vehicle for your next quest. Experience premium
              fleet access with enchanting reliability.
            </p>

            <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/fleet" className="btn-primary hero__cta-btn">
                <span className="material-symbols-outlined">auto_fix_high</span>
                Book Your Quest
              </Link>
            </div>
          </div>

          <div className="hero__mascot-wrap">
            <div className="hero__mascot-glow"></div>
            <img
              src="/images/logo-mascot-transparent.png"
              alt="Wizard's Car Rental Service Mascot"
              className="hero__mascot animate-float"
            />
          </div>
        </div>
      </section>

      {/* ═══ THE ARSENAL ═══ */}
      <section 
        id="arsenal" 
        ref={arsenalRef}
        className={`arsenal section-gap ${arsenalActive ? 'animate-root--active' : 'animate-root'}`}
      >
        <div className="container">
          {/* Magical Section Header */}
          <div className="section-header-area">
            <div className="section-overline">
              <span className="section-overline-line"></span>
              <span className="section-overline-text">✦ Enchanted Fleet ✦</span>
              <span className="section-overline-line"></span>
            </div>
            <h2 className="section-title">
              THE{" "}<span className="section-title-accent">ARSENAL</span>
            </h2>
            <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
              <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
              <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
              <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
            </svg>
            <p className="section-subtitle">Hand-picked steeds for every quest</p>
          </div>

          {/* Inline Stats */}
          <div className="arsenal__stats-row">
            <div className="arsenal__stat">
              <span className="arsenal__stat-number">4+</span>
              <span className="arsenal__stat-label">Premium Steeds</span>
            </div>
            <div className="arsenal__stat-divider"></div>
            <div className="arsenal__stat">
              <span className="material-symbols-outlined arsenal__stat-icon">calendar_today</span>
              <span className="arsenal__stat-label">Daily / Weekly</span>
            </div>
            <div className="arsenal__stat-divider"></div>
            <div className="arsenal__stat">
              <span className="material-symbols-outlined arsenal__stat-icon">event_note</span>
              <span className="arsenal__stat-label">Monthly Rates</span>
            </div>
          </div>

          {/* Carousel */}
          <div className="carousel-showcase">
            {/* Big Background Text */}
            <div className="carousel-showcase__bg-text">
              {vehicles[activeIndex].name.split(' ')[0].toUpperCase()}
            </div>
            
            {/* Main Stage Ring */}
            <div className="carousel-showcase__stage"></div>

            {/* Slider Track */}
            <div className="carousel-showcase__track">
              {vehicles.slice(0, 4).map((vehicle, idx) => {
                let position = 'hidden'
                if (idx === activeIndex) position = 'active'
                else if (idx === (activeIndex - 1 + 4) % 4) position = 'prev'
                else if (idx === (activeIndex + 1) % 4) position = 'next'
                
                return (
                  <div className={`carousel-slide carousel-slide--${position}`} key={vehicle.id}>
                    <div className="carousel-slide__brand-bg">
                      {vehicle.name.split(' ')[0]}
                    </div>
                    <div className="carousel-slide__platform"></div>
                    <img 
                      src={vehicle.sideImage || vehicle.heroImage || vehicle.image} 
                      alt={vehicle.name} 
                      className="carousel-slide__img" 
                    />
                  </div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button className="carousel-control carousel-control--prev" onClick={prevVehicle}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="carousel-control carousel-control--next" onClick={nextVehicle}>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            {/* Bottom Details */}
            <div className="carousel-details">
              <div className="carousel-details__left">
                <h3 className="carousel-details__title">
                  {vehicles[activeIndex].id === 'toyota-fortuner-2026' ? 'TOYOTA FORTUNER' :
                   vehicles[activeIndex].id === 'toyota-innova-2025' ? 'TOYOTA INNOVA 2025 — "SHINY"' :
                   vehicles[activeIndex].id === 'mitsubishi-xpander-2025' ? 'MITSUBISHI XPANDER 2025 — "ASPHALT"' :
                   vehicles[activeIndex].id === 'nissan-livina-2023' ? 'NISSAN LIVINA 2023' :
                   vehicles[activeIndex].name.toUpperCase()}
                </h3>
                <p className="carousel-details__desc">
                  {vehicles[activeIndex].description}
                </p>
              </div>

              <div className="carousel-details__stats">
                <div className="carousel-stat">
                  <span className="material-symbols-outlined">event_seat</span>
                  <div className="carousel-stat__value">
                    {vehicles[activeIndex].seats} <span className="carousel-stat__label">SEATS</span>
                  </div>
                </div>
                <div className="carousel-stat">
                  <span className="material-symbols-outlined">local_gas_station</span>
                  <div className="carousel-stat__value">
                    {vehicles[activeIndex].id.includes('fortuner') || vehicles[activeIndex].id.includes('innova') ? '2.8L' : '1.5L'}{' '}
                    <span className="carousel-stat__label">{vehicles[activeIndex].fuel.toUpperCase()}</span>
                  </div>
                </div>
                <div className="carousel-stat">
                  <span className="material-symbols-outlined">settings</span>
                  <div className="carousel-stat__value">
                    {vehicles[activeIndex].transmission === 'Automatic' ? 'AUTO' : 'MANUAL'} <span className="carousel-stat__label">TRANS</span>
                  </div>
                </div>
              </div>

              <div className="carousel-details__action">
                <Link to="/fleet" className="btn-primary" style={{ padding: '12px 32px', borderRadius: 30, color: '#000', textDecoration: 'none', display: 'inline-block' }}>
                  View All Fleet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE RITES OF SUMMONING (RESERVATION) ═══ */}
      <section id="reservation" ref={ritesRef} className={`rites-section ${ritesActive ? 'rites-active' : ''}`}>
        <div className="container rites-container">
          
          <div className="section-header-area">
            <div className="section-overline">
              <span className="section-overline-line"></span>
              <span className="section-overline-text">✦ How to Book ✦</span>
              <span className="section-overline-line"></span>
            </div>
            <h2 className="section-title">
              THE RITES OF{" "}<span className="section-title-accent">SUMMONING</span>
            </h2>
            <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
              <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
              <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
              <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
            </svg>
            <p className="section-subtitle">
              Four simple steps to secure your steed for the journey ahead.
            </p>
          </div>

          <div className="rites-grid">
            {/* Step 1: Booking */}
            <div className="rites-card">
              <div className="rites-step-number">1</div>
              <div className="rites-card-inner">
                <div className="rites-icon-wrapper">
                  <span className="material-symbols-outlined rites-icon">calendar_month</span>
                </div>
                <h3 className="rites-card-title">The Request</h3>
                <p className="rites-card-body">
                  Send us your desired date and time of booking, the rental duration (hours/days), and your locations. Note: different locations may require different travel rates.
                </p>
              </div>
            </div>

            {/* Step 2: Validating */}
            <div className="rites-card">
              <div className="rites-step-number">2</div>
              <div className="rites-card-inner">
                <div className="rites-icon-wrapper">
                  <span className="material-symbols-outlined rites-icon">verified_user</span>
                </div>
                <h3 className="rites-card-title">The Credentials</h3>
                <p className="rites-card-body">
                  Kindly submit the required documents: a Valid ID and your Driver's License/LTMS (if self-driving). Additional documents may be requested if needed.
                </p>
              </div>
            </div>

            {/* Step 3: Security Deposit */}
            <div className="rites-card">
              <div className="rites-step-number">3</div>
              <div className="rites-card-inner">
                <div className="rites-icon-wrapper">
                  <span className="material-symbols-outlined rites-icon">payments</span>
                </div>
                <h3 className="rites-card-title">The Soul Link</h3>
                <p className="rites-card-body">
                  A security deposit of ₱500 is collected before booking confirmation. This protects your date/unit and is non-refundable upon cancellation, but will be deducted from your final rate upon delivery.
                </p>
              </div>
            </div>

            {/* Step 4: Confirmation */}
            <div className="rites-card">
              <div className="rites-step-number">4</div>
              <div className="rites-card-inner">
                <div className="rites-icon-wrapper">
                  <span className="material-symbols-outlined rites-icon">task_alt</span>
                </div>
                <h3 className="rites-card-title">The Manifestation</h3>
                <p className="rites-card-body">
                  Once everything is completed and verified by the Council, you will receive a Booking Confirmation message containing your complete trip details.
                </p>
              </div>
            </div>
          </div>

          <div className="rites-action">
            <Link to="/profile" className="btn-primary" style={{ padding: '16px 48px', fontSize: '18px', textDecoration: 'none', display: 'inline-block' }}>
              Begin the Summoning (Book Now)
            </Link>
          </div>

        </div>
      </section>

      {/* ═══ THE ORIGIN ═══ */}
      <section id="about" ref={storyRef} className={`origin-section ${storyActive ? 'story-active' : ''}`}>
        <div className="container origin-container">
          
          <div className="section-header-area">
            <div className="section-overline">
              <span className="section-overline-line"></span>
              <span className="section-overline-text">✦ Our Origin ✦</span>
              <span className="section-overline-line"></span>
            </div>
            <h2 className="section-title">
              CODEX OF THE{" "}<span className="section-title-accent">WIZARD'S</span>
            </h2>
            <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
              <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
              <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
              <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
            </svg>
            <p className="section-subtitle">
              A tale of trust, wheels, and a little magic — from Kawit, Cavite
            </p>
          </div>

          <div className="origin-scroll">
            {/* Top Cap */}
            <div className="origin-scroll-cap origin-scroll-cap--top"></div>

            {/* Unfolder Wrapper */}
            <div className="origin-scroll-unfolder">
              <div className="origin-scroll-body-wrapper">
                {/* Scroll Body */}
                <div className="origin-scroll-body">
                  <div className="origin-watermark"></div>
                  
                  {/* Corner Flourishes */}
                  <div className="origin-corner origin-corner--tl">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 44 C4 24, 4 4, 24 4" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <path d="M4 44 C24 44, 44 44, 44 24" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <circle cx="4" cy="4" r="2.5" fill="#8B5E20"/>
                      <circle cx="44" cy="44" r="2.5" fill="#8B5E20"/>
                      <circle cx="4" cy="44" r="3.5" fill="none" stroke="#8B5E20" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="origin-corner origin-corner--tr">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 44 C4 24, 4 4, 24 4" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <path d="M4 44 C24 44, 44 44, 44 24" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <circle cx="4" cy="4" r="2.5" fill="#8B5E20"/>
                      <circle cx="44" cy="44" r="2.5" fill="#8B5E20"/>
                      <circle cx="4" cy="44" r="3.5" fill="none" stroke="#8B5E20" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="origin-corner origin-corner--bl">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 44 C4 24, 4 4, 24 4" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <path d="M4 44 C24 44, 44 44, 44 24" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <circle cx="4" cy="4" r="2.5" fill="#8B5E20"/>
                      <circle cx="44" cy="44" r="2.5" fill="#8B5E20"/>
                      <circle cx="4" cy="44" r="3.5" fill="none" stroke="#8B5E20" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="origin-corner origin-corner--br">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 44 C4 24, 4 4, 24 4" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <path d="M4 44 C24 44, 44 44, 44 24" stroke="#8B5E20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <circle cx="4" cy="4" r="2.5" fill="#8B5E20"/>
                      <circle cx="44" cy="44" r="2.5" fill="#8B5E20"/>
                      <circle cx="4" cy="44" r="3.5" fill="none" stroke="#8B5E20" strokeWidth="1.5"/>
                    </svg>
                  </div>

                  {/* Floating particles - dynamic rendering to eliminate idle animation CPU/GPU load */}
                  {storyActive && (
                    <div className="origin-particles">
                      <span className="origin-particle p1"></span>
                      <span className="origin-particle p2"></span>
                      <span className="origin-particle p3"></span>
                      <span className="origin-particle p4"></span>
                      <span className="origin-particle p5"></span>
                      <span className="origin-particle p6"></span>
                      <span className="origin-particle p7"></span>
                      <span className="origin-particle p8"></span>
                    </div>
                  )}

                  <div className="origin-scroll-content">
                    {/* Scroll Inner Title */}
                    <div className="origin-inner-header ink-reveal-target">
                      <div className="origin-inner-title-wrap">
                        <h3 className="origin-inner-title">✦ The Grand Chronicle ✦</h3>
                      </div>
                      <div className="origin-ink-divider"></div>
                    </div>

                    <div className="origin-scroll-grid">
                      {/* Left Column - Team Photo Frame */}
                      <div className={`origin-frame-col ${storyActive ? 'frame-reveal' : ''}`}>
                        <div className="origin-photo-frame">
                          <div className="origin-frame-inner">
                            <div className="origin-photo-placeholder">
                              <span className="origin-photo-icon">
                                <img src="/images/logo-mascot-circular.png" alt="Wizards Logo" style={{ width: '50px', height: '50px' }} loading="lazy" />
                              </span>
                              <span className="origin-photo-text">The Council Awaits...</span>
                            </div>
                            {/* TEAM PHOTO: Replace src="" with actual team photo path */}
                            <img 
                              id="team-photo"
                              src="/images/wizards-team.png" 
                              alt="The Wizard's Council Team" 
                              className="origin-photo-img"
                              loading="lazy"
                            />
                          </div>
                          <div className="origin-nameplate">The Wizard's Council</div>
                        </div>
                      </div>

                      {/* Right Column - Text Content */}
                      <div className="origin-text-col">
                        <div className="origin-text-block ink-reveal-target">
                          <span className="origin-roman">I</span>
                          <div>
                            <h4 className="origin-block-heading">The Founding</h4>
                            <p className="origin-block-body">
                              Every great quest begins with a reliable steed. At <strong className="origin-highlight">Wizard's Car Rental Service</strong>, we don't just provide transportation — we provide the magical missing piece to your journey. Our council of automotive experts ensures that every vehicle is more than a machine — it's a carefully tuned artifact ready for your command.
                            </p>
                          </div>
                        </div>

                        <div className="origin-text-divider ink-reveal-target">
                          <svg width="200" height="20" viewBox="0 0 200 20">
                            <line x1="0" y1="10" x2="80" y2="10" stroke="#8B5E20" strokeWidth="1" opacity="0.4"/>
                            <path d="M90 10 C95 4, 105 4, 110 10 C105 16, 95 16, 90 10Z" fill="#8B5E20" opacity="0.5"/>
                            <line x1="120" y1="10" x2="200" y2="10" stroke="#8B5E20" strokeWidth="1" opacity="0.4"/>
                          </svg>
                        </div>

                        <div className="origin-text-block ink-reveal-target">
                          <span className="origin-roman">II</span>
                          <div>
                            <h4 className="origin-block-heading">The Sanctum</h4>
                            <p className="origin-block-body">
                              Born in Kawit, Cavite, our sanctum was established to bring a new level of trust and transparency to the realm. We've hand-picked each member of our team for their technical sorcery and dedication to customer service.
                            </p>
                          </div>
                        </div>

                        <blockquote className="origin-mission ink-reveal-target">
                          <span className="origin-quote-mark">❝</span>
                          <p className="origin-mission-text">
                            Our mission is to empower every traveler with the right artifact for their adventure, ensuring every mile is enchanted with comfort and safety.
                          </p>
                          <footer className="origin-mission-footer">— The Wizard's Council</footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wax Seal - lazy load image */}
            <div className={`origin-seal ${storyActive ? 'seal-stamp' : ''}`}>
              <div className="origin-seal-inner"></div>
              <div className="origin-seal-emblem">
                <img src="/images/logo-mascot-circular.png" alt="Wizards Seal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" />
              </div>
            </div>

            {/* Left Side Ceremonial Candle */}
            <div className="origin-ceremonial-candle origin-ceremonial-candle--left">
              <div className="origin-candle-flame"><div className="origin-candle-glow"></div></div>
              <div className="origin-candle-wick"></div>
              <div className="origin-candle-body">
                <div className="origin-candle-drip"></div>
                <div className="origin-candle-drip" style={{ top: '35px', left: '3px', height: '30px', width: '5px' }}></div>
              </div>
              <div className="origin-candle-stand">
                <div className="origin-candle-cup"></div>
                <div className="origin-candle-base"></div>
              </div>
            </div>

            {/* Right Side Ceremonial Candle */}
            <div className="origin-ceremonial-candle origin-ceremonial-candle--right">
              <div className="origin-candle-flame" style={{ animationDelay: '0.4s' }}><div className="origin-candle-glow"></div></div>
              <div className="origin-candle-wick"></div>
              <div className="origin-candle-body">
                <div className="origin-candle-drip"></div>
                <div className="origin-candle-drip" style={{ top: '45px', right: '2px', height: '25px', width: '5px' }}></div>
              </div>
              <div className="origin-candle-stand">
                <div className="origin-candle-cup"></div>
                <div className="origin-candle-base"></div>
              </div>
            </div>

            {/* Bottom Cap */}
            <div className="origin-scroll-cap origin-scroll-cap--bottom"></div>
          </div>
        </div>
      </section>

      {/* ═══ CLIENT TESTIMONIALS ═══ */}
      <section id="mana" className={`core-mana-section ${valuesActive ? 'core-active' : ''}`} ref={valuesRef}>
        {/* Floating particles - only rendered when reviews section is active to save GPU cycles */}
        {valuesActive && (
          <div className="core-particles">
            <span className="core-particle cp1"></span>
            <span className="core-particle cp2"></span>
            <span className="core-particle cp3"></span>
            <span className="core-particle cp4"></span>
            <span className="core-particle cp5"></span>
            <span className="core-particle cp6"></span>
            <span className="core-particle cp7"></span>
            <span className="core-particle cp8"></span>
            <span className="core-particle cp9"></span>
            <span className="core-particle cp10"></span>
          </div>
        )}

        <div className="container core-container">
          {/* Section Header */}
          <div className="section-header-area">
            <div className="section-overline">
              <span className="section-overline-line"></span>
              <span className="section-overline-text">✦ Client Testimonials ✦</span>
              <span className="section-overline-line"></span>
            </div>
            <h2 className="section-title">
              REAL WIZARDS'{" "}<span className="section-title-accent">REVIEWS</span>
            </h2>
            <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
              <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
              <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
              <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
            </svg>
            <p className="section-subtitle">
              Real reviews and magical summonings from our satisfied guild members
            </p>
          </div>

          {/* Cards Grid */}
          <div className="core-grid">
            {/* CARD 1: Earl Luis L. Javier */}
            <div 
              className={`core-card ${hoveredCard === 0 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--accent': '#38C8F0' }}
            >
              <div className="core-sigil">
                <div className="core-sigil-ring rotate-normal"></div>
                <div className="core-sigil-inner customer-avatar-glow">
                  <span className="customer-avatar-initials">EJ</span>
                </div>
              </div>
              
              <div className="customer-rating">
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
              </div>

              <h3 className="core-card-title">EARL LUIS L. JAVIER</h3>
              
              <div className="customer-badge">
                <span className="fb-recommend-icon">👍</span> Recommends Wizards
              </div>

              <p className="core-card-body">
                "Good Services in an affordable manner."
              </p>
              <div className="core-card-line"></div>
            </div>

            {/* CARD 2 - FEATURED: Cedrex Tuazon */}
            <div 
              className={`core-card core-card--featured ${hoveredCard === 1 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--accent': '#C9A84C' }}
            >
              <div className="core-sigil">
                <div className="core-sigil-ring rotate-reverse"></div>
                <div className="core-sigil-inner customer-avatar-glow">
                  <span className="customer-avatar-initials">CT</span>
                </div>
              </div>

              <div className="customer-rating">
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
              </div>

              <h3 className="core-card-title">CEDREX TUAZON</h3>

              <div className="customer-badge">
                <span className="fb-recommend-icon">👍</span> Recommends Wizards
              </div>

              <p className="core-card-body">
                "Solid experience sa Wizards Car Rental! Madali kausap, mabilis ang proseso, tsaka maayos ang mga sasakyan. Malinis, well-maintained, at sulit sa presyo."
              </p>
              <div className="core-card-line"></div>
            </div>

            {/* CARD 3: Rainier Ace H. Cabatuando */}
            <div 
              className={`core-card ${hoveredCard === 2 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--accent': '#9B7FD4' }}
            >
              <div className="core-sigil">
                <div className="core-sigil-ring rotate-normal"></div>
                <div className="core-sigil-inner customer-avatar-glow">
                  <span className="customer-avatar-initials">RC</span>
                </div>
              </div>

              <div className="customer-rating">
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
              </div>

              <h3 className="core-card-title">RAINIER ACE CABATUANDO</h3>

              <div className="customer-badge">
                <span className="fb-recommend-icon">👍</span> Recommends Wizards
              </div>

              <p className="core-card-body">
                "Good service! madali kausap!"
              </p>
              <div className="core-card-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE SANCTUM ═══ */}
      <section id="sanctum" ref={sanctumRef} className="sanctum section-gap">
        <div className="container">
          {/* Envelope Header */}
          <div className={`sanctum__envelope ${sanctumActive ? 'sanctum__envelope--opened' : ''}`}>
            <div className="sanctum__seal">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div className="sanctum__envelope-label">Sanctum Located</div>
          </div>

          {/* Content that "opens up" */}
          <div className={`sanctum__content ${sanctumActive ? 'sanctum__content--revealed' : ''}`}>
            {/* Title */}
            <div className="section-header-area">
              <div className="section-overline">
                <span className="section-overline-line"></span>
                <span className="section-overline-text">✦ Our Sanctum ✦</span>
                <span className="section-overline-line"></span>
              </div>
              <h2 className="section-title">
                FIND THE{" "}<span className="section-title-accent">WIZARD</span>
              </h2>
              <svg className="section-divider" width="300" height="16" viewBox="0 0 300 16">
                <line x1="0" y1="8" x2="120" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
                <path d="M130 8 L140 3 L150 8 L140 13 Z" fill="#C9A84C" opacity="0.6"/>
                <circle cx="150" cy="8" r="3" fill="#C9A84C" opacity="0.8"/>
                <path d="M160 8 L170 3 L180 8 L170 13 Z" fill="#C9A84C" opacity="0.6"/>
                <line x1="180" y1="8" x2="300" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
              </svg>
              <p className="section-subtitle">
                Visit our physical sanctum in Kawit, Cavite for direct counsel and summonings
              </p>
            </div>

            {/* Main Grid */}
            <div className="sanctum__grid">
              {/* Photo - lazy loaded image below fold */}
              <div className="sanctum__photo-wrap">
                <img 
                  src="/images/rosedale-entrance.png" 
                  alt="Rosedale Residences — Wizard's Sanctum Location" 
                  className="sanctum__photo"
                  loading="lazy"
                />
                <div className="sanctum__photo-caption">
                  <span className="material-symbols-outlined">place</span>
                  Rosedale Residences Entrance
                </div>
              </div>

              {/* Map */}
              <div className="sanctum__map">
                <iframe
                  title="Wizard's Sanctum Location"
                  src="https://www.google.com/maps?q=14.41419,120.9026&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="sanctum__info">
                <div className="sanctum__info-card">
                  <div className="sanctum__info-item">
                    <span className="material-symbols-outlined sanctum__info-icon">castle</span>
                    <div>
                      <strong>Headquarters</strong>
                      <p>Rosedale Residences<br />San Sebastian, Kawit<br />Cavite, Philippines</p>
                    </div>
                  </div>
                  <div className="sanctum__info-item">
                    <span className="material-symbols-outlined sanctum__info-icon">call</span>
                    <div>
                      <strong>Summon Us</strong>
                      <p>+63 0915-772-2706</p>
                    </div>
                  </div>
                  <div className="sanctum__info-item">
                    <span className="material-symbols-outlined sanctum__info-icon">schedule</span>
                    <div>
                      <strong>Portal Hours</strong>
                      <p>Open Daily<br />8:00 AM — 8:00 PM</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rosedale+Residences+San+Sebastian+Kawit+Cavite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sanctum__directions-btn"
                  >
                    <span className="material-symbols-outlined">navigation</span>
                    Get Directions
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
