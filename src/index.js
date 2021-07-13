import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import rootReducer from "./Redux/Reducer";

// middleware
//  

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("acton type", action.type);
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log('store',store);
// console.log('Intial state',store.getState())

// store.dispatch({
//     type:'Add-movies',
//     movies:[{name: 'Harsh sinha'}]
// })

console.log("Final state", store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
