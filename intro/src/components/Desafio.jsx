import React from 'react'

const Desafio = () => {
    const n1=5, n2=7;
  return (
    <>
        <h1>Desafio</h1>
        <h2>numero1: {n1}</h2>
        <h2>numero2: {n2}</h2>
        <button onClick={() => console.log(n1+n2)}>Somar no console</button>
    </>
  )
}

export default Desafio