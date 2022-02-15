import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import popularMovieReducer, {setPageNumber} from "../../store/slices/popularMovie.slice";
import {getAllPopularMovies} from "../../store";
import css from './PopularMovieRage.module.css';



import Movie from "../../components/movie/Movie";
import {Outlet} from "react-router-dom";
import {getAllGenres} from "../../store/slices/genres.slice";

const PopularMoviePage = () => {
    const dispatch = useDispatch();
     const {movies} = useSelector(state=>state['popularMovieReducer'])
     const {genres} = useSelector(state=>state['genresReducer'])
    console.log(movies,genres)

     useEffect(() => {
         dispatch(getAllPopularMovies(10));
         dispatch(getAllGenres());
     },[dispatch]);
    // const{results} = movies;
    return (
        <div className={css.moviesDiv}>
            <Outlet/>
            {movies && genres && movies.map(movie =><Movie key={movie.id} movie={movie} genres={genres}/>)}
            <div>
                {/*<button onClick={setPageNumber(1)}>Prev</button>*/}
            </div>

        </div>
    );
};

export default PopularMoviePage;