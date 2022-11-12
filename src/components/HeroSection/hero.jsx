import React from 'react'
import Navbar from '../Navbar/navbar'
import classes from "./hero.module.css"





function Hero () {
  return (
    <section className = {classes.hero}>
        <Navbar/>
    </section>
  )
}

export default Hero