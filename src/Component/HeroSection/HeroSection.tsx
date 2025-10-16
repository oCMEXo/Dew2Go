import "./HeroSection.css"


import developer from '../../../src/assets/image.png'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">IT Staff Augmentation</div>
            <h1 className="hero-title">Staff Augmentation Services</h1>
            <p className="hero-description">
              Enhance your team with talented software engineers, DevOps and SRE specialists, detail-oriented QA
              experts, seasoned project managers, and insightful business analysts.
            </p>
            <div className="hero-buttons">
              <button className="hero-button-primary">Contact Us</button>
              <button className="hero-button-secondary">Learn More</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={developer} alt="Professional developer workspace" />
          </div>
        </div>
      </div>
    </section>
  )
}
