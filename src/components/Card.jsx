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
        <div className="flex flex-col relative w-full">
          <div className="m-1 mb-3 text-gray-600 flex w-full">
            Cep:<p className="absolute right-0">{cep}</p>
          </div>
          <div className="m-1 mb-3 text-gray-600 flex w-full">
            Logradouro:<p className="absolute right-0">{logradouro}</p>
          </div>
          <div className="m-1 mb-3 text-gray-600 flex w-full">
            Bairro:<p className="absolute right-0">{bairro}</p>
          </div>
          <div className="m-1 mb-3 text-gray-600 flex w-full">
            Cidade:<p className="absolute right-0">{localidade}</p>
          </div>
          <div className="m-1 mb-3 text-gray-600 flex w-full">
            Estado:<p className="absolute right-0">{uf}</p>
          </div>
          <div className="m-1 mb-3 text-gray-600 flex w-full">
            Complemento:<p className="absolute right-0">{complemento}</p>
          </div>
        </div>
      </>
    );
  };
  render() {
    const { data } = this.props;

    return (
      <section className="bg-yellow-200 w-full sm:w-11/12 md:w-4/5 lg:w-2/5 xl:w-2/5 flex flex-col items-center py-6 px-3 my-4 shadow-xl border-t-8 border-yellow-400 rounded-lg">
        <h2 className="text-xl font-semibold mb-10 border-b-2 border-gray-600">
          Resultado da busca
        </h2>
        <div className="flex flex-row justify-between w-full">
          {data === undefined ? null : this.result()}
        </div>
      </section>
    );
  }
}
