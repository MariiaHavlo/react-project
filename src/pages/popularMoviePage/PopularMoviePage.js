import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import popularMovieReducer ,{getAllPopularMovies} from "../../store/slices/popularMovie.slice/popularMovie.slice";

import Movie from "../../components/movie/Movie";

const PopularMoviePage = () => {
     const{movies}= useSelector(state=>state[popularMovieReducer])

    const dispatch = useDispatch();
     useEffect(()=>{
         dispatch(getAllPopularMovies())
     },[])

    return (
        <div>
            {movies.map(movie =><Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export default PopularMoviePage;