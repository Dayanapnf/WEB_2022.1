import React, { Component } from "react";

/*class Questao2 extends Component {
  render(){
    return (
      <div>
        <h4>Nome: Dayana Priscilla N</h4>
        <h4>Curso: Sistemas de Informações </h4>
        <h4>Cidade: Paulista </h4>
      </div>
    )
  }
}
*/

class Questao2 extends Component {
  constructor(props) {
     super(props);
  }
  render() {
     const { nome, curso, cidade } = this.props;
    return (
      <div>
        <h2>Nome: Dayana Priscilla</h2>
        <h2>Curso: Sistemas de Informações </h2>
        <h2>Cidade: Paulista </h2>
      </div>
    );
  }
}

export default Questao2;
