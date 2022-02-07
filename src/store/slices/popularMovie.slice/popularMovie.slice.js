import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies:[],


}

const popularMovieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        getMovies:(state,action)=>{}
    }
})
const popularMovieReducer = popularMovieSlice.reducer;
export default popularMovieReducer;
export const

