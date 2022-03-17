import { createStore, applyMiddleware, compose } from "redux";
import allReducer from "./reducer/main";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(
  allReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
