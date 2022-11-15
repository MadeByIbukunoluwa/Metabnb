import React from 'react'
import classes from "./footer.module.css"
import { footerLinks } from '../../data/data'




function Footer() {
  return (
    <section className={classes.footer_container}>
      <div className={classes.footer_wrapper}>

        <div className={classes.footerinfo_container}>

          <div className={classes.logo_container}>
             
          </div>

          <div className={classes.icons_container}>
            <img src="" alt="" />
          </div>

          <div className={classes.copyright}>

          </div>

        </div>
        {footerLinks.map(({ name, links }) => {
          return (
            <div className={classes.links_container}>
              <div>
                <h1>{name}</h1>
              </div>

              {links.map((item) => {
                return <a href="">{item}</a>;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Footer

