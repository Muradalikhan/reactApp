import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increament = this.increament.bind(this);
    this.decreament = this.decreament.bind(this);
  }
  increament() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decreament() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <button onClick={this.increament} style={{ padding: 30, fontSize: 30 }}>
          +
        </button>
        <p style={{ padding: 30, fontSize: 30 }}>{this.state.counter}</p>
        <button onClick={this.decreament} style={{ padding: 30, fontSize: 30 }}>
          -
        </button>
      </div>
    );
  }
}
