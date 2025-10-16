import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <span>D2G</span>
                </div>
                <span className="footer-logo-text">Dev2Go</span>
              </div>
              <p className="footer-description">
                Your trusted partner in IT staff augmentation. We connect businesses with top-tier technology
                professionals to drive growth and innovation.
              </p>
            </div>

            <div className="footer-links">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#about" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#team" className="footer-link">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-contact-title">Contact</h4>
              <ul className="footer-contact-list">
                <li>Warsaw, Poland</li>
                <li>ul.Malborska, 15</li>
                <li>
                  <a href="mailto:info@dev2go.io" className="footer-contact-link">
                    info@dev2go.io
                  </a>
                </li>
                <li>+48 543 268 122</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} Dev2Go. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
