

import classes from  './imagesgrid.module.css'




function ImageGrid({children}) {
  return (
    <section className={classes.section1_container}>
      <div className={classes.section1_wrapper}>
        <div className={classes.section1_maintext}>
          <p>Inspiration for the adventure</p>
        </div>
        <div className={classes.section1_cardscontainer}>
         {children}
        </div>
      </div>
    </section>
  );
}

export default ImageGrid
