import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState={
    movies:[],
}
export const getFilterMovies=createAsyncThunk(
    'filterGenresSlice/getFilterMovies',
    async (_,{dispatch})=>{
        try {
            const {results} = await movieService.getGenresFilterById()
            console.log(results)
            dispatch(getById({movies:results}))
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
            state.movies = action.payload.movies
            console.log(action)
        }
    }
})

const filterMovieReducer = filterGenresSlice.reducer;
export default filterMovieReducer;

export const {getById}=filterGenresSlice.actions;