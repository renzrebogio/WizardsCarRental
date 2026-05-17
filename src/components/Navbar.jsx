import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  
  // Theme state: defaults to dark
  const [theme, setTheme] = useState(localStorage.getItem('wizards-theme') || 'dark')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('wizards-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [navigate])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo-mascot-circular.png" alt="Wizard's Logo" className="navbar__logo" />
          <img src="/images/logo-text-final.png" alt="Wizard's" className="navbar__logo-text" />
        </Link>

        <div className="navbar__links">
          <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Home</NavLink>
          <NavLink to="/fleet" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Our Fleet</NavLink>
          <NavLink to="/rates" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Rates</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Contact Us</NavLink>
        </div>

        <div className="navbar__actions">
          <button 
            className="navbar__theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <Link 
            to="/profile" 
            className="navbar__profile-btn" 
            aria-label="User Profile"
          >
            <span className="material-symbols-outlined">
              account_circle
            </span>
          </Link>
          
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/fleet" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Our Fleet</NavLink>
        <NavLink to="/rates" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Rates</NavLink>
        <NavLink to="/contact" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
      </div>
    </nav>
  )
}
