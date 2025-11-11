import React, { useState } from 'react';
function InputTempoReal() {
 const [texto, setTexto] = useState('');
 const textom = texto.length;
 return (
 <div>
 <input
 type="text"
 maxLength={50}
 value={texto}
 onChange={(e) => setTexto(e.target.value)}
 placeholder='digite algo:'
 />
 <h1>Você digitou: {texto}</h1>
 <h1>Total de caracteres {textom}/50</h1>
 {textom > 0 && textom < 3 && (
 <h2>Menos de 3 caracteres</h2>
 )}
 {textom >= 3 && (
 <h3>Mais de 3 caracteres</h3>
 )}
 </div>
 );
}
export default InputTempoReal;