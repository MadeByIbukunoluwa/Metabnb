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

const ModalOverlay = ({closeModal,children}) => {
    return (
      <div className={classes.modal} onClick= {closeModal}>
         {children}
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
        <ModalOverlay closeModal = {closeModal}>
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
