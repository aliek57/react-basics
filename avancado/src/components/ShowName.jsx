import React from 'react'

const ShowName = (props) => {
  return (
    <div>
        <p>Olá, {props.name}! Você mora em {props.city}</p>
    </div>
  )
}

export default ShowName