import { combineReducers } from "redux";
import stdReducer from "./studentReducer";

const allReducer = combineReducers({
  std: stdReducer,
});

export default allReducer;
