import React, { Component } from "react";
//import { Simulate } from "react-dom/test-utils";

/*function Questao1() {
  return (
    <div>
      <h2>Nome: Dayana Priscilla</h2>
      <h2>Curso: Sistemas de Informações </h2>
      <h2>Cidade: Paulista </h2>
    </div>
  );
}*/

/*const Questao1 = () =>
  <div>
    <h2>Nome: Dayana Priscilla</h2>
    <h2>Curso: Sistemas de Informações </h2>
    <h2>Cidade: Paulista </h2>
  </div>
*/

/*const Questao1 = (props) => {
  <div>
    <h2>Nome: {props.nome}</h2>
    <h2>Curso: {props.curso} </h2>
    <h2>Cidade: {props.cidade} </h2>
  </div>
}*/
const Questao1 = (props) => {
  const { nome = "Dayana", curso = "SI", cidade = "Paulista" } = props;
  const newName = nome.toUpperCase();
  return (
    <div>
      <h2>Nome: {newName} </h2>
      <h2>Curso: {curso} </h2>
      <h2>Cidade: {cidade} </h2>
      <p> Olá,Professor!</p>
    </div>
  );
};
export default Questao1;
