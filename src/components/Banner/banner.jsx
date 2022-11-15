import React from 'react'
import classes from './banner.module.css'




function Banner() {
  return (
    <section className={classes.banner}>
      <div className={classes.logo_container}>
        <img src="/assets/images/MbToken.svg" alt="Mbtoken" />
        <img src="/assets/images/MetaMask.svg" alt="MetaMask" />
        <img src="/assets/images/OpenSea.svg" alt="OpenSea" />
      </div>
    </section>
  );
}

export default Banner