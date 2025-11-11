 import react, {useState} from 'react'
import './App.css'
function MostrarEsconder(){
  const [mostrar, setMostrar] = useState(true);
  return(
    <div><button onClick={() => setMostrar(!mostrar)}> {mostrar ? 'Esconder foto' : 'Mostrar foto'} </button>
    {mostrar && <img src="src/assets/hytalo-santos-723x450.png"alt="oi"  />}
    </div>
  )
}


export default MostrarEsconder;
