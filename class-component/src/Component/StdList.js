import React, { Component } from "react";
import { connect } from "react-redux";
import { addStd } from "../Store/action/stdAction";

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
    // this.setState({
    //   stdList: [...this.state.stdList, this.state.newStd],
    // });

    this.props.stdDispatch(this.state.newStd);
    this.setState({ newStd: "" });
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
        {std}
        {/* {std.map((std, ind) => {
          return <p key={ind}>{std}</p>;
        })} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  std: state.std,
});

const mapDispatchToProps = (dispatch) => ({
  stdDispatch: (std) => dispatch(addStd(std)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
