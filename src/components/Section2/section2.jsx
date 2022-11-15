import React from 'react'
import classes from "./section2.module.css"



function Section2 () {
  return (
    <section className={classes.section2_container}>
      <div className={classes.section2_wrapper}>
        <div>
          <p className={classes.section2_maintext}>

          </p>
          <p className={classes.section2_subtext}>
              
          </p>

          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
        </div>

        <div className={classes.section2_imagescontainer}></div>
      </div>
    </section>
  );
}

export default Section2