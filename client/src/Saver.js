import React from 'react';
import './Saver.css'

function Saver({ save }) {
  return (
    <div className={`loading_div ${save?"show" : ""}`}>
      <div className="loader"></div>
      <p className="txt">Saving counter value</p>
    </div>
  )
}

export default Saver
