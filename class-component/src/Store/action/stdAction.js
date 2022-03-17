import { ADD_STD } from "./types";

export const addStd = (std) => {
  return (dispatch) => {
    dispatch({ type: ADD_STD, payload: std });
  };
};
