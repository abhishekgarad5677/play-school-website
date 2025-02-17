import './App.css'
import Navbar from './components/Navbar'

import AboutSection from './components/AboutSection'
import Banner from './components/Banner'
import UspSection from './components/UspSection'

function App() {

  return (
    <>
      <div className="bg-[url(../../public/background-cover.png)] h-[1000vh]  bg-cover bg-center bg-no-repeat relative bg-[#0095ff]">
        <Navbar />
        <Banner />
        <AboutSection />
        <UspSection />
      </div>

    </>
  )
}

export default App
