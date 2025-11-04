1  import { useState } from 'react'
2  import reactLogo from './assets/react.svg'
3  import viteLogo from '/vite.svg'
4  import './App.css'
5  
6
7
8  function DataHoraAtual() {
9    const agora = new Date();
10   const diasDaSemana = [ "domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
11   const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
12   const diaSemana = diasDaSemana[agora.getDay()];
13   const dia = agora.getDate();
14   const mes = meses[agora.getMonth()];
15   const ano = agora.getFullYear();
16 
17   return (
18     <h1> Hoje é {diaSemana}, {dia} de {mes} de {ano} </h1>
19   );
20  }
 
   export default DataHoraAtual