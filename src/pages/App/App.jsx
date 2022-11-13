import { useState,createContext } from 'react'
import './App.css'
import Hero from '../../components/HeroSection/hero'
import Banner from '../../components/Banner/banner'
import Section1 from '../../components/Section1/section1'
import Section2 from '../../components/Section2/section2'
import Footer from '../../components/Footer/footer'
import Modal from '../../components/Modal/modal'
import Navbar from '../../components/Navbar/navbar'

export const AppContext = createContext(()=> {})

    function App() {
      const [showModal, setShowModal] = useState(false)
        function openModal () {
            setShowModal(true) 
        }
        function closeModal () {
            setShowModal(false) 
        }
              return (
                <AppContext.Provider value={{openModal,closeModal}}>
                    <div className='app'>
                          <Hero/>
                          {showModal && <Modal/>}
                          <Banner/>
                          <Section1/>
                          <Section2/>
                          <Footer/>
                    </div>
                </AppContext.Provider>
              )
            }

export default App


