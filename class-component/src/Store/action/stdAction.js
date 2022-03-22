import { ADD_STD } from "./types";
import { REMOVE_STD } from "./types";

export const addStd = (std) => {
  return (dispatch) => {
    dispatch({ type: ADD_STD, payload: std });
  };
};

export const removeStd = (id) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_STD, payload: id });
  };
};
