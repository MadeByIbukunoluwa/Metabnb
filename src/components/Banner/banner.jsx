import React from 'react'
import classes from './banner.module.css'
// import MbToken from '../../assets/images/MbToken.svg'
// import Metamask from '../../assets/images/MetaMask.svg'
// import OpenSea from '../../assets/images/OpenSea.svg'
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