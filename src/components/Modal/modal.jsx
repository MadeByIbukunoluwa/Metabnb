import React from "react-dom";



const Backdrop = () => {
    return (
        <div className='backdrop'></div>
    )
}

const  Menu = () => {
    return (
        <div className="menu"></div>
    )
}






const Modal = () => {
  return (
    <Fragment>
      {React.createPortal(<Backdrop />, document.getElementById("menu"))}
      {React.createPortal(<Menu />, document.getElementById("menu"))}
    </Fragment>
  );
}; 

export default Modal 