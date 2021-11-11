import React from 'react';
import './value.css';

function Value({ value }) {
  return (
    <div className="box">
      <p className="txt">Counter value : {value}</p>
    </div>
  )
}

export default Value
