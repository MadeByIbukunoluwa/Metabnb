import React from 'react'
import classes from './banner.module.css'
import Metamask from '../../assets/images/MetaMask.svg'
import OpenSea from '../../assets/images/OpenSea.svg'
import MbToken from '../../assets/images/MbToken.svg'
function Banner() {
  return (
 <section className={classes.banner}>
    <div className={classes.logo_container}>
        <img src={MbToken} alt="Mbtoken" />
        <img src={Metamask} alt="MetaMask" />
        <img src={OpenSea} alt="OpenSea" />
    </div>
 </section>

  )
}

export default Banner