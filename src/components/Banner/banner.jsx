import React from 'react'
import classes from './banner.module.css'




function Banner() {
  return (
    <section className={classes.banner}>
      <div className={classes.logo_container}>
        <img src="/assets/icons/MbToken-icon.svg" alt="Mbtoken" />
        <img src="/assets/icons/MetaMask-icon.svg" alt="MetaMask" />
        <img src="/assets/icons/OpenSea-icon.svg" alt="OpenSea" />
      </div>
    </section>
  );
}

export default Banner