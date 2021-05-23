import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

export default class App extends Component {

  render() {
    return (
      <main className="app">
        <Header />
        <Input />
      </main>
    );
  }
}
