import { Add_MOVIES, Add_FAVOURITE,DELETE_FAVOURITE } from "../Action/type";

const initialMovieState = {
  list: [],
  favourite: [],
};

function movies(state = initialMovieState, action) {
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
      }
    case Add_FAVOURITE:
      return {
        ...state,
        favourite: [action.movie,...state.favourite]
      }
    case DELETE_FAVOURITE:
        const filterarray=state.favourite.filter(
            movie=>movie.Title!==action.movie.Title 
        )
        return{
            ...state,
            favourite: filterarray
        }  
    default:
        return state;    
  }
}
export default movies;
