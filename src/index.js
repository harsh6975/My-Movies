import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./Redux/Reducer";

// middleware
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("acton type", action.type);
    }
    next(action);
  };
// const thunk=({ dispatch, getState }) =>
// (next) =>
// (action) => {
//   if(typeof action==='function'){
//       action(dispatch);
//       return;
//   }
//   next(action);
// };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('store',store);
// console.log('Intial state',store.getState())

// store.dispatch({
//     type:'Add-movies',
//     movies:[{name: 'Harsh sinha'}]
// })

console.log("Final state", store.getState());

// export const StoreContext = createContext();

// class Provider extends React.Component {
//   render() {
//     const {store} = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// export function connect(callback){
//   return function (Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe=this.props.store.subscribe(()=>{
//           this.forceUpdate();
//         })
//       }
      
//       componentWillUnmount(){
//         this.unsubscribe();
//       }

//       render(){
//         const {store}=this.props;
//         const state=store.getState();
//         const dataToBeSentAsProps = callback(state)
//         return <Component {...dataToBeSentAsProps} dispatch={store.dispatch}/>
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return(
//           <StoreContext.Consumer>
//             {(store)=>{
//               return <ConnectedComponent store={store}></ConnectedComponent>
//             }}
//           </StoreContext.Consumer>
//         )
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
