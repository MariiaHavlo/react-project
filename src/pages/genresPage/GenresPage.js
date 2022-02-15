import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store/slices/genres.slice";
import Genre from "../../components/genre/Genre";
import {getAllPopularMovies} from "../../store";

const GenresPage = () => {
    const dispatch = useDispatch();

    const {genres} = useSelector(state=>state['genresReducer'])
    const {movies} = useSelector(state=>state['popularMovieReducer'])
    console.log(genres)

    useEffect(()=>{
        dispatch(getAllGenres())
        dispatch(getAllPopularMovies());
    },[])
    return (
        <div>
            genres page
            {genres && movies && genres.map(genre=><Genre key={genre.id} genre={genre} movies={movies}/>)}
        </div>
    );
};

export default GenresPage;