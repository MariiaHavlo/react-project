import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    status: null,
    error: null

}

export const getAllTopMovies = createAsyncThunk(
    'topRatedSlice/getAllTopMovies',
    async (_, {dispatch}) => {
        try {

            const {results} = await movieService.getRating()
            console.log('results', results)
            dispatch(getTopMovies({movies: results}))

        } catch (e) {
            return (e)
        }

    }
)
const topRatedSlice = createSlice({
    name: 'topRatedSlice',
    initialState,
    reducers: {
        getTopMovies: (state, action) => {
            console.log(state)
            state.movies = action.payload.movies
            console.log(action)
        }

    },

})

const topMovieReducer = topRatedSlice.reducer;
export default topMovieReducer;
export const {getTopMovies} = topRatedSlice.actions;