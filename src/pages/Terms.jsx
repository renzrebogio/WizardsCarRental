import './Terms.css'

export default function Terms() {
  return (
    <div className="terms-page">
      <div className="terms-magic-bg">
        <div className="terms-aura t-aura-1"></div>
        <div className="terms-aura t-aura-2"></div>
      </div>

      <div className="container terms-container">
        {/* Section Header */}
        <div className="terms-header-area">
          <div className="terms-overline">
            <span className="terms-overline-line"></span>
            <span className="terms-overline-text">✦ THE DECREE OF SUMMONING ✦</span>
            <span className="terms-overline-line"></span>
          </div>
          <h1 className="terms-main-title">TERMS OF SERVICE</h1>
          <p className="terms-subtitle">
            The binding legal covenant between the carriage passenger and the high guild of Wizards Car Rental.
          </p>
        </div>

        {/* The Scroll Glass Container */}
        <div className="terms-scroll-card">
          <div className="scroll-content">
            
            <section className="scroll-section">
              <h2 className="scroll-section-title">I. Eligibility of the Summoner (Age & License)</h2>
              <p>
                To summon any carriage from our sanctum, the primary driver must meet the following strict prerequisites:
              </p>
              <ul>
                <li><strong>Age Restriction:</strong> You must have completed at least 21 solar cycles (years of age).</li>
                <li><strong>Valid Spellbook:</strong> You must present a valid Government-Issued Driver’s License from this realm, indicating capability to command passenger vehicles.</li>
                <li><strong>Council Status:</strong> Your credentials must clear verification checks conducted by our Archivist Council prior to vehicle release.</li>
              </ul>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">II. Commands of the Steed (Usage Restrictions)</h2>
              <p>
                Enchanted vehicles are summoned for standard passenger travels and noble quests. They must not be commanded under any of the following restrictions:
              </p>
              <ul>
                <li>Do not command the vehicle under the influence of illegal elixirs or magical potions.</li>
                <li>Do not use vehicles for tow-spell summons, drag-racing tournaments, or off-road mud battles unless the vehicle is explicitly rated as a 4x4 (such as the Toyota Fortuner).</li>
                <li>Do not transport illegal scrolls, hazardous potions, or contraband.</li>
                <li>Ensure you feed the vehicle correct fuel alchemy. For example, <strong>Toyota Fortuner</strong> and <strong>Toyota Innova</strong> run on diesel; feeding them gasoline will break the carriage and invoke a heavy repair fee.</li>
              </ul>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">III. The Alchemy of Fuel (Gasoline & Diesel Levels)</h2>
              <p>
                Wizards Car Rental delivers carriages to your sanctum with a pre-set level of gasoline/diesel (mana level). The summoner is required to return the carriage with the **exact same level** of fuel.
              </p>
              <p>
                If returned with deficient fuel levels, the Council will calculate and charge a fuel restoration penalty along with standard refilling fee.
              </p>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">IV. Tardiness Penalties (Late Return Decree)</h2>
              <p>
                Summoning agreements are bound by exact time cycles. Delays in returning the carriage disrupt subsequent quests scheduled by other wizards.
              </p>
              <p>
                A standard grace period of <strong>59 minutes</strong> is permitted. Returning the vehicle beyond this grace period will trigger late-return penalties calculated per cycle hour, or a full extra-day summoning charge if delayed by more than 3 hours without prior council approval.
              </p>
            </section>

            <section className="scroll-section">
              <h2 className="scroll-section-title">V. Collisions and defensive shields (Insurance & Damages)</h2>
              <p>
                Basic defensive magical wards (Comprehensive Insurance) are placed on all summoned vehicles. In the event of a collision or collision damage:
              </p>
              <ul>
                <li>The summoner must instantly secure an official police statement (Scroll of Truth) from local law enforcement and report the damage to the Guild Hotline.</li>
                <li>A standard participation fee (Enchantment Waiver fee) will be required from the driver to initiate defensive coverage.</li>
                <li>Failure to report collisions within 24 hours of occurrence will void the insurance spells, leaving the driver fully liable for total damage costs.</li>
              </ul>
            </section>

            <section className="scroll-section contact-archivist">
              <h3 className="archivist-title">✦ Bind the Covenant ✦</h3>
              <p>
                By completing a booking on this site, you officially seal this pact. For inquiries regarding the summoner's decree, contact the Wizard's Guild:
              </p>
              <p className="archivist-email">wizardcarrental@gmail.com</p>
              <p className="archivist-phone">Customer Guild Line: +63 0915-772-2706</p>
            </section>

          </div>
        </div>

      </div>
    </div>
  )
}
