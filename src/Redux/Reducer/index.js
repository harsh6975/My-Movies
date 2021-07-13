 import {Add_MOVIES} from '../Action/type'

 const initialMovieState={
     list:[],
     favourite:[]
 }

function movies (state=initialMovieState,action){
    if(action.type===Add_MOVIES){
        return {
            ...state,
            list:action.movies,
        };
    }
    return state;
}
export default movies;