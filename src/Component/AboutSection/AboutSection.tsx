import "./AboutSection.css"

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-header">
            <h2 className="about-title">About Dev2Go</h2>
            <div className="about-divider"></div>
          </div>

          <div className="about-grid">
            <div className="about-column">
              <h3 className="about-subtitle">Our Expertise</h3>
              <p className="about-text">
                At Dev2Go, our specialties lie in IT staff augmentation that helps businesses scale quickly and
                efficiently. Whether you need recruitment talent for a day, a month, or a year, we provide the
                flexibility and expertise to meet your unique needs.
              </p>
              <p className="about-text">
                Our approach is simple yet effective: we take the time to understand your unique challenges and match
                you with the right talent, ensuring seamless integration into your team.
              </p>
            </div>

            <div className="about-column">
              <h3 className="about-subtitle">Our Commitment</h3>
              <p className="about-text">
                Our commitment goes beyond filling roles—we aim to build lasting partnerships. With a proven track
                record in various industries, our experts are handpicked to align with your business objectives.
              </p>
              <p className="about-text">
                We ensure that both clients and our company achieve meaningful, long-lasting outcomes through strategic
                talent placement and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
