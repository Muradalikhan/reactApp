import React, { Component } from "react";
import { connect } from "react-redux";
import { addStd, removeStd } from "../Store/action/stdAction";

import "../App.css";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stdList: [],
      newStd: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addtodo = this.addtodo.bind(this);
  }
  changeHandler = (event) => {
    this.setState({
      newStd: event.target.value,
    });
  };
  addtodo = () => {
    this.props.stdDispatch(this.state.newStd);
    this.setState({ newStd: "" });
  };
  deleteStd = (id) => {
    this.props.stdRemove(id);
  };
  render() {
    const { std } = this.props.std;
    return (
      <div className="redux-comp">
        <div>Todo</div>
        <div>
          <input
            type="text"
            value={this.state.newStd}
            onChange={this.changeHandler}
          />
          <button onClick={this.addtodo}>Add</button>
        </div>
        <br />

        {std.map((std, ind) => {
          return (
            <p key={ind} className="list">
              <span style={{ flex: 0.6 }}>{std}</span>
              <span
                style={{ marginLeft: "59px", flex: 0.4, cursor: "pointer" }}
                onClick={() => this.deleteStd(ind)}
              >
                x
              </span>
            </p>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  std: state.std,
});

const mapDispatchToProps = (dispatch) => ({
  stdDispatch: (std) => dispatch(addStd(std)),
  stdRemove: (id) => dispatch(removeStd(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
