import React, { Component } from "react";
import "./styles/Card.css";

export default class Card extends Component {
  result = () => {
    const { data: { data } } = this.props
    const { cep, logradouro, complemento, bairro, localidade, uf } = data;
    return (
      <>
        <span>Cep: {cep}</span>
        <span>Logradouro: {logradouro}</span>
        <span>Complemento: {complemento}</span>
        <span>Bairro: {bairro}</span>
        <span>Cidade: {localidade}</span>
        <span>Estado: {uf}</span>
      </>
    );
  };
  render() {
    const { data } = this.props;

    return( 
    <section className="card-container">
      <h3>Resultado da busca</h3>
      {data === undefined ? null : this.result()}
    </section>
    );
  }
}
