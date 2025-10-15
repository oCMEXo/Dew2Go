import  Header  from "../Component/header"
import HeroSection  from "../Component/hero-section"
import  AboutSection  from "../Component/about-section"
import  ServicesSection  from "../Component/services-section"
import  TeamSection  from "../Component/team-section"
import ContactSection  from "../Component/contact-section"
import  Footer  from "../Component/footer"


export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <TeamSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}
