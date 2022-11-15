import { useContext,Fragment } from "react";
import React from "react-dom";
// import closeicon from '../../assets/icons/close-icon.svg'
import { AppContext } from "../../pages/App/App";


const Backdrop = () => {
    const { closeModal } = useContext(AppContext);
    return (
        <div onClick = {closeModal} className='backdrop'></div>
    )
}

const  Menu = () => {
    const {closeModal} = useContext(AppContext)
    return (
        <div className="menu">
            <div>
                <img src='/assets/icons/close-icon.svg' alt="" onClick={closeModal}/>
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