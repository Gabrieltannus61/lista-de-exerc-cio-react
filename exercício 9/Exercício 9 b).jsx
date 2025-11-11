import { useState } from 'react';
import './App.css';
function AlterarcorFundo() {
 const [tam, setTam] = useState("100px");
 const mudarTam = (novaTam) => {
 setTam(novaTam);
 document.body.style.fontSize=novaTam;
 };
 return (
 <div>
 <h2 > Alterar o Tamanho da Fonte</h2>
 <button onClick={() => mudarTam("50px")}>Pequeno</button>
 <button onClick={() => mudarTam("100px")}>Medio</button>
 <button onClick={() => mudarTam("200px")}>Grande</button>
 </div>
 );
}
export default AlterarcorFundo;