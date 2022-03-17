import React, { Component } from "react";
import { AnalogClock } from "./AnalogClock";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString(),
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.updateTime();
  }
  updateTime = () => {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString(),
      });
    }, 1000);
  };
  render() {
    console.log("render");

    return (
      <div>
        <h1>{this.state.currentTime}</h1>
        <AnalogClock time={this.state.currentTime} />
      </div>
    );
  }
}

export default Clock;
