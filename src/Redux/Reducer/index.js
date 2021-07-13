import { combineReducers } from "redux";
import { Add_MOVIES, Add_FAVOURITE, DELETE_FAVOURITE } from "../Action/type";

const initialMovieState = {
  list: [],
  favourite: [],
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
    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
};

export function search(state = initialSearchState, action) {
  return state;
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
    movies:movies,
    search:search
})
 