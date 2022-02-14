import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import filterMovieReducer, {getById, getFilterMovies} from "../../store/slices/filterGenres.slice";
import Movie from "../../components/movie/Movie";
import {useLocation, useParams} from "react-router-dom";

const FilterGenresMovieByIdPage = () => {

    const dispatch = useDispatch();

    const {id} = useParams()
    const{state} = useLocation();
    console.log(state);
    console.log(id)

    const {movies} = useSelector(state=>state['filterMovieReducer'])
    console.log(movies)


    useEffect(()=>{
        if (state){
            console.log(id)
        dispatch(getFilterMovies(state))
        }
    },[dispatch,state])

    // useEffect(()=>{
    //     dispatch(getFilterMovies)
    // },[dispatch,data.page])
    //
    // const firstPage = ()=>{
    //     dispatch(getById({page:1}))
    // }
    //
    // const prevPage = ()=>{
    //     if (data.page<=data.total_pages){
    //         dispatch(getById({page:data.page - 1}))
    //     }
    // }

    return (
        <div>
            filter
            {movies && movies.map(movie=><Movie key={movie.id} movie={movie}/> )}

            <div>
                <button>Previous Page</button>
                <button>Next Page</button>
            </div>
        </div>

    );
};

export default FilterGenresMovieByIdPage;