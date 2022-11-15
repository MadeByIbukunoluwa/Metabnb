


import React from 'react'
import classes from './button.module.css'


function Button({children,onClick,className}) {
  return (
     <button className={`${classes.button} ${className}`} onClick = {onClick}>
        {children}
    </button>

  )
}

export default Button


