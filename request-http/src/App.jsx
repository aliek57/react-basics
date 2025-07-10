import './App.css'
import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

function App() {
  const url = 'http://localhost:3000/produtos'
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [editId, setEditId] = useState(null);

  const { data: items, postData, putData, deleteData, loading, error } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome.trim()) return;
    const produto = { nome, preco: parseFloat(preco) };

    if (editId) {
      await putData(editId, produto);
      setEditId(null);
    } else {
      await postData(produto);
    }

    setNome('');
    setPreco('');
  }

  const handleDelete = async (id) => {
    await deleteData(id);
    if (editId === id) {
      setEditId(null);
      setNome('');
      setPreco('');
    }
  }

  const handleEdit = (produto) => {
    setEditId(produto.id);
    setNome(produto.nome);
    setPreco(produto.preco);
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {(Array.isArray(items) ? items : [])
          .filter(produto => produto && produto.id && produto.nome)
          .map(produto => (
            <li key={produto.id}>
              <div className='item'>
                <span>{produto.nome}</span> 
                <span>R${produto.preco ? produto.preco.toFixed(2) : '0.00'}</span>
              </div>
              <div>
                <button onClick={() => handleEdit(produto)}>Editar</button>
                <button onClick={() => handleDelete(produto.id)}>Deletar</button>
              </div>
            </li>
          ))}
      </ul>
      <div className="addProduto">
        <h2>{editId ? 'Editar Produto' : 'Adicionar Produto'}</h2>
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
          <button type="submit" disabled={loading}>
            {editId ? 'Salvar' : 'Adicionar'}
          </button>
          {editId && (
            <button type="button" onClick={() => { setEditId(null); setNome(''); setPreco(''); }}>
              Cancelar
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default App