const addMovie = (movie) => {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}
const deleteMovie = (movie) => {
    return {
        type: "DELETE_MOVIE",
        payload: movie
    }
}
const getAllMovies = () => {
    return {
        type: "GET_ALL_MOVIES"
    }
}

function movieReducer (state = {movies: []}, action) {
    switch(action.type){
        case "ADD_MOVIE": 
            return {
            movies: [...state.movies, action.payload]
            }
        case "DELETE_MOVIE":
            const oldArr = state.movies
            const newArr = oldArr.filter(movie => movie !== action.payload)
            return {
                movies: newArr
            }
        case "GET_ALL_MOVIES":
            return state.movies
        default: 
            return state
    }
}
  
module.exports = {addMovie, deleteMovie, getAllMovies, movieReducer}