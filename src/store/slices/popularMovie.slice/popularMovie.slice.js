import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";

const initialState = {
    movies:[],
}

export const getPopularMovies = createAsyncThunk(
    'popularMovieSlice/getPopularMovies',
    async (_,{dispatch})=>{}
)

const popularMovieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        getPopularMovies:(state,action)=>{}
    }
})
const popularMovieReducer = popularMovieSlice.reducer;
export default popularMovieReducer;
export const{getPopularMovies} = popularMovieSlice.actions;

