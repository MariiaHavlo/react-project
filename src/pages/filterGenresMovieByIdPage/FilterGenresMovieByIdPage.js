import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import filterMovieReducer, {getFilterMovies} from "../../store/slices/filterGenres.slice";
import Movie from "../../components/movie/Movie";

const FilterGenresMovieByIdPage = () => {
    const dispatch = useDispatch();

    const {filterMovies} = useSelector(state=>state['filterMovieReducer'])
    console.log(filterMovies)
    useEffect(()=>{
        dispatch(getFilterMovies())
    },[dispatch])
    return (
        <div>
            filter
            {filterMovies && filterMovies.map(movie=><Movie key={movie.id} movie={movie}/> )}
        </div>
    );
};

export default FilterGenresMovieByIdPage;