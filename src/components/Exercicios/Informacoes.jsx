import { Component } from "react";

/*class Informacoes extends Component{
  render(){
    return(
      <div>
        <h4>Nome: Dayana Priscilla Nunes Ferreira Costa {this.props.nome}</h4>
        <h4>Curso: Sistemas de Informações {this.props.curso}</h4>
        <h4>Turno:Manhã {this.props.turno}</h4>
        <h4>Universidade: UFC { this.props.universidade}</h4>
      </div>
    )
  }
}*/

function Informacoes(props){
  const {nome,curso,turno,universidade} = props
  return(
    <div>
      <h4>Nome:Dayana Priscilla{nome}</h4>
      <h4>Curso: Sistemas de Informações {curso}</h4>
      <h4>Turno:Manhã {turno}</h4>
      <h4>Universidade:UFC {universidade}</h4>
    </div>
  )
}

export default Informacoes