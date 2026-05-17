import './Privacy.css'

export default function Privacy() {
  return (
    <div className="privacy-page">
      <div className="privacy-magic-bg">
        <div className="privacy-aura pr-aura-1"></div>
        <div className="privacy-aura pr-aura-2"></div>
      </div>

      <div className="container privacy-container">
        {/* Section Header */}
        <div className="privacy-header-area">
          <div className="privacy-overline">
            <span className="privacy-overline-line"></span>
            <span className="privacy-overline-text">✦ COVENANT OF SECRETS ✦</span>
            <span className="privacy-overline-line"></span>
          </div>
          <h1 className="privacy-main-title">PRIVACY POLICY</h1>
          <p className="privacy-subtitle">
            How the Wizarding Guild handles your personal scrolls, credentials, and digital signatures.
          </p>
        </div>

        {/* The Scroll Glass Container */}
        <div className="privacy-scroll-card">
          <div className="scroll-content">
            
            <section className="scroll-section">
              <h2 className="scroll-section-title">I. The Gathering of Scrolls (Information Collection)</h2>
              <p>
                To authorize any carriage summoning, the Guild must collect specific identity sigils. When you register a sanctum account or summon a vehicle, we require:
              </p>
              <ul>
                <li><strong>Identity Credentials:</strong> Your legal wizard name, physical sanctum residence, communication line, and realm email.</li>
                <li><strong>Verification Artifacts:</strong> Government-issued ID cards and your realm Driver's License, audited securely by the Wizarding Council.</li>
                <li><strong>Financial Mana:</strong> Payment details and card hashes to settle gold coin requirements. We do not store raw card numbers; they are encrypted using high-level security shields.</li>
              </ul>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">II. Casting Protection Wards (Data Security)</h2>
              <p>
                The security of your personal scrolls is of absolute importance to the Guild. We employ robust defensive protective spells to prevent unauthorized access:
              </p>
              <p>
                All data transfers are protected under secure cryptographic transport wards (SSL/TLS). Physical records of verification documents are shielded behind multiple access-restriction spells and kept in secure digital vaults. Only authorized Council Auditors may inspect submitted credentials.
              </p>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">III. The Alchemy of Cookies (Digital Tracking)</h2>
              <p>
                Our digital sanctum utilizes small browser cookies (known as Theme Orbs) to store state, such as keeping your selected interface in Dark Mode or Light Mode, preserving your active booking calendar selections, and analyzing sanctum performance. You may disable cookies in your browser settings, though doing so might cause certain visual spells to malfunction.
              </p>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">IV. Share of Secrets (Third-Party Disclosure)</h2>
              <p>
                The Guild will never sell, barter, or trade your personal scrolls to external mercenary guilds or advertising circles. We only share information with:
              </p>
              <ul>
                <li><strong>Council Helpers:</strong> Trusted verification agencies who audit driver credentials.</li>
                <li><strong>The Royal Law:</strong> In extreme events where supreme royal warrants are served, we may disclose details to comply with Cavite and national legal statutes.</li>
              </ul>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">V. Rights of the Summoner</h2>
              <p>
                You hold the power to review, correct, or summon a destruction spell on your personal data from our systems. Contact our Grand Archivists at any cycle to update your sanctum profile or revoke submitted credentials.
              </p>
            </section>

            <section className="scroll-section contact-archivist">
              <h3 className="archivist-title">✦ Summon the Arch-Archivist ✦</h3>
              <p>
                If you have questions regarding the Covenant of Secrets, address your inquiries to the Wizard's Council at:
              </p>
              <p className="archivist-email">wizardcarrental@gmail.com</p>
              <p className="archivist-phone">Hotline: +63 0915-772-2706</p>
            </section>

          </div>
        </div>

      </div>
    </div>
  )
}
