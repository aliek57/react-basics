import React from 'react'

const Desafio = ({name, age, job}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (<p>Pode dirigir</p>) : (<p>Não pode dirigir</p>)}
    </div>
  )
}

export default Desafio