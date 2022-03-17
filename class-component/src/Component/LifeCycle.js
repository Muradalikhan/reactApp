import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ali",
    };
    console.log("constructor run");
  }

  // componentWillMount() {
  //   console.log("componentDidMount");
  // }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      name: "Murad",
    });
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("component did update");
    console.log("oldProps", oldProps);
    console.log("oldState", oldState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Life Cycle</h1>
        <br />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default LifeCycle;
