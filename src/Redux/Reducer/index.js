import { combineReducers } from "redux";
import {
  Add_MOVIES,
  Add_FAVOURITE,
  DELETE_FAVOURITE,
  ADD_MOVIES_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../Action/type";

const initialMovieState = {
  list: [],
  favourite: [],
  ispresent: false,
};

export function movies(state = initialMovieState, action) {
  // if(action.type===Add_MOVIES){
  //     return {
  //         ...state,
  //         list:action.movies,
  //     };
  // }
  // return state;
  switch (action.type) {
    case Add_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case Add_FAVOURITE:
      return {
        ...state,
        favourite: [action.movie, ...state.favourite],
      };
    case DELETE_FAVOURITE:
      const filterarray = state.favourite.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourite: filterarray,
      };
    case ADD_MOVIES_TO_LIST:
      const movi = action.movie.Title;
      console.log('action.list',state.list);
      const n=Object.keys(state.list).length;
      for(var i=0;i<n;i++){
        if(state.list[i].Title===movi){
          state.ispresent=true;
          break;  
        }
      }
      if(state.ispresent){
        return {
          ...state,
          ispresent: false,
        };
      }
      else{
          return {
            ...state,
            list: [action.movie, ...state.list],
            ispresent: false,
          };
        }

    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

// const initialReducerState = {
//   movies: initialMovieState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = initialReducerState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies: movies,
  search: search,
});
