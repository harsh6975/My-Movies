
//action  type
export const Add_MOVIES='Add_MOVIES';


//action creator
export function addmovies(movies,id){
    return{
        type:Add_MOVIES,
        movies,
        id
    }
}
