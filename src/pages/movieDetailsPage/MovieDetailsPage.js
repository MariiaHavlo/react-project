import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {movieService} from "../../services";
import css from './MovieDetails.module.css';

const MovieDetailsPage = () => {
    const imgMovie = 'http://image.tmdb.org/t/p/w500'
    const {id}=useParams();
    const[movie,setMovie]=useState(null)

    const {state} = useLocation();
    console.log(state)
    useEffect(()=>{
        if (state){
            setMovie(state)
            return
        }
        movieService.getByIdPopular(id).then(value=>setMovie({...value}))
    },[id])



    return (
        <div>
            {movie && (
                <div className={css.movieDetailsContainer}>

                    <img src={imgMovie + movie.poster_path}/>
                    <div className={css.movieInfo}>

                        <h1>Title:{movie.title}</h1>
                        <p>Overview:{movie.overview}</p>
                    </div>

                </div>


            )}
        </div>
    );
};

export default MovieDetailsPage;