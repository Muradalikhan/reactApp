import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor run");
  }

  componentDidMount() {
    console.log("componentDidMount");
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
    return <h1>Life Cycle</h1>;
  }
}

export default LifeCycle;
