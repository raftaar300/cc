import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import CounterMain from './components/CounterMain';
import CounterValueComp from './components/CounterValueComp';
import Loader from './components/Loader';

const name = "Yash_Porwal";

function App() {
  const [counterValue, setCounterValue] = useState(1);
  const [initload, setInitLoad] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios.get(`https://interview-8e4c5-default-rtdb.firebaseio.com/${name}.json`)
      .then(res => {
        if (res.data !== null && res.data?.[name] !== null) setCounterValue(res.data?.[name]);
        setInitLoad(false);
      })
  }, [])

  const updateValAtBackend = useCallback(() => {
    setLoad(true);
    axios.put(`https://interview-8e4c5-default-rtdb.firebaseio.com/${name}.json`, { [name]: counterValue })
      .then(() => {
        setLoad(false);
      });
  }, [counterValue]);

  useEffect(() => {
    updateValAtBackend();
  }, [counterValue, updateValAtBackend])

  const inputVal = (val) => {
    if (val > 1000) {
      alert("Can not enter value greater than 1000");
      return;
    }
    setCounterValue(val);
  }

  const incValue = () => {
    if (counterValue === 1000) {
      alert("Can not enter value greater than 1000");
      return;
    }
    setCounterValue(counterValue + 1);
  }

  const decValue = () => {
    setCounterValue(counterValue - 1);
  }

  return (
    <div className="App">
      {!initload &&
        <>
          <Loader load={load} />
          <CounterMain counterValue={counterValue} inputVal={val => inputVal(val)} incValue={incValue} decValue={decValue} />
          <CounterValueComp counterValue={counterValue} />
        </>
      }
    </div>
  );
}

export default App;
