import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListaHobbies () {
  const hobbies = ['Ver filmes', 'Ir no cinema', 'Jogar Rainbow Six', 'Passar tempo com a minha namorada'];

  return (
    <div>
      <h2> Meus hobbies favoritos </h2>
      <ul>
        {hobbies.map((hobby, index) => ( <li key={index} > {hobby}</li>
        ))}
      </ul>

    </div>
  );
}

export default ListaHobbies