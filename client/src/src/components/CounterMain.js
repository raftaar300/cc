import React from 'react'
import '../css/counter_main.css';

function CounterMain({ counterValue, inputVal, incValue, decValue }) {
  return (
    <div className="counter_main">
      <button className="dec counter_parts" onClick={decValue}>-</button>
      <input type="number" className="counter_value counter_parts" value={counterValue} onChange={(e) => inputVal(Number(e.target.value))} />
      <button className="inc counter_parts" onClick={incValue}>+</button>
    </div>
  )
}

export default CounterMain
