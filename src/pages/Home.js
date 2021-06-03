import React, { Component } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Input from "../components/Input";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      cep: "",
      data: {},
    };
  }

  fetchCep = async (inputCep) => {
    const response = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
    const data = await response.json();
    this.setState({ data: data });
    console.log(data);
  };

  handleChange = (event) => {
    this.setState({
      cep: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { cep } = this.state;
    event.preventDefault();
    this.fetchCep(cep);
  };

  render() {
    return (
      <main className="flex flex-col items-center justify-center">
        <Header />
        <Input
          handleChange={(value) => this.handleChange(value)}
          handleSubmit={this.handleSubmit}
        />
        <Card data={this.state} />
      </main>
    );
  }
}
