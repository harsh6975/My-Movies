
//action  type
export const Add_MOVIES='Add_MOVIES';
export const Add_FAVOURITE='Add_FAVOURITE';
export const DELETE_FAVOURITE='DELETE_FAVOURITE';
//action creator
export function addmovies(movies,id){
    return{
        type:Add_MOVIES,
        movies,
        id
    }
}

export function addfavourite(movie){
    return{
        type:Add_FAVOURITE,
        movie
    }
}

export function deletefavourite(movie){
    return{
        type:DELETE_FAVOURITE,
        movie
    }
}
