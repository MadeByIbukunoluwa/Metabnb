

import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import { data } from '../../data/data'
import classes from './placeToStay.module.css'
import Card from '../../components/Card/card'
import ImageGrid from '../../components/ImagesGrid/Imagesgrid'
import Footer from '../../components/Footer/footer'
import FilterPanel from './FilterPanel'



function PlaceToStay() {
  return (
    <>
      {/* <Navbar /> */}
      <div className={classes.main_container}>
        <FilterPanel />
        <ImageGrid>
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
        </ImageGrid>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default PlaceToStay