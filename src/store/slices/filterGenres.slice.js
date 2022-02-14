import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState={
    movies:[],
    page:1,
    total_pages:0,
    status:null,
    error:null
}
export const getFilterMovies=createAsyncThunk(
    'filterGenresSlice/getFilterMovies',
    async ({id,page})=>{
        try {
            const {results} = await movieService.getGenresFilterById(id,page)
            console.log(results)
            return {movies:results}
        }catch (e){
        return(e)
        }
    }
)

const filterGenresSlice=createSlice({
    name:'filterGenresSlice',
    initialState,
    reducers:{
        getById:(state,action)=>{
            state.data.page = action.payload.page
            console.log(state.data.page)
            console.log(action)
        }
    },
    extraReducers:{
            [getFilterMovies.pending.type]:(state,action)=>{
                state.status = 'pending'
                state.error=null
            },
            [getFilterMovies.fulfilled.type]:(state,action)=>{
                state.status='fulfilled'
                state.movies = action.payload.movies;
                state.data=action.payload.data
            },
            [getFilterMovies.rejected.type]:(state,action)=>{
                state.status='rejected'
                state.error = action.payload
            }

    }
})

const filterMovieReducer = filterGenresSlice.reducer;
export default filterMovieReducer;

export const {getById}=filterGenresSlice.actions;