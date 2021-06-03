import React, { Component } from "react";
import "./styles/Card.css";

export default class Card extends Component {
  result = () => {
    const {
      data: { data },
    } = this.props;
    const { cep, logradouro, bairro, localidade, uf, complemento } = data;
    return (
      <>
        <div className="flex flex-col">
          <span className="m-3 text-gray-600">Cep:</span>
          <span className="m-3 text-gray-600">Logradouro:</span>
          <span className="m-3 text-gray-600">Bairro:</span>
          <span className="m-3 text-gray-600">Cidade:</span>
          <span className="m-3 text-gray-600">Estado:</span>
          <span className="m-3 text-gray-600">Complemento:</span>
        </div>
        <div className="flex flex-col items-end justify-items-center">
          <span className="m-3 text-gray-600">{cep}</span>
          <span className="m-3 text-gray-600">{logradouro}</span>
          <span className="m-3 text-gray-600">{bairro}</span>
          <span className="m-3 text-gray-600">{localidade}</span>
          <span className="m-3 text-gray-600">{uf}</span>
          <span className="m-3 text-gray-600">{complemento}</span>
        </div>
      </>
    );
  };
  render() {
    const { data } = this.props;

    return (
      <section className="bg-yellow-200 w-1/2 md:min-w-0 flex flex-col items-center py-6 px-6 my-4 shadow-xl border-t-8 border-yellow-400 rounded-lg">
        <h2 className="text-xl font-semibold mb-10 border-b-2 border-gray-600">Resultado da busca</h2>
        <div className="flex flex-row justify-between w-full">
          {data === undefined ? null : this.result()}
        </div>
      </section>
    );
  }
}
