import React from 'react'
import classes from "./navbar.modules.css"
import {navLinks} from "../../data/data"



function navbar() {
  return (
     <nav className={classes.nav}>
        <img src="" alt="" />
        <div className={classes.navlinks}>
            {navLinks.map(({name,link}) => {
                return <a href={link}> {name}</a>
            })}
        </div>
     </nav>
  )
}

export default navbar