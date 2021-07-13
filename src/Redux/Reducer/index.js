 import {Add_MOVIES} from '../Action/type'


function movies (state=[],action){
    if(action.type===Add_MOVIES){
        return action.movies;
    }
    return state;
}
export default movies;