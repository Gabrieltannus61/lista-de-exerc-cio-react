import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
T


function AbrirFechar() {
  const [abrir, setAbrir] = useState(true);
  return(
    <div>
      <div className="cofre">
        <p>Cofre Digital</p>
      </div>
      <p>🔒</p>


      <button onClick={() => setAbrir(!abrir)}>
        {abrir ? 'fechar 🔒' : 'abrir 🔓'}
      </button>


      {abrir && <ol className="lista">
        <li>pc gamer</li>
        <li>joana</li>
        <li>amor</li>
        <li>rainbow six</li>
        <li>r6</li>
      </ol>}
    </div>
  )
}


export default AbrirFechar;