import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    const trimmedQuery = query ? query.trim() : ''
    const url = trimmedQuery
        ? 'http://localhost:3000/usuarios'
        : null
    const { data: users, loading, error } = useFetch(url)
    const safeUsers = trimmedQuery && Array.isArray(users)
    ? users.filter(user => user.nome.toLowerCase().includes(trimmedQuery.toLowerCase()))
    : []

  return (
    <div>
        <h2>Resultado da Busca</h2>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!trimmedQuery && <p>Digite algo para buscar.</p>}
        {trimmedQuery && (
            <ul className='users'>
                {safeUsers
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
        )}
    </div>
  )
}

export default Search