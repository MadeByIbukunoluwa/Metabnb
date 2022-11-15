import React from 'react'
import Navbar from '../Navbar/navbar'
import classes from "./hero.module.css"




function Hero () {
  return (
    <section className={classes.hero}>
      <Navbar />

      <div className={classes.hero_maincontainer}>

        <div className={classes.hero_textcontainer}>
          <div className={classes.hero_maintext}>
            <p>
              Rent a <span>Place</span> away from <span>Home</span> in the{" "}
              <span>Metaverse</span>
            </p>
          </div>

          <div className={classes.hero_subtext}>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
          <form className={classes.hero_input}>
            <input type="text" placeholder='search for location' />
            <button type="submit"> Search</button>
          </form>
          </div>

          
        </div>
          <div className={classes.image_container}>
            <img src='/assets/images/Hero-image.png' alt="hero-image" />
          </div>
      </div>
    </section>
  );
}

export default Hero