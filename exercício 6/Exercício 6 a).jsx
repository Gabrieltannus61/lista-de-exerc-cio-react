 import react, {useState} from 'react'
import './App.css'
function MostrarEsconder(){
  const [mostrar, setMostrar] = useState(true);
  return(
    <div><button onClick={() => setMostrar(!mostrar)}> {mostrar ? 'Esconder texto' : 'Mostrar texto'} </button>
    {mostrar && <p> Este texto pode ser mostrado ou não </p>} </div>
  )
}


export default MostrarEsconder;

