import React from 'react';
import {getAllPopularMovies} from "../../store";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    const {id, genres, original_title, poster_path} = movie;
    return (
        <div>
            <Link to={':id'}>
                <div>genres:{genres}</div>
                <div>original_title:{original_title}</div>
                <div>poster_path:{poster_path}</div>
            </Link>

        </div>
    );
};

export default Movie;