

import React from 'react'
import classes from './card.module.css'




function Card({ image,name,price, distance, availability,rating }) {
  return (
    <div className={classes.card_container}>
      <div className={classes.image_container}>
        <img src={image} alt="" />
      </div>
      <div className={classes.details}>

        <div className={classes.text_container1}>
          <span className={classes.text_small}>{name}</span>
          <h1 className={classes.text_small}>{price}</h1>
        </div>

        <div className={classes.text_container2}>
          <span className={classes.text_small}>{distance}</span>
          <span className={classes.text_small}>{availability}</span>
        </div>

        <div className={classes.stars}>
          {[...Array(rating)].map((value = undefined) => {
            return (
              <img src="/assets/icons/Star.svg" key={Math.random() * 10000} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card