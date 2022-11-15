

import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import { data } from '../../data/data'
import classes from './placeToStay.module.css'
import Card from '../../components/Card/card'
// import Footer from '../../components/Footer/footer'




function PlaceToStay() {
  return (
    <>
      {/* <Navbar /> */}
      <section className={classes.main_container}>
        {/* <FilterPanel /> */}
        {data.map(
            ({
              imageno,
              name,
              place,
              price,
              distance,
              availability,
              rating,
            }) => {
              return (
                <Card
                  image={`/assets/images/image${imageno}.png`}
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
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default PlaceToStay