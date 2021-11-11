import React from 'react';
import '../css/loader.css'

function Loader({ load }) {
  return (
    <div className={`loading_div ${load ? "show_loader" : ""}`}>
      <div className="loader"></div>
      <p className="loader_text">Saving counter value</p>
    </div>
  )
}

export default Loader
