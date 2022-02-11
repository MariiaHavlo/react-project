import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import popularMovieReducer  from "../../store/slices/popularMovie.slice";
import {getAllPopularMovies} from "../../store";



import Movie from "../../components/movie/Movie";

const PopularMoviePage = () => {
    const dispatch = useDispatch();
     const {movies}= useSelector(state=>state['popularMovieReducer'])
    console.log(movies)

     useEffect(()=>{
         dispatch(getAllPopularMovies())
     },[dispatch])
    // const{results} = movies;

    return (
        <div>
            {movies && movies.map(movie =><Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export default PopularMoviePage;