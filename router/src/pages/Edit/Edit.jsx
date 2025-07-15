import { useState, useEffect } from 'react'
import './Edit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Edit = () => {
    const { id } = useParams();
    const url = `http://localhost:3000/usuarios`
    const { putData, loading, error } = useFetch(url);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id, url]);
  return (
    <>
        <div className="editUser">
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user && <h1>Editar {user.nome}</h1>}
            {user && (
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const updatedUser = {
                        ...user,
                        nome: e.target.nome.value,
                        idade: parseInt(e.target.idade.value),
                        profissao: e.target.profissao.value
                    };
                    await putData(user.id, updatedUser);
                    navigate('/');
                }}>
                    <label>
                        Nome:
                        <input type="text" name="nome" defaultValue={user.nome} required />
                    </label>
                    <label>
                        Idade:
                        <input type="number" name="idade" defaultValue={user.idade} required />
                    </label>
                    <label>
                        Profissão:
                        <input type="text" name="profissao" defaultValue={user.profissao} required />
                    </label>
                    <div className="btns">
                        <button type="button" onClick={() => window.history.back()}>Voltar</button>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            )}
        </div>
    </>
  )
}

export default Edit