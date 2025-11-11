import { useState } from 'react';
import './App.css';
function FormularioTempoReal() {
 const [dados, setDados] = useState({
 nome: '',
 email: '',
 idade: '',
 cidade: '',
 estado: '',
 cep:''
 });
 const [errors, setErrors] = useState({
 email: '',
 idade: ''
 });
 const handleChange = (e) => {
 const { name, value } = e.target;
 setDados({
 ...dados,
 [name]: value,
 });
 };
 const handleBlur = (e) => {
 const { name, value } = e.target;
 if (name === 'email') {
 if (!value.includes('@') && value !== '') {
 setErrors(prevErrors => ({
 ...prevErrors,
 email: 'O e-mail deve conter um "@".'
 }));
 } else {
 setErrors(prevErrors => ({ ...prevErrors, email: '' }));
 }
 }
 if (name === 'idade') {
 const age = Number(value);
 if (age <= 18 && value !== '') {
 setErrors(prevErrors => ({
 ...prevErrors,
 idade: 'A idade deve ser maior que 18.'
 }));
 } else {
 setErrors(prevErrors => ({ ...prevErrors, idade: '' }));
 }
 }
 };
 return (
 <div>
 <h2>Formulário</h2>
 <form>
 <div>
 <label>Nome:</label>
 <input type="text"
 name='nome'
 value={dados.nome}
 onChange={handleChange} />
 </div>
 <div>
 <label>Email:</label>
 <input type="email"
 name='email'
 value={dados.email}
 onChange={handleChange}
 onBlur={handleBlur}
 />
 {errors.email && <span style={{ color: 'red', fontSize:
'12px' }}>{errors.email}</span>}
 </div>
 <div>
 <label>Idade:</label>
 <input type="number"
 name='idade'
 value={dados.idade}
 onChange={handleChange}
 onBlur={handleBlur}
 />
 {errors.idade && <span style={{ color: 'red', fontSize:
'12px' }}>{errors.idade}</span>}
 </div>
 <div>
 <label>estado:</label>
 <input type="text"
 name='estado'
 value={dados.estado}
 onChange={handleChange} />
 </div>
 <div>
 <label>Cidade:</label>
 <input type="text"
 name='cidade'
 value={dados.cidade}
 onChange={handleChange} />
 </div>
 <div>
 <label>CEP:</label>
 <input type="number"
 name='cep'
 value={dados.cep}
 onChange={handleChange} />
 </div>
 <div>
 <h3>Dados preenchidos (em tempo real):</h3>
 <h5>Seu nome é: {dados.nome}</h5>
 <h5>Seu email é: {dados.email}</h5>
 <h5>Sua idade é: {dados.idade}</h5>
 <h5>Seu estado é: {dados.estado}</h5>
 <h5>Sua cidade é: {dados.cidade}</h5>
 <h5>Seu CEP é: {dados.cep}</h5>
 </div>
 </form>
 </div>
 );
}
export default FormularioTempoReal;