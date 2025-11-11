import { useState } from 'react';
import './App.css';
function FormularioTempoReal(){
 const [dados, setDados] = useState({
 nome: '',
 email: '',
 idade: ''
 })
 const handleChange = (e) =>{
 const{name, value } = e.target;
 setDados({
 ...dados,
 [name]:value
 })
 }
return(
 <div>
 <h2>Formulário</h2>
 <form >
 <div>
 <label >Nome:</label>
 <input type="text"
 name='nome'
 value={dados.nome}
 onChange={handleChange} />
 </div>
 <div>
 <label >email:</label>
 <input type="email"
 name='email'
 value={dados.email}
 onChange={handleChange} />
 </div>
 <div>
 <label >idade:</label>
 <input type="number"
 name='idade'
 value={dados.idade}
 onChange={handleChange} />
 </div>
 <div>
 <h3>Dados preenchidos:</h3>
 <h5>seu nome é: {dados.nome}</h5>
 <h5>seu email é :{dados.email}</h5>
 <h5>sua idade é : {dados.idade}</h5>
 </div>
 </form>
 </div>
)
}
export default FormularioTempoReal;
