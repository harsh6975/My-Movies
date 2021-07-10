export default function movies (state=[],action){
    if(action.type==='Add-movies'){
        return action.movies;
    }
    return state;
}