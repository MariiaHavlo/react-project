import {configureStore} from "@reduxjs/toolkit";
import popularMovieReducer from "./slices/popularMovie.slice";
import topMovieReducer from "./slices/topRated.slice";
import genresReducer from "./slices/genresSlice";


export const setUpStore = ()=>configureStore({
reducer:{
    popularMovieReducer,
    topMovieReducer,
    genresReducer
}
})
