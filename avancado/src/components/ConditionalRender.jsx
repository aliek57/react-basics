import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true); // Altere para true ou false para testar

  return (
    <div>
        <h4>Isso vai ser exibido?</h4>
        {x && <p>Se x for true, sim!</p>}
        <h4>Isso vai ser exibido?</h4>
        {!x && <p>Se x for false, sim!</p>}
    </div>
  )
}

export default ConditionalRender