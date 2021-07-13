import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import movies from "./Redux/Reducer";


const store= createStore(movies);
// console.log('store',store);
// console.log('Intial state',store.getState())

// store.dispatch({
//     type:'Add-movies',
//     movies:[{name: 'Harsh sinha'}]
// })
console.log('Final state',store.getState())

ReactDOM.render(<App store={store}/>, document.getElementById("root"));
