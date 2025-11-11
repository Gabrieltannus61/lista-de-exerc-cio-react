import { useState } from 'react';
import './App.css';
const humores = {
 feliz: {
 corFundo: 'lightyellow',
 emoji: '😁',
 fala: 'Haha!',
 corTexto: 'black'
 },
 triste: {
 corFundo: 'blue',
 emoji: '😢',
 fala: 'Sniff...',
 corTexto: 'white'
 },
 raivoso: {
 corFundo: 'red',
 emoji: '😡',
 fala: 'Grrrr!',
 corTexto: 'white'
 },
 calmo: {
 corFundo: 'white',
 emoji: '😌',
 fala: 'Ahhhh...',
 corTexto: 'black'
 }
};
function SimuladordeHumor() {
 const [humor, setHumor] = useState(humores.calmo);
 const mudarHumor = (nomeHumor) => {
 const novoHumor = humores[nomeHumor];
 setHumor(novoHumor);
 document.body.style.backgroundColor = novoHumor.corFundo;
 document.body.style.color = novoHumor.corTexto;
 alert(novoHumor.fala);
 };

 return (
 <div >
 <h1>Como você está se sentindo hoje?</h1>
 <div className="emoji-display">
 {humor.emoji}
 </div>
 <div>
 <button onClick={() => mudarHumor("feliz")}>Feliz</button>
 <button onClick={() => mudarHumor("triste")}>Triste</button>
 <button onClick={() => mudarHumor("raivoso")}>Raivoso</button>
 <button onClick={() => mudarHumor("calmo")}>Calmo</button>
 </div>
 </div>
 );
}
export default SimuladordeHumor;
