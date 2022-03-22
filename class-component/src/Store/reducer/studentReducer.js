import { ADD_STD } from "../action/types";
import { REMOVE_STD } from "../action/types";

const intialState = {
  std: ["hello"],
};

const stdReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_STD:
      return {
        ...state,
        std: [action.payload, ...state.std],
      };
    case REMOVE_STD:
      return {
        ...state,
        std: state.std.filter((std, stdInd) => stdInd !== action.payload),
      };
    default:
      return state;
  }
};

export default stdReducer;
