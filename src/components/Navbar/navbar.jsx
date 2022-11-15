import React,{ useContext } from 'react'
import classes from "./navbar.module.css"
import {navLinks} from "../../data/data"
import { AppContext } from '../../pages/App/App';

function Navbar () {
    const {openModal} = useContext(AppContext)
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img
          src="/assets/icons/Metabnb-home-colored.svg"
          alt="Meta-bnb-home-icon"
        />
        <img src='/assets/icons/Metabnb-logo-colored.svg' alt="Meta-bnb-logo-icon" />
      </div>
      <div className={classes.navlinks}>
        {navLinks.map(({ name, link, id }) => {
          return (
            <a key={id} href={link}>
              {" "}
              {name}
            </a>
          );
        })}
      </div>
      <button className={classes.navbutton} onClick={openModal}>
        Connect Wallet
      </button>
    </nav>
  );
}

export default Navbar

