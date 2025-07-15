import './Home.css'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Home = () => {
  const url = 'http://localhost:3000/usuarios'
  const { data: items, loading, error } = useFetch(url);
  return (
    <div>
      <h1>Usuários</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className='users'>
        {(Array.isArray(items) ? items : [])
          .filter(user => user && user.id && user.nome)
          .map(user => (
            <li key={user.id}>
              <div className='item'>
                <span>{user.nome}, {user.idade} anos</span>
                <span>{user.profissao}</span>
              </div>
              <Link to={`/usuarios/${user.id}`} className='user-link'>Ver Usuário</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Home