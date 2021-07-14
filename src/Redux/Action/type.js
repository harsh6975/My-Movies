//action  type
export const Add_MOVIES = "Add_MOVIES";
export const Add_FAVOURITE = "Add_FAVOURITE";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";
export const ADD_MOVIES_TO_LIST = "ADD_MOVIES_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
//action creator
export function addmovies(movies, id) {
  return {
    type: Add_MOVIES,
    movies,
    id,
  };
}

export function addfavourite(movie) {
  return {
    type: Add_FAVOURITE,
    movie,
  };
}

export function deletefavourite(movie) {
  return {
    type: DELETE_FAVOURITE,
    movie,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIES_TO_LIST,
    movie,
  };
}

export function movieSearch(movie) {
  return function (dispatch) {
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}