

import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import { data } from '../../data/data'
import classes from './placeToStay.module.css'
import Card from '../../components/Card/card'





function PlaceToStay() {
  return (
    <>
    <Navbar/>
    <section className={classes.main_container}>
        <FilterPanel/>
        {
            data.map(({image,name,place,price,distance,availability,rating})=> {
                return <Card 
                    imagepath = {`image${image}`}
                    name = {name}
                    place ={place}
                    price ={price}
                    distance = {distance}
                    availability = {availability}
                    rating = {rating}
                />
            })
        }
    </section>
    <Footer/>
    </>
  )
}

export default PlaceToStay