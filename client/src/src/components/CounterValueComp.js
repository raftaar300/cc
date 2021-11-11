import React from 'react';
import '../css/counter_value_comp.css';

function CounterValueComp({ counterValue }) {
  return (
    <div className="counter_value_comp">
      <p className="counter_value_text">Counter value : {counterValue}</p>
    </div>
  )
}

export default CounterValueComp
