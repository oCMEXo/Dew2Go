import { CheckCircle2 } from "lucide-react"
import "./ServicesSection.css"

export default function ServicesSection() {
  const services = [
    "Faster Hiring Process",
    "Cost-Effectiveness",
    "Scalability and Flexibility",
    "Project Continuity",
    "Reduced Risk",
    "Access to Global Talent Pool",
    "Focus on Core Business",
  ]

  const benefits = [
    {
      title: "Speed & Efficiency",
      description: "Quickly access top-tier talent to meet your urgent needs.",
    },
    {
      title: "Proven Expertise",
      description: "Our team consists of experienced professionals with diverse expertise across various industries.",
    },
    {
      title: "Tailored Solutions",
      description: "We match talent based on your specific requirements, delivering optimized results.",
    },
    {
      title: "Long-term Partnership",
      description: "We are invested in your success, building ongoing, mutually beneficial relationships.",
    },
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-wrapper">
          <div className="services-list">
            <div className="services-header">
              <h2 className="services-title">IT & Business Solutions</h2>
              <p className="services-subtitle">Comprehensive services designed to accelerate your business growth</p>
            </div>
            <div className="services-grid">
              {services.map((item, index) => (
                <div key={index} className="service-item">
                  <CheckCircle2 className="service-icon" />
                  <span className="service-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits-section">
            <div className="benefits-header">
              <h2 className="benefits-title">Why Choose Dev2Go</h2>
              <p className="benefits-subtitle">
                Let us help you accelerate growth and achieve your business goals with a trusted partner in IT staff
                augmentation
              </p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
