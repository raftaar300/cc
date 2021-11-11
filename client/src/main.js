
import './main.css';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import Value from './Value';
import Saver from './Saver';
const name = "raman_kumar";
const  name2 = 'raman_kumar'
function getval(){
  axios.get(`https://interview-8e4c5-default-rtdb.firebaseio.com/${name}.json`)
  .then(res => {
    if (res.data !== null && res.data?.[name] !== null) 
      return res.data?.[name];
    return 1; 
  })
}
var max = 1000;
function Main() {
  const [ value, setValue] = useState(getval());
  const [save, setSave] = useState(false);

  useEffect( () => {
      axios.get(`https://interview-8e4c5-default-rtdb.firebaseio.com/${name}.json`)
      .then(res => {
        if (res.data !== null && res.data?.[name] !== null) 
          setValue(res.data?.[name]);
  
      
      })
  }, [])

  const update = useCallback(() => {
    setSave(true);
    axios.put(`https://interview-8e4c5-default-rtdb.firebaseio.com/${name}.json`, { [name2]: value })
      .then((res) => {
        setSave(false);

      });
  }, [value]);

  useEffect(() => {
    update();
  }, [setValue, update])

  const change = (val) => {
    if(Number(val) <= max && Number(val)>=0 && val!==value)
    setValue(Number(val));
    
  }

  const inc = () => {setValue(value + 1);}
  const dec = () => { setValue(value - 1);}
  return ( <div className="App">
  
    <div className = "outer">
        <Saver save={save} />
    <div className="counter_main">
      {value === 0 ? <button className="dec counter_parts">-</button>
       :<button className="dec counter_parts" onClick={dec}>-</button>}
      <input type="number" className="counter_value counter_parts" value={value} onChange={(e) => change(e.target.value)} />
       { max === value ?  <button className="inc counter_parts">+</button> :
          <button className="inc counter_parts" onClick={inc}>+</button>
       }  
    </div> 
    </div>
    <div className = "counterval">
      <Value value={value} />
     </div>
</div>
  )
}

export default Main
