import React, { useState } from 'react';
function AdicionarLista() {
 const [item, setItem] = useState('');
 const [lista, setLista] = useState([]);
 const [pontos, setPontos] = useState("");
 const adicionarTime = () => {
 if (item.trim() && pontos.trim() && !isNaN(pontos)) {
 const novoTime = {
 nome: item.trim(),
 pontos: parseInt(pontos, 10),
 };
 const novaLista = [...lista, novoTime];
 novaLista.sort((a, b) => b.pontos - a.pontos);
 setLista(novaLista);
 setItem("");
 setPontos("");
 } else {
 alert ("Por favor, preencha o nome do time e uma pontuação válida.");
 }
 };
 return (
 <div>
 <h1>Tabela de Pontos</h1>
 <input
 type="text"
 value={item}
 onChange={(e) => setItem(e.target.value)}
 placeholder='Digite um time'
 />
 <input
 type="number"
 value={pontos}
 onChange={(e) => setPontos(e.target.value)}
 placeholder='Pontuação'
 />
 <button onClick={adicionarTime}>Adicionar</button>
 <ul>
 {lista.map((time, index) => (
 <li key={index}>{time.nome}-{time.pontos}</li>
 ))}
 </ul>
 </div>
 );
}
export default AdicionarLista;