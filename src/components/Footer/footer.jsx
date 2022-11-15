import React from 'react'
import classes from "./footer.module.css"
import { footerLinks } from '../../data/data'




function Footer() {
  return (
    <section className={classes.footer_container}>
      <div className={classes.footer_wrapper}>



        <div className={classes.footerinfo_container}>
            
          <div className={classes.logo_container}>
            <img src="/assets/icons/Metabnb-white-logo.svg" alt="" />
          </div>
          <div className={classes.icons_container}>
            <img src="/assets/icons/Facebook.svg" alt="Facebook-icon" />
            <img src="/assets/icons/instagram.svg" alt="instagram-icon" />
            <img src="/assets/icons/twitter.svg" alt="twitter-icon" />
          </div>
          <div className={classes.copyright}>&copy; Metabnb</div>
        </div>



        {footerLinks.map(({ name, links }) => {
          return (
            <div className={classes.links_container}>
              <div key = {Math.random() * 1111111}>
                <h1>{name}</h1>
              </div>
              {links.map((item) => {
                return (
                  <span key = {Math.random() * 100000}>
                    <a href="">{item}</a>
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Footer

