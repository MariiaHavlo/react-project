import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import filterMovieReducer, {getFilterMovies} from "../../store/slices/filterGenres.slice";
import Movie from "../../components/movie/Movie";
import {useParams} from "react-router-dom";

const FilterGenresMovieByIdPage = () => {

    const dispatch = useDispatch();

    const {id} = useParams()
    const {movies} = useSelector(state=>state['filterMovieReducer'])
    console.log(movies)


    useEffect(()=>{
        if (id){

        dispatch(getFilterMovies(id))
        }
    },[dispatch,id])
    return (
        <div>
            filter
            {movies && movies.map(movie=><Movie key={movie.id} movie={movie}/> )}
        </div>
    );
};

export default FilterGenresMovieByIdPage;