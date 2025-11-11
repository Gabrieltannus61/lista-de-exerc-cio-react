import React, { useState } from 'react';
import './App.css'

function Contador(){
  const [count, SetCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => SetCount(count + 1)}>+1</button>
      <button onClick={() => SetCount(count - 1)}>-1</button>
    </div>
  );
}

export default Contador;