 import React, { useState } from 'react';
import './App.css'
  function Contador(){
  const [count, SetCount] = useState(20);




  const getCorTemperatura = (temperatura) => {
    if (temeperatura < 15) return '#4190e2';
    if (temperatura < 25) return '#f5c423ff';
    return '#d0021b';


  } ;




    return (
      <div style ={{
        backgroundCpçpr: getCorTemperatura (count),
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        <h2>Contador: {count}</h2>
        <button onClick={() => SetCount(count + 5)}>+5</button>
        <button onClick={() => SetCount(count - 5)}>-5</button>
      </div>
    );


   }


 export default Contador;