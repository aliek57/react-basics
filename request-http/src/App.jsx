import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const url = 'http://localhost:3000/produtos'
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Recurso não encontrado');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoProduto = { nome, preco: parseFloat(preco) };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoProduto),
    })
    
    setNome('');
    setPreco('');
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="addProduto">
        <h2>Adicionar Produto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              placeholder="Digite um nome..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              placeholder="Digite um valor..."
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  )
}

export default App
