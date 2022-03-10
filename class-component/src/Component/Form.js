import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      alluser: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  handleChange(evt) {
    this.setState({
      name: evt.target.value,
    });
  }
  saveUser() {
    this.setState({
      alluser: [...this.state.alluser, this.state.name],
    });
  }
  render() {
    console.log(this.state.alluser);
    return (
      <div>
        <h1>Form</h1>
        <Input
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <br />
        <label>
          Male
          <input type="radio" value="Male" name="devCatogery" />
        </label>
        <label>
          Female
          <input type="radio" value="Female" name="devCatogery" />
        </label>

        <button onClick={this.saveUser}>Save User</button>
      </div>
    );
  }
}

export default Form;
