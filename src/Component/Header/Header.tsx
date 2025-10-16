import "./Header.css"

import logo from '../../assets/Logo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <a href="/" className="header-logo">
            <div className="header-logo-icon">
              <span><img className="header-logo-dew2go" src={logo} alt="" /></span>
            </div>
            <span className="header-logo-text">Dev2Go</span>
          </a>

          <nav className="header-nav">
            <a href="#about" className="header-nav-link">
              About
            </a>
            <a href="#services" className="header-nav-link">
              Services
            </a>
            <a href="#team" className="header-nav-link">
              Team
            </a>
            <a href="#contact" className="header-nav-link">
              Contact
            </a>
            <button className="header-button">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  )
}
