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

const ModalOverlay = ({children}) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>
         {children}
        </div>
      </div>
    );
}


const portalElement = document.getElementById("menu");
const Modal = () => {
 const { closeModal } = useContext(AppContext);
  return (
    <Fragment>
      {React.createPortal(<Backdrop />, portalElement)}
      {React.createPortal(
        <ModalOverlay>
          <img
            src="/assets/icons/close-icon.svg"
            alt="modal"
            onClick={closeModal}
          />
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}; 

export default Modal 
