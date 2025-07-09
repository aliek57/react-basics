import React from 'react'

const DestructingProps = ({nome, idade, curso}) => {
  return (
    <div>
        <h2>Destructuring Props</h2>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Curso: {curso}</p>
        <p>Descrição: {`Meu nome é ${nome}, tenho ${idade} anos e faço ${curso}.`}</p>
    </div>
  )
}

export default DestructingProps