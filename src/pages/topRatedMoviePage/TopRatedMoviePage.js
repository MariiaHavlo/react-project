import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import topMovieReducer, {getAllTopMovies} from "../../store/slices/topRated.slice";
import Movie from "../../components/movie/Movie";
import css from './TopRatedMoviePage.module.css';

const TopRatedMoviePage = () => {
    const dispatch = useDispatch();

    const {movies} = useSelector(state=>state['topMovieReducer'])
    console.log(movies)

    useEffect(()=>{
        dispatch(getAllTopMovies())
        },[dispatch]
    )
    return (
        <div className={css.moviesDiv}>
            {movies && movies.map(movie=><Movie key={movie.id} movie={movie}/> )}
        </div>
    );
};

export default TopRatedMoviePage;