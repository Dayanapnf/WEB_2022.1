import React from "react";

const Filho = (props) =>{
  return(
    <div>
      <button onClick={
        ()=>(
          alert('Dayana')
        ) 
      }>
        Enviar mensagem para o meu pai
      </button>
    </div>
  )
}
  

  

export default Filho