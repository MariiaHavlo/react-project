import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {movieService} from "../../../services";

const initialState = {
    movies:[],
}

export const getAllPopularMovies = createAsyncThunk(
    'popularMovieSlice/getPopularMovies',
    async (_,{dispatch})=>{
        const{data} = await movieService.getPopular()
        dispatch(getPopularMovies({movies:data}))
    }
)

const popularMovieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        getPopularMovies:(state,action)=>{
            state.movies = action.payload.movies
        }
    }
})
const popularMovieReducer = popularMovieSlice.reducer;
export default popularMovieReducer;
export const{getPopularMovies} = popularMovieSlice.actions;

