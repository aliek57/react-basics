import React from 'react'

const handleClick = (e) => {
  console.log(e)
  alert('Clicou no botão')
}

const handleRender = (x) => {
  if (x) {
    return <h3>Renderizou</h3>;
  } else {
    return <h3>Não renderizou</h3>;
  }
}

const Events = () => {
  return (
    <>
    <div>
      <button onClick={handleClick}>Clica aqui</button>
    </div>
    <div className='render'>
      {handleRender(true)}
      {/* {handleRender(false)} */}
    </div>
    </>
  )
}

export default Events