import React,{ useContext } from 'react'
import classes from "./navbar.module.css"
import {navLinks} from "../../data/data"
import MetaBnbHome from "../../assets/icons/Metabnb-home-colored.svg";
import MetaBnbLogo from "../../assets/icons/Metabnb-logo-colored.svg";
import { AppContext } from '../../pages/App/App';

function Navbar () {
    const {openModal} = useContext(AppContext)
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={MetaBnbHome} alt="Meta-bnb-home-icon" />
        <img src={MetaBnbLogo} alt="Meta-bnb-logo-icon" />
      </div>
      <div className={classes.navlinks}>
        {navLinks.map(({ name, link,id}) => {
          return <a key = {id}href={link}> {name}</a>;
        })}
      </div>
      <button className={classes.navbutton} onClick = {openModal}>Connect Wallet</button>
    </nav>
  );
}

export default Navbar