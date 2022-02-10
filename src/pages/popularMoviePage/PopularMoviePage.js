import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import popularMovieReducer  from "../../store/slices/popularMovie.slice";
import {getAllPopularMovies} from "../../store";



import Movie from "../../components/movie/Movie";

const PopularMoviePage = () => {
     const {movies,status,error}= useSelector(state=>state[popularMovieReducer])
    console.log(movies)
    const{results} = movies

    const dispatch = useDispatch();
     useEffect(()=>{
         dispatch(getAllPopularMovies())
     },[])

    return (
        <div>
            {results && results.map(movie =><Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export default PopularMoviePage;