import './App.css'


function MenuRestaurante () {

  const pratos = [
    {nome: "Ovo mexido do Tannus", preco: 7.90, descricao: "Ovo mexido simples mas com um toque secreto" },
    {nome: "Taco Secreto ", preco: 24.59, descricao: "O taco especial" },
    {nome: "Lasanha" , preco: 31.50, descricao: "Ovo mexido simples mas com um toque secreto"},
    {nome: "Suco de Manga", preco: 11.39, descricao: "Suco de manga simples"}
  ]

  return (
    <div>
      <h2> Cardápio do Restaurante </h2>
      <div className="menu-grid">
        {pratos.map((prato, index) => (
          <div key={index} className="prato-card">
            <h3>{prato.nome}</h3>
            <p className="preco">R$ {prato.preco.toFixed(2)}</p>
            <p className="descricao">{prato.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuRestaurante;