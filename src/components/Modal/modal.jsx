import { useContext,Fragment } from "react";
import React from "react-dom";
import { AppContext } from "../../pages/App/App";
import classes from './modal.module.css'

const Backdrop = () => {
            const { closeModal } = useContext(AppContext);
    return (
        <div onClick = {closeModal} className={classes.backdrop}></div>
    )
}

const  Menu = () => {
    const {closeModal} = useContext(AppContext)
    return (
        <div className={classes.menu}>
            <div>
                <img src='/assets/images/modal.svg' alt="modal" onClick={closeModal}/>
            </div>
        </div>
    )
}

const Modal = () => {
  return (
    <Fragment>
      {React.createPortal(<Backdrop/>, document.getElementById("menu"))}
      {React.createPortal(<Menu />, document.getElementById("menu"))}
    </Fragment>
  );
}; 

export default Modal 