1  import { useState } from 'react'
2  import reactLogo from './assets/react.svg'
3  import viteLogo from '/vite.svg'
4  import './App.css'
5
6
7  function Saudacao({ nome }) {
8    return <h1>Olá, {nome}! </h1>;
9  }
10
11 export default function MyApp() {
12   return (<Saudacao nome = "Gabriel"/>)
13 }