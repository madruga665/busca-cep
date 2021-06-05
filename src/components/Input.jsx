import React, { Component } from "react";
export default class Input extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <form className="w-full m-5 flex justify-center items-center">
          <input
            className="border-b w-1/2 md:w-3/12 lg:w-3/12 xl:w-2/5 
            m-1 border-yellow-300 focus:outline-none"
            type="text"
            onChange={(event) => handleChange(event)}
            placeholder="Digite um cep valido"
          />
          <button
            className="bg-yellow-300 px-5 py-3 text-sm shadow-sm 
            font-medium tracking-wider border rounded-full hover:shadow-lg 
            hover:bg-yellow-400 focus:outline-none"
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            Buscar
          </button>
        </form>
      </>
    );
  }
}
