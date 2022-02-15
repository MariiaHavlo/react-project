import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    status:null,
    error:null,
    limit:0,
    page:2,
    currentPage:1

}

export const getAllPopularMovies = createAsyncThunk(
    'popularMovie/getPopularMovies',
    async (_,{page,dispatch}) => {
try{
        console.log('hello')

    const {results} = await movieService.getPopular(initialState.page)
    console.log(page)
    console.log('results',results)
    dispatch(getPopularMovies({movies: results}))



}catch (e){
    return(e)
}
    }
)


// export const setPageNumber =(_,expectedPageNumber)=>{
//     localStorage.setItem("page", expectedPageNumber);
// }

const popularMovieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getPopularMovies: (state, action) => {
            console.log(action)
            state.movies = action.payload.movies
            console.log(state)
        }
    },
    // extraReducers:{
    //     [getAllPopularMovies.pending]:(state,action)=>{
    //         state.status = 'pending'
    //         state.error=null
    //     },
    //     [getAllPopularMovies.fulfilled]:(state,action)=>{
    //         state.status='fulfilled'
    //         state.status = action.payload
    //     },
    //     [getAllPopularMovies.rejected]:(state,action)=>{
    //
    //     }
    // }

})
const popularMovieReducer = popularMovieSlice.reducer;
export default popularMovieReducer;
export const {getPopularMovies} = popularMovieSlice.actions;

