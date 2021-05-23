import React, { Component } from "react";
import Card from "./Card";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      cep: "",
      data: {}
    };
  }

  fetchCep = async (inputCep) => {
    const response = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
    const data = await response.json();
    this.setState({data: data});
    console.log(data);
  };

  handleChange = (event) => {
    this.setState({
      cep: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const {cep} = this.state;
    event.preventDefault();
    this.fetchCep(cep)
  }

  render() {
    const { cep } = this.state;
    return (
      <form>
        <input type="text" value={cep} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>Buscar</button>
        <Card data={ this.state } />
      </form>
    );
  }
}
