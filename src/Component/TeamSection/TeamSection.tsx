import { Mail, Linkedin } from "lucide-react"
import "./TeamSection.css"

import alexImage from "../../assets/Alex.svg"
import milaImage from "../../assets/Mila.svg"

export default function TeamSection() {
  const team = [
    {
      name: "Alex Harminovich",
      role: "Chief Executive Officer",
      image: alexImage,
      email: "alex@dev2go.io",
      links: "https://www.linkedin.com/in/alex-harminovich/",
      bio: "Meet Our CEO: Alex Harminovich, our CEO, brings over 12 years of experience in sales with a client-centric approach that has always prioritised long-term value over quick wins. His philosophy has never been about making a sale at any cost, but about understanding the unique challenges each client faces and delivering solutions that drive real business growth. Now, as CEO, Alex continues to lead with the same dedication to fostering genuine partnerships. His extensive experience enables him to align our services with each client's goals, ensuring that our collaborations are rooted in trust, mutual success, and sustainable growth for all.",
    },
    {
      name: "Mila Chekanovskaya",
      role: "Chief Operating Officer",
      image: milaImage,
      email: "mila@dev2go.io",
      links: "https://www.linkedin.com/in/mila-chekanovskaya/",
      bio: "Meet Our COO:  Mila Chekanovskaya, Co-Founder and COO of Dev2Go, brings a rich, diverse background in business development, account management, and quality assurance to our team. With her extensive experience, Mila is dedicated to helping companies quickly and reliably find the right development resources to meet their unique needs. Whether you’re looking to scale your team with skilled developers or require flexible, on-demand expertise, Mila ensures that every solution is tailored to match your exact requirements. While Dev2Go is a new and ambitious startup, Mila’s deep industry knowledge and commitment to client success are at the core of our operations. Having worked in various roles—from Sales Manager to Account Manager—Mila has gained a comprehensive understanding of how successful partnerships are built from the ground up. Her experience allows her to see the bigger picture, ensuring that both clients and our company achieve meaningful, long-lasting outcomes.",
    },
  ]

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Leadership Team</h2>
          <div className="team-divider"></div>
        </div>

        <div className="team-wrapper">
          {team.map((member, index) => (
            <div key={member.name} className={`team-member ${index % 2 === 1 ? "team-member-reverse" : ""}`}>
              <div className="team-member-image">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
              </div>

              <div className="team-member-bio">
                <div className="team-member-info">
                  <p className="team-member-role">{member.role}</p>
                  <h3 className="team-member-name">{member.name}</h3>
                </div>
                <p className="team-member-text">{member.bio}</p>
                {member.email && (
                  <div className="team-member-contact">
                    <Mail className="team-member-icon" />
                    <a href={`mailto:${member.email}`} className="team-member-email">
                      {member.email}
                    </a>
                  </div>
                )}
                {member.links && (
                  <div className="team-member-contact">
                    <Linkedin className="team-member-icon" />
                    <a href={member.links} className="team-member-email">
                      Linkedin
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
