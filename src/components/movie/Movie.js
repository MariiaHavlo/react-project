import React from 'react';
import {Link} from "react-router-dom";

import css from './Movie.module.css'
import Genre from "../genre/Genre";

const Movie = ({movie,genres}) => {
    const {id, genre_ids, title, poster_path,vote_average,overview} = movie;
    const imgMovie = 'http://image.tmdb.org/t/p/w500'

    const genresMap = genres.reduce((acc,element) =>{
        acc[element.id]=element.name;
        return acc;

    },{})
console.log(genres, genresMap)
    return (
        <div >
            <Link to={id.toString()} state={movie}>
                <div className={css.movieDiv}>
                    <div className={css.cardTop}>
                        <img src={imgMovie + poster_path}/>
                    </div>
                    <div className={css.cardBottom}>
                        <div className={css.cardInfo}>
                            <div className={css.cardInfoGenres}>
                                <p>{genre_ids.map(id =>genresMap[id])}</p>
                            </div>

                            <h4>{title}</h4>
                            <p>{vote_average}</p>
                        </div>

                    </div>


                </div>
            </Link>


        </div>
    );
};

export default Movie;