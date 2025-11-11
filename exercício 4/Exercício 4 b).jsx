function CartaoPessoa({ titulo, autor, ano, genero }) {
    return (
<div className='cartao pessoa'>

  <h2>{titulo}</h2>
  <p>
    <strong>titulo:</strong> {titulo} escreveu este livro
  </p>
  <p>
    <strong>Autor:</strong> {autor}
  </p>
  <p>
    <strong>Ano:</strong> {ano}
  </p>
  <p>
    <strong>genero:</strong> {genero}
  </p>
</div>
);
}

function App() {
return (
<div>
  <CartaoPessoa
    titulo={"A metamorfose"}
    ano={"1915"}
    autor={"Franz Kafka"}
    genero={"Ficção"}
  />
</div>
);
}

export default App;