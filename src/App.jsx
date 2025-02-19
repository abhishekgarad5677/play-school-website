import './App.css'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Banner from './components/Banner'
import UspSection from './components/UspSection'
import CurriculumSection from './components/CurriculumSection'
import SubscriptionSection from './components/SubscriptionSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {

  return (
    <>
      <div className="h-full bg-cover bg-center bg-no-repeat ">
        <Banner />
        <AboutSection />
        <UspSection />
        <CurriculumSection />
        <SubscriptionSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  )
}

export default App
