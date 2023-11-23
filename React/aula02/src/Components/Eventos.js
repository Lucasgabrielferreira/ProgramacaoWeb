import React from 'react'
const msg = () => {
    console.log("Teste de evento")
}

const Eventos = () => {
  return (
    <div>
       <button onClick={msg} >Clique</button>
    </div>
  )
}

export default Eventos