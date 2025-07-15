import './User.css'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const User = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/usuarios/${id}`
    const { data: user, loading, error } = useFetch(url);
  return (
    <div>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && (
            <div className='user-details'>
                <h2>{user.nome}</h2>
                <div>
                    <p>Idade: {user.idade} anos</p>
                    <p>Profissão: {user.profissao}</p>
                </div>
                <Link to={`/usuarios/${user.id}/editar`} className='edit-link'>Editar</Link>
            </div>
        )}
    </div>
  )
}

export default User