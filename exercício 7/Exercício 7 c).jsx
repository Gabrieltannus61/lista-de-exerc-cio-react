import React, { useState } from 'react';
function InputTempoReal() {
 const [texto, setTexto] = useState('');
 const textom = texto.length;
 return (
 <div>
 <input
 type="text"
 value={texto}
 onChange={(e) => setTexto(e.target.value)}
 placeholder='digite algo:'
 />
 <h1>Você digitou: {texto}</h1>
 {/* Renderização Condicional */}
 {textom > 0 && textom < 3 && (
 <h2>Menos de 3 caracteres</h2>
 )}
 {textom > 3 && (
 <h3>Mais de 3 caracteres</h3>
 )}
 </div>
 );
}
export default InputTempoReal;

    h2 {
 color: red;
}

    h3 {
color: green;}
