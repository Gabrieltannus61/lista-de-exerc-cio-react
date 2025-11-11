
import React, { useState } from 'react';
function GeradorDesenha() {
 const [texto, setTexto] = useState('');
 const textom = texto.length;
 const textoI = texto.split('').reverse().join('');
 const caracteresE = "*&%";
 return (
 <div>
 <h1>Criptografador de senhas!!</h1>
 <p>Digite uma palavra para ser criptografada: {texto}</p>
 <input
 type="text"
 maxLength={30}
 value={texto}
 onChange={(e) => setTexto(e.target.value)}
 placeholder='digite algo:'
 />
 {textom > 0 && textom < 30 && (
 <h3>
 Sua senha criptografada é {textoI}
 {textom}
 {textom}
 {caracteresE}
 </h3>
 )}
 <div className='a'>
 {textom > 0 && textom < 6 && (
 <h4>Sua senha é fraca</h4>
 )}
 </div>
 <div className='b'>
 {textom > 0 && textom >= 6 && textom <= 10 && (
 <h4>Sua senha é media</h4>
 )}
 </div>
 <div className='c'>
 {textom > 0 && textom > 10 && textom < 30 && (
 <h4>Sua senha é forte</h4>
 )}
 </div>
 {textom > 0 && textom > 30 && (
 <h4>Sua senha é muito grande </h4>
 )}
 </div>
 );
}
export default GeradorDesenha;
