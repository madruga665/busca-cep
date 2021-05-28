import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="bg-yellow-300 w-100 h-20 flex flex-1 justify-center items-center">
        <h1 className="text-3xl">Busca Cep</h1>
      </div>
    )
  }
}
