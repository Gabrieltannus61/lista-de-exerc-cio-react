import { useState } from 'react';
import './App.css';
function AvatarCreator() {
 const [avatar, setAvatar] = useState({
 cabelo: 'Preto',
 olhos: 'Castanho',
 acessorios: []
 });
 const handleChange = (e) => {
 const { name, value } = e.target;
 setAvatar(prevAvatar => ({
 ...prevAvatar,
 [name]: value
 }));
 };
 const handleCheckboxChange = (e) => {
 const { value, checked } = e.target;
 setAvatar(prevAvatar => {
 const currentAcessorios = prevAvatar.acessorios;

 if (checked) {
 return {
 ...prevAvatar,
 acessorios: [...currentAcessorios, value]
 };
 } else {
 return {
 ...prevAvatar,
 acessorios: currentAcessorios.filter(item => item !== value)
 };
 }
 });
 };
 const acessoriosFormatados = avatar.acessorios.length > 0
 ? avatar.acessorios.join(', ')
 : 'Nenhum';
 const isBia = avatar.cabelo === 'Castanho' &&
 avatar.olhos === 'Verde' &&
 avatar.acessorios.includes('Óculos');
 const resultadoAvatar = isBia
 ? 'bia malheiros'
 : `👤 Cabelo: ${avatar.cabelo} | Olhos: ${avatar.olhos} |
Acessórios: ${acessoriosFormatados}`;
 return (
 <div className="avatar-creator">
 <h2>Crie seu Avatar</h2>

 <div className="form-group">
 <label>Cor do Cabelo:</label>
 <select name="cabelo" value={avatar.cabelo}
onChange={handleChange}>
 <option value="Preto">Preto</option>
 <option value="Castanho">Castanho</option>
 <option value="Loiro">Loiro</option>
 <option value="Ruivo">Ruivo</option>
 <option value="Colorido">Colorido</option>
 </select>
 </div>
 <div className="form-group">
 <label>Cor dos Olhos (Radio):</label>
 <div className="radio-group">
 <label>
 <input type="radio" name="olhos" value="Castanho"
 checked={avatar.olhos === 'Castanho'}
onChange={handleChange} />
 Castanho
 </label>
 <label>
 <input type="radio" name="olhos" value="Azul"
 checked={avatar.olhos === 'Azul'}
onChange={handleChange} />
 Azul
 </label>
 <label>
 <input type="radio" name="olhos" value="Verde"
 checked={avatar.olhos === 'Verde'}
onChange={handleChange} />
 Verde
 </label>
 </div>
 </div>
 <div className="form-group">
 <label>Acessórios (Checkbox):</label>
 <div className="checkbox-group">
 <label>
 <input type="checkbox" value="Óculos"
 checked={avatar.acessorios.includes('Óculos')}
onChange={handleCheckboxChange} />
 Óculos
 </label>
 <label>
 <input type="checkbox" value="Chapéu"
 checked={avatar.acessorios.includes('Chapéu')}
onChange={handleCheckboxChange} />
 Chapéu
 </label>
 <label>
 <input type="checkbox" value="Colar"
 checked={avatar.acessorios.includes('Colar')}
onChange={handleCheckboxChange} />
 Colar
 </label>
 </div>
 </div>
 <div className="avatar-resultado">
 <h3>Seu Avatar :</h3>
 <p>
 {resultadoAvatar}
 </p>
 </div>
 </div>
 );
}
export default AvatarCreator;