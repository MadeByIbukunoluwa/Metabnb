import React,{ useContext } from 'react'
import classes from "./navbar.module.css"
import {navLinks} from "../../data/data"
import { AppContext } from '../../pages/App/App';
import {Link} from 'react-router-dom'
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
            <Link key={id} to={link}>
              {name}
            </Link>
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

