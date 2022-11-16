import React from 'react'
import classes from "./section2.module.css"



function Section2 () {
  return (
    <section className={classes.section2_container}>
      <div className={classes.section2_wrapper}>

        <div className={classes.section2_maintext}>
          <p className={classes.section2_headertext}>MetaBnb NFTs</p>
          <p className={classes.section2_subtext}>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button >Learn More</button>
        </div>

        <div className={classes.section2_imagescontainer}>
          <img src="/assets/images/Section-2-image.png" />
        </div>

      </div>
    </section>
  );
}

export default Section2