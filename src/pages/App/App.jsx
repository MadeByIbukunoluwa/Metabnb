import { useState,createContext } from 'react'
import './App.css'
import Hero from '../../components/HeroSection/hero'
import Banner from '../../components/Banner/banner'
import Section1 from '../../components/Section1/section1'
import Section2 from '../../components/Section2/section2'
import Footer from '../../components/Footer/footer'
import Modal from '../../components/Modal/modal'

export const AppContext = createContext(()=> {})

    function App() {
      const [showModal, setShowModal] = useState(false)
        function toggleModal () {
            setShowModal(() => !showModal) 
        }
              return (
                <>
                <AppContext.Provider value={toggleModal}>
                      <Hero/>
                      {showModal && <Modal/>}
                      <Banner/>
                      <Section1/>
                      <Section2/>
                      <Footer/>
                </AppContext.Provider>
                </>
              )
            }

export default App

