


import React from 'react'
import classes from './button.module.css'


function Button({children,onClick}) {
  return (
     <button className={classes.button} onClick = {onClick}>
        {children}
    </button>

  )
}

export default Button


