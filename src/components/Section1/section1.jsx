import React from 'react'
import classes from "./section1.module.css"
import {data} from '../../data/data'
import Card from '../Card/card';

function Section1 () {
  return (
    <section className={classes.section1_container}>

      <div className={classes.section1_wrapper}>

        <div>
             <p className={classes.section1_maintext}>
               Inspiration for the adventure
             </p>
        </div>

        <div className={classes.section1_cardscontainer}>
          {data.slice(4,8).map(
            ({ imageno, name, place, price, distance, availability, rating }) => {
              return (
                <Card
                  image={`/assets/images/image${imageno}.svg`}
                  name={name}
                  place={place}
                  price={price}
                  distance={distance}
                  availability={availability}
                  rating={rating}
                  key={Math.random() * 10000}
                />
              );
            }
          )}

          {data.slice(0,4).map(
            ({ imageno, name, place, price, distance, availability, rating }) => {
              return (
                <Card
                  image={`/assets/images/image${imageno}.svg`}
                  name={name}
                  place={place}
                  price={price}
                  distance={distance}
                  availability={availability}
                  rating={rating}
                  key={Math.random() * 10000}
                />
              );
            }
          )}
        </div>

      </div>

    </section>
  );
}

export default Section1