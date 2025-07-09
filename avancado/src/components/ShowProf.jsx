import React from 'react'

const ShowProf = (props) => {
  return (
    <div>
        <p>Nome: {props.nome}</p>
        <p>Disciplina: {props.disciplina}</p>
    </div>
  )
}

export default ShowProf