import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import topMovieReducer, {getAllTopMovies} from "../../store/slices/topRated.slice";
import Movie from "../../components/movie/Movie";
import css from './TopRatedMoviePage.module.css';
import {Outlet} from "react-router-dom";
import {getAllGenres} from "../../store/slices/genres.slice";

const TopRatedMoviePage = () => {
    const dispatch = useDispatch();

    const {movies} = useSelector(state=>state['topMovieReducer'])
    const {genres} = useSelector(state=>state['genresReducer'])
    console.log(movies)

    useEffect(()=>{
        dispatch(getAllTopMovies());
        dispatch(getAllGenres());
        },[dispatch]
    )
    return (
        <div className={css.moviesDiv}>

            {movies && genres && movies.map(movie=><Movie key={movie.id} movie={movie} genres={genres}/> )}
        </div>
    );
};

export default TopRatedMoviePage;