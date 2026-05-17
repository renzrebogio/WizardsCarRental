import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__accent-bar"></div>
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand">
            <img src="/images/logo-mascot-circular.png" alt="Wizard's Logo" className="footer__logo" />
            <img src="/images/logo-text-final.png" alt="Wizard's Text" className="footer__logo-text" />
          </Link>
          <p className="footer__tagline">
            Your magical journey begins here. Premium vehicles for every quest.
          </p>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__heading">Quick Spells</h4>
          <nav className="footer__nav">
            <Link to="/privacy" className="footer__link">Privacy Policy</Link>
            <Link to="/terms" className="footer__link">Terms of Service</Link>
            <Link to="/faq" className="footer__link footer__link--highlight">FAQ</Link>
            <Link to="/rates" className="footer__link">Summoning Rates</Link>
          </nav>
        </div>

        <div className="footer__contact-col">
          <h4 className="footer__heading">Contact</h4>
          <a href="tel:+639157722706" className="footer__contact-item">
            <span className="material-symbols-outlined footer__icon">phone</span>
            <span>+63 0915-772-2706</span>
          </a>
          <a href="mailto:wizardcarrental@gmail.com" className="footer__contact-item">
            <span className="material-symbols-outlined footer__icon">mail</span>
            <span>wizardcarrental@gmail.com</span>
          </a>
          <a
            href="https://maps.google.com/?q=Rosedale+Residences+San+Sebastian+Kawit+Cavite"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-item"
          >
            <span className="material-symbols-outlined footer__icon">location_on</span>
            <span>Rosedale Residences, Kawit, Cavite</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2024 Wizard's Car Rental Service. All magical rights reserved.</p>
      </div>
    </footer>
  )
}
