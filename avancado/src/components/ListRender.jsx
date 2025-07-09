import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["João", "Karina", "Keila", "Junior"]);
    const [users, setUsers] = useState([
        { id: 1, name: "João", age: 28 },
        { id: 2, name: "Karina", age: 27 },
        { id: 3, name: "Keila", age: 26 },
        { id: 4, name: "Junior", age: 18 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })

        console.log(randomNumber);
    }

  return (
    <div>
        <h3>Renderizando listas</h3>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <b>Propriedade key</b>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar um usuário aleatório</button>
    </div>
  )
}

export default ListRender