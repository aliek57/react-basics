import React from 'react'
import { useState } from 'react';

const Hooks = () => {
    const [num, setNum] = useState(0);
  return (
    <>
        <h2>Entendendo hooks</h2>
        <div className="state">
            <div>
                <h3>* useState</h3>
                <p>useState é um Hook que permite adicionar o estado do React a um componente funcional.</p>
            </div>
            <p>Valor: {num}</p>
            <button onClick={() => setNum(num + 1)}>Aumenta</button>
        </div>
    </>
  )
}

export default Hooks