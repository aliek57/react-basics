import React from 'react'
import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
        <h2 className="my-component-title">Meu componente</h2>
        <p className="my-component-text">Esse é um componente simples com CSS</p>
        <button className="my-component-button">Clique aqui!</button>
    </div>
  )
}

export default MyComponent