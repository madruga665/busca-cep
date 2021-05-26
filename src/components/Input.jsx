import React, { Component } from "react";
export default class Input extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <form>
          <input type="text" onChange={(event) => handleChange(event)} />
          <button type="submit" onClick={(event) => handleSubmit(event)}>
            Buscar
          </button>
        </form>
      </>
    );
  }
}
