import React from 'react'
import classes from "./footer.module.css"
import { footerLinks } from '../../data/data'




function Footer() {
  return (
    <section className={classes.footer_container}>
        <div className={classes.footer_wrapper}>
           <div>

           </div>
           {footerLinks.map(({name,links})=> {
             return (

             <div> 
                    <div>
                         <p>{name}</p>
                    </div>
                    {links.map((item)=>{
                        return <div>
                                    
                        </div>
                    })}
             </div>
             )
           })}
        </div>
    </section>
  )
}

export default Footer