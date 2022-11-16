import React from 'react'
import classes from "./section1.module.css"
import {data} from '../../data/data'
import Card from '../Card/card';
import ImageGrid from '../ImagesGrid/Imagesgrid';

function Section1 () {
  return (
    <ImageGrid>
      {data
        .slice(4, 8)
        .map(
          ({ imageno, name, place, price, distance, availability, rating }) => {
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

      {data
        .slice(0, 4)
        .map(
          ({ imageno, name, place, price, distance, availability, rating }) => {
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
  );
}

export default Section1