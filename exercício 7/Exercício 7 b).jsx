import React, { useState } from 'react';
function InputTempoReal() {
 const [texto, setTexto] = useState('');
 const palavraM = texto.toUpperCase();
 return (
 <div>
 <input
 type="text"
 value={texto}
 onChange={(e) => setTexto(e.target.value)}
 placeholder='digite algo:'
 />
 <h2>Você digitou: {palavraM}</h2>
 </div>
 );
}
export default InputTempoReal;
