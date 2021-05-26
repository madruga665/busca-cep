import React, { Component } from "react";
import Header from "../components/Header";
import Input from "../components/Input";

export default class Home extends Component {
  render() {
    return (
      <main className="home">
        <Header />
        <Input />
      </main>
    );
  }
}
