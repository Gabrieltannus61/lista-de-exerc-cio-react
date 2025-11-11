import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cartaopessoa({nome,idade,profissao}) {
  return(
    <div className='cartao-pessoa'>
      <h2>{nome}</h2>
      <p><strong>Idade:</strong> {idade} anos</p>
      <p><strong>Profissao</strong> {profissao}</p>
    </div>
  );
}

function App() {
  return(
    <div>
      <Cartaopessoa nome="Gabriel Tannus" idade={17} profissao=": engenheiro de produção" />
    </div>
  );
}

export default App