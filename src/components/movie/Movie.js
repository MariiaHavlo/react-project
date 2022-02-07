import React from 'react';

const Movie = ({movie}) => {
    const {id, genres, original_title, poster_path} = movie;
    return (
        <div>
            <div>id:{id}</div>
            <div>genres:{genres}</div>
            <div>original_title:{original_title}</div>
            <div>poster_path:{poster_path}</div>
        </div>
    );
};

export default Movie;