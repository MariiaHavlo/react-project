import React from 'react';
import {Link} from "react-router-dom";

import css from './Movie.module.css'
import Genre from "../genre/Genre";

const Movie = ({movie}) => {
    const {id, genre_ids, title, poster_path,vote_average,overview} = movie;
    const imgMovie = 'http://image.tmdb.org/t/p/w500'
    return (
        <div>
            <Link to={id.toString()} state={movie}>
                <div className={css.movieDiv}>
                    <img src={imgMovie + poster_path}/>
                    <div>genres:{genre_ids}</div>
                    <div>{title}</div>
                    <div>{vote_average}</div>

                </div>
            </Link>


        </div>
    );
};

export default Movie;