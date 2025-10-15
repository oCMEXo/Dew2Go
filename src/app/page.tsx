import { Header } from "../Component/header.tsx"
import { HeroSection } from "../Component/hero-section.tsx"
import { AboutSection } from "../Component/about-section.tsx"
import { ServicesSection } from "../Component/services-section.tsx"
import { TeamSection } from "../Component/team-section.tsx"
import { ContactSection } from "../Component/contact-section.tsx"
import { Footer } from "../Component/footer.tsx"

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
