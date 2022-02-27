import React, { useReducer } from "react";

type Tstate = {
  counter: number;
};

type Taction = {
  type: "increament" | "decreament";
  payload: number;
};
type Treset = {
  type: "reset";
};

type TUpdatedAction = Taction | Treset;

const intialState = {
  counter: 0,
};

const reducer = (state: Tstate, action: TUpdatedAction) => {
  switch (action.type) {
    case "increament":
      return { counter: state.counter + action.payload };
    case "decreament":
      return { counter: state.counter - action.payload };
    case "reset":
      return intialState;
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div>Reducer</div>
      <span>{state?.counter}</span>
      <br />
      <button onClick={() => dispatch({ type: "increament", payload: 5 })}>
        Increament
      </button>

      <button onClick={() => dispatch({ type: "decreament", payload: 5 })}>
        Decreament
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Reducer;
