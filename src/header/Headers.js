import React, { Component } from "react";
export default class Headers extends Component {
  constructor() {
    super();
    this.state = {
      inc: 0,
    };
  }
  Increement() {
    this.setState({
      inc: this.state.inc + 1,
    });
  }
  Decriment() {
    this.setState({
      inc: this.state.inc - 1,
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.Increement()}>Increment button</button>
        <h1>value {this.state.inc}</h1>
        <button onClick={() => this.Decriment()}>decriment button</button>
      </div>
    );
  }
}
