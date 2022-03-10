import React, { Component } from "react";

class Input extends Component {
  input = {
    padding: "10px",
    width: "40%",
    fontSize: "20px",
  };
  render() {
    return <input type="text" {...this.props} style={this.input} />;
  }
}

export default Input;
