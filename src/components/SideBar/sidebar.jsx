import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/data";
import {Drawer} from "@mui/material"
import '../../pages/App/App.css'
import Button from "../Button/button";
import { AppContext } from "../../pages/App/App";
import classes from './sidebar.module.css'
function Sidebar() {
    const { isDrawerOpen, setIsDrawerOpen,openModal } = useContext(AppContext);
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <nav className={classes.sidebar_nav}>
        <div className={classes.navlinks}>
          {navLinks.map(({ name, link, id }) => {
            return (
              <Link key={id} to={link}>
                {name}
              </Link>
            );
          })}
        </div>
        <Button onClick={openModal}>
         Connect Wallet 
        </Button>
      </nav>
    </Drawer>
  );
}

export default Sidebar;