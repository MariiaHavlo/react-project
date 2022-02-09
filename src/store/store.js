import {configureStore} from "@reduxjs/toolkit";
import popularMovieReducer from "./slices/popularMovie.slice";


export const setUpStore = ()=>configureStore({
reducer:{
    popularMovieReducer
}
})
