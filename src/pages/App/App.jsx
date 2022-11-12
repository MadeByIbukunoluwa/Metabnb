import { useState } from 'react'
import './App.css'
import Hero from '../../components/HeroSection/hero'
import Banner from '../../components/Banner/banner'
import Section1 from '../../components/Section1/section1'
import Section2 from '../../components/Section2/section2'
import Footer from '../../components/Footer/footer'



        function App() {
          return (
            <>
             <Hero/>
             <Banner/>
             <Section1/>
             <Section2/>
             <Footer/>
            </>
          )

        }

export default App


