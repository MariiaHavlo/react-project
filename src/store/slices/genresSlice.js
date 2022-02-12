import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    genres:[],
    status: null,
    error: null
};
export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {dispatch}) => {
        try {
            const {genres} = await movieService.getGenres()
            console.log(genres)
            dispatch(getGenres({genres:genres}))
        } catch (e) {
            return (e)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenres: (state, action) => {
            console.log(state)
            state.genres = action.payload.genres
            console.log(action)
        }
    }

})

const genresReducer = genresSlice.reducer;

export default genresReducer;

export const {getGenres} = genresSlice.actions;