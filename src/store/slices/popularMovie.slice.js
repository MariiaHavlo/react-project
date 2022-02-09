import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies:[],
    status:null,
    error:null
}

export const getAllPopularMovies = createAsyncThunk(
    'popularMovieSlice/getPopularMovies',
    async (_,{rejectWithValue})=>{
        try {
            const movies = await movieService.getPopular()
            return movies
        }catch (e){
            return rejectWithValue(e.message)
        }

    }
)

const popularMovieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        getPopularMovies:(state,action)=>{
            state.movies = action.payload.movies
        }
    },
    extraReducers:{
        [getAllPopularMovies.pending]:(state,action)=>{
            state.atatus = 'pending'
            state.error=null
        },
        [getAllPopularMovies.fulfilled]:(state,action)=>{
            state.status='fulfilled'
            state.status = action.payload
        },
        [getAllPopularMovies.rejected]:(state,action)=>{

        }
    }
})
const popularMovieReducer = popularMovieSlice.reducer;
export default popularMovieReducer;
export const{getPopularMovies} = popularMovieSlice.actions;

