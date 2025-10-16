import Header  from "./Component/Header/Header"
import  HeroSection  from "./Component/HeroSection/HeroSection"
import  AboutSection  from "./Component/AboutSection/AboutSection"
import  ServicesSection  from "./Component/ServicesSection/ServicesSection"
import  TeamSection  from "./Component/TeamSection/TeamSection"
import  ContactSection  from "./Component/ContactSection/ContactSection"
import  Footer  from "./Component/Footer/Footer"

function App() {
  return (
    <div className="app">
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

export default App
