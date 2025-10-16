import { MapPin, Phone, Mail } from "lucide-react"
import "./ContactSection.css"

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              Ready to enhance your team? Contact us to discuss your staffing needs.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-item-title">Office Location</h3>
                  <p className="contact-item-text">Warsaw, Poland</p>
                  <p className="contact-item-text">ul.Malborska, 15</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-item-title">Phone</h3>
                  <p className="contact-item-text">+48 543 268 122</p>
                  <p className="contact-item-text">+48 572 337 715</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-item-title">Email</h3>
                  <a href="mailto:info@dev2go.io" className="contact-email">
                    info@dev2go.io
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h3 className="contact-cta-title">Need to Fill IT Positions Fast?</h3>
            <p className="contact-cta-text">
              Our staff augmentation services provide skilled professionals within 2-3 weeks at competitive rates,
              ensuring rapid scalability without compromising quality. Whether you need software engineers, DevOps
              experts, or QA specialists, we have the right talent ready to integrate seamlessly into your team.
            </p>
            <button className="contact-button">Request Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}
