import React from "react";

const LoadingModal = ({ message }) => {
  return (
    <div>
      {/* <h1>Hola</h1> */}
      <div className="loading-modal">
       <div  className="loading-modal1">
       <h1 style={{color:'white'}}>{message}...</h1>
       </div>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingModal;
